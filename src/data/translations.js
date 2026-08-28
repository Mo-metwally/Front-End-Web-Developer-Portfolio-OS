import HawashImg from '../assets/hawash.avif';
import JawlahImg from '../assets/jawlahsa.avif';
import TrendlineImg from '../assets/trendlineeg.avif';

export const TRANSLATIONS = {
  en: {
    // TopBar & System
    brandSubtitle: "Portfolio OS",
    liveChat: "Live Chat",
    langCode: "ع",
    langTitle: "التبديل إلى العربية",
    themeDark: "Switch to Light Mode",
    themeLight: "Switch to Dark Mode",
    resetLayout: "Reset Windows Layout",
    notifications: "Notifications",
    spotlight: "Spotlight Search (⌘K)",
    systemLocked: "Workspace Locked",
    
    // Menus
    menus: {
      aboutMe: "About me",
      file: "File",
      edit: "Edit",
      view: "View",
      window: "Window",
      help: "Help"
    },
    menuItems: {
      aboutMohamed: "About Mohamed Metwally",
      viewCerts18: "View 18 Verified Certificates",
      systemResume: "System Settings / Resume",
      lockWorkspace: "Lock Workspace",
      restartOS: "Restart Portfolio OS",
      newTerminal: "New Terminal Window",
      openAbout: "Open About Me",
      viewProjects: "View Projects",
      resetLayout: "Reset Windows Layout",
      copyBio: "Copy Bio Summary",
      copyEmail: "Copy Email Address",
      spotlightSearch: "Spotlight Search",
      notificationsPanel: "Notifications Panel",
      switchTheme: "Switch Theme",
      focusHome: "Focus Home Window",
      certificationsNanodegrees: "Certificates & Nanodegrees",
      showAllWindows: "Show All Windows",
      openContact: "Open Contact Form",
      openExperience: "Open Experience & Career",
      openNotes: "Open Notes & Resume"
    },

    // Desktop Icons
    desktopIcons: {
      home: "Home",
      certificates: "Certificates",
      about: "About me",
      experience: "Experience",
      projects: "Projects"
    },

    // Window Titles
    windowTitles: {
      home: "Home",
      about: "About me",
      certificates: "Certificates & Nanodegrees (18)",
      projects: "Projects & Systems",
      clients: "Experience & Career",
      terminal: "Terminal — zsh",
      contact: "New Message — Contact Mohamed",
      notes: "Notes & Resume"
    },

    // Home Window
    home: {
      tag: "PROFESSIONAL PROFILE",
      role: "Front-End Web Developer",
      roleHighlight: "Solid Back-End Background",
      summary: "A highly motivated and detail-oriented Front-End Developer with extensive experience in building dynamic, responsive, and scalable web applications using Next.js, React.js, GSAP, and Tailwind CSS. Possessing a solid background in Back-End development, bridging the gap between user-centric interfaces and robust server-side functionality.",
      viewProjects: "View Projects",
      getInTouch: "Get in Touch",
      verifiedCredentials: "18 Verified Credentials",
      credentialsDesc: "Meta Specialization, IBM React, and Udacity Nanodegrees.",
      viewCertificates: "View Certificates →",
      stats: {
        projects: "13+ Projects",
        projectsDesc: "Full-Stack & Front-End",
        experience: "3+ Years",
        experienceDesc: "Professional Production",
        education: "B.Sc C.I.S",
        educationDesc: "Alexandria University"
      }
    },

    // About Window
    about: {
      tag: "ABOUT THE DEVELOPER",
      heading: "Building high-performance, refined web applications.",
      educationHeading: "Education & Foundation",
      degree: "Bachelor of Science in Computer & Information Systems (C.I.S)",
      university: "Faculty of Specific Education — Alexandria University (2018–2022)",
      experienceHeading: "Technical Experience & Skills Matrix",
      uiuxHeading: "UI/UX Design",
      frontendHeading: "Front-End Development",
      levels: {
        experienced: "Experienced",
        intermediate: "Intermediate",
        basic: "Basic"
      },
      philosophyHeading: "Engineering Philosophy",
      p1: "Performance First: Optimized bundle size, semantic HTML5, zero-layout-shift.",
      p2: "Component Modularity: Clean, maintainable architectures with TypeScript & React.",
      p3: "Cross-Platform Precision: Pixel-perfect fidelity across ultra-wide, desktop, tablet, and mobile."
    },

    // Certificates Window
    certificates: {
      tag: "VERIFIED CREDENTIALS",
      heading: "18 Verified Certificates & Nanodegrees",
      subtitle: "Certified across Meta, IBM, Udacity, and Advanced Web Engineering curriculums.",
      searchPlaceholder: "Search certificates, issuers, or skills...",
      backBtn: "← Back to Certificates",
      all: "All",
      meta: "Meta",
      udacity: "Udacity",
      ibm: "IBM",
      frontend: "Front-End",
      openPdf: "Open / Download PDF",
      verifiedBy: "Verified Issuer",
      completionDate: "Date of Completion",
      skillsGained: "Skills & Proficiencies",
      viewCertificate: "View Certificate →"
    },

    // Projects Window
    projects: {
      tag: "SELECTED WORKS",
      heading: "13 Production Platforms & Client Systems",
      subtitle: "Full-stack web applications, e-commerce engines, legal portals, and enterprise dashboards.",
      searchPlaceholder: "Search projects by title, tech stack, or client...",
      all: "All (13)",
      liveSite: "Visit Live Platform",
      myRole: "Role",
      techStack: "Tech Stack",
      year: "Year"
    },

    // Experience / Clients Window
    experience: {
      tag: "CAREER & TRACK RECORD",
      heading: "Professional Experience & Background",
      subtitle: "Building production front-end systems, responsive web applications, and scalable client platforms.",
      educationTitle: "Education",
      certificationsTitle: "Certifications & Nanodegrees",
      missanRole: "Front-End Web Developer",
      missanCompany: "Missan Elmaharya for Information Technology",
      missanDate: "March 2022 – Present",
      missanType: "Full-Time",
      missanDesc: "Spearheaded the development and deployment of multiple web projects from conception to production. Optimized web applications to significantly enhance overall site performance, accessibility, and user experience.",
      missanHighlights: [
        "Multi-project deployment lifecycle",
        "Cross-functional planning & code reviews",
        "Speed & Accessibility optimizations"
      ],
      freelanceRole: "Front-End Developer & UI Designer",
      freelanceCompany: "Freelance & Self-Employed",
      freelanceDate: "March 2022 – Present",
      freelanceType: "Remote / Contract",
      freelanceDesc: "Designed, developed, and maintained custom, highly responsive websites and web applications for diverse global and regional clients using Next.js, React.js, Tailwind, and Bootstrap.",
      freelanceHighlights: [
        "Custom client web platforms",
        "Scalable responsive architectures",
        "Exceeding client delivery deadlines"
      ]
    },

    // Contact Window
    contact: {
      tag: "NEW MESSAGE",
      heading: "Get in Touch",
      subtitle: "Reach out directly regarding front-end engineering roles, web development projects, or freelance inquiries.",
      yourName: "Your Name",
      yourEmail: "Your Email",
      subject: "Subject",
      message: "Message",
      namePlaceholder: "John Doe",
      emailPlaceholder: "john@company.com",
      subjectPlaceholder: "Web Development / Front-End Project",
      messagePlaceholder: "Hi Mohamed, I'd like to discuss...",
      sendMessage: "Send Message",
      sending: "Sending Message...",
      sentSuccess: "Message Dispatched via EmailJS!",
      directTitle: "DIRECT CONTACT INFO",
      location: "Alexandria, Egypt"
    },

    // Terminal Window
    terminal: {
      welcome: "Mohamed Metwally — Portfolio OS CLI v2.6.0\nType 'help' to inspect available shell commands.",
      prompt: "guest@metwally-os:~$",
      placeholder: "Type a command (help, about, skills, projects, certs, clear, contact)..."
    },

    // Notes Window
    notes: {
      tag: "SYSTEM NOTES",
      heading: "Notes & Resume Records",
      resumeDownload: "Download PDF Resume"
    },

    // Right Sidebar
    sidebar: {
      onLinkedIn: "ON LINKEDIN",
      viewProfile: "View profile",
      portfolioHighlights: "PORTFOLIO HIGHLIGHTS",
      shortcuts: "SHORTCUTS",
      devEnv: "Dev Environment",
      activeSession: "1 active session",
      location: "Alexandria",
      connectSocial: "CONNECT & SOCIAL",
      linkedInPosts: [
        {
          id: "post-1",
          title: "Hawash Law Firm full-stack platform built with Next.js & Node.js...",
          timestamp: "MAY 2026",
          image: HawashImg,
          link: "https://hawashlawfirm.com/"
        },
        {
          id: "post-2",
          title: "Jawlah Games Platform edutainment portal with admin dashboard...",
          timestamp: "APRIL 2026",
          image: JawlahImg,
          link: "https://jawlahsa.com/"
        },
        {
          id: "post-3",
          title: "TrendLine E-Commerce platform scaling with modern tech stack...",
          timestamp: "JULY 2024",
          image: TrendlineImg,
          link: "https://trendlineeg.com/"
        }
      ],
      tips: [
        {
          id: "tip-1",
          tag: "CERTIFIED DEVELOPER",
          title: "18 Verified Credentials",
          subtitle: 'Meta Specialization, IBM React, and Udacity Nanodegrees.',
          actionText: "Open Certificates →",
          targetApp: "certificates"
        },
        {
          id: "tip-2",
          tag: "13 FEATURED PROJECTS",
          title: "Full-Stack & Front-End Systems",
          subtitle: "E-Commerce, Legal consulting, and Edutainment platforms.",
          actionText: "View Projects →",
          targetApp: "projects"
        },
        {
          id: "tip-3",
          tag: "CAREER & EXPERIENCE",
          title: "Missan Elmaharya & Freelance",
          subtitle: "Production web applications delivered with high performance.",
          actionText: "View Experience →",
          targetApp: "clients"
        }
      ]
    },

    // Mascot
    mascot: {
      welcome: "Hi! I'm your OS Assistant. Click any app or ask me anything!",
      openProjects: "Explore Projects",
      openContact: "Send Message"
    }
  },

  ar: {
    // TopBar & System
    brandSubtitle: "نظام بورتفوليو",
    liveChat: "محادثة مباشرة",
    langCode: "EN",
    langTitle: "Switch to English",
    themeDark: "التبديل إلى الوضع الفاتح",
    themeLight: "التبديل إلى الوضع الداكن",
    resetLayout: "إعادة ترتيب النوافذ",
    notifications: "الإشعارات",
    spotlight: "البحث السريع (⌘K)",
    systemLocked: "تم قفل مساحة العمل",
    
    // Menus
    menus: {
      aboutMe: "نبذة عني",
      file: "ملف",
      edit: "تعديل",
      view: "عرض",
      window: "نافذة",
      help: "مساعدة"
    },
    menuItems: {
      aboutMohamed: "عن محمد متولي",
      viewCerts18: "عرض 18 شهادة معتمدة",
      systemResume: "إعدادات النظام / السيرة الذاتية",
      lockWorkspace: "قفل مساحة العمل",
      restartOS: "إعادة تشغيل النظام",
      newTerminal: "نافذة موجه الأوامر (Terminal)",
      openAbout: "فتح نبذة عني",
      viewProjects: "عرض المشاريع",
      resetLayout: "إعادة ضبط مواقع النوافذ",
      copyBio: "نسخ النبذة التعريفية",
      copyEmail: "نسخ البريد الإلكتروني",
      spotlightSearch: "البحث السريع (Spotlight)",
      notificationsPanel: "لوحة الإشعارات",
      switchTheme: "تغيير الثيم",
      focusHome: "التركيز على نافذة الرئيسية",
      certificationsNanodegrees: "الشهادات والدرجات المهنية",
      showAllWindows: "إظهار كافة النوافذ",
      openContact: "فتح نموذج التواصل",
      openExperience: "فتح الخبرات والمسيرة المهنية",
      openNotes: "فتح الملاحظات والسيرة الذاتية"
    },

    // Desktop Icons
    desktopIcons: {
      home: "الرئيسية",
      certificates: "الشهادات",
      about: "نبذة عني",
      experience: "الخبرات",
      projects: "المشاريع"
    },

    // Window Titles
    windowTitles: {
      home: "الرئيسية",
      about: "نبذة عني",
      certificates: "الشهادات والدرجات المهنية (18)",
      projects: "المشاريع والأنظمة البرمجية",
      clients: "الخبرات والمسيرة المهنية",
      terminal: "الطرفية — zsh",
      contact: "رسالة جديدة — تواصل مع محمد",
      notes: "الملاحظات والسيرة الذاتية"
    },

    // Home Window
    home: {
      tag: "الملف المهني",
      role: "مطور واجهات أمامية (Front-End Web Developer)",
      roleHighlight: "خلفية قوية في الـ Back-End",
      summary: "مطور واجهات أمامية شغوف ومحترف بخبرة واسعة في بناء تطبيقات ويب تفاعلية وقابلة للتوسع بأعلى معايير الأداء باستخدام Next.js و React.js و GSAP و Tailwind CSS، مع خلفية تقنية متينة في تطوير الـ Back-End تربط بين تجربة المستخدم السلسة والأنظمة الخادمة القوية.",
      viewProjects: "تصفح المشاريع",
      getInTouch: "تواصل معي",
      verifiedCredentials: "18 شهادة مهنية معتمدة",
      credentialsDesc: "تخصص ميتا (Meta)، شهادات IBM React، ودرجات النانوديجري من يوداسيتي (Udacity).",
      viewCertificates: "عرض الشهادات ←",
      stats: {
        projects: "13+ مشروع",
        projectsDesc: "تطبيقات متكاملة وواجهات",
        experience: "3+ سنوات",
        experienceDesc: "خبرة إنتاجية عملية",
        education: "بكالوريوس C.I.S",
        educationDesc: "جامعة الإسكندرية"
      }
    },

    // About Window
    about: {
      tag: "عن المطور",
      heading: "بناء تطبيقات ويب فائقة الأداء بتصميم راقٍ.",
      educationHeading: "المؤهل الدراسي والتعليم",
      degree: "بكالوريوس حاسبات ونظم معلومات (C.I.S)",
      university: "جامعة الإسكندرية (2018–2022)",
      experienceHeading: "مصفوفة الخبرات والمهارات التقنية",
      uiuxHeading: "تصميم واجهات وتجربة المستخدم (UI/UX Design)",
      frontendHeading: "تطوير الواجهات الأمامية (Front-End Development)",
      levels: {
        experienced: "متقدم (Experienced)",
        intermediate: "متوسط (Intermediate)",
        basic: "مبتدئ (Basic)"
      },
      philosophyHeading: "فلسفة التطوير والهندسة البرمجية",
      p1: "الأداء أولاً: تحسين سرعة التحميل، كود دلالي سليم (Semantic HTML5)، وانعدام أي إزاحة تخطيطية.",
      p2: "معمارية معيارية: كود نظيف وقابل للصيانة وإعادة الاستخدام باستخدام React و JavaScript الحديثة.",
      p3: "دقة التجاوب: تجربة مستخدم متناسقة ومتقنة على كافة الشاشات وأجهزة الجوال والتابلت والديسكتوب."
    },

    // Certificates Window
    certificates: {
      tag: "الشهادات والاعتمادات",
      heading: "18 شهادة مهنية ودرجة نانوديجري معتمدة",
      subtitle: "شهادات عالمية معتمدة من Meta و IBM و Udacity ومبادرة مصر الرقمية (Egypt FWD).",
      searchPlaceholder: "ابحث في الشهادات، الجهات المانحة، أو المهارات...",
      backBtn: "← العودة إلى قائمة الشهادات",
      all: "الكل",
      meta: "Meta",
      udacity: "Udacity",
      ibm: "IBM",
      frontend: "واجهات أمامية",
      openPdf: "فتح / تحميل ملف PDF",
      verifiedBy: "الجهة المانحة",
      completionDate: "تاريخ الإنجاز",
      skillsGained: "المهارات المكتسبة",
      viewCertificate: "عرض الشهادة ←"
    },

    // Projects Window
    projects: {
      tag: "الأعمال والمشاريع",
      heading: "13 منصة برمجية وموقع عملاء في بيئة الإنتاج",
      subtitle: "منصات ومواقع مكاتب محاماة، متاجر إلكترونية، بوابات تعليمية وترفيهية، ولوحات تحكم.",
      searchPlaceholder: "ابحث في المشاريع حسب الاسم، التقنيات، أو العميل...",
      all: "الكل (13)",
      liveSite: "زيارة الموقع المباشر",
      myRole: "دوري في المشروع",
      techStack: "التقنيات المستخدمة",
      year: "السنة"
    },

    // Experience / Clients Window
    experience: {
      tag: "المسيرة والخبرات العملية",
      heading: "الخبرات المهنية وسجل الإنجازات",
      subtitle: "بناء وتطوير أنظمة واجهات متقدمة، تطبيقات تفاعلية، ومنصات عملاء قابلة للتوسع في بيئة الإنتاج.",
      educationTitle: "المؤهل الدراسي",
      certificationsTitle: "الشهادات والاعتمادات المعتمدة",
      missanRole: "مطور واجهات أمامية (Front-End Web Developer)",
      missanCompany: "شركة ميسان المهارية لتقنية المعلومات",
      missanDate: "مارس 2022 – حتى الآن",
      missanType: "دوام كامل (Full-Time)",
      missanDesc: "قيادة تطوير ونشر مشاريع ويب متعددة من مرحلة التخطيط وحتى بيئة الإنتاج الحية، مع تحسين كفاءة وسرعة استجابة التطبيقات وتجربة المستخدم.",
      missanHighlights: [
        "دورة حياة نشر مشاريع متعددة",
        "تخطيط تقني ومراجعة الأكواد",
        "تحسين الأداء ومعايير الوصول"
      ],
      freelanceRole: "مطور واجهات ومصمم UI حر (Freelance)",
      freelanceCompany: "عمل حر ومستقل (Freelance)",
      freelanceDate: "مارس 2022 – حتى الآن",
      freelanceType: "عن بُعد / تعاقد",
      freelanceDesc: "تصميم وتطوير مواقع وتطبيقات ويب مخصصة وسريعة التجاوب لعملاء إقليميين ودوليين باستخدام Next.js و React.js و Tailwind و Bootstrap.",
      freelanceHighlights: [
        "منصات ويب مخصصة للعملاء",
        "معماريات متجاوبة وقابلة للتوسع",
        "التسليم قبل المواعيد النهائية"
      ]
    },

    // Contact Window
    contact: {
      tag: "رسالة جديدة",
      heading: "تواصل معي",
      subtitle: "يسعدني تواصلكم لمناقشة فرص العمل، مشاريع تطوير الويب، أو الاستشارات التقنية.",
      yourName: "الاسم الكريم",
      yourEmail: "البريد الإلكتروني",
      subject: "موضوع الرسالة",
      message: "تفاصيل الرسالة",
      namePlaceholder: "محمد أحمد",
      emailPlaceholder: "name@company.com",
      subjectPlaceholder: "مشروع تطوير ويب / فرصة عمل",
      messagePlaceholder: "مرحباً محمد، أود مناقشة تفاصيل مشروع...",
      sendMessage: "إرسال الرسالة",
      sending: "جاري الإرسال...",
      sentSuccess: "تم إرسال الرسالة بنجاح عبر EmailJS!",
      directTitle: "بيانات التواصل المباشر",
      location: "الإسكندرية، مصر"
    },

    // Terminal Window
    terminal: {
      welcome: "محمد متولي — طرفية أوامر نظام بورتفوليو OS v2.6.0\nاكتب 'help' لعرض الأوامر المتاحة.",
      prompt: "guest@metwally-os:~$",
      placeholder: "اكتب أمراً برمجياً (help, about, skills, projects, certs, clear, contact)..."
    },

    // Notes Window
    notes: {
      tag: "ملاحظات النظام",
      heading: "سجلات السيرة الذاتية والملاحظات",
      resumeDownload: "تحميل السيرة الذاتية (PDF)"
    },

    // Right Sidebar
    sidebar: {
      onLinkedIn: "على لينكد إن",
      viewProfile: "عرض الحساب",
      portfolioHighlights: "أبرز المحطات",
      shortcuts: "اختصارات سريعة",
      devEnv: "بيئة التطوير",
      activeSession: "جلسة نشطة واحدة",
      location: "الإسكندرية",
      connectSocial: "قنوات التواصل المباشر",
      linkedInPosts: [
        {
          id: "post-1",
          title: "منصة شركة حواش للمحاماة المبنية بتقنيات Next.js و Node.js...",
          timestamp: "مايو 2026",
          image: HawashImg,
          link: "https://hawashlawfirm.com/"
        },
        {
          id: "post-2",
          title: "منصة جولة للألعاب التفاعلية مع لوحة تحكم وإحصائيات متقدمة...",
          timestamp: "أبريل 2026",
          image: JawlahImg,
          link: "https://jawlahsa.com/"
        },
        {
          id: "post-3",
          title: "منصة تريند لاين للتجارة الإلكترونية بأحدث معايير السرعة والأداء...",
          timestamp: "يوليو 2024",
          image: TrendlineImg,
          link: "https://trendlineeg.com/"
        }
      ],
      tips: [
        {
          id: "tip-1",
          tag: "شهادات معتمدة",
          title: "18 شهادة مهنية معتمدة",
          subtitle: "تخصص ميتا، شهادات IBM، ودرجات يوداسيتي.",
          actionText: "عرض الشهادات ←",
          targetApp: "certificates"
        },
        {
          id: "tip-2",
          tag: "13 مشروعاً مميزاً",
          title: "أنظمة ويب متكاملة وواجهات تفاعلية",
          subtitle: "متاجر إلكترونية، منصات قانونية، وألعاب تعليمية.",
          actionText: "عرض المشاريع ←",
          targetApp: "projects"
        },
        {
          id: "tip-3",
          tag: "الخبرات والمسار المهني",
          title: "ميسان المهارية والعمل الحر",
          subtitle: "تطبيقات ويب احترافية في بيئة الإنتاج بأعلى أداء.",
          actionText: "عرض المسيرة ←",
          targetApp: "clients"
        }
      ]
    },

    // Mascot
    mascot: {
      welcome: "أهلاً بك! أنا مساعدك الذكي في النظام. انقر على أي تطبيق لتجربته!",
      openProjects: "تصفح المشاريع",
      openContact: "تواصل معي"
    }
  }
};
