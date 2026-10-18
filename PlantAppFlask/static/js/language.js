(function () {
    "use strict";

    // Get the selected language from the HTML page.
    const language = document.documentElement.lang || "en";

    const translations = {
        en: {
            // Sidebar
            schemesNav: "Government Schemes",
            languageLabel: "🌐 Language",
            home: "Home",
            diagnosis: "AI Diagnosis",
            chat: "Plant Doctor",
            history: "History",
            about: "About App",
            logout: "Logout",

            // Government Schemes
            pageTitle: "Government Schemes for Farmers",
            pageIntro: "Explore agricultural support schemes and open their official portals for the latest eligibility and application details.",
            official: "Official website",
            details: "Check eligibility and current application status on the official portal.",
            disclaimer: "Scheme availability, eligibility, benefits and application windows may change. Confirm the latest details on the official government portal before applying.",

            // Home page
            "Your Smart Plant Health Companion": "Your Smart Plant Health Companion",
            "Get Started": "Get Started",
            "Key Features": "Key Features",
            "Quick Scan": "Quick Scan",
            "Capture or upload leaf images for instant analysis and Detection.": "Capture or upload leaf images for instant analysis and detection.",
            "AI Detection": "AI Detection",
            "Advanced AI identifies diseases with 95% accuracy": "Advanced AI helps identify plant diseases.",
            "Smart Remedies": "Smart Remedies",
            "AI-powered treatment suggestions": "AI-powered treatment suggestions",
            "Track Progress": "Track Progress",
            "Monitor plant recovery": "Monitor plant recovery",
            "How It Works": "How It Works",
            "Why Choose PlantCare AI?": "Why Choose PlantCare AI?",
            "Quick & Accurate Diagnosis": "Quick & Accurate Diagnosis",
            "Comprehensive Disease Database": "Comprehensive Disease Database",
            "Eco-Friendly": "Eco-Friendly",
            "Save Money": "Save Money",

            // Diagnosis page
            "Plant Diagnosis": "Plant Diagnosis",
            "Select or capture a plant image": "Select or capture a plant image",
            "Take Photo": "Take Photo",
            "Upload from Gallery": "Upload from Gallery",
            "Start AI Analysis": "Start AI Analysis",
            "Diagnosis Results": "Diagnosis Results",
            "Plant Name": "Plant Name",
            "Disease Detected": "Disease Detected",
            "Confidence": "Confidence",
            "Precautions to be Followed": "Precautions to be Followed",
            "Organic Manures": "Organic Manures",
            "Inorganic Manures": "Inorganic Manures",
            "Chat with Plant Doctor": "Chat with Plant Doctor",
            "Diagnose Another Plant": "Diagnose Another Plant",

            // About page
            "About PlantCare AI": "About PlantCare AI",
            "Your Comprehensive Plant Health Guide": "Your Comprehensive Plant Health Guide",
            "Quick & Accurate Diagnosis": "Quick & Accurate Diagnosis",
            "Our advanced AI models are trained on millions of leaf images to provide lightning-fast identification of diseases. Within seconds of uploading a photo, you receive a detailed report on what's affecting your plant.": "Our AI models analyse leaf images to help identify plant diseases. After uploading a photo, you receive a report about the possible problem affecting your plant.",
            "Comprehensive Database": "Comprehensive Database",
            "We support a wide range of crops and ornamental plants. Our database is constantly updated with new diseases and treatment protocols, ensuring you always have access to the latest horticultural science.": "We support a wide range of crops and ornamental plants. Our database helps you learn about plant diseases and possible treatments.",
            "Eco-Friendly Solutions": "Eco-Friendly Solutions",
            "We prioritize organic and environmentally friendly treatment recommendations. By identifying diseases early and precisely, we help you reduce the unnecessary use of broad-spectrum chemicals, protecting your soil and local ecosystem.": "We prioritize organic and environmentally friendly treatment suggestions. Early identification may help reduce unnecessary chemical use and protect soil and the local ecosystem.",
            "Save Time & Money": "Save Time & Money",
            "Preventing crop failure is the best way to save money. By catching issues early, you can take action before the damage spreads, saving your investment and ensuring a bountiful harvest.": "Identifying possible plant problems early can help you take action before damage spreads, potentially saving time, money, and crops.",
            "Start a New Scan": "Start a New Scan"
        },

        hi: {
            // Sidebar
            schemesNav: "सरकारी योजनाएँ",
            languageLabel: "🌐 भाषा चुनें",
            home: "होम",
            diagnosis: "एआई निदान",
            chat: "प्लांट डॉक्टर",
            history: "इतिहास",
            about: "ऐप के बारे में",
            logout: "लॉग आउट",

            // Government Schemes
            pageTitle: "किसानों के लिए सरकारी योजनाएँ",
            pageIntro: "कृषि सहायता योजनाएँ देखें और पात्रता तथा आवेदन की नवीनतम जानकारी के लिए आधिकारिक पोर्टल खोलें।",
            official: "आधिकारिक वेबसाइट",
            details: "पात्रता और आवेदन की वर्तमान स्थिति आधिकारिक पोर्टल पर जाँचें।",
            disclaimer: "योजनाओं की उपलब्धता, पात्रता, लाभ और आवेदन की अवधि बदल सकती है। आवेदन करने से पहले आधिकारिक सरकारी पोर्टल पर नवीनतम जानकारी की पुष्टि करें।",

            // Home page
            "Your Smart Plant Health Companion": "आपका स्मार्ट पौधा स्वास्थ्य साथी",
            "Get Started": "शुरू करें",
            "Key Features": "मुख्य विशेषताएँ",
            "Quick Scan": "त्वरित स्कैन",
            "Capture or upload leaf images for instant analysis and Detection.": "तुरंत विश्लेषण के लिए पत्ते की फोटो लें या अपलोड करें।",
            "AI Detection": "एआई पहचान",
            "Advanced AI identifies diseases with 95% accuracy": "उन्नत एआई पौधों की बीमारियों की पहचान करने में मदद करता है।",
            "Smart Remedies": "स्मार्ट उपचार",
            "AI-powered treatment suggestions": "एआई आधारित उपचार सुझाव",
            "Track Progress": "प्रगति देखें",
            "Monitor plant recovery": "पौधे के सुधार पर नज़र रखें",
            "How It Works": "यह कैसे काम करता है",
            "Why Choose PlantCare AI?": "PlantCare AI क्यों चुनें?",
            "Quick & Accurate Diagnosis": "तेज़ और सटीक निदान",
            "Comprehensive Disease Database": "बीमारियों का विस्तृत डेटाबेस",
            "Eco-Friendly": "पर्यावरण के अनुकूल",
            "Save Money": "पैसे बचाएँ",

            // Diagnosis page
            "Plant Diagnosis": "पौधे का निदान",
            "Select or capture a plant image": "पौधे की फोटो चुनें या लें",
            "Take Photo": "फोटो लें",
            "Upload from Gallery": "गैलरी से अपलोड करें",
            "Start AI Analysis": "एआई विश्लेषण शुरू करें",
            "Diagnosis Results": "निदान के परिणाम",
            "Plant Name": "पौधे का नाम",
            "Disease Detected": "पहचानी गई बीमारी",
            "Confidence": "विश्वास स्तर",
            "Precautions to be Followed": "बरती जाने वाली सावधानियाँ",
            "Organic Manures": "जैविक खाद",
            "Inorganic Manures": "रासायनिक खाद",
            "Chat with Plant Doctor": "प्लांट डॉक्टर से बात करें",
            "Diagnose Another Plant": "दूसरे पौधे का निदान करें",

            // About page
            "About PlantCare AI": "PlantCare AI के बारे में",
            "Your Comprehensive Plant Health Guide": "पौधों के स्वास्थ्य के लिए संपूर्ण मार्गदर्शिका",
            "Our advanced AI models are trained on millions of leaf images to provide lightning-fast identification of diseases. Within seconds of uploading a photo, you receive a detailed report on what's affecting your plant.": "हमारे एआई मॉडल पत्तियों की तस्वीरों का विश्लेषण करके पौधों की बीमारियों की पहचान करने में मदद करते हैं। फोटो अपलोड करने के बाद आपको पौधे की संभावित समस्या की रिपोर्ट मिलती है।",
            "Comprehensive Database": "व्यापक डेटाबेस",
            "We support a wide range of crops and ornamental plants. Our database is constantly updated with new diseases and treatment protocols, ensuring you always have access to the latest horticultural science.": "हम कई प्रकार की फसलों और सजावटी पौधों का समर्थन करते हैं। हमारा डेटाबेस पौधों की बीमारियों और संभावित उपचारों की जानकारी प्रदान करता है।",
            "Eco-Friendly Solutions": "पर्यावरण के अनुकूल समाधान",
            "We prioritize organic and environmentally friendly treatment recommendations. By identifying diseases early and precisely, we help you reduce the unnecessary use of broad-spectrum chemicals, protecting your soil and local ecosystem.": "हम जैविक और पर्यावरण के अनुकूल उपचारों को प्राथमिकता देते हैं। बीमारी की जल्दी पहचान से अनावश्यक रसायनों का उपयोग कम करने और मिट्टी की रक्षा करने में मदद मिल सकती है।",
            "Save Time & Money": "समय और पैसा बचाएँ",
            "Preventing crop failure is the best way to save money. By catching issues early, you can take action before the damage spreads, saving your investment and ensuring a bountiful harvest.": "पौधों की समस्याओं की जल्दी पहचान करने से नुकसान फैलने से पहले कदम उठाने में मदद मिल सकती है। इससे समय, पैसा और फसल बचाने में सहायता मिल सकती है।",
            "Start a New Scan": "नया स्कैन शुरू करें"
        },

        mr: {
            // Sidebar
            schemesNav: "शासकीय योजना",
            languageLabel: "🌐 भाषा निवडा",
            home: "मुख्यपृष्ठ",
            diagnosis: "एआय निदान",
            chat: "प्लांट डॉक्टर",
            history: "इतिहास",
            about: "अ‍ॅपबद्दल",
            logout: "बाहेर पडा",

            // Government Schemes
            pageTitle: "शेतकऱ्यांसाठी शासकीय योजना",
            pageIntro: "कृषी सहाय्य योजना पाहा आणि पात्रता व अर्जाच्या नवीन माहितीसाठी अधिकृत पोर्टल उघडा.",
            official: "अधिकृत वेबसाइट",
            details: "पात्रता आणि अर्जाची सध्याची स्थिती अधिकृत पोर्टलवर तपासा.",
            disclaimer: "योजनांची उपलब्धता, पात्रता, लाभ आणि अर्जाचा कालावधी बदलू शकतो. अर्ज करण्यापूर्वी अधिकृत सरकारी पोर्टलवरील नवीन माहिती तपासा.",

            // Home page
            "Your Smart Plant Health Companion": "तुमचा स्मार्ट वनस्पती आरोग्य साथीदार",
            "Get Started": "सुरू करा",
            "Key Features": "मुख्य वैशिष्ट्ये",
            "Quick Scan": "जलद स्कॅन",
            "Capture or upload leaf images for instant analysis and Detection.": "त्वरित विश्लेषणासाठी पानाचा फोटो काढा किंवा अपलोड करा.",
            "AI Detection": "एआय निदान",
            "Advanced AI identifies diseases with 95% accuracy": "प्रगत एआय वनस्पतींचे रोग ओळखण्यास मदत करते.",
            "Smart Remedies": "स्मार्ट उपाय",
            "AI-powered treatment suggestions": "एआय आधारित उपचार सूचना",
            "Track Progress": "प्रगतीचा मागोवा घ्या",
            "Monitor plant recovery": "वनस्पतीच्या सुधारणेवर लक्ष ठेवा",
            "How It Works": "हे कसे कार्य करते",
            "Why Choose PlantCare AI?": "PlantCare AI का निवडावे?",
            "Quick & Accurate Diagnosis": "जलद आणि अचूक निदान",
            "Comprehensive Disease Database": "रोगांचा विस्तृत डेटाबेस",
            "Eco-Friendly": "पर्यावरणपूरक",
            "Save Money": "पैसे वाचवा",

            // Diagnosis page
            "Plant Diagnosis": "वनस्पतीचे निदान",
            "Select or capture a plant image": "वनस्पतीचा फोटो निवडा किंवा काढा",
            "Take Photo": "फोटो काढा",
            "Upload from Gallery": "गॅलरीमधून अपलोड करा",
            "Start AI Analysis": "एआय विश्लेषण सुरू करा",
            "Diagnosis Results": "निदानाचे परिणाम",
            "Plant Name": "वनस्पतीचे नाव",
            "Disease Detected": "आढळलेला रोग",
            "Confidence": "विश्वास पातळी",
            "Precautions to be Followed": "घ्यावयाची काळजी",
            "Organic Manures": "सेंद्रिय खते",
            "Inorganic Manures": "रासायनिक खते",
            "Chat with Plant Doctor": "प्लांट डॉक्टरशी बोला",
            "Diagnose Another Plant": "दुसऱ्या वनस्पतीचे निदान करा",

            // About page
            "About PlantCare AI": "PlantCare AI बद्दल",
            "Your Comprehensive Plant Health Guide": "वनस्पती आरोग्यासाठी तुमचे संपूर्ण मार्गदर्शक",
            "Our advanced AI models are trained on millions of leaf images to provide lightning-fast identification of diseases. Within seconds of uploading a photo, you receive a detailed report on what's affecting your plant.": "आमचे एआय मॉडेल पानांच्या फोटोंचे विश्लेषण करून वनस्पतींचे रोग ओळखण्यास मदत करतात. फोटो अपलोड केल्यानंतर वनस्पतीच्या संभाव्य समस्येचा अहवाल मिळतो.",
            "Comprehensive Database": "विस्तृत डेटाबेस",
            "We support a wide range of crops and ornamental plants. Our database is constantly updated with new diseases and treatment protocols, ensuring you always have access to the latest horticultural science.": "आम्ही विविध पिके आणि शोभेच्या वनस्पतींसाठी माहिती देतो. आमच्या डेटाबेसमध्ये वनस्पतींचे रोग आणि संभाव्य उपचारांची माहिती उपलब्ध आहे.",
            "Eco-Friendly Solutions": "पर्यावरणपूरक उपाय",
            "We prioritize organic and environmentally friendly treatment recommendations. By identifying diseases early and precisely, we help you reduce the unnecessary use of broad-spectrum chemicals, protecting your soil and local ecosystem.": "आम्ही सेंद्रिय आणि पर्यावरणपूरक उपचारांना प्राधान्य देतो. रोग लवकर ओळखल्यामुळे अनावश्यक रसायनांचा वापर कमी करण्यास आणि मातीचे संरक्षण करण्यास मदत होऊ शकते.",
            "Save Time & Money": "वेळ आणि पैसा वाचवा",
            "Preventing crop failure is the best way to save money. By catching issues early, you can take action before the damage spreads, saving your investment and ensuring a bountiful harvest.": "वनस्पतींच्या समस्या लवकर ओळखल्यामुळे नुकसान पसरण्यापूर्वी उपाय करता येतात. यामुळे वेळ, पैसा आणि पीक वाचवण्यास मदत होऊ शकते.",
            "Start a New Scan": "नवीन स्कॅन सुरू करा"
        }
    };

    const dict = translations[language] || translations.en;

    // Change the language using your Flask route.
    window.changeLanguage = function (value) {
        if (!["en", "hi", "mr"].includes(value)) {
            value = "en";
        }

        window.location.href = "/set-language/" + value;
    };

    // Translate sidebar menu items.
    const nav = [
        ['a[href="/home"] span', "home"],
        ['a[href="/diagnosis"] span', "diagnosis"],
        ['a[href="/chat"] span', "chat"],
        ['a[href="/history"] span', "history"],
        ['a[href="/about"] span', "about"],
        ['a[onclick="handleLogout()"] span', "logout"]
    ];

    nav.forEach(function ([selector, key]) {
        const element = document.querySelector(".sidebar-menu " + selector);

        if (element && dict[key]) {
            element.textContent = dict[key];
        }
    });

    // Translate text nodes without changing HTML elements or icons.
    const walker = document.createTreeWalker(
        document.body,
        NodeFilter.SHOW_TEXT
    );

    const nodes = [];

    while (walker.nextNode()) {
        nodes.push(walker.currentNode);
    }

    nodes.forEach(function (node) {
        const original = node.nodeValue.trim();

        if (original && dict[original]) {
            node.nodeValue = node.nodeValue.replace(
                original,
                dict[original]
            );
        }
    });

    // Translate elements explicitly marked in HTML.
    document.querySelectorAll("[data-i18n], [data-scheme-i18n]").forEach(function (element) {
        const key =
            element.getAttribute("data-i18n") ||
            element.getAttribute("data-scheme-i18n");

        if (dict[key]) {
            element.textContent = dict[key];
        }
    });

})();