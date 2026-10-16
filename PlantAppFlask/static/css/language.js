(function () {
  const language = document.documentElement.lang || 'en';
  const translations = {
    en: {schemesNav:'Government Schemes',languageLabel:'🌐 Language',home:'Home',diagnosis:'AI Diagnosis',chat:'Plant Doctor',history:'History',about:'About App',logout:'Logout',
      pageTitle:'Government Schemes for Farmers',pageIntro:'Explore agricultural support schemes and open their official portals for the latest eligibility and application details.',
      official:'Official website',details:'Check eligibility and current application status on the official portal.',
      disclaimer:'Scheme availability, eligibility, benefits and application windows may change. Confirm the latest details on the official government portal before applying.',
      'Your Smart Plant Health Companion':'Your Smart Plant Health Companion','Get Started':'Get Started','Key Features':'Key Features','Quick Scan':'Quick Scan','Capture or upload leaf images for instant analysis and Detection.':'Capture or upload leaf images for instant analysis and detection.','AI Detection':'AI Detection','Advanced AI identifies diseases with 95% accuracy':'Advanced AI identifies diseases with 95% accuracy','Smart Remedies':'Smart Remedies','AI-powered treatment suggestions':'AI-powered treatment suggestions','Track Progress':'Track Progress','Monitor plant recovery':'Monitor plant recovery','How It Works':'How It Works','Why Choose PlantCare AI?':'Why Choose PlantCare AI?','Quick & Accurate Diagnosis':'Quick & Accurate Diagnosis','Comprehensive Disease Database':'Comprehensive Disease Database','Eco-Friendly':'Eco-Friendly','Save Money':'Save Money','Plant Diagnosis':'Plant Diagnosis','Select or capture a plant image':'Select or capture a plant image','Take Photo':'Take Photo','Upload from Gallery':'Upload from Gallery','Start AI Analysis':'Start AI Analysis','Diagnosis Results':'Diagnosis Results','Plant Name':'Plant Name','Disease Detected':'Disease Detected','Confidence':'Confidence','Precautions to be Followed':'Precautions to be Followed','Organic Manures':'Organic Manures','Inorganic Manures':'Inorganic Manures','Chat with Plant Doctor':'Chat with Plant Doctor','Diagnose Another Plant':'Diagnose Another Plant','About PlantCare AI':'About PlantCare AI','Your Comprehensive Plant Health Guide':'Your Comprehensive Plant Health Guide','Start a New Scan':'Start a New Scan'},
    hi: {schemesNav:'सरकारी योजनाएँ',languageLabel:'🌐 भाषा चुनें',home:'होम',diagnosis:'एआई निदान',chat:'प्लांट डॉक्टर',history:'इतिहास',about:'ऐप के बारे में',logout:'लॉग आउट',
      pageTitle:'किसानों के लिए सरकारी योजनाएँ',pageIntro:'कृषि सहायता योजनाएँ देखें और पात्रता तथा आवेदन की नवीनतम जानकारी के लिए आधिकारिक पोर्टल खोलें।',
      official:'आधिकारिक वेबसाइट',details:'पात्रता और आवेदन की वर्तमान स्थिति आधिकारिक पोर्टल पर जाँचें।',
      disclaimer:'योजनाओं की उपलब्धता, पात्रता, लाभ और आवेदन की अवधि बदल सकती है। आवेदन करने से पहले आधिकारिक सरकारी पोर्टल पर नवीनतम जानकारी की पुष्टि करें।'},
    mr: {schemesNav:'शासकीय योजना',languageLabel:'🌐 भाषा निवडा',home:'मुख्यपृष्ठ',diagnosis:'एआय निदान',chat:'प्लांट डॉक्टर',history:'इतिहास',about:'अ‍ॅपबद्दल',logout:'बाहेर पडा',
      pageTitle:'शेतकऱ्यांसाठी शासकीय योजना',pageIntro:'कृषी सहाय्य योजना पाहा आणि पात्रता व अर्जाच्या नवीन माहितीसाठी अधिकृत पोर्टल उघडा.',
      official:'अधिकृत वेबसाइट',details:'पात्रता आणि अर्जाची सध्याची स्थिती अधिकृत पोर्टलवर तपासा.',
      disclaimer:'योजनांची उपलब्धता, पात्रता, लाभ आणि अर्जाचा कालावधी बदलू शकतो. अर्ज करण्यापूर्वी अधिकृत सरकारी पोर्टलवरील नवीन माहिती तपासा.',
      'Your Smart Plant Health Companion':'तुमचा स्मार्ट वनस्पती आरोग्य साथीदार','Get Started':'सुरू करा','Key Features':'मुख्य वैशिष्ट्ये','Quick Scan':'जलद स्कॅन','Capture or upload leaf images for instant analysis and Detection.':'त्वरित विश्लेषणासाठी पानाचा फोटो काढा किंवा अपलोड करा.','AI Detection':'एआय निदान','Advanced AI identifies diseases with 95% accuracy':'प्रगत एआय रोग ओळखण्यास मदत करते.','Smart Remedies':'स्मार्ट उपाय','AI-powered treatment suggestions':'एआय आधारित उपचार सूचना','Track Progress':'प्रगतीचा मागोवा घ्या','Monitor plant recovery':'वनस्पतीच्या पुनर्प्राप्तीवर लक्ष ठेवा','How It Works':'हे कसे कार्य करते','Why Choose PlantCare AI?':'PlantCare AI का निवडावे?','Quick & Accurate Diagnosis':'जलद आणि अचूक निदान','Comprehensive Disease Database':'रोगांचा विस्तृत डेटाबेस','Eco-Friendly':'पर्यावरणपूरक','Save Money':'पैसे वाचवा','Plant Diagnosis':'वनस्पती निदान','Select or capture a plant image':'वनस्पतीचा फोटो निवडा किंवा काढा','Take Photo':'फोटो काढा','Upload from Gallery':'गॅलरीमधून अपलोड करा','Start AI Analysis':'एआय विश्लेषण सुरू करा','Diagnosis Results':'निदानाचे परिणाम','Plant Name':'वनस्पतीचे नाव','Disease Detected':'आढळलेला रोग','Confidence':'विश्वास पातळी','Precautions to be Followed':'घ्यावयाची काळजी','Organic Manures':'सेंद्रिय खते','Inorganic Manures':'रासायनिक खते','Chat with Plant Doctor':'प्लांट डॉक्टरशी बोला','Diagnose Another Plant':'दुसऱ्या वनस्पतीचे निदान करा','About PlantCare AI':'PlantCare AI बद्दल','Your Comprehensive Plant Health Guide':'वनस्पती आरोग्यासाठी तुमचे संपूर्ण मार्गदर्शक','Start a New Scan':'नवीन स्कॅन सुरू करा'}
  };
  const dict = translations[language] || translations.en;
  window.changeLanguage = function(value) {
    if (!['en','hi','mr'].includes(value)) value = 'en';
    window.location.href = '/set-language/' + value;
  };
  const nav = [['a[href="/home"] span','home'],['a[href="/diagnosis"] span','diagnosis'],['a[href="/chat"] span','chat'],['a[href="/history"] span','history'],['a[href="/about"] span','about'],['a[onclick="handleLogout()"] span','logout']];
  nav.forEach(([selector,key]) => { const el=document.querySelector('.sidebar-menu '+selector); if(el && dict[key]) el.textContent=dict[key]; });
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  const nodes = [];
  while (walker.nextNode()) nodes.push(walker.currentNode);
  nodes.forEach(node => {
    const original = node.nodeValue.trim();
    if (original && dict[original]) node.nodeValue = node.nodeValue.replace(original, dict[original]);
  });
  document.querySelectorAll('[data-i18n], [data-scheme-i18n]').forEach(el => {
    const key=el.getAttribute('data-i18n') || el.getAttribute('data-scheme-i18n');
    if(dict[key]) el.textContent=dict[key];
  });
})();