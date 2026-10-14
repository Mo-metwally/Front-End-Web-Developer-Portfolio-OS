import React, { useState, useEffect } from 'react';
import './ResumePage.css';
import { useLanguage } from '../context/LanguageContext';
import {
  ArrowLeft,
  ArrowRight,
  Printer,
  Monitor,
  Globe,
  FileText,
  Palette,
  Copy,
  Check,
  Sparkles,
  ExternalLink
} from 'lucide-react';

export default function ResumePage({ onBackToOS }) {
  const { lang, toggleLang } = useLanguage();
  const isAr = lang === 'ar';
  const [viewMode, setViewMode] = useState('graphical'); // 'graphical' | 'ats'
  const [copiedRawText, setCopiedRawText] = useState(false);

  useEffect(() => {
    // Unlock native browser window scrolling on /resume
    document.documentElement.classList.add('resume-mode');
    document.body.classList.add('resume-mode');
    document.body.classList.remove('overflow-hidden');

    window.scrollTo(0, 0);

    const prevTitle = document.title;
    document.title = 'Mohamed Metwally — Front-End Developer CV';

    return () => {
      document.documentElement.classList.remove('resume-mode');
      document.body.classList.remove('resume-mode');
      document.body.classList.add('overflow-hidden');
      document.body.classList.remove('ats-print-active');
      document.title = prevTitle;
    };
  }, []);

  // Update body class for print rules according to active view mode
  useEffect(() => {
    if (viewMode === 'ats') {
      document.body.classList.add('ats-print-active');
    } else {
      document.body.classList.remove('ats-print-active');
    }
  }, [viewMode]);

  const handlePrint = () => {
    window.print();
  };

  const handleCopyPlainText = () => {
    const rawATS = `MOHAMED METWALLY
Front-End Web Developer | Solid Back-End Background
Location: Alexandria, Egypt (Available for Full-Time & Freelance Worldwide)
Phone: +201021340475
Email: m.metwally.rzq@gmail.com
Portfolio: https://mohammed-metwally.web.app
GitHub: https://github.com/Mo-metwally
LinkedIn: https://linkedin.com/in/mohamed-metwally-355969248
Behance: https://behance.net/mohamedmetwally29

==================================================
PROFESSIONAL SUMMARY
==================================================
Detail-driven Front-End Web Developer & UI/UX Architect with 4+ years of hands-on experience engineering high-performance, accessible, and scalable web platforms. Specialized in Next.js 14, React.js, GSAP, and Tailwind CSS, backed by a solid foundation in Node.js, Express, PostgreSQL, and RESTful APIs. Architected 13 production client platforms (E-Commerce, Legal Portals, and Edutainment SaaS) and holds 18 verified credentials across Meta, IBM, and Udacity.

==================================================
TECHNICAL SKILLS
==================================================
TECHNICAL SKILLS & COMPETENCIES
==================================================
- Front-End & Animations: Next.js 14, React.js, JavaScript (ES6+), GSAP Animations, Tailwind CSS, Vite.js, HTML5, CSS3, Sass/SCSS, Bootstrap 5, Redux, Responsive UI/UX Design, Web Performance Optimization
- Back-End & Databases: Node.js, Express.js, PostgreSQL, RESTful API Design & Integration, Firebase, Authentication & Authorization
- Beyond Front-End & Systems Integration: ERP & POS Systems Integration, HRMS Workflows, Manual & API Testing (Functional, Regression, Exploratory, Bug Reporting), IT Diagnostics & Troubleshooting (PC/Laptop Hardware & Software Maintenance), Client Requirement Analysis & Technical Support
- Engineering & UI/UX Tools: Figma, Adobe XD, Photoshop, Git, GitHub, Postman, Webpack, Vercel, PageSpeed Optimization

==================================================
BEYOND FRONT-END PRACTICAL EXPERIENCE
==================================================
1. Backend & Full-Stack Development (Node.js, Express.js, REST APIs, Server-side Logic):
   Developing back-end functionality, building secure REST APIs, handling application logic, and integrating services.
2. Business Systems & Integrations (ERP, POS, HRMS, System Integration):
   Business-oriented software solutions, integrating e-commerce storefronts with ERP/POS systems to streamline data exchange and operations.
3. Software Testing & Quality Assurance (Manual Testing, API Testing, Regression, Bug Reporting):
   Verifying functionality, validating end-to-end user flows, reproducing issues, and confirming bug fixes prior to delivery.
4. IT Support & Technical Troubleshooting (Hardware & Software, PC & Laptop Maintenance):
   Approximately 2 years of practical experience diagnosing hardware/software issues and troubleshooting computer systems.
5. Client Communication & Problem-Solving:
   Communicating directly with clients, translating business needs into technical requirements, delivering solutions, and providing post-launch support.

==================================================
PROFESSIONAL WORK EXPERIENCE
==================================================
Front-End Web Developer | Missan Elmaharya for Information Technology
March 2022 – Present | Full-Time
- Spearheaded the development, optimization, and lifecycle deployment of multiple enterprise platforms.
- Engineered high-performance web applications using Next.js, React.js, and Tailwind CSS with 95+ PageSpeed scores.
- Built interactive timeline animations with GSAP to elevate storytelling and increase user retention.
- Connected views with robust back-end microservices built on Node.js, Express, and PostgreSQL.

Front-End Developer & UI Designer | Freelance & Independent Client Engagements
March 2022 – Present | Contract | Saudi Arabia, Egypt & Gulf Region
- Delivered complete digital solutions for legal firms, e-commerce storefronts, and gaming portals from UI/UX design to code.
- Designed wireframes, interactive user flows, and responsive design systems in Figma and converted them into accessible, production-ready code.

==================================================
KEY PRODUCTION PLATFORMS & CLIENT SYSTEMS (13 Live Systems)
==================================================
1. Hawash Law Firm (Corporate Legal Platform): https://hawashlawfirm.com/
   Tech: Next.js 14 App Router, Node.js, PostgreSQL, Tailwind CSS
2. Jawlah Games Platform (Edutainment & Gaming SaaS): https://jawlahsa.com/
   Tech: React.js, Vite, Tailwind CSS, Analytics Dashboard
3. Hamsat Home (Modern E-Commerce Storefront): https://hamsathome.com/
   Tech: React.js, Node.js, Express.js, PostgreSQL
4. Al-Resala Legal Firm (Consultation Booking Platform): https://rsallaw.com/
   Tech: React.js, Node.js, PostgreSQL, Bootstrap
5. Ibrahim Al-Zahrani & Ahmed Al-Malki Law (Saudi Law Firm Portal): https://i-a-lawco.com/
   Tech: React.js, RESTful APIs, Responsive UI
6. TrendLine E-Commerce (High-Traffic Fashion Storefront): https://trendlineeg.com/
   Tech: Next.js, Tailwind CSS, Filter Architecture
7. Interactive Desktop OS Portfolio: https://mohammed-metwally.web.app/
   Tech: React.js, GSAP, Tailwind CSS
8. Missan VIP & Corporate Portals: https://missanvip.com/
   Tech: React.js, Enterprise Services Architecture
9. Ramis Hotel & EDU Weaver (UI/UX Case Studies): https://behance.net/mohamedmetwally29
   Tech: Figma, Adobe XD, Design Systems

==================================================
EDUCATION & LANGUAGES
==================================================
- B.Sc. in Computer & Information Systems (C.I.S) — Alexandria University (2018 – 2022)
- Languages: Arabic (Native), English (Upper-Intermediate / B2)

==================================================
VERIFIED CREDENTIALS & NANODEGREES (18 Certifications)
==================================================
- Meta Front-End Developer Professional Specialization (9 Courses Certified · Oct 2024 · Meta / Coursera)
  [Courses: Front-End Capstone, Advanced React, JavaScript Programming, UI/UX Design, HTML/CSS In-Depth, Version Control, Coding Interview Prep, React Basics, Web Foundations]
- Professional Front-End Web Development Nanodegree (Egypt FWD / Udacity Nanodegree · Jan 2023)
- Developing Front-End Apps with React (IBM Certified · Cloud & Enterprise Track)
- Challenger Front-End Web Development Track (Udacity / Egypt FWD)
- Microsoft Front-End Professional Certificate (Coursera · In Progress)`;

    navigator.clipboard.writeText(rawATS);
    setCopiedRawText(true);
    setTimeout(() => setCopiedRawText(false), 2500);
  };

  return (
    <div className="resume-root antialiased">

      {/* =========================================================
          Top Floating Navigation Bar (Screen Only - Hidden in Print)
          ========================================================= */}
      {/* =========================================================
          Top Floating Navigation Bar (Screen Only - Hidden in Print)
          ========================================================= */}
      <header className="no-print resume-toolbar">
        <div className="resume-toolbar-inner">

          {/* Back to OS Desktop Button */}
          <button
            onClick={onBackToOS}
            className="resume-btn-os active:scale-95"
            title={isAr ? 'الرجوع إلى بيئة سطح المكتب' : 'Return to Portfolio OS Desktop'}
          >
            {isAr ? <ArrowRight className="w-4 h-4 text-[#c88a58]" /> : <ArrowLeft className="w-4 h-4 text-[#c88a58]" />}
            <Monitor className="w-4 h-4 text-[#c88a58] hidden sm:inline-block" />
            <span>{isAr ? 'الرجوع للنظام' : 'Return to OS'}</span>
          </button>

          {/* Mode Switcher: Graphical (OS) vs 100% ATS Friendly */}
          <div className="resume-mode-switch">
            <button
              onClick={() => setViewMode('graphical')}
              className={`resume-mode-btn ${viewMode === 'graphical' ? 'active' : ''}`}
            >
              <Palette className="w-3.5 h-3.5" />
              <span>{isAr ? 'تصميم تفاعلي (OS)' : 'Graphical (OS)'}</span>
            </button>
            <button
              onClick={() => setViewMode('ats')}
              className={`resume-mode-btn ${viewMode === 'ats' ? 'active' : ''}`}
            >
              <FileText className="w-3.5 h-3.5" />
              <span>{isAr ? 'صيغة ATS القياسية (100%)' : '100% ATS-Friendly'}</span>
            </button>
          </div>

          {/* Actions: Print PDF & Language Switcher */}
          <div className="flex items-center gap-2.5">
            {/* Copy Plain Text (Only in ATS mode) */}
            {viewMode === 'ats' && (
              <button
                onClick={handleCopyPlainText}
                className="resume-btn-action active:scale-95"
                title={isAr ? 'نسخ النص الخام لأنظمة التوظيف' : 'Copy raw plain text for ATS application forms'}
              >
                {copiedRawText ? <Check className="w-3.5 h-3.5 text-[#1E8E3E]" /> : <Copy className="w-3.5 h-3.5 text-[#c88a58]" />}
                <span>{copiedRawText ? (isAr ? 'تم النسخ!' : 'Copied!') : (isAr ? 'نسخ النص' : 'Copy Text')}</span>
              </button>
            )}

            {/* Language Toggle */}
            <button
              onClick={toggleLang}
              className="resume-btn-action active:scale-95"
              title={isAr ? 'Switch to English' : 'التبديل إلى العربية'}
            >
              <Globe className="w-3.5 h-3.5" />
              <span>{isAr ? 'EN' : 'عربي'}</span>
            </button>

            {/* Print / Save as PDF Button */}
            <button
              onClick={handlePrint}
              className="resume-btn-print active:scale-95"
            >
              <Printer className="w-4 h-4 text-[#B85D19]" />
              <span>{viewMode === 'ats' ? (isAr ? 'طباعة ATS PDF' : 'Print ATS PDF') : (isAr ? 'حفظ PDF (صفحتان)' : 'Save as PDF (2 Pages)')}</span>
            </button>
          </div>
        </div>
      </header>

      {/* Screen Helper Banner */}
      <div className="no-print">
        {viewMode === 'graphical' ? (
          <div className="resume-banner">
            <div className="flex items-center gap-2">
              <span className="text-[#c88a58] font-bold">🎨 {isAr ? 'الوضع الرسومي (OS):' : 'Graphical View:'}</span>
              <span>{isAr ? 'تصميم فاخر بستايل Portfolio OS بصفحتين A4، مخصص للعملاء ومسؤولي التوظيف البشري.' : 'macOS-inspired luxury layout with 2 A4 pages. Best for human recruiters, clients, and portfolio demonstration.'}</span>
            </div>
            <button
              onClick={() => setViewMode('ats')}
              className="resume-banner-btn"
            >
              {isAr ? 'التبديل لـ ATS ↗' : 'Switch to ATS ↗'}
            </button>
          </div>
        ) : (
          <div className="resume-banner ats">
            <div className="flex items-center gap-2">
              <span className="text-[#27c93f] font-bold">📄 {isAr ? 'وضع ATS بنسبة 100%:' : '100% ATS-Friendly Mode:'}</span>
              <span>{isAr ? 'عمود واحد قياسي، بدون جداول معقدة، كلمات مفتاحية دقيقة، جاهز للاجتياز الفوري في أنظمة Workday وGreenhouse وLever.' : 'Single-column standard structure, clean headings, keyword-optimized. Guaranteed 100% parse score on Workday, Taleo, Greenhouse & Lever.'}</span>
            </div>
            <button
              onClick={handleCopyPlainText}
              className="resume-banner-btn ats"
            >
              {copiedRawText ? (isAr ? 'تم النسخ!' : 'Copied!') : (isAr ? 'نسخ النص للتطبيق ↗' : 'Copy Text for Portal ↗')}
            </button>
          </div>
        )}
      </div>

      {/* =========================================================
          Resume Document Pages Container
          ========================================================= */}
      <div className="resume-container print:p-0 print:m-0 print:gap-0">

        {/* =========================================================
            OPTION A: GRAPHICAL (OS STYLE) VIEW
            ========================================================= */}
        {viewMode === 'graphical' && (
          <>
            {/* PAGE 1: Profile, Experience & Flagship Systems */}
            <main className="cv-page max-w-4xl mx-auto bg-[#FAF7F2] border border-[#DDD1C2] rounded-2xl overflow-hidden shadow-2xl print:rounded-none print:border-none print:shadow-none" dir="ltr">

              {/* OS Top Window Bar (Page 1) */}
              <div className="cv-top-bar bg-[#EDE5DA] border-b border-[#DDD1C2] px-5 py-2 flex items-center justify-between shrink-0">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#E11D48] inline-block"></span>
                  <span className="w-3 h-3 rounded-full bg-[#D97706] inline-block"></span>
                  <span className="w-3 h-3 rounded-full bg-[#1E8E3E] inline-block"></span>
                </div>
                <div className="font-mono text-xs text-[#68594D] tracking-wider font-semibold">
                  ~/mohamed-metwally/resume-os.pdf [Page 1/2]
                </div>
                <div className="flex items-center gap-1.5 font-mono text-xs text-[#1E8E3E] font-semibold">
                  <span className="w-2 h-2 rounded-full bg-[#1E8E3E] animate-pulse"></span>
                  <span>ONLINE</span>
                </div>
              </div>

              <div className="cv-body-p1">

                {/* Header / Profile Section */}
                <header className="cv-header flex flex-col md:flex-row justify-between items-start md:items-center gap-3 border-b border-[#DDD1C2] pb-3.5 mb-2 shrink-0">
                  <div>
                    <p className="text-xs font-mono uppercase tracking-widest text-[#B85D19] font-bold mb-0.5">Professional Profile</p>
                    <h1 className="text-3xl print:text-[27px] font-serif font-bold text-[#201812] tracking-tight leading-tight">Mohamed Metwally</h1>
                    <p className="text-sm print:text-[12.5px] text-[#68594D] font-medium mt-0.5">
                      Front-End Web Developer <span className="text-[#B85D19] mx-1 font-bold">|</span> Solid Back-End Background
                    </p>
                  </div>

                  {/* Contact Grid */}
                  <div className="cv-contact-box">
                    <div className="cv-contact-grid text-xs font-mono text-[#231B15]">
                      <a href="https://mohammed-metwally.web.app" target="_blank" rel="noopener noreferrer" className="cv-link flex items-center gap-1.5 hover:text-[#B85D19] whitespace-nowrap">
                        <span className="text-[#B85D19] font-bold">🌐</span> mohammed-metwally.web.app
                      </a>
                      <a href="https://github.com/Mo-metwally" target="_blank" rel="noopener noreferrer" className="cv-link flex items-center gap-1.5 hover:text-[#B85D19] whitespace-nowrap">
                        <span className="text-[#B85D19] font-bold">💻</span> github.com/Mo-metwally
                      </a>
                      <a href="https://www.linkedin.com/in/mohamed-metwally-355969248" target="_blank" rel="noopener noreferrer" className="cv-link flex items-center gap-1.5 hover:text-[#B85D19] whitespace-nowrap">
                        <span className="text-[#B85D19] font-bold">🔗</span> in/mohamed-metwally
                      </a>
                      <a href="https://www.behance.net/mohamedmetwally29" target="_blank" rel="noopener noreferrer" className="cv-link flex items-center gap-1.5 hover:text-[#B85D19] whitespace-nowrap">
                        <span className="text-[#B85D19] font-bold">🎨</span> behance.net/mohamedmetwally29
                      </a>
                    </div>
                    <div className="cv-contact-location font-mono">
                      <span className="text-[#1E8E3E]">●</span> Alexandria, Egypt · Available for Full-Time & Freelance Worldwide
                    </div>
                  </div>
                </header>

                {/* 01 // Executive Summary (Dedicated cv-summary-box) */}
                <section className="cv-summary-box">
                  <div className="cv-summary-header">
                    <h2 className="text-xs print:text-[10.5px] font-mono uppercase tracking-widest text-[#E69352] font-bold">01 // Executive Summary</h2>
                    <span className="font-mono text-[11px] text-[#C4B5A5]">README.md</span>
                  </div>
                  <p className="cv-summary-text">
                    Detail-driven <strong>Front-End Web Developer & UI/UX Architect</strong> with 4+ years of hands-on experience engineering high-performance, accessible, and scalable web platforms. Specialized in <strong>Next.js 14, React.js, GSAP, and Tailwind CSS</strong>, backed by a solid foundation in <strong>Node.js, Express, PostgreSQL, and RESTful APIs</strong>. Architected <strong>13 production client platforms</strong> (E-Commerce, Legal Portals, and Edutainment SaaS) and holds <strong>18 verified credentials</strong> across Meta, IBM, and Udacity.
                  </p>
                </section>

                {/* Two-Column Layout (Page 1) */}
                <div className="cv-grid grid grid-cols-1 md:grid-cols-3 gap-3.5 flex-1">

                  {/* Left Column: Tech Stack, Education, Stats */}
                  <div className="cv-grid-left space-y-3.5 print:space-y-0">

                    {/* 02 // Tech Stack & Architecture */}
                    <div className="cv-section-box">
                      <h2 className="text-xs print:text-[11.5px] font-mono uppercase tracking-widest text-[#B85D19] font-bold mb-3.5 print:mb-2">02 // Tech Stack</h2>

                      <div className="space-y-3.5 print:space-y-2.5">
                        <div>
                          <h3 className="text-xs print:text-[10.5px] font-bold text-[#68594D] mb-2 print:mb-1.5">Front-End & Animations</h3>
                          <div className="flex flex-wrap gap-2 print:gap-1.5">
                            <span className="cv-tag-pill bg-white text-[#201812] shadow-sm">Next.js 14</span>
                            <span className="cv-tag-pill bg-white text-[#201812] shadow-sm">React.js</span>
                            <span className="cv-tag-pill bg-[#FBF0E6] border-[#E8C29E] text-[#B85D19] shadow-sm font-bold">GSAP</span>
                            <span className="cv-tag-pill bg-white text-[#201812] shadow-sm">Tailwind CSS</span>
                            <span className="cv-tag-pill bg-white text-[#231B15] shadow-sm font-medium">Vite.js</span>
                            <span className="cv-tag-pill bg-white text-[#231B15] shadow-sm font-medium">JavaScript (ES6+)</span>
                            <span className="cv-tag-pill bg-white text-[#231B15] shadow-sm font-medium">Sass / SCSS</span>
                            <span className="cv-tag-pill bg-white text-[#231B15] shadow-sm font-medium">Bootstrap 5</span>
                          </div>
                        </div>

                        <div>
                          <h3 className="text-xs print:text-[10.5px] font-bold text-[#68594D] mb-2 print:mb-1.5">Back-End & Databases</h3>
                          <div className="flex flex-wrap gap-2 print:gap-1.5">
                            <span className="cv-tag-pill bg-white text-[#201812] shadow-sm">Node.js</span>
                            <span className="cv-tag-pill bg-white text-[#201812] shadow-sm">Express.js</span>
                            <span className="cv-tag-pill bg-white text-[#201812] shadow-sm">PostgreSQL</span>
                            <span className="cv-tag-pill bg-white text-[#231B15] shadow-sm font-medium">RESTful APIs</span>
                            <span className="cv-tag-pill bg-white text-[#231B15] shadow-sm font-medium">Firebase</span>
                          </div>
                        </div>

                        <div>
                          <h3 className="text-xs print:text-[10.5px] font-bold text-[#68594D] mb-2 print:mb-1.5">UI/UX & Engineering Tools</h3>
                          <div className="flex flex-wrap gap-2 print:gap-1.5">
                            <span className="cv-tag-pill bg-white text-[#231B15] shadow-sm font-medium">Figma</span>
                            <span className="cv-tag-pill bg-white text-[#231B15] shadow-sm font-medium">Adobe XD</span>
                            <span className="cv-tag-pill bg-white text-[#231B15] shadow-sm font-medium">Git / GitHub</span>
                            <span className="cv-tag-pill bg-white text-[#231B15] shadow-sm font-medium">Postman</span>
                            <span className="cv-tag-pill bg-white text-[#231B15] shadow-sm font-medium">Photoshop</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* 03 // Education & Languages */}
                    <div className="cv-section-box">
                      <h2 className="text-xs print:text-[11px] font-mono uppercase tracking-widest text-[#B85D19] font-bold mb-3 print:mb-1.5">03 // Education & Languages</h2>
                      <div className="mb-2.5 print:mb-1">
                        <h3 className="text-sm print:text-[11.5px] font-bold text-[#201812] leading-snug">B.Sc. in Computer & Information Systems (C.I.S)</h3>
                        <p className="text-xs print:text-[10px] text-[#68594D] mt-1 print:mt-0.5">Alexandria University · 2018 – 2022</p>
                      </div>
                      <div className="border-t border-[#DDD1C2] pt-2.5 mt-2.5 print:pt-1.5 print:mt-1 flex justify-between text-xs print:text-[10px]">
                        <div><strong className="text-[#201812]">Arabic:</strong> <span className="text-[#68594D]">Native</span></div>
                        <div><strong className="text-[#201812]">English:</strong> <span className="text-[#68594D]">Upper-Intermediate (B2)</span></div>
                      </div>
                    </div>

                    {/* Beyond Front-End Practical Competencies */}
                    <div className="cv-section-box">
                      <div className="cv-section-header mb-3 print:mb-1.5">
                        <h2 className="text-xs print:text-[11px] font-mono uppercase tracking-widest text-[#B85D19] font-bold">Beyond Front-End</h2>
                        <span className="text-[10px] font-mono text-[#68594D] font-semibold">Systems & QA</span>
                      </div>
                      <div className="space-y-2.5 print:space-y-1.5">
                        <div className="cv-beyond-card">
                          <div className="cv-beyond-card-header">
                            <span className="cv-beyond-card-title">Backend & Full-Stack</span>
                            <span className="cv-beyond-card-tag">Node / APIs</span>
                          </div>
                          <p className="cv-beyond-card-desc">
                            Building secure REST APIs, server logic & data exchange.
                          </p>
                        </div>

                        <div className="cv-beyond-card">
                          <div className="cv-beyond-card-header">
                            <span className="cv-beyond-card-title">Business Systems & Integrations</span>
                            <span className="cv-beyond-card-tag">ERP / POS</span>
                          </div>
                          <p className="cv-beyond-card-desc">
                            E-Commerce integrations with POS, ERP workflows & HRMS.
                          </p>
                        </div>

                        <div className="cv-beyond-card">
                          <div className="cv-beyond-card-header">
                            <span className="cv-beyond-card-title">Software Testing & QA</span>
                            <span className="cv-beyond-card-tag">Manual & API</span>
                          </div>
                          <p className="cv-beyond-card-desc">
                            Functional, regression, exploratory & bug reporting before delivery.
                          </p>
                        </div>

                        <div className="cv-beyond-card">
                          <div className="cv-beyond-card-header">
                            <span className="cv-beyond-card-title">IT Support & Troubleshooting</span>
                            <span className="cv-beyond-card-tag">2+ Yrs Maint.</span>
                          </div>
                          <p className="cv-beyond-card-desc">
                            Hardware & software diagnostics, maintenance & problem-solving.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Key Stats Box */}
                    <div className="cv-section-box bg-[#EFE8DD] text-center">
                      <div className="grid grid-cols-3 gap-1.5">
                        <div>
                          <span className="block text-base print:text-[14px] font-bold text-[#B85D19] font-mono leading-none mb-1">13+</span>
                          <span className="text-[9.5px] print:text-[8.5px] font-mono text-[#68594D] uppercase font-semibold">Live Systems</span>
                        </div>
                        <div className="border-x border-[#DDD1C2]">
                          <span className="block text-base print:text-[14px] font-bold text-[#B85D19] font-mono leading-none mb-1">18</span>
                          <span className="text-[9.5px] print:text-[8.5px] font-mono text-[#68594D] uppercase font-semibold">Certificates</span>
                        </div>
                        <div>
                          <span className="block text-base print:text-[14px] font-bold text-[#B85D19] font-mono leading-none mb-1">68+</span>
                          <span className="text-[9.5px] print:text-[8.5px] font-mono text-[#68594D] uppercase font-semibold">GitHub Repos</span>
                        </div>
                      </div>
                    </div>

                  </div>

                  {/* Right Column: Experience & Featured Flagship Platforms */}
                  <div className="cv-grid-right space-y-3.5 print:space-y-0">

                    {/* 04 // Work Experience */}
                    <div className="cv-section-box">
                      <h2 className="text-xs print:text-[11.5px] font-mono uppercase tracking-widest text-[#B85D19] font-bold mb-3.5 print:mb-2">04 // Work Experience</h2>

                      <div>
                        {/* Job 1 */}
                        <div>
                          <div className="flex flex-wrap justify-between items-baseline mb-1">
                            <h3 className="cv-exp-title">Front-End Web Developer</h3>
                            <span className="text-xs print:text-[11px] font-mono text-[#B85D19] font-bold">March 2022 – Present · Full-Time</span>
                          </div>
                          <p className="cv-exp-company">Missan Elmaharya for Information Technology</p>
                          <ul className="cv-exp-list">
                            <li>Spearheaded the development, optimization, and lifecycle deployment of multiple enterprise platforms.</li>
                            <li>Engineered high-performance web applications using <strong>Next.js, React.js, and Tailwind CSS</strong> with 95+ PageSpeed.</li>
                            <li>Built interactive timeline animations with <strong>GSAP</strong> to elevate storytelling and increase retention.</li>
                            <li>Connected views with robust back-end microservices built on <strong>Node.js, Express, and PostgreSQL</strong>.</li>
                          </ul>
                        </div>

                        {/* Job 2 */}
                        <div className="cv-exp-divider">
                          <div className="flex flex-wrap justify-between items-baseline mb-1">
                            <h3 className="cv-exp-title">Front-End Developer & UI Designer</h3>
                            <span className="text-xs print:text-[11px] font-mono text-[#B85D19] font-bold">March 2022 – Present · Contract</span>
                          </div>
                          <p className="cv-exp-company">Freelance & Independent Client Engagements (Saudi Arabia, Egypt, Gulf)</p>
                          <ul className="cv-exp-list">
                            <li>Delivered complete digital solutions for legal firms, e-commerce storefronts, and gaming portals from UI/UX to code.</li>
                            <li>Designed wireframes and responsive design systems in <strong>Figma</strong> and converted them into accessible code.</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* 05 // Featured Flagship Platforms */}
                    <div className="cv-section-box flex-1 flex flex-col justify-between">
                      <div className="cv-section-header">
                        <h2 className="text-xs print:text-[11.5px] font-mono uppercase tracking-widest text-[#B85D19] font-bold">05 // Featured Flagship Platforms</h2>
                        <span className="text-[10px] print:text-[10.5px] font-mono text-[#68594D] font-semibold">See Page 2 for All 13 Systems</span>
                      </div>

                      <div className="space-y-2.5 print:space-y-2 flex-1 flex flex-col justify-between">

                        {/* Project 1 */}
                        <div className="cv-item-card">
                          <div className="cv-item-card-header">
                            <h3 className="text-sm print:text-[11.5px] font-bold text-[#201812]">Hawash Law Firm — Corporate Platform</h3>
                            <a href="https://hawashlawfirm.com/" target="_blank" rel="noopener noreferrer" className="px-2 py-0.5 rounded text-[10.5px] print:text-[9px] font-mono font-bold hover:underline bg-[#FAF5EE] border border-[#DDD1C2] text-[#B85D19]">
                              hawashlawfirm.com ↗
                            </a>
                          </div>
                          <p className="cv-item-card-desc">
                            Full-scale legal platform providing international corporate consultation, case management workflows, and dynamic directories.
                          </p>
                          <div className="flex flex-wrap gap-1.5 mt-auto pt-1">
                            <span className="cv-tag-pill">Next.js 14 App Router</span>
                            <span className="cv-tag-pill">Node.js</span>
                            <span className="cv-tag-pill">PostgreSQL</span>
                            <span className="cv-tag-pill">Tailwind CSS</span>
                          </div>
                        </div>

                        {/* Project 2 */}
                        <div className="cv-item-card">
                          <div className="cv-item-card-header">
                            <h3 className="text-sm print:text-[11.5px] font-bold text-[#201812]">Jawlah Games Platform — Edutainment & SaaS</h3>
                            <a href="https://jawlahsa.com/" target="_blank" rel="noopener noreferrer" className="px-2 py-0.5 rounded text-[10.5px] print:text-[9px] font-mono font-bold hover:underline bg-[#FAF5EE] border border-[#DDD1C2] text-[#B85D19]">
                              jawlahsa.com ↗
                            </a>
                          </div>
                          <p className="cv-item-card-desc">
                            Arab educational gaming portal bridging learning & gaming with 5 interactive adventures, integrated with an Admin Dashboard.
                          </p>
                          <div className="flex flex-wrap gap-1.5 mt-auto pt-1">
                            <span className="cv-tag-pill">React.js</span>
                            <span className="cv-tag-pill">Vite</span>
                            <span className="cv-tag-pill">Tailwind CSS</span>
                            <span className="cv-tag-pill">Analytics Dashboard</span>
                          </div>
                        </div>

                        {/* Project 3 */}
                        <div className="cv-item-card">
                          <div className="cv-item-card-header">
                            <h3 className="text-sm print:text-[11.5px] font-bold text-[#201812]">Hamsat Home — Modern E-Commerce Platform</h3>
                            <a href="https://hamsathome.com/" target="_blank" rel="noopener noreferrer" className="px-2 py-0.5 rounded text-[10.5px] print:text-[9px] font-mono font-bold hover:underline bg-[#FAF5EE] border border-[#DDD1C2] text-[#B85D19]">
                              hamsathome.com ↗
                            </a>
                          </div>
                          <p className="cv-item-card-desc">
                            High-conversion homeware storefront with multi-category product catalog, real-time cart state, and optimized fast checkout.
                          </p>
                          <div className="flex flex-wrap gap-1.5 mt-auto pt-1">
                            <span className="cv-tag-pill">React.js</span>
                            <span className="cv-tag-pill">Node.js</span>
                            <span className="cv-tag-pill">PostgreSQL</span>
                            <span className="cv-tag-pill">Express.js</span>
                          </div>
                        </div>

                      </div>
                    </div>

                  </div>
                </div>

              </div>
            </main>

            {/* PAGE 2: Client Platforms & 18 Certifications */}
            <main className="cv-page max-w-4xl mx-auto bg-[#FAF7F2] border border-[#DDD1C2] rounded-2xl overflow-hidden shadow-2xl print:rounded-none print:border-none print:shadow-none" dir="ltr">

              {/* OS Top Window Bar (Page 2) */}
              <div className="cv-top-bar bg-[#EDE5DA] border-b border-[#DDD1C2] px-5 py-2 flex items-center justify-between shrink-0">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#E11D48] inline-block"></span>
                  <span className="w-3 h-3 rounded-full bg-[#D97706] inline-block"></span>
                  <span className="w-3 h-3 rounded-full bg-[#1E8E3E] inline-block"></span>
                </div>
                <div className="font-mono text-xs text-[#68594D] tracking-wider font-semibold">
                  ~/mohamed-metwally/resume-os.pdf [Page 2/2]
                </div>
                <div className="flex items-center gap-1.5 font-mono text-xs text-[#1E8E3E] font-semibold">
                  <span className="w-2 h-2 rounded-full bg-[#1E8E3E] animate-pulse"></span>
                  <span>VERIFIED CREDENTIALS</span>
                </div>
              </div>

              <div className="cv-body-p2">

                {/* Page 2 Header */}
                <div className="flex justify-between items-center border-b border-[#DDD1C2] pb-3 mb-2.5 shrink-0">
                  <div>
                    <h2 className="text-xl print:text-[18px] font-serif font-bold text-[#201812]">Production Platforms & Verified Credentials</h2>
                    <p className="text-xs print:text-[12px] text-[#68594D] font-medium mt-0.5">Detailed client delivery records and professional engineering certifications</p>
                  </div>
                  <div className="text-right font-mono text-xs print:text-[11.5px] text-[#68594D] font-semibold">
                    <span className="text-[#B85D19] font-bold">13</span> Live Projects · <span className="text-[#B85D19] font-bold">18</span> Credentials
                  </div>
                </div>

                {/* 06 // Client Platforms & Web Systems (6 Additional Live Projects) */}
                <section className="cv-section-box shrink-0 mb-3.5 print:mb-2.5">
                  <div className="cv-section-header">
                    <h2 className="text-xs print:text-[11.5px] font-mono uppercase tracking-widest text-[#B85D19] font-bold">06 // Additional Live Client Platforms (E-Commerce, Legal & UI/UX)</h2>
                    <span className="text-xs print:text-[11px] font-mono text-[#68594D] font-semibold">Selected from 13 Platforms</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 print:gap-2.5">

                    {/* Project 4 */}
                    <div className="cv-item-card">
                      <div className="cv-item-card-header">
                        <h3 className="text-sm print:text-[12.5px] font-bold text-[#201812] leading-tight">Al-Resala Legal Firm</h3>
                        <a href="https://rsallaw.com/" target="_blank" rel="noopener noreferrer" className="px-2 py-0.5 rounded text-[10.5px] print:text-[9.5px] font-mono font-bold hover:underline bg-[#FAF5EE] border border-[#DDD1C2] text-[#B85D19]">rsallaw.com ↗</a>
                      </div>
                      <p className="cv-item-card-desc">
                        Corporate legal consulting platform with client consultation booking workflows and complete PostgreSQL database integration.
                      </p>
                      <div className="flex flex-wrap gap-1.5 mt-auto pt-1">
                        <span className="cv-tag-pill">#React.js</span>
                        <span className="cv-tag-pill">#Node.js</span>
                        <span className="cv-tag-pill">#PostgreSQL</span>
                        <span className="cv-tag-pill">#Bootstrap</span>
                      </div>
                    </div>

                    {/* Project 5 */}
                    <div className="cv-item-card">
                      <div className="cv-item-card-header">
                        <h3 className="text-sm print:text-[12.5px] font-bold text-[#201812] leading-tight">Ibrahim Al-Zahrani & Ahmed Al-Malki Law</h3>
                        <a href="https://i-a-lawco.com/" target="_blank" rel="noopener noreferrer" className="px-2 py-0.5 rounded text-[10.5px] print:text-[9.5px] font-mono font-bold hover:underline bg-[#FAF5EE] border border-[#DDD1C2] text-[#B85D19]">i-a-lawco.com ↗</a>
                      </div>
                      <p className="cv-item-card-desc">
                        Prestigious Saudi law firm portal featuring legal consultation booking, services directory, and dynamic client management.
                      </p>
                      <div className="flex flex-wrap gap-1.5 mt-auto pt-1">
                        <span className="cv-tag-pill">#React.js</span>
                        <span className="cv-tag-pill">#REST_API</span>
                        <span className="cv-tag-pill">#Responsive</span>
                      </div>
                    </div>

                    {/* Project 6 */}
                    <div className="cv-item-card">
                      <div className="cv-item-card-header">
                        <h3 className="text-sm print:text-[12.5px] font-bold text-[#201812] leading-tight">TrendLine E-Commerce Platform</h3>
                        <a href="https://trendlineeg.com/" target="_blank" rel="noopener noreferrer" className="px-2 py-0.5 rounded text-[10.5px] print:text-[9.5px] font-mono font-bold hover:underline bg-[#FAF5EE] border border-[#DDD1C2] text-[#B85D19]">trendlineeg.com ↗</a>
                      </div>
                      <p className="cv-item-card-desc">
                        High-traffic fashion e-commerce storefront with optimized product filters, real-time inventory tracking, and swift checkout.
                      </p>
                      <div className="flex flex-wrap gap-1.5 mt-auto pt-1">
                        <span className="cv-tag-pill">#Next.js</span>
                        <span className="cv-tag-pill">#TailwindCSS</span>
                        <span className="cv-tag-pill">#ECommerce</span>
                      </div>
                    </div>

                    {/* Project 7 */}
                    <div className="cv-item-card">
                      <div className="cv-item-card-header">
                        <h3 className="text-sm print:text-[12.5px] font-bold text-[#201812] leading-tight">Interactive Desktop OS Portfolio</h3>
                        <a href="https://mohammed-metwally.web.app/" target="_blank" rel="noopener noreferrer" className="px-2 py-0.5 rounded text-[10.5px] print:text-[9.5px] font-mono font-bold hover:underline bg-[#EBF8EE] border border-[#B6E5C2] text-[#1E8E3E]">Live Demo ↗</a>
                      </div>
                      <p className="cv-item-card-desc">
                        Complete desktop OS workspace in browser with interactive draggable windows, dock navigation, live terminal CLI, and GSAP.
                      </p>
                      <div className="flex flex-wrap gap-1.5 mt-auto pt-1">
                        <span className="cv-tag-pill">#React.js</span>
                        <span className="cv-tag-pill">#GSAP</span>
                        <span className="cv-tag-pill">#TailwindCSS</span>
                      </div>
                    </div>

                    {/* Project 8 */}
                    <div className="cv-item-card">
                      <div className="cv-item-card-header">
                        <h3 className="text-sm print:text-[12.5px] font-bold text-[#201812] leading-tight">Missan Al-Mahariya & Lawyer Portals</h3>
                        <a href="https://missanvip.com/" target="_blank" rel="noopener noreferrer" className="px-2 py-0.5 rounded text-[10.5px] print:text-[9.5px] font-mono font-bold hover:underline bg-[#FAF5EE] border border-[#DDD1C2] text-[#B85D19]">missanvip.com ↗</a>
                      </div>
                      <p className="cv-item-card-desc">
                        Corporate portal and legal workflow systems delivering high-security client operations, services catalog, and multi-tenant views.
                      </p>
                      <div className="flex flex-wrap gap-1.5 mt-auto pt-1">
                        <span className="cv-tag-pill">#Production</span>
                        <span className="cv-tag-pill">#React</span>
                        <span className="cv-tag-pill">#Enterprise</span>
                      </div>
                    </div>

                    {/* Project 9 */}
                    <div className="cv-item-card">
                      <div className="cv-item-card-header">
                        <h3 className="text-sm print:text-[12.5px] font-bold text-[#201812] leading-tight">Ramis Hotel & EDU Weaver (UI/UX)</h3>
                        <a href="https://www.behance.net/mohamedmetwally29" target="_blank" rel="noopener noreferrer" className="px-2 py-0.5 rounded text-[10.5px] print:text-[9.5px] font-mono font-bold hover:underline bg-[#F0F4FF] border border-[#CCD9FC] text-[#0056D2]">Behance ↗</a>
                      </div>
                      <p className="cv-item-card-desc">
                        Comprehensive UI/UX design systems, user journeys, accessibility testing, and responsive prototype implementations.
                      </p>
                      <div className="flex flex-wrap gap-1.5 mt-auto pt-1">
                        <span className="cv-tag-pill">#Figma</span>
                        <span className="cv-tag-pill">#AdobeXD</span>
                        <span className="cv-tag-pill">#DesignSystem</span>
                      </div>
                    </div>

                  </div>
                </section>

                {/* 07 // Verified Certifications & Nanodegrees (18 Credentials Breakdown) */}
                <section className="cv-section-box flex-1 flex flex-col justify-between">
                  <div className="cv-section-header">
                    <h2 className="text-xs print:text-[11.5px] font-mono uppercase tracking-widest text-[#B85D19] font-bold">07 // Verified Engineering Certifications & Nanodegrees (18 Credentials)</h2>
                    <span className="text-xs print:text-[11px] font-mono text-[#68594D] font-semibold">Meta · IBM · Udacity · Egypt FWD</span>
                  </div>

                  <div className="space-y-2.5 print:space-y-2 flex-1 flex flex-col justify-between">

                    {/* Flagship 1: Meta Front-End Developer Specialization */}
                    <div className="cv-item-card">
                      <div className="cv-item-card-header">
                        <div className="flex items-center gap-2">
                          <span className="w-2.5 h-2.5 rounded-full bg-[#0081fb] inline-block"></span>
                          <h3 className="text-sm print:text-[13px] font-bold text-[#201812]">Meta Front-End Developer Professional Specialization</h3>
                        </div>
                        <span className="text-xs print:text-[11px] font-mono text-[#B85D19] font-bold">9 Courses Certified · Oct 2024</span>
                      </div>
                      <p className="cv-item-card-desc">
                        Comprehensive professional engineering certification issued by <strong>Meta</strong>, covering modern React.js architectures, UI/UX systems, state management, asynchronous JavaScript, and production deployment.
                      </p>
                      <div className="cv-courses-grid">
                        <div className="cv-course-tile">✦ Front-End Developer Capstone</div>
                        <div className="cv-course-tile">✦ Advanced React (Hooks & Context)</div>
                        <div className="cv-course-tile">✦ Programming with JavaScript (ES6+)</div>
                        <div className="cv-course-tile">✦ Principles of UX/UI Design (Figma)</div>
                        <div className="cv-course-tile">✦ HTML and CSS in Depth</div>
                        <div className="cv-course-tile">✦ Version Control (Git & GitHub)</div>
                        <div className="cv-course-tile">✦ Coding Interview Preparation</div>
                        <div className="cv-course-tile">✦ React Basics & Components</div>
                        <div className="cv-course-tile">✦ Web Engineering Foundations</div>
                      </div>
                    </div>

                    {/* Flagship 2 & 3 in 2 Columns */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 print:gap-2.5">

                      {/* Udacity Nanodegree */}
                      <div className="cv-item-card">
                        <div className="cv-item-card-header">
                          <div className="flex items-center gap-1.5">
                            <span className="w-2 h-2 rounded-full bg-[#02b3e4] inline-block"></span>
                            <h3 className="text-sm print:text-[12.5px] font-bold text-[#201812]">Professional Front-End Web Development</h3>
                          </div>
                          <span className="text-xs print:text-[10.5px] font-mono text-[#B85D19] font-semibold">Jan 2023</span>
                        </div>
                        <p className="text-xs print:text-[11px] text-[#68594D] font-semibold mb-1">Egypt FWD / Udacity Nanodegree Program</p>
                        <p className="cv-item-card-desc">
                          Intensive front-end engineering program focused on asynchronous JavaScript, build pipelines, single-page application architectures, and web performance optimization.
                        </p>
                        <div className="cv-skills-highlight">Skills: Async JS · Webpack · Single-Page Apps · Performance</div>
                      </div>

                      {/* IBM React Certification */}
                      <div className="cv-item-card">
                        <div className="cv-item-card-header">
                          <div className="flex items-center gap-1.5">
                            <span className="w-2 h-2 rounded-full bg-[#1f70c1] inline-block"></span>
                            <h3 className="text-sm print:text-[12.5px] font-bold text-[#201812]">Developing Front-End Apps with React</h3>
                          </div>
                          <span className="text-xs print:text-[10.5px] font-mono text-[#B85D19] font-semibold">IBM Certified</span>
                        </div>
                        <p className="text-xs print:text-[11px] text-[#68594D] font-semibold mb-1">IBM Cloud & Enterprise Application Track</p>
                        <p className="cv-item-card-desc">
                          Enterprise React application development, component hierarchies, stateful hooks, Redux integration, and cloud native deployment pipelines.
                        </p>
                        <div className="cv-skills-highlight">Skills: React · Redux · State Management · Cloud Native</div>
                      </div>

                    </div>

                    {/* Additional Tracks */}
                    <div className="cv-item-card py-2.5 px-3.5 print:p-2.5 flex flex-row flex-wrap justify-between items-center text-xs print:text-[10.5px] gap-2">
                      <div className="flex items-center gap-2">
                        <span className="text-[#B85D19] font-bold">✦</span>
                        <strong className="text-[#201812]">Challenger Front-End Web Development Track</strong>
                        <span className="text-[#68594D]">(Udacity / Egypt FWD)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-[#1E8E3E] font-bold">●</span>
                        <strong className="text-[#201812]">Microsoft Front-End Professional Certificate</strong>
                        <span className="text-[#68594D]">(Coursera · In Progress)</span>
                      </div>
                    </div>

                  </div>
                </section>

                {/* Page 2 Footer */}
                <footer className="border-t border-[#DDD1C2] pt-2.5 mt-2 flex flex-row justify-between items-center text-xs print:text-[9.5px] font-mono text-[#68594D] shrink-0">
                  <div>
                    Mohamed Metwally · Full-Stack & Front-End Developer · <a href="https://mohammed-metwally.web.app/" target="_blank" rel="noopener noreferrer" className="text-[#B85D19] font-semibold hover:underline whitespace-nowrap">mohammed-metwally.web.app</a>
                  </div>
                  <div className="flex items-center gap-1.5 text-[#231B15] font-semibold whitespace-nowrap">
                    <span className="text-[#1E8E3E]">●</span> Available for Full-Time Roles & International Freelance
                  </div>
                </footer>

              </div>
            </main>
          </>
        )}

        {/* =========================================================
            OPTION B: 100% ATS-FRIENDLY VIEW (Standard Single-Column)
            ========================================================= */}
        {viewMode === 'ats' && (
          <main className="ats-page" dir="ltr">

            {/* ATS Header */}
            <header className="ats-header">
              <h1 className="ats-name">MOHAMED METWALLY</h1>
              <p className="ats-title">Front-End Web Developer | Solid Back-End Background</p>
              <div className="ats-contact-line">
                <span>Alexandria, Egypt</span>
                <span>•</span>
                <span>+201021340475</span>
                <span>•</span>
                <a href="mailto:m.metwally.rzq@gmail.com">m.metwally.rzq@gmail.com</a>
                <span>•</span>
                <a href="https://mohammed-metwally.web.app" target="_blank" rel="noopener noreferrer">Portfolio</a>
                <span>•</span>
                <a href="https://github.com/Mo-metwally" target="_blank" rel="noopener noreferrer">GitHub</a>
                <span>•</span>
                <a href="https://linkedin.com/in/mohamed-metwally-355969248" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <span>•</span>
                <a href="https://behance.net/mohamedmetwally29" target="_blank" rel="noopener noreferrer">Behance</a>
              </div>
            </header>

            {/* ATS Section 1: Professional Summary */}
            <section>
              <h2 className="ats-section-title">PROFESSIONAL SUMMARY</h2>
              <p className="text-[13px] text-gray-800 leading-relaxed text-justify">
                Detail-driven <strong>Front-End Web Developer & UI/UX Architect</strong> with 4+ years of hands-on experience engineering high-performance, accessible, and scalable web platforms. Specialized in <strong>Next.js 14, React.js, GSAP, and Tailwind CSS</strong>, backed by a solid foundation in <strong>Node.js, Express, PostgreSQL, and RESTful APIs</strong>. Architected <strong>13 production client platforms</strong> (E-Commerce, Legal Portals, and Edutainment SaaS) and holds <strong>18 verified credentials</strong> across Meta, IBM, and Udacity.
              </p>
            </section>

            {/* ATS Section 2: Technical Skills */}
            <section>
              <h2 className="ats-section-title">TECHNICAL SKILLS</h2>
              <div className="ats-skills-block space-y-1">
                <div>
                  <strong>Front-End & Mobile Web:</strong> Next.js 14 (App Router & SSR), React.js, JavaScript (ES6+), GSAP Animations, Tailwind CSS, Vite.js, HTML5, CSS3, Sass/SCSS, Bootstrap 5, Redux, Responsive Web Design, Web Accessibility (a11y), Performance Optimization.
                </div>
                <div>
                  <strong>Back-End & Databases:</strong> Node.js, Express.js, PostgreSQL, RESTful API Design & Integration, Firebase, User Authentication, Database Schema Design.
                </div>
                <div>
                  <strong>Beyond Front-End & Systems Integration:</strong> ERP & POS Systems Integration, HRMS workflows, Manual & API Testing (Functional, Regression & Exploratory), IT Diagnostics & Troubleshooting (Hardware & Software Maintenance), Client Requirement Analysis & Technical Support.
                </div>
                <div>
                  <strong>UI/UX & Engineering Tools:</strong> Figma, Adobe XD, Photoshop, Git, GitHub, Postman, Webpack, Vercel, Production Deployment, Agile Methodologies.
                </div>
              </div>
            </section>

            {/* ATS Section 3: Professional Experience */}
            <section>
              <h2 className="ats-section-title">PROFESSIONAL WORK EXPERIENCE</h2>

              {/* Job 1 */}
              <div className="ats-item">
                <div className="ats-item-header">
                  <span className="ats-item-title">Front-End Web Developer</span>
                  <span className="ats-item-date">March 2022 – Present</span>
                </div>
                <div className="ats-item-subtitle mb-1">Missan Elmaharya for Information Technology · Full-Time</div>
                <ul className="ats-bullet-list">
                  <li>Spearheaded the development, optimization, and lifecycle deployment of multiple enterprise platforms.</li>
                  <li>Engineered high-performance web applications using <strong>Next.js, React.js, and Tailwind CSS</strong> achieving 95+ PageSpeed scores.</li>
                  <li>Built interactive timeline animations with <strong>GSAP</strong> to elevate storytelling and increase user retention.</li>
                  <li>Connected views with robust back-end microservices built on <strong>Node.js, Express, and PostgreSQL</strong>.</li>
                </ul>
              </div>

              {/* Job 2 */}
              <div className="ats-item">
                <div className="ats-item-header">
                  <span className="ats-item-title">Front-End Developer & UI Designer</span>
                  <span className="ats-item-date">March 2022 – Present</span>
                </div>
                <div className="ats-item-subtitle mb-1">Freelance & Independent Client Engagements (Saudi Arabia, Egypt, Gulf Region) · Contract</div>
                <ul className="ats-bullet-list">
                  <li>Delivered complete digital solutions for legal firms, e-commerce storefronts, and gaming portals from UI/UX design to code.</li>
                  <li>Designed wireframes, prototypes, and responsive design systems in <strong>Figma</strong> and converted them into accessible, production-ready code.</li>
                  <li>Collaborated closely with international stakeholders to implement custom business logic and payment integrations.</li>
                </ul>
              </div>
            </section>

            {/* ATS Section 3.5: Beyond Front-End Practical Competencies */}
            <section>
              <h2 className="ats-section-title">BEYOND FRONT-END DEVELOPMENT (PRACTICAL SYSTEMS & IT EXPERTISE)</h2>
              <p className="text-[12.5px] text-gray-800 leading-relaxed mb-2 text-justify">
                Beyond front-end development, gained extensive hands-on experience in several critical software development and IT domains:
              </p>
              <div className="space-y-2 text-[12.5px] text-gray-800">
                <div>
                  <strong>1. Full-Stack & Backend Development (Node.js · Express.js · REST APIs · Server Logic):</strong> Worked on freelance platforms developing backend functionality, building secure RESTful APIs, handling business logic, and connecting web applications. Experienced in integrating e-commerce storefronts with ERP systems to streamline operational data exchange.
                </div>
                <div>
                  <strong>2. Business Systems & Integrations (ERP · POS · HRMS · Workflow Automation):</strong> Experience with business software solutions including Point of Sale (POS) and Human Resource Management Systems (HRMS). Built operational workflows, implemented system features, and gained real-world business environment experience understanding how software supports daily enterprise operations.
                </div>
                <div>
                  <strong>3. Software Testing & Quality Assurance (Manual, API & Regression Testing):</strong> Executed manual testing on web applications and APIs to verify end-to-end user flows, functional validation, regression testing, bug tracking, and verifying issue fixes before project delivery.
                </div>
                <div>
                  <strong>4. IT Support & Technical Troubleshooting (Hardware & Software Maintenance):</strong> Approximately 2 years of technical experience in PC/laptop maintenance, diagnosing hardware and software faults, and troubleshooting complex technical issues, strengthening systematic problem-solving skills.
                </div>
                <div>
                  <strong>5. Client Communication & Solution Delivery:</strong> Communicating directly with clients to translate business goals into actionable technical specifications, delivering expected solutions, and providing continuous post-launch support.
                </div>
              </div>
            </section>

            {/* ATS Section 4: Key Featured Platforms */}
            <section>
              <h2 className="ats-section-title">KEY PRODUCTION PLATFORMS & SYSTEMS (13 Live Systems)</h2>
              <div className="space-y-3">
                <div className="ats-item">
                  <div className="ats-item-header">
                    <span className="ats-item-title">Hawash Law Firm — Corporate Legal Platform</span>
                    <a href="https://hawashlawfirm.com/" target="_blank" rel="noopener noreferrer" className="text-xs text-blue-700 underline font-mono">hawashlawfirm.com</a>
                  </div>
                  <p className="text-[12.5px] text-gray-700">Full-scale corporate platform featuring international legal consultation workflows, case management, and dynamic lawyer directories. Built with <strong>Next.js 14 App Router, Node.js, PostgreSQL, and Tailwind CSS</strong>.</p>
                </div>

                <div className="ats-item">
                  <div className="ats-item-header">
                    <span className="ats-item-title">Jawlah Games Platform — Edutainment & SaaS</span>
                    <a href="https://jawlahsa.com/" target="_blank" rel="noopener noreferrer" className="text-xs text-blue-700 underline font-mono">jawlahsa.com</a>
                  </div>
                  <p className="text-[12.5px] text-gray-700">Arab educational gaming portal bridging learning & gaming with 5 interactive adventures, integrated with an administrative management dashboard. Built with <strong>React.js, Vite, and Tailwind CSS</strong>.</p>
                </div>

                <div className="ats-item">
                  <div className="ats-item-header">
                    <span className="ats-item-title">Hamsat Home — Modern E-Commerce Platform</span>
                    <a href="https://hamsathome.com/" target="_blank" rel="noopener noreferrer" className="text-xs text-blue-700 underline font-mono">hamsathome.com</a>
                  </div>
                  <p className="text-[12.5px] text-gray-700">High-conversion homeware storefront with multi-category product catalog, real-time cart state, and optimized fast checkout. Built with <strong>React.js, Node.js, Express.js, and PostgreSQL</strong>.</p>
                </div>

                <div className="ats-item">
                  <div className="ats-item-header">
                    <span className="ats-item-title">Al-Resala Legal Firm & Consultation Portal</span>
                    <a href="https://rsallaw.com/" target="_blank" rel="noopener noreferrer" className="text-xs text-blue-700 underline font-mono">rsallaw.com</a>
                  </div>
                  <p className="text-[12.5px] text-gray-700">Corporate legal consulting platform with client consultation booking workflows and complete PostgreSQL database integration. Built with <strong>React.js, Node.js, and PostgreSQL</strong>.</p>
                </div>

                <div className="ats-item">
                  <div className="ats-item-header">
                    <span className="ats-item-title">TrendLine E-Commerce & Interactive Portfolio OS</span>
                    <a href="https://trendlineeg.com/" target="_blank" rel="noopener noreferrer" className="text-xs text-blue-700 underline font-mono">trendlineeg.com</a>
                  </div>
                  <p className="text-[12.5px] text-gray-700">High-traffic fashion storefront with optimized product filters, and interactive desktop OS portfolio simulating macOS in browser with draggable windows. Built with <strong>Next.js, React.js, GSAP, and Tailwind CSS</strong>.</p>
                </div>
              </div>
            </section>

            {/* ATS Section 5: Education & Languages */}
            <section>
              <h2 className="ats-section-title">EDUCATION & LANGUAGES</h2>
              <div className="ats-item">
                <div className="ats-item-header">
                  <span className="ats-item-title">B.Sc. in Computer & Information Systems (C.I.S)</span>
                  <span className="ats-item-date">2018 – 2022</span>
                </div>
                <div className="ats-item-subtitle">Alexandria University, Egypt</div>
                <div className="text-[12.5px] text-gray-700 mt-1">
                  <strong>Languages:</strong> Arabic (Native Speaker), English (Upper-Intermediate / Professional Working Proficiency - B2).
                </div>
              </div>
            </section>

            {/* ATS Section 6: Verified Credentials & Nanodegrees */}
            <section>
              <h2 className="ats-section-title">VERIFIED CERTIFICATIONS & NANODEGREES (18 Credentials)</h2>
              <ul className="ats-bullet-list">
                <li><strong>Meta Front-End Developer Professional Specialization:</strong> 9-Course Professional Engineering Credential covering React.js, Advanced Hooks, UI/UX Principles, JavaScript (ES6+), Git/GitHub, and Capstone Project. (Oct 2024 · Meta / Coursera).</li>
                <li><strong>Professional Front-End Web Development Nanodegree:</strong> Intensive front-end architecture program focused on asynchronous JavaScript, build pipelines, and SPA performance optimization. (Jan 2023 · Udacity / Egypt FWD).</li>
                <li><strong>Developing Front-End Apps with React:</strong> Enterprise React application development, component hierarchies, stateful hooks, and Redux integration. (IBM Certified).</li>
                <li><strong>Challenger Front-End Web Development Track:</strong> Advanced web development foundations. (Udacity / Egypt FWD).</li>
                <li><strong>Microsoft Front-End Professional Certificate:</strong> Modern front-end engineering specialization. (Coursera · In Progress).</li>
              </ul>
            </section>

          </main>
        )}

      </div>
    </div>
  );
}
