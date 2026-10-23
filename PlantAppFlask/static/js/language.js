(function () {
    "use strict";

    // Detect language from HTML lang attribute or URL or session
    var language = document.documentElement.lang || "en";
    if (!["en", "hi", "mr"].includes(language)) {
        language = "en";
    }

    var translations = {
        en: {
            // Sidebar Navigation
            home: "Home",
            diagnosis: "AI Diagnosis",
            chat: "Plant Doctor",
            schemesNav: "Government Schemes",
            history: "History",
            about: "About App",
            logout: "Logout",
            languageLabel: "🌐 Language",

            // Plant Doctor (Chat)
            chatTitle: "PlantCare AI - Plant Doctor",
            chatHeader: "Plant Doctor",
            welcomeMessage: "Hello! I am your Plant Doctor AI. How can I help you with your plants today?",
            chatPlaceholder: "Type your question...",
            send: "Send",
            typing: "Doctor is thinking...",
            chatError: "Sorry, I could not process your request right now. Please try again.",

            // About App
            "About PlantCare AI": "About PlantCare AI",
            aboutTitle: "About PlantCare AI",
            "Your Comprehensive Plant Health Guide": "Your Comprehensive Plant Health Guide",
            aboutSubtitle: "Your Comprehensive Plant Health Guide",
            "Quick & Accurate Diagnosis": "Quick & Accurate Diagnosis",
            aboutDiagnosisTitle: "Quick & Accurate Diagnosis",
            aboutDiagnosisText: "Our advanced AI models are trained on millions of leaf images to provide lightning-fast identification of diseases. Within seconds of uploading a photo, you receive a detailed report on what's affecting your plant.",
            "Comprehensive Database": "Comprehensive Database",
            aboutDatabaseTitle: "Comprehensive Database",
            aboutDatabaseText: "We support a wide range of crops and ornamental plants. Our database is constantly updated with new diseases and treatment protocols, ensuring you always have access to the latest horticultural science.",
            "Eco-Friendly Solutions": "Eco-Friendly Solutions",
            aboutEcoTitle: "Eco-Friendly Solutions",
            aboutEcoText: "We prioritize organic and environmentally friendly treatment recommendations. By identifying diseases early and precisely, we help you reduce the unnecessary use of broad-spectrum chemicals, protecting your soil and local ecosystem.",
            "Save Time & Money": "Save Time & Money",
            aboutSavingsTitle: "Save Time & Money",
            aboutSavingsText: "Preventing crop failure is the best way to save money. By catching issues early, you can take action before the damage spreads, saving your investment and ensuring a bountiful harvest.",
            "Start a New Scan": "Start a New Scan",
            startScan: "Start a New Scan",

            // Government Schemes
            pageTitle: "Government Schemes for Farmers",
            pageIntro: "Explore agricultural support schemes and open their official portals for the latest eligibility and application details.",
            official: "Official website",
            details: "Check eligibility and current application status on the official portal.",
            disclaimer: "Scheme availability, eligibility, benefits and application windows may change. Confirm the latest details on the official government portal before applying.",
            pmkisanDesc: "A central government income-support scheme for eligible farmer families.",
            pmfbyDesc: "Crop insurance for farmers, subject to notified crops and applicable scheme conditions.",
            kccDesc: "Information about bank credit facilities for eligible farmers’ agricultural and related needs.",
            mahadbtDesc: "Maharashtra’s portal for agricultural department schemes and application services for farmers.",

            // AI Diagnosis
            diagnosisTitle: "Plant Diagnosis",
            "Plant Diagnosis": "Plant Diagnosis",
            selectImage: "Select or capture a plant image",
            "Select or capture a plant image": "Select or capture a plant image",
            takePhoto: "Take Photo",
            "Take Photo": "Take Photo",
            uploadGallery: "Upload from Gallery",
            "Upload from Gallery": "Upload from Gallery",
            startAnalysis: "Start AI Analysis",
            "Start AI Analysis": "Start AI Analysis",
            analyzing: "Analyzing Image...",
            diagnosisResults: "Diagnosis Results",
            "Diagnosis Results": "Diagnosis Results",
            plantNameLabel: "Plant Name",
            "Plant Name": "Plant Name",
            diseaseDetected: "Disease Detected",
            "Disease Detected": "Disease Detected",
            confidence: "Confidence",
            "Confidence": "Confidence",
            precautions: "Precautions to be Followed",
            "Precautions to be Followed": "Precautions to be Followed",
            organicManures: "Organic Manures",
            "Organic Manures": "Organic Manures",
            inorganicManures: "Inorganic Manures",
            "Inorganic Manures": "Inorganic Manures",
            chatDoctor: "Chat with Plant Doctor",
            "Chat with Plant Doctor": "Chat with Plant Doctor",
            diagnoseAnother: "Diagnose Another Plant",
            "Diagnose Another Plant": "Diagnose Another Plant",
            loading: "Loading...",
            noPrecautions: "No specific precautions available.",
            noOrganic: "No organic treatments available.",
            noInorganic: "No inorganic treatments available.",

            // Home Page
            appName: "PlantCare AI",
            tagline: "Your Smart Plant Health Companion",
            "Your Smart Plant Health Companion": "Your Smart Plant Health Companion",
            homeIntro: "Instantly detect plant diseases and get expert remedies using advanced AI technology. Keep your plants healthy and thriving!",
            getStarted: "Get Started",
            "Get Started": "Get Started",
            keyFeatures: "Key Features",
            "Key Features": "Key Features",
            quickScan: "Quick Scan",
            "Quick Scan": "Quick Scan",
            quickScanDesc: "Capture or upload leaf images for instant analysis and detection.",
            "Capture or upload leaf images for instant analysis and Detection.": "Capture or upload leaf images for instant analysis and detection.",
            aiDetection: "AI Detection",
            "AI Detection": "AI Detection",
            aiDetectionDesc: "Advanced AI identifies diseases with 95% accuracy",
            "Advanced AI identifies diseases with 95% accuracy": "Advanced AI identifies diseases with 95% accuracy",
            smartRemedies: "Smart Remedies",
            "Smart Remedies": "Smart Remedies",
            smartRemediesDesc: "AI-powered treatment suggestions",
            "AI-powered treatment suggestions": "AI-powered treatment suggestions",
            trackProgress: "Track Progress",
            "Track Progress": "Track Progress",
            trackProgressDesc: "Monitor plant recovery",
            "Monitor plant recovery": "Monitor plant recovery",
            howItWorks: "How It Works",
            "How It Works": "How It Works",
            step1Title: "Take a Photo",
            step1Desc: "Snap a clear picture of the affected plant leaf",
            step2Title: "AI Analysis",
            step2Desc: "Our AI scans the image and identifies the disease",
            step3Title: "Get Treatment",
            step3Desc: "Receive detailed remedies and prevention tips",
            whyChoose: "Why Choose PlantCare AI?",
            "Why Choose PlantCare AI?": "Why Choose PlantCare AI?",
            benefit1Title: "Quick & Accurate Diagnosis",
            benefit1Desc: "Get instant results with high accuracy",
            benefit2Title: "Comprehensive Database",
            benefit2Desc: "Covers hundreds of plant species and diseases",
            benefit3Title: "Eco-Friendly Solutions",
            benefit3Desc: "Organic treatment recommendations",
            benefit4Title: "Save Time & Money",
            benefit4Desc: "Prevent crop losses",
            navScan: "Scan",
            navChat: "Chat",
            navHistory: "History",

            // History
            historyTitle: "Diagnosis History",
            noHistory: "No diagnosis history found yet. Start scanning your plants!"
        },

        hi: {
            // Sidebar Navigation
            home: "होम",
            diagnosis: "एआई निदान",
            chat: "प्लांट डॉक्टर",
            schemesNav: "सरकारी योजनाएँ",
            history: "इतिहास",
            about: "ऐप के बारे में",
            logout: "लॉग आउट",
            languageLabel: "🌐 भाषा",

            // Plant Doctor (Chat)
            chatTitle: "PlantCare AI - प्लांट डॉक्टर",
            chatHeader: "प्लांट डॉक्टर",
            welcomeMessage: "नमस्ते! मैं आपका प्लांट डॉक्टर एआई हूँ। आज मैं आपके पौधों की देखभाल में कैसे मदद कर सकता हूँ?",
            chatPlaceholder: "अपना प्रश्न यहाँ लिखें...",
            send: "भेजें",
            typing: "डॉक्टर विचार कर रहे हैं...",
            chatError: "क्षमा करें, मैं अभी आपके अनुरोध को संसाधित नहीं कर सका। कृपया पुनः प्रयास करें।",

            // About App
            "About PlantCare AI": "PlantCare AI के बारे में",
            aboutTitle: "PlantCare AI के बारे में",
            "Your Comprehensive Plant Health Guide": "पौधों के स्वास्थ्य के लिए संपूर्ण मार्गदर्शिका",
            aboutSubtitle: "पौधों के स्वास्थ्य के लिए संपूर्ण मार्गदर्शिका",
            "Quick & Accurate Diagnosis": "तेज़ और सटीक निदान",
            aboutDiagnosisTitle: "तेज़ और सटीक निदान",
            aboutDiagnosisText: "हमारे उन्नत एआई मॉडल पत्तियों की लाखों तस्वीरों पर प्रशिक्षित हैं ताकि तुरंत बीमारियों की पहचान हो सके। फोटो अपलोड करने के कुछ ही सेकंडों में आपको विस्तृत रिपोर्ट मिल जाती है।",
            "Comprehensive Database": "विस्तृत डेटाबेस",
            aboutDatabaseTitle: "विस्तृत डेटाबेस",
            aboutDatabaseText: "हम कई प्रकार की फसलों और सजावटी पौधों का समर्थन करते हैं। हमारा डेटाबेस नई बीमारियों और उपचार विधियों के साथ लगातार अपडेट किया जाता है।",
            "Eco-Friendly Solutions": "पर्यावरण के अनुकूल समाधान",
            aboutEcoTitle: "पर्यावरण के अनुकूल समाधान",
            aboutEcoText: "हम जैविक और पर्यावरण के अनुकूल उपचारों को प्राथमिकता देते हैं। बीमारी की सटीक पहचान से अनावश्यक रसायनों का उपयोग कम होता है और मिट्टी की रक्षा होती है।",
            "Save Time & Money": "समय और पैसा बचाएँ",
            aboutSavingsTitle: "समय और पैसा बचाएँ",
            aboutSavingsText: "फसल के नुकसान को रोकना पैसे बचाने का सबसे अच्छा तरीका है। समस्याओं को जल्दी पहचानकर आप समय पर कदम उठा सकते हैं और अपनी फसल बचा सकते हैं।",
            "Start a New Scan": "नया स्कैन शुरू करें",
            startScan: "नया स्कैन शुरू करें",

            // Government Schemes
            pageTitle: "किसानों के लिए सरकारी योजनाएँ",
            pageIntro: "कृषि सहायता योजनाएँ देखें और पात्रता तथा आवेदन की नवीनतम जानकारी के लिए आधिकारिक पोर्टल खोलें।",
            official: "आधिकारिक वेबसाइट",
            details: "पात्रता और आवेदन की वर्तमान स्थिति आधिकारिक पोर्टल पर जाँचें।",
            disclaimer: "योजनाओं की उपलब्धता, पात्रता, लाभ और आवेदन की अवधि बदल सकती है। आवेदन करने से पहले आधिकारिक सरकारी पोर्टल पर नवीनतम जानकारी की पुष्टि करें।",
            pmkisanDesc: "पात्र किसान परिवारों को आय सहायता प्रदान करने वाली केंद्र सरकार की योजना।",
            pmfbyDesc: "अधिसूचित फसलों और लागू शर्तों के अनुसार किसानों के लिए फसल बीमा योजना।",
            kccDesc: "पात्र किसानों को कृषि और संबंधित जरूरतों के लिए बैंक ऋण सुविधा के बारे में जानकारी।",
            mahadbtDesc: "महाराष्ट्र के किसानों के लिए कृषि विभाग की विभिन्न योजनाओं और आवेदन सेवाओं का पोर्टल।",

            // AI Diagnosis
            diagnosisTitle: "पौधे का निदान",
            "Plant Diagnosis": "पौधे का निदान",
            selectImage: "पौधे की फोटो चुनें या लें",
            "Select or capture a plant image": "पौधे की फोटो चुनें या लें",
            takePhoto: "फोटो लें",
            "Take Photo": "फोटो लें",
            uploadGallery: "गैलरी से अपलोड करें",
            "Upload from Gallery": "गैलरी से अपलोड करें",
            startAnalysis: "एआई विश्लेषण शुरू करें",
            "Start AI Analysis": "एआई विश्लेषण शुरू करें",
            analyzing: "विश्लेषण हो रहा है...",
            diagnosisResults: "निदान के परिणाम",
            "Diagnosis Results": "निदान के परिणाम",
            plantNameLabel: "पौधे का नाम",
            "Plant Name": "पौधे का नाम",
            diseaseDetected: "पहचानी गई बीमारी",
            "Disease Detected": "पहचानी गई बीमारी",
            confidence: "विश्वास स्तर",
            "Confidence": "विश्वास स्तर",
            precautions: "बरती जाने वाली सावधानियाँ",
            "Precautions to be Followed": "बरती जाने वाली सावधानियाँ",
            organicManures: "जैविक खाद",
            "Organic Manures": "जैविक खाद",
            inorganicManures: "रासायनिक खाद",
            "Inorganic Manures": "रासायनिक खाद",
            chatDoctor: "प्लांट डॉक्टर से बात करें",
            "Chat with Plant Doctor": "प्लांट डॉक्टर से बात करें",
            diagnoseAnother: "दूसरे पौधे का निदान करें",
            "Diagnose Another Plant": "दूसरे पौधे का निदान करें",
            loading: "लोड हो रहा है...",
            noPrecautions: "कोई विशेष सावधानी उपलब्ध नहीं है।",
            noOrganic: "कोई जैविक उपचार उपलब्ध नहीं है।",
            noInorganic: "कोई रासायनिक उपचार उपलब्ध नहीं है।",

            // Home Page
            appName: "PlantCare AI",
            tagline: "आपका स्मार्ट पौधा स्वास्थ्य साथी",
            "Your Smart Plant Health Companion": "आपका स्मार्ट पौधा स्वास्थ्य साथी",
            homeIntro: "उन्नत एआई तकनीक का उपयोग करके तुरंत पौधों की बीमारियों का पता लगाएं और विशेषज्ञ उपचार प्राप्त करें। अपने पौधों को स्वस्थ रखें!",
            getStarted: "शुरू करें",
            "Get Started": "शुरू करें",
            keyFeatures: "मुख्य विशेषताएँ",
            "Key Features": "मुख्य विशेषताएँ",
            quickScan: "त्वरित स्कैन",
            "Quick Scan": "त्वरित स्कैन",
            quickScanDesc: "तुरंत विश्लेषण के लिए पत्ते की फोटो लें या अपलोड करें।",
            "Capture or upload leaf images for instant analysis and Detection.": "तुरंत विश्लेषण के लिए पत्ते की फोटो लें या अपलोड करें।",
            aiDetection: "एआई पहचान",
            "AI Detection": "एआई पहचान",
            aiDetectionDesc: "उन्नत एआई 95% सटीकता के साथ बीमारियों की पहचान करता है",
            "Advanced AI identifies diseases with 95% accuracy": "उन्नत एआई 95% सटीकता के साथ बीमारियों की पहचान करता है",
            smartRemedies: "स्मार्ट उपचार",
            "Smart Remedies": "स्मार्ट उपचार",
            smartRemediesDesc: "एआई आधारित उपचार सुझाव",
            "AI-powered treatment suggestions": "एआई आधारित उपचार सुझाव",
            trackProgress: "प्रगति देखें",
            "Track Progress": "प्रगति देखें",
            trackProgressDesc: "पौधे के सुधार पर नज़र रखें",
            "Monitor plant recovery": "पौधे के सुधार पर नज़र रखें",
            howItWorks: "यह कैसे काम करता है",
            "How It Works": "यह कैसे काम करता है",
            step1Title: "फोटो लें",
            step1Desc: "प्रभावित पौधे की पत्ती की साफ तस्वीर लें",
            step2Title: "एआई विश्लेषण",
            step2Desc: "हमारा एआई छवि को स्कैन करता है और बीमारी की पहचान करता है",
            step3Title: "उपचार प्राप्त करें",
            step3Desc: "विस्तृत उपचार और रोकथाम के उपाय प्राप्त करें",
            whyChoose: "PlantCare AI क्यों चुनें?",
            "Why Choose PlantCare AI?": "PlantCare AI क्यों चुनें?",
            benefit1Title: "तेज़ और सटीक निदान",
            benefit1Desc: "उच्च सटीकता के साथ त्वरित परिणाम प्राप्त करें",
            benefit2Title: "विस्तृत डेटाबेस",
            benefit2Desc: "सैकड़ों पौधों की प्रजातियों और बीमारियों को शामिल करता है",
            benefit3Title: "पर्यावरण के अनुकूल समाधान",
            benefit3Desc: "जैविक उपचार सिफारिशें",
            benefit4Title: "समय और पैसा बचाएँ",
            benefit4Desc: "फसल के नुकसान को रोकें",
            navScan: "स्कैन",
            navChat: "चैट",
            navHistory: "इतिहास",

            // History
            historyTitle: "निदान इतिहास",
            noHistory: "कोई निदान इतिहास नहीं मिला। अपने पौधों को स्कैन करना शुरू करें!"
        },

        mr: {
            // Sidebar Navigation
            home: "मुख्यपृष्ठ",
            diagnosis: "एआय निदान",
            chat: "प्लांट डॉक्टर",
            schemesNav: "शासकीय योजना",
            history: "इतिहास",
            about: "अ‍ॅपबद्दल",
            logout: "बाहेर पडा",
            languageLabel: "🌐 भाषा",

            // Plant Doctor (Chat)
            chatTitle: "PlantCare AI - प्लांट डॉक्टर",
            chatHeader: "प्लांट डॉक्टर",
            welcomeMessage: "नमस्कार! मी तुमचा प्लांट डॉक्टर एआय आहे. आज मी तुमच्या वनस्पतींच्या आरोग्यासाठी कशी मदत करू शकतो?",
            chatPlaceholder: "तुमचा प्रश्न येथे टाईप करा...",
            send: "पाठवा",
            typing: "डॉक्टर विचार करत आहेत...",
            chatError: "क्षमस्व, मी आत्ता तुमच्या प्रश्नावर प्रक्रिया करू शकलो नाही. कृपया पुन्हा प्रयत्न करा.",

            // About App
            "About PlantCare AI": "PlantCare AI बद्दल",
            aboutTitle: "PlantCare AI बद्दल",
            "Your Comprehensive Plant Health Guide": "वनस्पती आरोग्यासाठी तुमचे संपूर्ण मार्गदर्शक",
            aboutSubtitle: "वनस्पती आरोग्यासाठी तुमचे संपूर्ण मार्गदर्शक",
            "Quick & Accurate Diagnosis": "जलद आणि अचूक निदान",
            aboutDiagnosisTitle: "जलद आणि अचूक निदान",
            aboutDiagnosisText: "आमचे प्रगत एआय मॉडेल पानांच्या लाखो फोटोंवर प्रशिक्षित आहेत जेणेकरून रोगांचे त्वरित निदान करता येईल. फोटो अपलोड केल्यानंतर काही सेकंदातच सविस्तर अहवाल मिळतो.",
            "Comprehensive Database": "विस्तृत डेटाबेस",
            aboutDatabaseTitle: "विस्तृत डेटाबेस",
            aboutDatabaseText: "आम्ही विविध पिके आणि शोभेच्या वनस्पतींसाठी सहाय्य देतो. आमचा डेटाबेस नवीन रोग आणि उपचार पद्धतींसह सतत अपडेट केला जातो.",
            "Eco-Friendly Solutions": "पर्यावरणपूरक उपाय",
            aboutEcoTitle: "पर्यावरणपूरक उपाय",
            aboutEcoText: "आम्ही सेंद्रिय आणि पर्यावरणपूरक उपायांना प्राधान्य देतो. रोगाचे लवकर व अचूक निदान झाल्याने अनावश्यक रसायनांचा वापर कमी होतो आणि मातीचे रक्षण होते.",
            "Save Time & Money": "वेळ आणि पैसा वाचवा",
            aboutSavingsTitle: "वेळ आणि पैसा वाचवा",
            aboutSavingsText: "पिकांचे नुकसान टाळणे हा पैसे वाचवण्याचा सर्वोत्तम मार्ग आहे. समस्या लवकर ओळखून वेळीच उपाय करता येतात आणि उत्पन्नाचे रक्षण होते.",
            "Start a New Scan": "नवीन स्कॅन सुरू करा",
            startScan: "नवीन स्कॅन सुरू करा",

            // Government Schemes
            pageTitle: "शेतकऱ्यांसाठी शासकीय योजना",
            pageIntro: "कृषी सहाय्य योजना पाहा आणि पात्रता व अर्जाच्या नवीन माहितीसाठी अधिकृत पोर्टल उघडा.",
            official: "अधिकृत वेबसाइट",
            details: "पात्रता आणि अर्जाची सध्याची स्थिती अधिकृत पोर्टलवर तपासा.",
            disclaimer: "योजनांची उपलब्धता, पात्रता, लाभ आणि अर्जाचा कालावधी बदलू शकतो. अर्ज करण्यापूर्वी अधिकृत सरकारी पोर्टलवरील नवीन माहिती तपासा.",
            pmkisanDesc: "पात्र शेतकरी कुटुंबांना आर्थिक सहाय्य देणारी केंद्र सरकारची योजना.",
            pmfbyDesc: "अधिसूचित पिके आणि लागू अटींनुसार शेतकऱ्यांसाठी पीक विमा योजना.",
            kccDesc: "पात्र शेतकऱ्यांना शेती व संबंधित गरजांसाठी बँक कर्ज सुविधेबद्दल माहिती.",
            mahadbtDesc: "महाराष्ट्रातील शेतकऱ्यांसाठी कृषी विभागाच्या विविध योजना आणि अर्ज सेवांचे पोर्टल.",

            // AI Diagnosis
            diagnosisTitle: "वनस्पतीचे निदान",
            "Plant Diagnosis": "वनस्पतीचे निदान",
            selectImage: "वनस्पतीचा फोटो निवडा किंवा काढा",
            "Select or capture a plant image": "वनस्पतीचा फोटो निवडा किंवा काढा",
            takePhoto: "फोटो काढा",
            "Take Photo": "फोटो काढा",
            uploadGallery: "गॅलरीमधून अपलोड करा",
            "Upload from Gallery": "गॅलरीमधून अपलोड करा",
            startAnalysis: "एआय विश्लेषण सुरू करा",
            "Start AI Analysis": "एआय विश्लेषण सुरू करा",
            analyzing: "विश्लेषण होत आहे...",
            diagnosisResults: "निदानाचे परिणाम",
            "Diagnosis Results": "निदानाचे परिणाम",
            plantNameLabel: "वनस्पतीचे नाव",
            "Plant Name": "वनस्पतीचे नाव",
            diseaseDetected: "आढळलेला रोग",
            "Disease Detected": "आढळलेला रोग",
            confidence: "विश्वास पातळी",
            "Confidence": "विश्वास पातळी",
            precautions: "घ्यावयाची काळजी",
            "Precautions to be Followed": "घ्यावयाची काळजी",
            organicManures: "सेंद्रिय खते",
            "Organic Manures": "सेंद्रिय खते",
            inorganicManures: "रासायनिक खते",
            "Inorganic Manures": "रासायनिक खते",
            chatDoctor: "प्लांट डॉक्टरशी बोला",
            "Chat with Plant Doctor": "प्लांट डॉक्टरशी बोला",
            diagnoseAnother: "दुसऱ्या वनस्पतीचे निदान करा",
            "Diagnose Another Plant": "दुसऱ्या वनस्पतीचे निदान करा",
            loading: "लोड होत आहे...",
            noPrecautions: "कोणतीही विशेष काळजी उपलब्ध नाही.",
            noOrganic: "कोणतेही सेंद्रिय उपाय उपलब्ध नाहीत.",
            noInorganic: "कोणतेही रासायनिक उपाय उपलब्ध नाहीत.",

            // Home Page
            appName: "PlantCare AI",
            tagline: "तुमचा स्मार्ट वनस्पती आरोग्य साथीदार",
            "Your Smart Plant Health Companion": "तुमचा स्मार्ट वनस्पती आरोग्य साथीदार",
            homeIntro: "प्रगत एआय तंत्रज्ञानाचा वापर करून त्वरित वनस्पतींचे रोग ओळखा आणि तज्ज्ञ उपाय मिळवा. तुमची रोपे निरोगी आणि टवटवीत ठेवा!",
            getStarted: "सुरू करा",
            "Get Started": "सुरू करा",
            keyFeatures: "मुख्य वैशिष्ट्ये",
            "Key Features": "मुख्य वैशिष्ट्ये",
            quickScan: "जलद स्कॅन",
            "Quick Scan": "जलद स्कॅन",
            quickScanDesc: "त्वरित विश्लेषणासाठी पानाचा फोटो काढा किंवा अपलोड करा.",
            "Capture or upload leaf images for instant analysis and Detection.": "त्वरित विश्लेषणासाठी पानाचा फोटो काढा किंवा अपलोड करा.",
            aiDetection: "एआय निदान",
            "AI Detection": "एआय निदान",
            aiDetectionDesc: "प्रगत एआय 95% अचूकतेसह रोग ओळखते",
            "Advanced AI identifies diseases with 95% accuracy": "प्रगत एआय 95% अचूकतेसह रोग ओळखते",
            smartRemedies: "स्मार्ट उपाय",
            "Smart Remedies": "स्मार्ट उपाय",
            smartRemediesDesc: "एआय आधारित उपचार सूचना",
            "AI-powered treatment suggestions": "एआय आधारित उपचार सूचना",
            trackProgress: "प्रगतीचा मागोवा घ्या",
            "Track Progress": "प्रगतीचा मागोवा घ्या",
            trackProgressDesc: "वनस्पतीच्या सुधारणेवर लक्ष ठेवा",
            "Monitor plant recovery": "वनस्पतीच्या सुधारणेवर लक्ष ठेवा",
            howItWorks: "हे कसे कार्य करते",
            "How It Works": "हे कसे कार्य करते",
            step1Title: "फोटो काढा",
            step1Desc: "बाधित वनस्पतीच्या पानाचा स्पष्ट फोटो काढा",
            step2Title: "एआय विश्लेषण",
            step2Desc: "आमचे एआय फोटो स्कॅन करते आणि रोग ओळखते",
            step3Title: "उपाय मिळवा",
            step3Desc: "सविस्तर उपाय आणि प्रतिबंधात्मक सूचना मिळवा",
            whyChoose: "PlantCare AI का निवडावे?",
            "Why Choose PlantCare AI?": "PlantCare AI का निवडावे?",
            benefit1Title: "जलद आणि अचूक निदान",
            benefit1Desc: "उच्च अचूकतेसह त्वरित निकाल मिळवा",
            benefit2Title: "विस्तृत डेटाबेस",
            benefit2Desc: "शेकडो वनस्पतींच्या प्रजाती आणि रोगांचा समावेश",
            benefit3Title: "पर्यावरणपूरक उपाय",
            benefit3Desc: "सेंद्रिय उपचारांच्या शिफारसी",
            benefit4Title: "वेळ आणि पैसा वाचवा",
            benefit4Desc: "पिकांचे नुकसान टाळा",
            navScan: "स्कॅन",
            navChat: "चॅट",
            navHistory: "इतिहास",

            // History
            historyTitle: "निदान इतिहास",
            noHistory: "कोणताही इतिहास आढळला नाही. वनस्पती स्कॅन करण्यास सुरू करा!"
        }
    };

    var dict = translations[language] || translations.en;

    // Translation function available globally
    window.t = function (key) {
        if (!key) return "";
        return dict[key] || (translations.en && translations.en[key]) || key;
    };

    // Change language function
    window.changeLanguage = function (value) {
        if (!["en", "hi", "mr"].includes(value)) {
            value = "en";
        }
        window.location.href = "/set-language/" + value;
    };

    function applyTranslations() {
        // 1. Sidebar menu links
        var navSelectors = [
            ['a[href="/home"] span', "home"],
            ['a[href="/diagnosis"] span', "diagnosis"],
            ['a[href="/chat"] span', "chat"],
            ['a[href="/schemes"] span', "schemesNav"],
            ['a[href="/history"] span', "history"],
            ['a[href="/about"] span', "about"],
            ['a[onclick*="handleLogout"] span', "logout"]
        ];

        navSelectors.forEach(function (item) {
            var el = document.querySelector(".sidebar-menu " + item[0]);
            if (el && dict[item[1]]) {
                el.textContent = dict[item[1]];
            }
        });

        // 2. Elements with data-i18n or data-scheme-i18n
        document.querySelectorAll("[data-i18n], [data-scheme-i18n]").forEach(function (el) {
            var key = el.getAttribute("data-i18n") || el.getAttribute("data-scheme-i18n");
            if (dict[key]) {
                el.textContent = dict[key];
            }
        });

        // 3. Inputs with data-i18n-placeholder
        document.querySelectorAll("[data-i18n-placeholder]").forEach(function (el) {
            var key = el.getAttribute("data-i18n-placeholder");
            if (dict[key]) {
                el.setAttribute("placeholder", dict[key]);
            }
        });

        // 4. Translate text nodes safely
        var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
        var nodes = [];
        while (walker.nextNode()) {
            nodes.push(walker.currentNode);
        }

        nodes.forEach(function (node) {
            var val = node.nodeValue.trim();
            if (val && dict[val]) {
                node.nodeValue = node.nodeValue.replace(val, dict[val]);
            }
        });

        // 5. Sync all language dropdowns on the page
        document.querySelectorAll("select#languageSelect, select.language-select, select#sidebarLangSelect").forEach(function (select) {
            select.value = language;
        });
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", applyTranslations);
    } else {
        applyTranslations();
    }
})();
