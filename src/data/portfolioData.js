import LogoImg from '../assets/Logo.png';
import HomeImg from '../assets/Home-img2.jpg';
import AboutImg from '../assets/about-me.jpg';
import HawashImg from '../assets/hawash.avif';
import JawlahImg from '../assets/jawlahsa.avif';
import HamsatHomeImg from '../assets/hamasathome.avif';
import ResalaImg from '../assets/yazzed.avif';
import ElmalkyImg from '../assets/elmalky.avif';
import TrendlineImg from '../assets/trendlineeg.avif';
import MissanImg from '../assets/missanHome.avif';
import LawyerImg from '../assets/lawyer.avif';
import RamisImg from '../assets/rams.avif';
import WeaverImg from '../assets/weavr.avif';
import PremiumImg from '../assets/premium.avif';
import HamasatImg from '../assets/hamasat.avif';
import EntityImg from '../assets/entity.avif';

export const PORTFOLIO_DATA = {
  profile: {
    name: "Mohamed Metwally",
    nameAr: "محمد متولي",
    fullName: "Mohamed Metwally",
    fullNameAr: "محمد متولي",
    portraitUrl: HomeImg,
    aboutImgUrl: AboutImg,
    logoUrl: LogoImg,
    title: "Front-End Web Developer",
    titleAr: "مطور واجهات أمامية",
    subtitle: "Solid Back-End Background",
    subtitleAr: "خلفية برمجية قوية في الـ Back-End",
    bio: "A highly motivated and detail-oriented Front-End Developer with extensive experience in building dynamic, responsive, and scalable web applications using Next.js, React.js, GSAP, and Tailwind CSS. Possessing a solid background in Back-End development, bridging the gap between user-centric interfaces and robust server-side functionality.",
    bioAr: "مطور واجهات أمامية شغوف ومحترف بخبرة واسعة في بناء تطبيقات ويب تفاعلية وقابلة للتوسع بأعلى معايير الأداء باستخدام Next.js و React.js و GSAP و Tailwind CSS، مع خلفية تقنية متينة في تطوير الـ Back-End تربط بين تجربة المستخدم السلسة والأنظمة الخادمة القوية.",
    location: "Alexandria, Egypt",
    locationAr: "الإسكندرية، مصر",
    phone: "+201021340475",
    email: "m.metwally.rzq@gmail.com",
    website: "https://mohammed-metwally.web.app",
    linkedin: "https://linkedin.com/in/mohamed-metwally-rzq",
    linkedInUrl: "https://linkedin.com/in/mohamed-metwally-rzq",
    github: "https://github.com/Mo-metwally",
    whatsapp: "https://api.whatsapp.com/send?phone=201021340475"
  },

  stats: {
    projects: "13+ Projects",
    projectsAr: "13+ مشروعاً",
    experience: "3+ Years",
    experienceAr: "3+ سنوات خبرة",
    certificates: "18 Credentials",
    certificatesAr: "18 شهادة معتمدة",
    location: "Alexandria",
    locationAr: "الإسكندرية"
  },

  skills: {
    frontEnd: ["Next.js", "React.js", "JavaScript (ES6+)", "HTML5", "CSS3", "jQuery", "GSAP Animations"],
    backEnd: ["Node.js", "Express.js", "PostgreSQL", "RESTful APIs", "Database Architecture"],
    uiUx: ["Tailwind CSS", "Bootstrap", "Styled-Components", "Sass", "Figma", "Adobe XD"],
    tools: ["Git", "GitHub", "Vite", "Adobe Photoshop", "Postman"]
  },

  experience: [
    {
      company: "Missan Elmaharya",
      role: "Front-End Web Developer",
      period: "March 2022 – Present",
      type: "Full-Time",
      description: "Spearheaded the development and deployment of multiple web projects from conception to production. Optimized web applications to significantly enhance overall site performance, accessibility, and user experience.",
      highlights: ["Multi-project deployment lifecycle", "Cross-functional planning & code reviews", "Speed & Accessibility optimizations"]
    },
    {
      company: "Freelance & Self-Employed",
      role: "Front-End Developer & UI Designer",
      period: "March 2022 – Present",
      type: "Remote / Contract",
      description: "Designed, developed, and maintained custom, highly responsive websites and web applications for diverse global and regional clients using Next.js, React.js, Tailwind, and Bootstrap.",
      highlights: ["Custom client web platforms", "Scalable responsive architectures", "Exceeding client delivery deadlines"]
    }
  ],

  education: {
    degree: "Bachelor's Degree in Computer and Information Systems (C.I.S)",
    university: "Alexandria University",
    years: "2018 – 2022"
  },

  certifications: [
    { title: "Meta Front-End Developer Specialization", issuer: "Meta", date: "Oct 2024" },
    { title: "Professional Web Development Nanodegree", issuer: "Egypt FWD / Udacity", date: "Jan 2023" },
    { title: "Developing Front-End Apps with React", issuer: "IBM", date: "Verified" },
    { title: "Challenger Front-End Track", issuer: "Udacity", date: "Verified" }
  ],

  languages: [
    { language: "Arabic", level: "Native" },
    { language: "English", level: "Upper-Intermediate (B2)" }
  ],

  welcomeGuide: [
    {
      num: "01",
      title: "Certificates",
      desc: "Browse 18 verified certificates with interactive viewer."
    },
    {
      num: "02",
      title: "Projects",
      desc: "Explore 13 live client platforms and full-stack systems."
    },
    {
      num: "03",
      title: "Terminal",
      desc: "Run developer commands directly in the shell."
    }
  ],

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
  ],

  shortcuts: [
    { id: "certificates", name: "Certificates", icon: "sparkles", target: "certificates" },
    { id: "files", name: "Projects", icon: "folder", target: "projects" },
    { id: "notes", name: "Resume & Notes", icon: "file-text", target: "notes" },
    { id: "code", name: "Terminal CLI", icon: "code-2", target: "terminal" },
    { id: "about", name: "About Me", icon: "globe", target: "about" },
    { id: "experience", name: "Experience", icon: "cpu", target: "clients" }
  ],

  projects: [
    {
      id: "hawash-law",
      title: "Hawash Law Firm",
      titleAr: "منصة شركة حواش للمحاماة والاستشارات القانونية",
      category: "Full-Stack & Legal",
      categoryAr: "منصات ومحاماة",
      role: "Full-Stack Developer",
      roleAr: "مطور ويب متكامل (Full-Stack)",
      period: "May 2026",
      periodAr: "مايو 2026",
      description: "Comprehensive corporate legal firm platform providing international consultation and case management workflows.",
      descriptionAr: "منصة قانونية متكاملة لشركة محاماة دولية تقدم استشارات قانونية متقدمة ونظام إدارة قضايا وسير عمل إلكتروني.",
      metrics: "Next.js 14 App Router · Node.js & PostgreSQL Backend",
      metricsAr: "أحدث معمارية Next.js 14 مع خادم Node.js وقواعد بيانات PostgreSQL",
      tags: ["Next.js", "Tailwind CSS", "Sass", "Node.js", "PostgreSQL", "Express.js"],
      image: HawashImg,
      link: "https://hawashlawfirm.com/"
    },
    {
      id: "jawlah-games",
      title: "Jawlah Games Platform",
      titleAr: "منصة جولة للألعاب التفاعلية والتعليمية",
      category: "Edutainment & SaaS",
      categoryAr: "ألعاب وتعليم",
      role: "Front-End Developer",
      roleAr: "مطور واجهات أمامية (Front-End)",
      period: "Dec 2025 – Apr 2026",
      periodAr: "ديسمبر 2025 – أبريل 2026",
      description: "Pioneering Arab edutainment platform bridging learning and gaming, backed by a powerful admin panel and analytics dashboard for full site operations and payments.",
      descriptionAr: "بوابة ألعاب تعليمية وترفيهية عربية مبتكرة تربط بين التعلم واللعب، مدعومة بلوحة تحكم متقدمة لإدارة العمليات والاشتراكات والتحليلات.",
      metrics: "One Platform, 5 Adventures · Custom Analytics Dashboard",
      metricsAr: "منصة واحدة تضم 5 مغامرات تفاعلية ولوحة تحكم شاملة",
      tags: ["Vite.js", "React.js", "Next.js", "Tailwind CSS", "Sass"],
      image: JawlahImg,
      link: "https://jawlahsa.com/"
    },
    {
      id: "hamsat-home-2025",
      title: "Hamsat Home",
      titleAr: "متجر همسات هوم للأدوات المنزلية",
      category: "E-Commerce",
      categoryAr: "متاجر إلكترونية",
      role: "Hybrid / Lead Front-End Developer",
      roleAr: "قائد فريق الواجهات ومطور رئيسي",
      period: "April 2025",
      periodAr: "أبريل 2025",
      description: "Complete modern homeware e-commerce solutions built for elegance, high performance, product discovery, and fast checkout flows.",
      descriptionAr: "حلول تجارة إلكترونية عصرية متكاملة للأدوات المنزلية، مصممة لأعلى سرعة وأسهل تجربة شراء واستعراض للمنتجات.",
      metrics: "High Conversion E-Commerce · Multi-category System",
      metricsAr: "متجر تجاري عالي التحويل وسريع التصفح",
      tags: ["React.js", "Node.js", "PostgreSQL", "Express.js", "Bootstrap"],
      image: HamsatHomeImg,
      link: "https://hamsathome.com/"
    },
    {
      id: "al-resala-law",
      title: "Al-Resala Legal Firm",
      titleAr: "شركة الرسالة للمحاماة والاستشارات",
      category: "Corporate & Legal",
      categoryAr: "منصات ومحاماة",
      role: "Full-Stack Developer",
      roleAr: "مطور ويب متكامل",
      period: "January 2025",
      periodAr: "يناير 2025",
      description: "Law and Legal Consulting Company providing corporate legal services with local and international dealings.",
      descriptionAr: "موقع واستشارات قانونية متكاملة تقدم خدمات المحاماة للشركات والمؤسسات محلياً ودولياً.",
      metrics: "Client Consultation Workflow · Full Database Integration",
      metricsAr: "نظام استشارات للعملاء وربط كامل بقواعد البيانات",
      tags: ["React.js", "Node.js", "PostgreSQL", "Express.js", "Bootstrap"],
      image: ResalaImg,
      link: "https://rsallaw.com/"
    },
    {
      id: "ibrahim-alzahrani-law",
      title: "Ibrahim Al-Zahrani & Ahmed Al-Malki Law Firm",
      titleAr: "مكتب إبراهيم الزهراني وأحمد المالكي للمحاماة",
      category: "Corporate & Legal",
      categoryAr: "منصات ومحاماة",
      role: "Full-Stack Developer",
      roleAr: "مطور ويب متكامل",
      period: "September 2024",
      periodAr: "سبتمبر 2024",
      description: "Prestigious law firm web platform delivering consultation booking, legal service directory, and client portals.",
      descriptionAr: "بوابة قانونية متميزة تقدم حجز الاستشارات ودليل الخدمات القانونية وبوابة مخصصة للعملاء.",
      metrics: "Enterprise Tier Architecture · PostgreSQL backend",
      metricsAr: "معمارية برمجية متينة وقواعد بيانات PostgreSQL",
      tags: ["React.js", "Node.js", "PostgreSQL", "Express.js", "Bootstrap"],
      image: ElmalkyImg,
      link: "https://i-a-lawco.com/"
    },
    {
      id: "trendline-ecommerce",
      title: "TrendLine E-Commerce",
      titleAr: "متجر تريند لاين للحلول التقنية والأمنية",
      category: "E-Commerce & Tech",
      categoryAr: "متاجر إلكترونية",
      role: "Front-End Developer",
      roleAr: "مطور واجهات أمامية",
      period: "July 2024",
      periodAr: "يوليو 2024",
      description: "Providing expert consultation, design, installation, and maintenance services for security and tech needs.",
      descriptionAr: "متجر وبوابة خدمات تقنية واستشارات أمنية لتركيب وتوريد أحدث الأجهزة الذكية وكاميرات المراقبة.",
      metrics: "Live Commercial Store · Multi-category product system",
      metricsAr: "متجر تجاري حي بنظام تصنيفات متعدد للمنتجات",
      tags: ["React.js", "HTML5", "CSS3", "JavaScript", "Bootstrap"],
      image: TrendlineImg,
      link: "https://trendlineeg.com/"
    },
    {
      id: "missan-mahariya",
      title: "Missan Al-Mahariya",
      titleAr: "موقع شركة ميسان المهارية",
      category: "Agency & Services",
      categoryAr: "وكالات وخدمات",
      role: "Front-End Developer",
      roleAr: "مطور واجهات أمامية",
      period: "June 2024",
      periodAr: "يونيو 2024",
      description: "Programming company providing creative and diverse technical services and digital products.",
      descriptionAr: "موقع شركة تقنية رائدة تقدم خدمات برمجية مبتكرة وحلولاً رقمية للمؤسسات والشركات.",
      metrics: "Enterprise Solutions Hub · High-speed performance",
      metricsAr: "بوابة خدمات مؤسسية سريعة وعالية الأداء",
      tags: ["React.js", "HTML5", "CSS3", "JavaScript", "Bootstrap"],
      image: MissanImg,
      link: "https://missanvip.com/"
    },
    {
      id: "lawyer-website",
      title: "Lawyer Website",
      titleAr: "موقع مكتب المحاماة",
      category: "Corporate & Legal",
      categoryAr: "منصات ومحاماة",
      role: "Front-End Developer",
      roleAr: "مطور واجهات أمامية",
      period: "April 2024",
      periodAr: "أبريل 2024",
      description: "Law and Legal Consulting Company provides legal services with local and international dealings.",
      descriptionAr: "واجهة وتصميم موقع خدمات واستشارات قانونية متجاوب ومتقن وسهل الاستخدام.",
      metrics: "Responsive UI · Client Consultation Portal",
      metricsAr: "واجهة متجاوبة وبوابة استشارات للعملاء",
      tags: ["React.js", "HTML5", "CSS3", "JavaScript", "Bootstrap"],
      image: LawyerImg,
      link: "https://flata.missanvip.com/"
    },
    {
      id: "ramis-hotel",
      title: "Ramis Hotel",
      titleAr: "تصميم واجهة فندق راميس (Ramis Hotel)",
      category: "Hospitality & UI/UX",
      categoryAr: "ألعاب وتعليم",
      role: "UI/UX Designer",
      roleAr: "مصمم واجهات وتجربة مستخدم",
      period: "January 2024",
      periodAr: "يناير 2024",
      description: "UI design for a hotel website providing room booking, amenities catalog, and reservation capabilities.",
      descriptionAr: "تصميم واجهة مستخدم تفاعلية لموقع فندقي فاخر يشمل حجز الغرف واستعراض الخدمات والمرافق.",
      metrics: "Complete Booking Architecture · Adobe XD Showcase",
      metricsAr: "معمارية حجز فندقي كاملة معروضة على Behance",
      tags: ["UI/UX Design", "Adobe XD", "Behance", "Prototyping"],
      image: RamisImg,
      link: "https://www.behance.net/gallery/205281559/Ramis-Hotel"
    },
    {
      id: "edu-weaver",
      title: "EDU Weaver",
      titleAr: "منصة إيديو ويفر التعليمية (EDU Weaver)",
      category: "EdTech Platform",
      categoryAr: "ألعاب وتعليم",
      role: "UI/UX Designer",
      roleAr: "مصمم واجهات وتجربة مستخدم",
      period: "December 2023",
      periodAr: "ديسمبر 2023",
      description: "User-friendly and well-designed learning platform with intuitive navigation and engaging layouts that make learning enjoyable.",
      descriptionAr: "تصميم تجربة مستخدم تعليمية جذابة ومبتكرة تجعل متابعة الدروس والامتحانات تجربة سلسة وممتعة.",
      metrics: "Intuitive Student UX · Case Study on Behance",
      metricsAr: "دراسة حالة لتجربة المستخدم التعليمية على Behance",
      tags: ["UI/UX Design", "Adobe XD", "Behance", "Product Design"],
      image: WeaverImg,
      link: "https://www.behance.net/gallery/205282019/EDU-Weaver"
    },
    {
      id: "premium-agency",
      title: "Premium Agency",
      titleAr: "وكالة بريميوم الإبداعية",
      category: "Creative Agency",
      categoryAr: "وكالات وخدمات",
      role: "UI/UX Designer | Frontend Developer",
      roleAr: "مصمم ومطور واجهات",
      period: "November 2023",
      periodAr: "نوفمبر 2023",
      description: "A creative agency providing graphic designs and video editing services with interactive media showcase.",
      descriptionAr: "موقع وكالة تصميم ومونتاج إبداعي يبرز معرض الأعمال والخدمات بحركات تفاعلية سلسة.",
      metrics: "Interactive Media Showcase · Smooth Transitions",
      metricsAr: "معرض وسائط تفاعلي وانتقالات رسومية سلسة",
      tags: ["HTML", "CSS", "JS", "Native"],
      image: PremiumImg,
      link: "https://mo-metwally.github.io/premium-agency.github.io/"
    },
    {
      id: "hamasat-home-v1",
      title: "Hamasat Home (v1)",
      titleAr: "متجر همسات هوم (الإصدار الأول)",
      category: "E-Commerce",
      categoryAr: "متاجر إلكترونية",
      role: "UI/UX Designer | Frontend Developer",
      roleAr: "مصمم ومطور واجهات",
      period: "March 2023",
      periodAr: "مارس 2023",
      description: "E-commerce website offering a unique and modern assortment of kitchenware and home decor.",
      descriptionAr: "متجر إلكتروني لبيع أدوات المطبخ والديكورات المنزلية بنظام سلة وتسوق متكامل وسريع.",
      metrics: "Custom Catalog & Cart Architecture · Fast Checkout",
      metricsAr: "معمارية سلة مخصصة وسرعة عالية في إتمام الطلب",
      tags: ["HTML", "CSS", "JS", "Native"],
      image: HamasatImg,
      link: "https://mo-metwally.github.io/Hamasat-ecomm/"
    },
    {
      id: "entity-agency",
      title: "Entity Agency",
      titleAr: "مشروع التخرج — وكالة إنتيتي (Entity Agency)",
      category: "Graduation Project",
      categoryAr: "وكالات وخدمات",
      role: "UI/UX Designer | Frontend Developer",
      roleAr: "مصمم ومطور واجهات",
      period: "July 2022",
      periodAr: "يوليو 2022",
      description: "Graduation capstone project featuring creative agency layouts, custom components, and responsive design.",
      descriptionAr: "مشروع تخرج متكامل بحاسبات ونظم معلومات يقدم تصاميم وكالة إبداعية متجاوبة ومكونات مخصصة.",
      metrics: "Alexandria University CIS Graduation Project",
      metricsAr: "مشروع تخرج حاسبات ونظم معلومات — جامعة الإسكندرية",
      tags: ["HTML", "CSS", "JS", "Native"],
      image: EntityImg,
      link: "https://mo-metwally.github.io/Entity-Agency.github.io/index.html"
    }
  ],

  notes: [
    {
      id: "note-1",
      title: "Professional Resume Summary",
      titleAr: "ملخص السيرة الذاتية المهنية",
      date: "Aug 2024 – 2026",
      dateAr: "أغسطس 2024 – 2026",
      content: `MOHAMED METWALLY\nFront-End Web Developer (with solid Back-End Background)\nPhone: +201021340475\nEmail: m.metwally.rzq@gmail.com\nWebsite: https://mohammed-metwally.web.app\nLinkedIn: https://linkedin.com/in/mohamed-metwally-rzq\n\nA highly motivated and detail-oriented Front-End Developer with extensive experience in building dynamic, responsive, and scalable web applications using Next.js, React.js, GSAP, and Tailwind CSS. Possessing a solid background in Back-End development, bridging the gap between user-centric interfaces and robust server-side functionality.`,
      contentAr: `محمد متولي (Mohamed Metwally)
مطور واجهات أمامية (مع خلفية قوية في تطوير الـ Back-End)
الهاتف: 201021340475+
البريد الإلكتروني: m.metwally.rzq@gmail.com
الموقع الرسمي: https://mohammed-metwally.web.app
حساب لينكد إن: https://linkedin.com/in/mohamed-metwally-rzq

مطور واجهات أمامية شغوف ومحترف بخبرة واسعة في بناء تطبيقات ويب تفاعلية وقابلة للتوسع بأعلى معايير الأداء والسرعة باستخدام Next.js و React.js و GSAP و Tailwind CSS، مع خلفية تقنية متينة في تطوير الـ Back-End تربط بين تجربة المستخدم السلسة والأنظمة الخادمة القوية.`
    },
    {
      id: "note-2",
      title: "Skills & Technologies",
      titleAr: "المهارات والتقنيات البرمجية",
      date: "Technical Arsenal",
      dateAr: "الترسانة التقنية",
      content: `• Front-End: Next.js, React.js, JavaScript (ES6+), HTML5, CSS3, jQuery, GSAP\n• Back-End (Background): Node.js, Express.js, PostgreSQL, Server Architecture, RESTful APIs\n• UI/UX & Styling: Tailwind CSS, Bootstrap, Styled-Components, Sass, Figma, Adobe XD\n• Tools & Design: Git, GitHub, Vite, Adobe Photoshop, Postman\n• Languages: Arabic (Native), English (Upper-Intermediate B2)`,
      contentAr: `• تطوير الواجهات (Front-End): Next.js، React.js، جافاسكريبت (ES6+)، HTML5، CSS3، jQuery، مكتبة GSAP للتحريك.
• تطوير الخوادم (Back-End): Node.js، Express.js، قواعد بيانات PostgreSQL، معمارية الخوادم، واجهات RESTful APIs.
• تصميم الواجهات وتجربة المستخدم: Tailwind CSS، Bootstrap، Styled-Components، Sass، Figma، Adobe XD.
• الأدوات وبيئة التطوير: Git، GitHub، Vite، Adobe Photoshop، Postman.
• اللغات: العربية (اللغة الأم)، الإنجليزية (مستوى فوق المتوسط B2).`
    },
    {
      id: "note-3",
      title: "18 Verified Certifications & Education",
      titleAr: "18 شهادة معتمدة والمؤهل الدراسي",
      date: "Credentials",
      dateAr: "الاعتمادات الرسمية",
      content: `EDUCATION:\n• Bachelor's Degree in Computer and Information Systems (C.I.S)\n  Alexandria University (2018 – 2022)\n\nTOP VERIFIED CERTIFICATIONS:\n• Meta Front-End Developer Specialization (9 Courses)\n• Professional Web Development Nanodegree | Egypt FWD / Udacity\n• Developing Front-End Apps with React | IBM\n• Challenger Front-End Track | Udacity`,
      contentAr: `المؤهل الدراسي:
• بكالوريوس في الحاسبات ونظم المعلومات (C.I.S)
  جامعة الإسكندرية (2018 – 2022)

أبرز الشهادات والاعتمادات الموثقة (من إجمالي 18 شهادة):
• تخصص مطور الواجهات الأمامية من ميتا (Meta Front-End Specialization - 9 دورات معتمدة)
• نانوديجري تطوير الويب الاحترافي من يوداسيتي ومبادرة رواد مصر الرقمية (Egypt FWD / Udacity)
• تطوير تطبيقات الويب بـ React من شركة IBM العالمية
• مسار التحدي لتطوير الويب من يوداسيتي (Udacity Challenger Track)`
    }
  ]
};
