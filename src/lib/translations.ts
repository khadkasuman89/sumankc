export type Lang = "en" | "ne";

export const content = {
  en: {
    langLabel: "नेपाली",
    nav: {
      home: "Home",
      about: "About",
      experience: "Experience",
      gallery: "Gallery",
      education: "Education",
      research: "Research",
      contact: "Contact",
      hire: "Hire Me",
      menu: "Toggle menu",
    },
    hero: {
      badge: "Gazetted Class III · Civil Engineer",
      firstName: "Er. Suman",
      lastName: "Khadka",
      summary:
        "Government engineer and M.Sc. in Construction Management with 7+ years of experience in public infrastructure delivery, procurement, contract administration, and construction supervision.",
      collaborate: "Collaborate",
      downloadCv: "Download CV",
      stats: [
        { label: "Experience", value: "7+ years" },
        { label: "NEC", value: "20971 Civil A" },
        { label: "M.Sc.", value: "CGPA 3.77" },
      ],
      govt: "Government of Nepal",
      govtSub: "Public Infrastructure · Nepal",
      explore: "Explore career",
      portraitAlt: "Er. Suman Khadka — Civil Engineer, Government of Nepal",
    },
    about: {
      eyebrow: "About Me",
      title: "Engineering rooted in research & rigor",
      p1a: "Er. Suman Khadka",
      p1b: "is a Civil Engineer serving the",
      p1c: "Government of Nepal",
      p1d: ". His work centers on infrastructure delivery, especially water supply and sewerage projects, with responsibility for contract administration, construction supervision, procurement review, IPC payments, completion certification, and quality assurance.",
      p2: "With more than seven years of professional practice, he combines field engineering with research in public procurement policy and contractor performance. He earned an M.Sc. in Construction Management from Mid-West University with distinction (CGPA 3.77) and a B.E. in Civil Engineering from Pulchowk Campus with 79.65%.",
      p3a: "His practice blends AutoCAD, Civil 3D, ETABS, SketchUp, Smart Road, and MS Office with procurement management, BOQ preparation, quality verification, stakeholder coordination, and regulatory decision-making. Happily married to",
      p3b: "Mrs. Baneeka Thapa Khadka",
      info: {
        home: { label: "Home", value: "Myanglung, Terhathum, Koshi Province" },
        position: { label: "Position", value: "Gazetted (Class III), Engineer (Civil)" },
        email: { label: "Email" },
        officialEmail: { label: "Official Email" },
        spouse: { label: "Spouse", value: "Mrs. Baneeka Thapa Khadka" },
      },
    },
    experience: {
      eyebrow: "Experience",
      title: "Professional Journey",
      items: [
        {
          org: "Government of Nepal",
          role: "Gazetted (Class III), Engineer (Civil)",
          period: "2079 BS – Present",
          bullets: [
            "Contract administration and construction supervision for water supply and sewerage infrastructure",
            "Procurement documents, IPC payments and completion certification under World Bank/ADB Small Works standards",
            "Quality assurance including concrete cube testing and NDT protocols",
          ],
        },
        {
          org: "Myanglung Municipality",
          role: "Civil Engineer",
          period: "2076 – 2079 BS",
          bullets: [
            "Led the municipality’s technical department in Terhathum",
            "Planning, design, municipal drawing approval, cost estimation and valuation of civil works",
          ],
        },
        {
          org: "Design Core Systems Pvt. Ltd.",
          role: "Civil Engineer",
          period: "2075 – 2076 BS",
          bullets: [
            "Drainage design and analysis for land development projects across cities in the United States",
            "Estimation and quantity surveying for traffic, storm sewer, roads, hydraulic and sanitary sewer projects",
          ],
        },
        {
          org: "Himalayan Prefab Pvt. Ltd.",
          role: "Civil Engineer",
          period: "2075 Bhadra – Falgun",
          bullets: [
            "Design and analysis of steel and prefab structures",
            "Site supervision, coordination, cost estimates and BOQ preparation",
          ],
        },
      ],
    },
    research: {
      eyebrow: "Research",
      title: "Published research",
      papers: [
        {
          title:
            "A Study on Bidding Trend and Performance of Construction Projects: A Case Study of Water Supply Projects in Koshi Province, Nepal",
          journal:
            "International Journal on Engineering Technology and Infrastructure Development 2(2):197–211 · June 2026",
          authors: "Suman Khadka",
        },
        {
          title:
            "Evaluation of Factors Causing Cost Variation in Construction of Water Supply Projects in Nepal",
          journal:
            "Mid-West University Journal of Engineering & Innovation 1:119–135 · December 2025",
          authors: "Suman Khadka",
        },
        {
          title:
            "Ranking of Public Bus Alternatives Using Hybrid Multi-Criteria Decision Making Approach Under Fuzzy Environment: A Case Study of Kathmandu",
          journal: "MAT Journal of Transportation Systems · October 2018",
          authors:
            "Anil Marsani, Subid Ghimire, Saurav Parajuli, Suman Khadka and others (7 authors)",
        },
      ],
    },
    skills: {
      eyebrow: "Skills",
      title: "Tools & expertise",
      groups: [
        {
          title: "Engineering Software",
          items: ["AutoCAD", "Civil 3D", "ETABS", "SAP2000", "HEC-RAS", "SketchUp", "Smart Road"],
        },
        {
          title: "Technical Skills",
          items: [
            "Contract Administration",
            "Procurement & Bid Evaluation",
            "Construction Supervision",
            "Quality Assurance",
            "Project Management",
            "Civil Engineering Design",
            "Quantity Surveying",
            "Cost Estimation",
          ],
        },
        {
          title: "Web & Computer",
          items: ["Website Design", "Web Hosting", "HTML / CSS", "Practical AI Tools", "MS Office"],
        },
      ],
    },
    education: {
      eyebrow: "Education",
      title: "Academic background",
      items: [
        {
          school: "Tribhuvan University, Nepal",
          program: "LL.B. (3-year) · Faculty of Law",
          score: "2083 BS · Ongoing",
        },
        {
          school: "Mid-West University, Surkhet",
          program: "M.Sc. in Construction Management · School of Engineering",
          score: "2083 BS · Distinction · CGPA 3.77",
        },
        {
          school: "Pulchowk Engineering Campus, IOE",
          program: "B.E. Civil Engineering · Tribhuvan University, IOE",
          score: "2075 BS · First · 79.65%",
        },
        { school: "Pinnacle Academy", program: "+2 Science · HSEB", score: "2071 BS · Distinction · 84.10%" },
        { school: "Singha Bahini S.S.", program: "SLC", score: "2068 BS · First Division" },
      ],
    },
    gallery: {
      eyebrow: "Gallery",
      title: "Moments & memories",
      description: "A glimpse into life beyond engineering.",
      viewAll: (n: number) => `View all ${n} photos`,
      showFewer: "Show fewer photos",
      captions: [
        "Official Portrait",
        "With Mrs. Baneeka Thapa Khadka",
        "Wedding Ceremony",
        "Engagement Portrait",
        "Together in Nepal",
        "Ceremonial Event",
        "Project Team",
        "Phewa Lake, Pokhara",
        "Mustang Highlands",
        "Traditional Thakali Attire",
        "Family at Buddha Park",
        "Family Pilgrimage",
        "Hillside Tea Gardens",
        "Lakeside Retreat",
        "On the Highway",
      ],
    },
    contact: {
      eyebrow: "Contact",
      title: "Let's build something solid",
      description: "Open to consulting, structural design, and research collaborations.",
      email: "Email",
      officialEmail: "Official Email",
      phone: "Phone",
      location: "Location",
      locationValue: "Itahari, Sunsari, Nepal",
      mapTitle: "Map of Itahari, Sunsari, Nepal",
      name: "Name",
      namePlaceholder: "Your full name",
      emailPlaceholder: "you@example.com",
      subject: "Subject",
      subjectPlaceholder: "Project inquiry",
      message: "Message",
      messagePlaceholder: "Tell me about your project…",
      send: "Send Message",
      sending: "Sending…",
      success: "Message sent — I'll get back to you soon!",
      errors: {
        name: "Name is required",
        email: "Invalid email",
        subject: "Subject required",
        message: "Message too short",
        generic: "Please check the form",
      },
    },
    footer: {
      name: "Er. Suman Khadka",
      tagline: "Gazetted Civil Engineer · Myanglung, Terhathum, Nepal",
      rights: "All rights reserved.",
    },
  },
  ne: {
    langLabel: "English",
    nav: {
      home: "गृहपृष्ठ",
      about: "परिचय",
      experience: "अनुभव",
      gallery: "तस्बिर संग्रह",
      education: "शिक्षा",
      research: "अनुसन्धान",
      contact: "सम्पर्क",
      hire: "सम्पर्क गर्नुहोस्",
      menu: "मेनु खोल्नुहोस्",
    },
    hero: {
      badge: "राजपत्रांकित तृतीय श्रेणी · सिविल इन्जिनियर",
      firstName: "इ. सुमन",
      lastName: "खड्का",
      summary:
        "निर्माण व्यवस्थापनमा स्नातकोत्तर गरेका सरकारी इन्जिनियर, सार्वजनिक पूर्वाधार निर्माण, खरिद प्रक्रिया, ठेक्का प्रशासन तथा निर्माण सुपरिवेक्षणमा ७ वर्षभन्दा बढी अनुभव।",
      collaborate: "सहकार्य गरौं",
      downloadCv: "सी.भी. डाउनलोड",
      stats: [
        { label: "अनुभव", value: "७+ वर्ष" },
        { label: "ने.इ.प.", value: "२०९७१ सिविल ए" },
        { label: "स्नातकोत्तर", value: "सी.जी.पी.ए. ३.७७" },
      ],
      govt: "नेपाल सरकार",
      govtSub: "सार्वजनिक पूर्वाधार · नेपाल",
      explore: "पेशागत यात्रा हेर्नुहोस्",
      portraitAlt: "इ. सुमन खड्का — सिविल इन्जिनियर, नेपाल सरकार",
    },
    about: {
      eyebrow: "मेरो परिचय",
      title: "अनुसन्धान र अनुशासनमा आधारित इन्जिनियरिङ",
      p1a: "इ. सुमन खड्का",
      p1b: "सिविल इन्जिनियर हुनुहुन्छ र",
      p1c: "नेपाल सरकार",
      p1d: " मा कार्यरत छन्। उनको कार्यक्षेत्र पूर्वाधार निर्माण, विशेषतः खानेपानी तथा ढल व्यवस्थापन आयोजनामा केन्द्रित छ, जसमा ठेक्का प्रशासन, निर्माण सुपरिवेक्षण, खरिद पुनरावलोकन, चालु भुक्तानी (IPC), कार्य सम्पन्न प्रमाणीकरण तथा गुणस्तर सुनिश्चितता समावेश छन्।",
      p2: "सात वर्षभन्दा बढी पेशागत अनुभवसँगै उनले क्षेत्रगत इन्जिनियरिङलाई सार्वजनिक खरिद नीति र निर्माण व्यवसायीको कार्यसम्पादनसम्बन्धी अनुसन्धानसँग जोडेका छन्। उनले मिड-वेस्ट युनिभर्सिटीबाट निर्माण व्यवस्थापनमा स्नातकोत्तर (विशिष्ट श्रेणी, सी.जी.पी.ए. ३.७७) तथा पुल्चोक क्याम्पसबाट सिविल इन्जिनियरिङमा स्नातक (७९.६५%) उत्तीर्ण गरेका छन्।",
      p3a: "उनको कार्यशैलीमा AutoCAD, Civil 3D, ETABS, SketchUp, Smart Road र MS Office सँगै खरिद व्यवस्थापन, लागत अनुमान (BOQ), गुणस्तर परीक्षण, सरोकारवाला समन्वय तथा नियमनकारी निर्णय क्षमता समावेश छ। उनको विवाह",
      p3b: "श्रीमती बनिका थापा खड्का",
      info: {
        home: { label: "घर", value: "म्याङलुङ, तेह्रथुम, कोशी प्रदेश" },
        position: { label: "पद", value: "राजपत्रांकित तृतीय श्रेणी, इन्जिनियर (सिविल)" },
        email: { label: "इमेल" },
        officialEmail: { label: "कार्यालय इमेल" },
        spouse: { label: "श्रीमती", value: "श्रीमती बनिका थापा खड्का" },
      },
    },
    experience: {
      eyebrow: "अनुभव",
      title: "पेशागत यात्रा",
      items: [
        {
          org: "नेपाल सरकार",
          role: "राजपत्रांकित तृतीय श्रेणी, इन्जिनियर (सिविल)",
          period: "२०७९ साल – हालसम्म",
          bullets: [
            "खानेपानी तथा ढल पूर्वाधारको ठेक्का प्रशासन र निर्माण सुपरिवेक्षण",
            "विश्व बैंक/एडीबी स्मल वर्क्स मापदण्ड अनुसार खरिद कागजात, चालु भुक्तानी तथा कार्य सम्पन्न प्रमाणीकरण",
            "कंक्रिट क्यूब परीक्षण तथा एन.डी.टी. सहितको गुणस्तर सुनिश्चितता",
          ],
        },
        {
          org: "म्याङलुङ नगरपालिका",
          role: "सिविल इन्जिनियर",
          period: "२०७६ – २०७९ साल",
          bullets: [
            "तेह्रथुमस्थित नगरपालिकाको प्राविधिक शाखाको नेतृत्व",
            "योजना, डिजाइन, नक्सा स्वीकृति, लागत अनुमान तथा निर्माण कार्यको मूल्यांकन",
          ],
        },
        {
          org: "डिजाइन कोर सिस्टम्स प्रा. लि.",
          role: "सिविल इन्जिनियर",
          period: "२०७५ – २०७६ साल",
          bullets: [
            "अमेरिकाका विभिन्न सहरमा भूमि विकास आयोजनाका ढल निकास डिजाइन तथा विश्लेषण",
            "ट्राफिक, स्टर्म सिवर, सडक, हाइड्रोलिक तथा स्यानिटरी सिवर आयोजनाको लागत अनुमान र परिमाण सर्वेक्षण",
          ],
        },
        {
          org: "हिमालयन प्रिफ्याब प्रा. लि.",
          role: "सिविल इन्जिनियर",
          period: "२०७५ भदौ – फागुन",
          bullets: [
            "स्टिल तथा प्रिफ्याब संरचनाको डिजाइन र विश्लेषण",
            "साइट सुपरिवेक्षण, समन्वय, लागत अनुमान तथा बी.ओ.क्यू. तयारी",
          ],
        },
      ],
    },
    research: {
      eyebrow: "अनुसन्धान",
      title: "प्रकाशित अनुसन्धान",
      papers: [
        {
          title:
            "निर्माण आयोजनाको बोलपत्र प्रवृत्ति तथा कार्यसम्पादनको अध्ययन: कोशी प्रदेश, नेपालका खानेपानी आयोजनाको केस स्टडी",
          journal:
            "इन्टरनेशनल जर्नल अन इन्जिनियरिङ टेक्नोलोजी एन्ड इन्फ्रास्ट्रक्चर डेभलपमेन्ट २(२):१९७–२११ · जुन २०२६",
          authors: "सुमन खड्का",
        },
        {
          title:
            "नेपालमा खानेपानी आयोजना निर्माणमा लागत भिन्नता ल्याउने कारकतत्वको मूल्यांकन",
          journal:
            "मिड-वेस्ट युनिभर्सिटी जर्नल अफ इन्जिनियरिङ एन्ड इनोभेशन १:११९–१३५ · डिसेम्बर २०२५",
          authors: "सुमन खड्का",
        },
        {
          title:
            "फजी वातावरणमा हाइब्रिड बहु-मापदण्ड निर्णय विधिद्वारा सार्वजनिक बस विकल्पको श्रेणीकरण: काठमाडौंको केस स्टडी",
          journal: "म्याट जर्नल अफ ट्रान्सपोर्टेशन सिस्टम्स · अक्टोबर २०१८",
          authors:
            "अनिल मर्सनी, सुबिद घिमिरे, सौरभ पराजुली, सुमन खड्का सहित (७ लेखक)",
        },
      ],
    },
    skills: {
      eyebrow: "सीप",
      title: "उपकरण तथा दक्षता",
      groups: [
        {
          title: "इन्जिनियरिङ सफ्टवेयर",
          items: ["AutoCAD", "Civil 3D", "ETABS", "SAP2000", "HEC-RAS", "SketchUp", "Smart Road"],
        },
        {
          title: "प्राविधिक सीप",
          items: [
            "ठेक्का प्रशासन",
            "खरिद तथा बोलपत्र मूल्यांकन",
            "निर्माण सुपरिवेक्षण",
            "गुणस्तर सुनिश्चितता",
            "आयोजना व्यवस्थापन",
            "सिविल इन्जिनियरिङ डिजाइन",
            "परिमाण सर्वेक्षण",
            "लागत अनुमान",
          ],
        },
        {
          title: "वेब तथा कम्प्युटर",
          items: ["वेबसाइट डिजाइन", "वेब होस्टिङ", "HTML / CSS", "व्यवहारिक ए.आई. उपकरण", "MS Office"],
        },
      ],
    },
    education: {
      eyebrow: "शिक्षा",
      title: "शैक्षिक पृष्ठभूमि",
      items: [
        {
          school: "त्रिभुवन विश्वविद्यालय, नेपाल",
          program: "कानून स्नातक (३ वर्ष) · कानून संकाय",
          score: "२०८३ साल · अध्ययनरत",
        },
        {
          school: "मिड-वेस्ट युनिभर्सिटी, सुर्खेत",
          program: "निर्माण व्यवस्थापनमा स्नातकोत्तर · इन्जिनियरिङ स्कूल",
          score: "२०८३ साल · विशिष्ट श्रेणी · सी.जी.पी.ए. ३.७७",
        },
        {
          school: "पुल्चोक इन्जिनियरिङ क्याम्पस, आई.ओ.ई.",
          program: "सिविल इन्जिनियरिङ स्नातक · त्रिभुवन विश्वविद्यालय",
          score: "२०७५ साल · प्रथम श्रेणी · ७९.६५%",
        },
        { school: "पिनाकल एकेडेमी", program: "+२ विज्ञान · एच.एस.ई.बी.", score: "२०७१ साल · विशिष्ट श्रेणी · ८४.१०%" },
        { school: "सिंहबाहिनी मा.वि.", program: "एस.एल.सी.", score: "२०६८ साल · प्रथम श्रेणी" },
      ],
    },
    gallery: {
      eyebrow: "तस्बिर संग्रह",
      title: "क्षणहरू र सम्झना",
      description: "इन्जिनियरिङ बाहिरको जीवनको एक झलक।",
      viewAll: (n: number) => `सबै ${n} तस्बिर हेर्नुहोस्`,
      showFewer: "कम तस्बिर देखाउनुहोस्",
      captions: [
        "आधिकारिक तस्बिर",
        "श्रीमती बनिका थापा खड्कासँग",
        "विवाह समारोह",
        "विवाह पूर्व तस्बिर",
        "नेपालमा सँगै",
        "समारोहमा",
        "आयोजना टिम",
        "फेवा ताल, पोखरा",
        "मुस्ताङ हिमाली क्षेत्र",
        "परम्परागत थकाली पहिरन",
        "बुद्ध पार्कमा परिवारसँग",
        "पारिवारिक तीर्थयात्रा",
        "पहाडी चिया बगान",
        "तालको किनारमा",
        "राजमार्गमा",
      ],
    },
    contact: {
      eyebrow: "सम्पर्क",
      title: "सँगै केही ठोस निर्माण गरौं",
      description: "परामर्श, संरचनात्मक डिजाइन तथा अनुसन्धान सहकार्यका लागि उपलब्ध।",
      email: "इमेल",
      officialEmail: "कार्यालय इमेल",
      phone: "फोन",
      location: "स्थान",
      locationValue: "इटहरी, सुनसरी, नेपाल",
      mapTitle: "इटहरी, सुनसरी, नेपालको नक्सा",
      name: "नाम",
      namePlaceholder: "तपाईंको पूरा नाम",
      emailPlaceholder: "you@example.com",
      subject: "विषय",
      subjectPlaceholder: "आयोजना सम्बन्धी जिज्ञासा",
      message: "सन्देश",
      messagePlaceholder: "तपाईंको आयोजनाबारे लेख्नुहोस्…",
      send: "सन्देश पठाउनुहोस्",
      sending: "पठाउँदै…",
      success: "सन्देश पठाइयो — छिट्टै सम्पर्क गर्नेछु!",
      errors: {
        name: "नाम आवश्यक छ",
        email: "इमेल मिलेन",
        subject: "विषय आवश्यक छ",
        message: "सन्देश धेरै छोटो छ",
        generic: "कृपया फारम जाँच्नुहोस्",
      },
    },
    footer: {
      name: "इ. सुमन खड्का",
      tagline: "राजपत्रांकित सिविल इन्जिनियर · म्याङलुङ, तेह्रथुम, नेपाल",
      rights: "सर्वाधिकार सुरक्षित।",
    },
  },
} as const;

export type Dict = (typeof content)["en"];
