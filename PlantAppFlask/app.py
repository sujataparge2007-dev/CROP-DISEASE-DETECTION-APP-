from flask import (
    Flask, render_template, jsonify, request,
    session, redirect, url_for
)
from flask_cors import CORS
from functools import wraps
from dotenv import load_dotenv
from PIL import Image, UnidentifiedImageError
import os
import io
import json
import uuid
import traceback

# Load environment variables
load_dotenv()

app = Flask(__name__)

# Use a stable secret key in Render environment variables.
app.secret_key = os.getenv(
    "FLASK_SECRET_KEY",
    "plantcare-ai-secret-key-2026"
)

CORS(app)

# --------------------------------------------------
# DATABASE
# --------------------------------------------------

from database import (
    init_db,
    create_user,
    login_user,
    save_diagnosis,
    get_diagnosis_history,
    save_chat,
    get_diagnosis_stats,
    get_user_by_email,
    reset_password
)

init_db()

UPLOAD_FOLDER = "uploads"
os.makedirs(UPLOAD_FOLDER, exist_ok=True)


# --------------------------------------------------
# GEMINI CONFIGURATION
# --------------------------------------------------

import google.generativeai as genai

GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")

# Set this in Render if you want to change the model.
GEMINI_MODEL = os.getenv("GEMINI_MODEL", "gemini-3.5-flash-lite")

if GEMINI_API_KEY:
    genai.configure(api_key=GEMINI_API_KEY)


def get_gemini_model():
    """Return a configured Gemini model."""

    if not GEMINI_API_KEY:
        raise RuntimeError(
            "GEMINI_API_KEY is missing. "
            "Add it in Render Environment Variables."
        )

    return genai.GenerativeModel(GEMINI_MODEL)


# --------------------------------------------------
# AUTHENTICATION DECORATOR
# --------------------------------------------------

def login_required(f):
    @wraps(f)
    def decorated_function(*args, **kwargs):

        if "user_id" not in session:

            if request.path.startswith("/api/"):
                return jsonify({
                    "success": False,
                    "error": "Please login first"
                }), 401

            return redirect(url_for("login"))

        return f(*args, **kwargs)

    return decorated_function


# --------------------------------------------------
# PAGE ROUTES
# --------------------------------------------------

@app.route("/")
def index():

    if "user_id" in session:
        return redirect(url_for("home"))

    return render_template("login.html")


@app.route("/login")
def login():

    if "user_id" in session:
        return redirect(url_for("home"))

    return render_template("login.html")


@app.route("/forgot-password")
def forgot_password():
    return render_template("forgot_password.html")


@app.route("/home")
@login_required
def home():
    return render_template("home.html")


@app.route("/diagnosis")
@login_required
def diagnosis():
    return render_template("diagnosis.html")


@app.route("/chat")
@login_required
def chat():
    return render_template("chat.html")


@app.route("/history")
@login_required
def history():
    return render_template("history.html")


@app.route("/about")
@login_required
def about():
    return render_template("about.html")


@app.route("/schemes")
@login_required
def schemes():
    return render_template("schemes.html")


@app.route("/set-language/<language>")
@login_required
def set_language(language):

    if language not in ["en", "hi", "mr"]:
        language = "en"

    session["language"] = language

    return redirect(
        request.referrer or url_for("home")
    )


# --------------------------------------------------
# SIGNUP API
# --------------------------------------------------

@app.route("/api/signup", methods=["POST"])
def api_signup():

    data = request.get_json(silent=True) or {}

    name = data.get("name", "")
    email = data.get("email", "")
    password = data.get("password", "")
    phone = data.get("phone", "")
    dob = data.get("dob", "")
    gender = data.get("gender", "")

    if not email or not password:
        return jsonify({
            "success": False,
            "error": "Email and password required"
        }), 400

    result = create_user(
        name, email, password, phone, dob, gender
    )

    return jsonify(result)


# --------------------------------------------------
# LOGIN API
# --------------------------------------------------

@app.route("/api/login", methods=["POST"])
def api_login():

    data = request.get_json(silent=True) or {}

    email = data.get("email", "")
    password = data.get("password", "")

    result = login_user(email, password)

    if result.get("success"):

        user = result["user"]

        session["user_id"] = user["id"]
        session["user_name"] = user["name"]
        session["user_email"] = user["email"]

    return jsonify(result)


# --------------------------------------------------
# LOGOUT API
# --------------------------------------------------

@app.route("/api/logout", methods=["POST"])
def api_logout():

    session.clear()

    return jsonify({
        "success": True,
        "message": "Logged out"
    })


# --------------------------------------------------
# RESET PASSWORD API
# --------------------------------------------------

@app.route("/api/reset-password", methods=["POST"])
def api_reset_password():

    data = request.get_json(silent=True) or {}

    email = data.get("email", "")
    new_password = data.get("newPassword", "")

    if not email or not new_password:
        return jsonify({
            "success": False,
            "error": "Email and new password required"
        }), 400

    if len(new_password) < 4:
        return jsonify({
            "success": False,
            "error": "Password must be at least 4 characters"
        }), 400

    result = reset_password(email, new_password)

    return jsonify(result)


# --------------------------------------------------
# CURRENT USER API
# --------------------------------------------------

@app.route("/api/user", methods=["GET"])
@login_required
def api_user():

    return jsonify({
        "success": True,
        "user": {
            "id": session.get("user_id"),
            "name": session.get("user_name"),
            "email": session.get("user_email")
        }
    })


# --------------------------------------------------
# PLANT DISEASE ANALYSIS
# --------------------------------------------------

@app.route("/api/analyze", methods=["POST"])
@login_required
def api_analyze():

    try:

        # Check uploaded image
        if "image" not in request.files:
            return jsonify({
                "success": False,
                "error": "No image provided"
            }), 400

        image_file = request.files["image"]

        if not image_file or not image_file.filename:
            return jsonify({
                "success": False,
                "error": "Please select a plant image"
            }), 400

        image_bytes = image_file.read()

        if not image_bytes:
            return jsonify({
                "success": False,
                "error": "The uploaded image is empty"
            }), 400

        # Validate image
        try:

            with Image.open(io.BytesIO(image_bytes)) as original:
                original.verify()

            with Image.open(io.BytesIO(image_bytes)) as original:
                img = original.convert("RGB")

        except (
            UnidentifiedImageError,
            OSError,
            ValueError
        ):
            return jsonify({
                "success": False,
                "error": "Invalid image. Please upload a JPG or PNG."
            }), 400

        # Resize image to reduce processing time
        img.thumbnail((1024, 1024))

        # Save image as JPEG in memory
        buffer = io.BytesIO()
        img.save(buffer, format="JPEG", quality=85)
        buffer.seek(0)

        # Save uploaded image
        image_filename = f"scan_{uuid.uuid4().hex}.jpg"
        image_path = os.path.join(
            UPLOAD_FOLDER,
            image_filename
        )

        with open(image_path, "wb") as image_output:
            image_output.write(buffer.getvalue())

        # Configure Gemini
        model = get_gemini_model()

        # Plant analysis prompt
        prompt = """
You are PlantCare AI, an agricultural plant-health assistant.

Analyze the supplied plant image and return ONLY a valid JSON object.

Use exactly these fields:

{
  "plantName": "Name of plant",
  "disease": "Disease name, Healthy, or Uncertain",
  "confidence": "85%",
  "health_score": 75,
  "isUnknown": false,
  "precautions": [
    "Precaution 1",
    "Precaution 2",
    "Precaution 3",
    "Precaution 4"
  ],
  "organic_manures": [
    "Organic treatment 1",
    "Organic treatment 2",
    "Organic treatment 3"
  ],
  "inorganic_manures": [
    "Chemical treatment 1",
    "Chemical treatment 2"
  ]
}

Rules:

1. health_score must be an integer from 0 to 100.
2. confidence must be a percentage string.
3. isUnknown must be true only if the image clearly does not
   contain a plant or plant leaf.
4. If the disease cannot be determined, return "Uncertain".
5. Never invent a disease when the image is unclear.
6. If the plant is healthy, give general plant-care advice.
7. Give practical precaution and treatment suggestions.
8. Avoid claiming that a treatment is guaranteed to work.
9. For chemical treatments, advise following the product label
   and local agricultural expert recommendations.
10. Return raw JSON only. Do not use Markdown code fences.
"""

        # Attempt Gemini models in order.
        # If one is unavailable, try the next one.
        models_to_try = [
         GEMINI_MODEL,
         "gemini-3.5-flash"
        ]
        gemini_response = None
        last_error = None
        used_model = None

        # Correct indentation: this loop and its following
        # if statement belong to the api_analyze try block.
        for model_name in dict.fromkeys(models_to_try):

            try:

                print(
                    f"Trying Gemini model: {model_name}"
                )

                model = genai.GenerativeModel(model_name)

                gemini_response = model.generate_content(
                    [prompt, img],
                    generation_config={
                        "temperature": 0.2,
                        "response_mime_type": "application/json"
                    }
                )

                if not getattr(
                    gemini_response, "text", None
                ):
                    raise RuntimeError(
                        "Gemini returned an empty response"
                    )

                used_model = model_name

                print(
                    f"Gemini succeeded with {model_name}"
                )

                break

            except Exception as error:

                print(
                    f"Gemini model {model_name} failed: {error}"
                )

                last_error = error
                gemini_response = None

        # This condition is correctly aligned with the for loop.
        if gemini_response is None:

            print("All configured Gemini models failed.")

            # Diagnostic information in Render logs
            try:

                for available_model in genai.list_models():

                    print(
                        "Available model:",
                        available_model.name,
                        "Methods:",
                        available_model.supported_generation_methods
                    )

            except Exception as listing_error:

                print(
                    "Could not list Gemini models:",
                    listing_error
                )

            raise RuntimeError(
                f"Gemini analysis failed: {last_error}"
            )

        # Parse Gemini response
        text_response = gemini_response.text.strip()

        # Remove Markdown fences if returned despite the prompt
        if text_response.startswith("```json"):
            text_response = text_response[7:]

        elif text_response.startswith("```"):
            text_response = text_response[3:]

        if text_response.endswith("```"):
            text_response = text_response[:-3]

        text_response = text_response.strip()

        result = json.loads(text_response)

        if not isinstance(result, dict):
            raise ValueError(
                "Gemini did not return a JSON object"
            )

        # Ensure frontend-required fields exist
        result.setdefault("plantName", "Unknown")
        result.setdefault("disease", "Uncertain")
        result.setdefault("confidence", "0%")
        result.setdefault("health_score", 0)
        result.setdefault("isUnknown", False)
        result.setdefault("precautions", [])
        result.setdefault("organic_manures", [])
        result.setdefault("inorganic_manures", [])

        try:
            result["health_score"] = max(
                0,
                min(100, int(result["health_score"]))
            )
        except (ValueError, TypeError):
            result["health_score"] = 0

        for field in [
            "precautions",
            "organic_manures",
            "inorganic_manures"
        ]:
            if not isinstance(result[field], list):
                result[field] = []

        # Prepare treatment summary for database
        precautions = result["precautions"]
        organic = result["organic_manures"]
        inorganic = result["inorganic_manures"]

        treatment_summary = (
            "Precautions:\n"
            + "\n".join(f"- {item}" for item in precautions)
            + "\n\nOrganic Manures:\n"
            + "\n".join(f"- {item}" for item in organic)
            + "\n\nInorganic Manures:\n"
            + "\n".join(f"- {item}" for item in inorganic)
        )

        # Save diagnosis
        save_diagnosis(
            user_id=session.get("user_id"),
            plant_name=result.get("plantName", "Unknown"),
            disease=result.get("disease", "Uncertain"),
            confidence=result.get("confidence", "0%"),
            treatment=treatment_summary,
            image_path=image_path,
            health_score=result["health_score"],
            is_unknown=result.get("isUnknown", False)
        )

        result["success"] = True
        result["used_model"] = used_model

        return jsonify(result)

    except json.JSONDecodeError as error:

        print("Gemini returned invalid JSON:", error)
        traceback.print_exc()

        return jsonify({
            "success": False,
            "error": "Gemini returned an invalid response. Please try again."
        }), 502

    except Exception as error:

        print("Plant analysis error:", error)
        traceback.print_exc()

        return jsonify({
            "success": False,
            "error": (
                "Plant analysis failed. Check the Render logs "
                "for the exact Gemini API error."
            )
        }), 500


# --------------------------------------------------
# DIAGNOSIS HISTORY
# --------------------------------------------------

@app.route("/api/history", methods=["GET"])
@login_required
def api_history():

    history = get_diagnosis_history(
        session.get("user_id"),
        limit=20
    )

    return jsonify({
        "success": True,
        "history": history
    })


# --------------------------------------------------
# DIAGNOSIS STATISTICS
# --------------------------------------------------

@app.route("/api/stats", methods=["GET"])
@login_required
def api_stats():

    stats = get_diagnosis_stats(
        session.get("user_id")
    )

    return jsonify({
        "success": True,
        "stats": stats
    })


# --------------------------------------------------
# GEMINI PLANT DOCTOR CHAT
# --------------------------------------------------

@app.route("/api/chat", methods=["POST"])
@login_required
def api_chat():

    data = request.get_json(silent=True) or {}

    message = data.get("message", "").strip()

    if not message:
        return jsonify({
            "success": False,
            "error": "Please enter a message."
        }), 400

    try:

        model = get_gemini_model()

        # Use the user's selected language
        language = session.get("language", "en")

        language_names = {
            "en": "English",
            "hi": "Hindi",
            "mr": "Marathi"
        }

        response_language = language_names.get(
            language,
            "English"
        )

        prompt = f"""
You are PlantCare AI, a helpful plant-health expert.

Reply in {response_language}.

Use simple, friendly language that farmers and students
can easily understand.

Give practical advice about plants, diseases, gardening,
crop care, and agriculture.

When recommending chemical treatments, advise the user
to follow product labels and local agricultural guidance.

Do not claim that an uncertain diagnosis is confirmed.

If the user asks something unrelated to plants or agriculture,
politely guide the conversation back to those topics.

User's question:
{message}
"""

        response = model.generate_content(
            prompt,
            generation_config={
                "temperature": 0.4
            }
        )

        answer = (
            response.text.strip()
            if getattr(response, "text", None)
            else ""
        )

        if not answer:
            return jsonify({
                "success": False,
                "error": "Gemini returned an empty response."
            }), 502

        save_chat(
            session.get("user_id"),
            message,
            answer
        )

        return jsonify({
            "success": True,
            "response": answer
        })

    except Exception as error:

        print("Gemini chat error:", error)
        traceback.print_exc()

        return jsonify({
            "success": False,
            "error": (
                "PlantCare AI could not connect to Gemini. "
                "Check the API key, model availability, quota, "
                "and Render logs."
            )
        }), 500


# --------------------------------------------------
# RUN APPLICATION LOCALLY
# --------------------------------------------------

if __name__ == "__main__":

    print("PlantCare AI server starting...")
    print("Authentication: Enabled")
    print("Gemini model:", GEMINI_MODEL)
    print("Local URL: http://127.0.0.1:5000")

    app.run(
        debug=True,
        host="0.0.0.0",
        port=int(os.getenv("PORT", "5000"))
    )