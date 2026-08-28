import React, { useState } from 'react';
import { 
  Award, 
  ExternalLink, 
  Search, 
  ArrowLeft, 
  Download, 
  ChevronLeft, 
  ChevronRight, 
  Eye
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

// Import all 18 certificates from src/assets/Certificates
import MetaCert from '../../assets/Certificates/Meta Front-End Developer.pdf';
import UdacityProCert from '../../assets/Certificates/professional Front-End UDACITY Certificate.pdf';
import IBMReactCert from '../../assets/Certificates/Developing Front-End Apps with React.pdf';
import UdacityChallengerCert from '../../assets/Certificates/Challenger Front-End UDACITY Certificate.pdf';
import MetaCapstoneCert from '../../assets/Certificates/Front-End Developer Capstone.pdf';
import AdvancedReactCert from '../../assets/Certificates/Advanced React.pdf';
import LearnNextCert from '../../assets/Certificates/Learn Next.js.pdf';
import LearnReactCert from '../../assets/Certificates/Learn React.pdf';
import CallingApisCert from '../../assets/Certificates/Calling APIs with React.pdf';
import JsCert from '../../assets/Certificates/Programming with JavaScript.pdf';
import HtmlCssDepthCert from '../../assets/Certificates/HTML and CSS in depth.pdf';
import VersionControlCert from '../../assets/Certificates/Version Control.pdf';
import UxUiCert from '../../assets/Certificates/Principles of UX-UI Design.pdf';
import StyledComponentsCert from '../../assets/Certificates/Learn Styled Components in React.pdf';
import ClassComponentsCert from '../../assets/Certificates/Learn Class Components in React.pdf';
import CodingInterviewCert from '../../assets/Certificates/Coding Interview Preparation.pdf';
import IntroFrontEndCert from '../../assets/Certificates/Introduction to Front-End Development.pdf';
import PremiereCert from '../../assets/Certificates/Adobe Premiere Pro for.pdf';

export const ALL_CERTIFICATES = [
  // Tier 1: Flagship Nanodegrees & Specializations
  {
    id: 'meta-frontend-specialization',
    title: 'Meta Front-End Developer Specialization',
    titleAr: 'تخصص مطور واجهات أمامية معتمد من ميتا (Meta)',
    issuer: 'Meta',
    issuerAr: 'شركة ميتا العالمية (Meta)',
    issuerTag: 'META CERTIFIED',
    issuerTagAr: 'اعتماد ميتا',
    category: 'Nanodegrees & Specializations',
    tier: 'Flagship Professional Specialization',
    tierAr: 'تخصص مهني احترافي',
    date: 'Oct 2024',
    badgeColor: '#0081fb',
    description: 'Comprehensive 9-course professional certification covering modern React.js architectures, JavaScript ES6+, UI/UX design systems, APIs, unit testing, and capstone applications.',
    descriptionAr: 'شهادة تخصص احترافية شاملة من 9 دورات متقدمة تغطي معماريات React.js الحديثة، جافاسكريبت المتقدمة، أنظمة تصميم UI/UX، ربط الـ APIs، واختبارات البرمجيات.',
    file: MetaCert,
    skills: ['React.js', 'JavaScript ES6+', 'HTML5/CSS3', 'REST APIs', 'UI/UX Design', 'Testing'],
    skillsAr: ['React.js', 'جافاسكريبت ES6+', 'HTML5/CSS3', 'واجهات REST APIs', 'تصميم UI/UX', 'اختبار الكود']
  },
  {
    id: 'udacity-professional-frontend',
    title: 'Professional Front-End Web Development Nanodegree',
    titleAr: 'نانوديجري مطور الواجهات الأمامية الاحترافي',
    issuer: 'Egypt FWD / Udacity',
    issuerAr: 'مبادرة رواد مصر الرقمية / يوداسيتي',
    issuerTag: 'UDACITY NANODEGREE',
    issuerTagAr: 'نانوديجري يوداسيتي',
    category: 'Nanodegrees & Specializations',
    tier: 'Professional Nanodegree',
    tierAr: 'درجة نانوديجري احترافية',
    date: 'Jan 2023',
    badgeColor: '#02b3e4',
    description: 'Intensive front-end engineering program with advanced asynchronous JavaScript, single-page web applications, build pipelines, and production deployments.',
    descriptionAr: 'برنامج هندسة واجهات أمامية مكثف يركز على جافاسكريبت غير المتزامنة (Async JS)، تطبيقات الصفحة الواحدة (SPA)، وأدوات بناء ونشر المشاريع الحية.',
    file: UdacityProCert,
    skills: ['Async JS', 'Web Performance', 'Build Tools', 'Single-Page Apps'],
    skillsAr: ['جافاسكريبت غير متزامنة', 'أداء الويب', 'أدوات البناء', 'تطبيقات SPA']
  },
  {
    id: 'ibm-developing-react',
    title: 'Developing Front-End Apps with React',
    titleAr: 'تطوير تطبيقات الواجهات الأمامية بواسطة React',
    issuer: 'IBM',
    issuerAr: 'شركة IBM العالمية',
    issuerTag: 'IBM CERTIFIED',
    issuerTagAr: 'اعتماد IBM',
    category: 'React & Next.js',
    tier: 'Professional Certificate',
    tierAr: 'شهادة مهنية معتمدة',
    date: 'Verified',
    badgeColor: '#1f70c1',
    description: 'Building enterprise interactive React applications, components hierarchy, stateful hooks, Redux integration, and cloud deployment pipelines.',
    descriptionAr: 'بناء تطبيقات React تفاعلية للمؤسسات، إدارة الحالة بواسطة Hooks و Redux، وتكامل خطوط النشر السحابية.',
    file: IBMReactCert,
    skills: ['React', 'Hooks', 'State Management', 'Cloud Native'],
    skillsAr: ['React', 'Hooks', 'إدارة الحالة', 'تقنيات السحابة']
  },
  {
    id: 'udacity-challenger',
    title: 'Challenger Front-End Web Development',
    titleAr: 'مسار التحدي لتطوير الواجهات الأمامية',
    issuer: 'Udacity / Egypt FWD',
    issuerAr: 'يوداسيتي / مصر الرقمية',
    issuerTag: 'UDACITY TRACK',
    issuerTagAr: 'مسار يوداسيتي',
    category: 'Nanodegrees & Specializations',
    tier: 'Specialized Track',
    tierAr: 'مسار تخصصي معتمد',
    date: 'Verified',
    badgeColor: '#02b3e4',
    description: 'Foundational and intermediate front-end web development with responsive web design, DOM manipulation, and interactive scripting.',
    descriptionAr: 'تأسيس متين ومتقدم في تطوير الويب المتجاوب، التحكم المباشر في عناصر الـ DOM، والبرمجة التفاعلية الحديثة.',
    file: UdacityChallengerCert,
    skills: ['DOM Manipulation', 'Responsive Web', 'JavaScript'],
    skillsAr: ['التحكم في DOM', 'تصميم متجاوب', 'جافاسكريبت']
  },
  {
    id: 'meta-capstone',
    title: 'Front-End Developer Capstone Project',
    titleAr: 'مشروع التخرج العملي لمطور الواجهات من ميتا',
    issuer: 'Meta',
    issuerAr: 'شركة ميتا (Meta)',
    issuerTag: 'META CAPSTONE',
    issuerTagAr: 'مشروع تخرج ميتا',
    category: 'Nanodegrees & Specializations',
    tier: 'Capstone Project',
    tierAr: 'مشروع التخرج الشامل',
    date: 'Verified',
    badgeColor: '#0081fb',
    description: 'Final full-scale capstone web application built with React, interactive booking and ordering systems, and comprehensive unit tests.',
    descriptionAr: 'تطبيق ويب إنتاجي متكامل مبني بواسطة React مع أنظمة حجز وطلب تفاعلية واختبارات فحص شاملة لوحدات الكود.',
    file: MetaCapstoneCert,
    skills: ['Full Project Architecture', 'React State', 'Unit Testing'],
    skillsAr: ['معمارية المشروع الكامل', 'إدارة حالة React', 'اختبارات Unit Testing']
  },

  // Tier 2: React, Next.js & Advanced Engineering
  {
    id: 'meta-advanced-react',
    title: 'Advanced React',
    titleAr: 'تقنيات React المتقدمة',
    issuer: 'Meta',
    issuerAr: 'شركة ميتا (Meta)',
    issuerTag: 'META ADVANCED',
    issuerTagAr: 'React المتقدم',
    category: 'React & Next.js',
    tier: 'Advanced Frameworks',
    tierAr: 'أطر العمل المتقدمة',
    date: 'Verified',
    badgeColor: '#61dafb',
    description: 'Mastering advanced React patterns, custom hooks, render props, higher-order components, Context API, and Jest testing.',
    descriptionAr: 'إتقان أنماط React المتقدمة، الخطافات المخصصة (Custom Hooks)، Context API، واختبار الأكواد باستخدام Jest.',
    file: AdvancedReactCert,
    skills: ['Custom Hooks', 'Context API', 'Jest / Testing', 'HOCs'],
    skillsAr: ['Custom Hooks', 'Context API', 'اختبارات Jest', 'أنماط HOCs']
  },
  {
    id: 'learn-nextjs',
    title: 'Learn Next.js',
    titleAr: 'تطوير تطبيقات الويب بإطار Next.js',
    issuer: 'Certified Track',
    issuerAr: 'مسار معتمد',
    issuerTag: 'NEXT.JS',
    issuerTagAr: 'Next.js',
    category: 'React & Next.js',
    tier: 'Production Framework',
    tierAr: 'إطار العمل الإنتاجي',
    date: 'Verified',
    badgeColor: '#000000',
    description: 'Server-Side Rendering (SSR), Static Site Generation (SSG), App Router, dynamic routing, image optimization, and full-stack Next.js capabilities.',
    descriptionAr: 'الرندرة من جهة الخادم (SSR)، التوليد الثابت (SSG)، الـ App Router، وتوجيه المسارات الديناميكي في Next.js.',
    file: LearnNextCert,
    skills: ['Next.js', 'SSR / SSG', 'App Router', 'Server Actions'],
    skillsAr: ['Next.js', 'SSR / SSG', 'App Router', 'Server Actions']
  },
  {
    id: 'learn-react',
    title: 'Learn React',
    titleAr: 'أساسيات وتطبيقات React.js',
    issuer: 'Certified Track',
    issuerAr: 'مسار معتمد',
    issuerTag: 'REACT.JS',
    issuerTagAr: 'React.js',
    category: 'React & Next.js',
    tier: 'Core Framework',
    tierAr: 'أساسيات إطار العمل',
    date: 'Verified',
    badgeColor: '#61dafb',
    description: 'Fundamentals of component-driven architecture, JSX, virtual DOM, event handling, props, and state lifecycles.',
    descriptionAr: 'المفاهيم الجوهرية لمعمارية المكونات، JSX، الـ Virtual DOM، إدارة الأحداث ودورة حياة المكونات وحالتها.',
    file: LearnReactCert,
    skills: ['React JSX', 'Component Lifecycle', 'Virtual DOM'],
    skillsAr: ['React JSX', 'دورة حياة المكونات', 'Virtual DOM']
  },
  {
    id: 'calling-apis-react',
    title: 'Calling APIs with React',
    titleAr: 'ربط واجهات برمجة التطبيقات (APIs) مع React',
    issuer: 'Certified Track',
    issuerAr: 'مسار معتمد',
    issuerTag: 'API INTEGRATION',
    issuerTagAr: 'تكامل الـ APIs',
    category: 'React & Next.js',
    tier: 'Networking & Data',
    tierAr: 'البيانات والشبكات',
    date: 'Verified',
    badgeColor: '#c88a58',
    description: 'Handling RESTful API endpoints, Axios, Fetch, async error boundaries, caching strategies, and live asynchronous data streams in React.',
    descriptionAr: 'معالجة نقاط اتصال RESTful، استخدام Axios و Fetch، التخزين المؤقت، ومعالجة أخطاء تدفق البيانات الحية.',
    file: CallingApisCert,
    skills: ['REST APIs', 'Async/Await', 'Axios', 'Error Handling'],
    skillsAr: ['واجهات REST APIs', 'Async/Await', 'Axios', 'معالجة الأخطاء']
  },
  {
    id: 'meta-javascript',
    title: 'Programming with JavaScript',
    titleAr: 'البرمجة بلغة جافاسكريبت من ميتا',
    issuer: 'Meta',
    issuerAr: 'شركة ميتا (Meta)',
    issuerTag: 'META JAVASCRIPT',
    issuerTagAr: 'جافاسكريبت ميتا',
    category: 'Core Web & UI/UX',
    tier: 'Language Core',
    tierAr: 'لغة البرمجة الأساسية',
    date: 'Verified',
    badgeColor: '#f7df1e',
    description: 'Deep dive into JavaScript ES6+, functional programming, closures, promises, object-oriented principles, and unit testing.',
    descriptionAr: 'تعمق في ميزات جافاسكريبت الحديثة ES6+، البرمجة الدالية (Functional)، الـ Promises، والبرمجة كائنية التوجه (OOP).',
    file: JsCert,
    skills: ['ES6+', 'Async/Promises', 'OOP', 'Functional JS'],
    skillsAr: ['ES6+', 'Async/Promises', 'البرمجة الكائنية OOP', 'البرمجة الدالية']
  },

  // Tier 3: Core Web, Architecture, UI/UX & Specialized
  {
    id: 'meta-ux-ui',
    title: 'Principles of UX/UI Design',
    titleAr: 'مبادئ تصميم واجهات وتجربة المستخدم من ميتا',
    issuer: 'Meta',
    issuerAr: 'شركة ميتا (Meta)',
    issuerTag: 'META UI/UX',
    issuerTagAr: 'تصميم UI/UX ميتا',
    category: 'Core Web & UI/UX',
    tier: 'Design Systems',
    tierAr: 'أنظمة التصميم',
    date: 'Verified',
    badgeColor: '#a86f3e',
    description: 'User-centered design principles, accessibility (a11y), typography, wireframing in Figma, design systems, and responsive layout theory.',
    descriptionAr: 'مبادئ التصميم الموجه للمستخدم، معايير الوصول (Accessibility)، التايبوجرافي، وبناء النماذج وأنظمة التصميم في Figma.',
    file: UxUiCert,
    skills: ['UX/UI', 'Figma', 'Accessibility (a11y)', 'Design Systems'],
    skillsAr: ['UX/UI', 'فيجما Figma', 'معايير الوصول a11y', 'أنظمة التصميم']
  },
  {
    id: 'meta-html-css-depth',
    title: 'HTML and CSS in Depth',
    titleAr: 'التعمق في تقنيات HTML و CSS من ميتا',
    issuer: 'Meta',
    issuerAr: 'شركة ميتا (Meta)',
    issuerTag: 'META HTML/CSS',
    issuerTagAr: 'HTML/CSS ميتا',
    category: 'Core Web & UI/UX',
    tier: 'Core Web',
    tierAr: 'أساسيات الويب المتقدمة',
    date: 'Verified',
    badgeColor: '#e34f26',
    description: 'Semantic HTML5, CSS Grid, Flexbox, media queries, CSS animations, responsive layouts, and modern cross-browser compatibility.',
    descriptionAr: 'هيكلة دلالية متقدمة بـ HTML5، تخطيطات CSS Grid و Flexbox، التحريك (Animations)، ودعم كافة المتصفحات الحديثة.',
    file: HtmlCssDepthCert,
    skills: ['CSS Grid / Flexbox', 'HTML5 Semantics', 'Animations'],
    skillsAr: ['CSS Grid / Flexbox', 'دلالات HTML5', 'تحريكات CSS']
  },
  {
    id: 'meta-version-control',
    title: 'Version Control with Git & GitHub',
    titleAr: 'إدارة الإصدارات والتحكم في الكود (Git & GitHub)',
    issuer: 'Meta',
    issuerAr: 'شركة ميتا (Meta)',
    issuerTag: 'META GIT',
    issuerTagAr: 'Git من ميتا',
    category: 'Core Web & UI/UX',
    tier: 'Engineering Workflow',
    tierAr: 'سير العمل الهندسي',
    date: 'Verified',
    badgeColor: '#f05032',
    description: 'Branching models, pull requests, merge conflict resolution, repository workflows, and continuous integration practices.',
    descriptionAr: 'إدارة التفرعات (Branches)، طلبات الدمج (PRs)، حل التعارضات، وإدارة مستودعات الكود في بيئات العمل الجماعية.',
    file: VersionControlCert,
    skills: ['Git', 'GitHub', 'CI/CD Workflows', 'Collaboration'],
    skillsAr: ['Git', 'GitHub', 'سير عمل CI/CD', 'العمل الجماعي']
  },
  {
    id: 'styled-components-react',
    title: 'Learn Styled Components in React',
    titleAr: 'تنسيق المكونات بـ Styled Components',
    issuer: 'Certified Track',
    issuerAr: 'مسار معتمد',
    issuerTag: 'CSS-IN-JS',
    issuerTagAr: 'CSS-in-JS',
    category: 'React & Next.js',
    tier: 'Modern Styling',
    tierAr: 'تنسيقات CSS حديثة',
    date: 'Verified',
    badgeColor: '#db7093',
    description: 'CSS-in-JS design paradigms, themed components, dynamic props-based styling, and maintainable styling architecture.',
    descriptionAr: 'منهجية CSS-in-JS، بناء مكونات ديناميكية قابلة للتخصيص عبر Props، وأنظمة الثيمات المتعددة.',
    file: StyledComponentsCert,
    skills: ['Styled-Components', 'CSS-in-JS', 'Design Theming'],
    skillsAr: ['Styled-Components', 'CSS-in-JS', 'أنظمة الثيمات']
  },
  {
    id: 'class-components-react',
    title: 'Learn Class Components in React',
    titleAr: 'فهم وتطوير Class Components في React',
    issuer: 'Certified Track',
    issuerAr: 'مسار معتمد',
    issuerTag: 'REACT ARCHITECTURE',
    issuerTagAr: 'معمارية React',
    category: 'React & Next.js',
    tier: 'Component Lifecycle',
    tierAr: 'دورة حياة المكونات',
    date: 'Verified',
    badgeColor: '#61dafb',
    description: 'Understanding traditional React class lifecycle methods, error boundaries, and legacy enterprise codebase migrations.',
    descriptionAr: 'دوال دورة حياة الكلاسات الكلاسيكية في React، حدود الأخطاء (Error Boundaries)، وترقية المشاريع الضخمة.',
    file: ClassComponentsCert,
    skills: ['Lifecycle Methods', 'Error Boundaries', 'State Migration'],
    skillsAr: ['دوال دورة الحياة', 'معالجة الأخطاء', 'ترقية الحالة']
  },
  {
    id: 'meta-coding-interview',
    title: 'Coding Interview Preparation',
    titleAr: 'الاستعداد للمقابلات التقنية والخوارزميات من ميتا',
    issuer: 'Meta',
    issuerAr: 'شركة ميتا (Meta)',
    issuerTag: 'META INTERVIEW',
    issuerTagAr: 'مقابلات ميتا',
    category: 'Core Web & UI/UX',
    tier: 'Algorithms & Problem Solving',
    tierAr: 'الخوارزميات وحل المشكلات',
    date: 'Verified',
    badgeColor: '#0081fb',
    description: 'Data structures, algorithms, time/space complexity (Big O), problem solving, and technical interview simulations.',
    descriptionAr: 'هياكل البيانات، الخوارزميات، حساب التعقيد الزمني والمكاني (Big O)، وحل المشكلات البرمجية المعقدة.',
    file: CodingInterviewCert,
    skills: ['Algorithms', 'Data Structures', 'Big O Analysis'],
    skillsAr: ['الخوارزميات', 'هياكل البيانات', 'تحليل Big O']
  },
  {
    id: 'meta-intro-frontend',
    title: 'Introduction to Front-End Development',
    titleAr: 'مقدمة في تطوير الواجهات الأمامية من ميتا',
    issuer: 'Meta',
    issuerAr: 'شركة ميتا (Meta)',
    issuerTag: 'META FOUNDATION',
    issuerTagAr: 'تأسيس ميتا',
    category: 'Core Web & UI/UX',
    tier: 'Foundation',
    tierAr: 'المفاهيم التأسيسية',
    date: 'Verified',
    badgeColor: '#0081fb',
    description: 'Foundational concepts of how the web works, client-server relationships, front-end architecture, and development tooling.',
    descriptionAr: 'المفاهيم التأسيسية لعمل شبكة الويب، معمارية العميل والخادم (Client-Server)، وأدوات تطوير الويب الحديثة.',
    file: IntroFrontEndCert,
    skills: ['Web Fundamentals', 'Client-Server', 'Web Tools'],
    skillsAr: ['أساسيات الويب', 'العميل والخادم', 'أدوات التطوير']
  },
  {
    id: 'adobe-premiere',
    title: 'Adobe Premiere Pro for Media & Video',
    titleAr: 'مونتاج وإنتاج الفيديو بـ Adobe Premiere Pro',
    issuer: 'Adobe Certified Track',
    issuerAr: 'مسار أدوبي معتمد',
    issuerTag: 'MEDIA & DESIGN',
    issuerTagAr: 'وسائط وتصميم',
    category: 'Core Web & UI/UX',
    tier: 'Creative Media',
    tierAr: 'الوسائط الإبداعية',
    date: 'Verified',
    badgeColor: '#9999ff',
    description: 'Digital media production, video editing, storytelling, visual assets creation, and multimedia integration.',
    descriptionAr: 'إنتاج الوسائط الرقمية، مونتاج الفيديو، إنشاء الأصول المرئية وتكامل الوسائط المتعددة للويب.',
    file: PremiereCert,
    skills: ['Video Editing', 'Adobe Premiere', 'Media Production'],
    skillsAr: ['مونتاج الفيديو', 'Adobe Premiere', 'إنتاج الوسائط']
  }
];

export default function CertificatesWindowContent() {
  const { lang, t } = useLanguage();
  const [filter, setFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCert, setSelectedCert] = useState(null);

  const categories = [
    { key: 'All', label: lang === 'ar' ? 'الكل' : 'All' },
    { key: 'Nanodegrees & Specializations', label: lang === 'ar' ? 'النانوديجري والتخصصات' : 'Nanodegrees & Specializations' },
    { key: 'React & Next.js', label: 'React & Next.js' },
    { key: 'Core Web & UI/UX', label: lang === 'ar' ? 'الويب وتصميم الواجهات' : 'Core Web & UI/UX' }
  ];

  const filteredCerts = ALL_CERTIFICATES.filter((cert) => {
    const matchesCategory = filter === 'All' || cert.category === filter;
    const titleToSearch = (cert.title + ' ' + (cert.titleAr || '')).toLowerCase();
    const issuerToSearch = (cert.issuer + ' ' + (cert.issuerAr || '')).toLowerCase();
    const query = searchQuery.toLowerCase();
    const matchesSearch = 
      titleToSearch.includes(query) ||
      issuerToSearch.includes(query) ||
      cert.skills.some(s => s.toLowerCase().includes(query)) ||
      (cert.skillsAr || []).some(s => s.toLowerCase().includes(query));
    return matchesCategory && matchesSearch;
  });

  const currentIndex = selectedCert 
    ? ALL_CERTIFICATES.findIndex(c => c.id === selectedCert.id)
    : -1;

  const handlePrevCert = () => {
    if (currentIndex > 0) {
      setSelectedCert(ALL_CERTIFICATES[currentIndex - 1]);
    }
  };

  const handleNextCert = () => {
    if (currentIndex < ALL_CERTIFICATES.length - 1) {
      setSelectedCert(ALL_CERTIFICATES[currentIndex + 1]);
    }
  };

  // -------------------------------------------------------------
  // 1. DETAIL / PREVIEW VIEW WITH BACK BUTTON
  // -------------------------------------------------------------
  if (selectedCert) {
    const certTitle = lang === 'ar' && selectedCert.titleAr ? selectedCert.titleAr : selectedCert.title;
    const certIssuer = lang === 'ar' && selectedCert.issuerAr ? selectedCert.issuerAr : selectedCert.issuer;
    const certTier = lang === 'ar' && selectedCert.tierAr ? selectedCert.tierAr : selectedCert.tier;
    const certTag = lang === 'ar' && selectedCert.issuerTagAr ? selectedCert.issuerTagAr : selectedCert.issuerTag;
    const certSkills = lang === 'ar' && selectedCert.skillsAr ? selectedCert.skillsAr : selectedCert.skills;

    return (
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%', backgroundColor: '#fdfbf7' }}>
        {/* Top Action & Navigation Header */}
        <div style={{ padding: '14px 24px', borderBottom: '1px solid #ede4d6', backgroundColor: '#f7f2ea', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
          {/* Back Button */}
          <button
            onClick={() => setSelectedCert(null)}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '8px 16px',
              borderRadius: '8px',
              backgroundColor: '#241b14',
              color: '#fdfbf7',
              fontSize: '12.5px',
              fontWeight: '600',
              border: 'none',
              cursor: 'pointer',
              boxShadow: '0 2px 6px rgba(0,0,0,0.15)',
              transition: 'background-color 0.15s ease'
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#3d2c1f'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#241b14'}
          >
            <ArrowLeft style={{ width: '15px', height: '15px', color: '#c88a58', transform: lang === 'ar' ? 'rotate(180deg)' : 'none' }} />
            <span>{t.certificates.backBtn}</span>
          </button>

          {/* Certificate Title & Status */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span className="font-mono-code" style={{ fontSize: '10px', fontWeight: '700', textTransform: 'uppercase', padding: '3px 8px', borderRadius: '4px', backgroundColor: '#ebdccb', color: '#8a582c' }}>
              {certTag}
            </span>
            <span style={{ fontSize: '12px', fontWeight: '700', color: '#1a1918' }}>
              {currentIndex + 1} / {ALL_CERTIFICATES.length}
            </span>
          </div>

          {/* Next / Prev & Download Buttons */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <button
              onClick={handlePrevCert}
              disabled={currentIndex === 0}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                padding: '6px 12px',
                borderRadius: '6px',
                backgroundColor: '#ede5d8',
                border: '1px solid #ddd3c2',
                fontSize: '11.5px',
                fontWeight: '600',
                color: currentIndex === 0 ? '#aaa' : '#241b14',
                cursor: currentIndex === 0 ? 'not-allowed' : 'pointer'
              }}
            >
              <ChevronLeft style={{ width: '14px', height: '14px' }} />
              <span>{lang === 'ar' ? 'السابق' : 'Previous'}</span>
            </button>

            <button
              onClick={handleNextCert}
              disabled={currentIndex === ALL_CERTIFICATES.length - 1}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                padding: '6px 12px',
                borderRadius: '6px',
                backgroundColor: '#ede5d8',
                border: '1px solid #ddd3c2',
                fontSize: '11.5px',
                fontWeight: '600',
                color: currentIndex === ALL_CERTIFICATES.length - 1 ? '#aaa' : '#241b14',
                cursor: currentIndex === ALL_CERTIFICATES.length - 1 ? 'not-allowed' : 'pointer'
              }}
            >
              <span>{lang === 'ar' ? 'التالي' : 'Next'}</span>
              <ChevronRight style={{ width: '14px', height: '14px' }} />
            </button>

            <a
              href={selectedCert.file}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '6px 14px',
                borderRadius: '6px',
                backgroundColor: '#c88a58',
                color: '#ffffff',
                fontSize: '11.5px',
                fontWeight: '600',
                textDecoration: 'none'
              }}
            >
              <Download style={{ width: '13px', height: '13px' }} />
              <span>{t.certificates.openPdf}</span>
            </a>
          </div>
        </div>

        {/* Certificate Overview Bar */}
        <div style={{ padding: '14px 24px', backgroundColor: '#fcfbfa', borderBottom: '1px solid #ede4d6', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
          <div>
            <h2 className="font-serif-display" style={{ fontSize: '24px', fontWeight: '400', color: '#1a1918', lineHeight: '1.2' }}>
              {certTitle}
            </h2>
            <p style={{ fontSize: '12px', color: '#665e53', marginTop: '2px' }}>
              {certIssuer} · {certTier} · <span className="font-mono-code">{selectedCert.date}</span>
            </p>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
            {certSkills.map((s) => (
              <span
                key={s}
                style={{ fontSize: '10.5px', padding: '3px 9px', borderRadius: '4px', backgroundColor: '#f2ece2', border: '1px solid #e0d7c7', color: '#594432', fontWeight: '500' }}
              >
                {s}
              </span>
            ))}
          </div>
        </div>

        {/* PDF Frame Container */}
        <div style={{ flex: 1, backgroundColor: '#211e1c', padding: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
          <div style={{ width: '100%', height: '100%', maxWidth: '980px', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 12px 40px rgba(0,0,0,0.6)', backgroundColor: '#fff' }}>
            <iframe
              src={`${selectedCert.file}#toolbar=0&navpanes=0&scrollbar=1&view=FitH`}
              title={certTitle}
              style={{ width: '100%', height: '100%', border: 'none' }}
            />
          </div>
        </div>
      </div>
    );
  }

  // -------------------------------------------------------------
  // 2. MAIN GRID LIST VIEW
  // -------------------------------------------------------------
  return (
    <div style={{ padding: '32px', display: 'flex', flexDirection: 'column', gap: '24px', backgroundColor: '#fdfbf7', minHeight: '100%' }}>
      {/* Top Header & Overview */}
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', paddingBottom: '16px', borderBottom: '1px solid #ede4d6', flexWrap: 'wrap', gap: '16px' }}>
        <div>
          <span className="font-mono-code" style={{ fontSize: '10px', fontWeight: '700', letterSpacing: '0.15em', color: '#a86f3e', textTransform: 'uppercase', display: 'block', marginBottom: '4px' }}>
            {t.certificates.tag}
          </span>
          <h2 className="font-serif-display" style={{ fontSize: '32px', fontWeight: '400', color: '#1a1918', lineHeight: '1.1' }}>
            {t.certificates.heading}
          </h2>
          <p style={{ fontSize: '12.5px', color: '#635b51', marginTop: '4px' }}>
            {t.certificates.subtitle}
          </p>
        </div>

        {/* Search Bar */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '8px 14px', borderRadius: '10px', backgroundColor: '#f5efe4', border: '1px solid #e2d7c9', width: '260px' }}>
          <Search style={{ width: '15px', height: '15px', color: '#a86f3e', flexShrink: 0 }} />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={t.certificates.searchPlaceholder}
            style={{ width: '100%', backgroundColor: 'transparent', border: 'none', outline: 'none', fontSize: '12px', color: '#1c1b18' }}
          />
        </div>
      </div>

      {/* Category Pills */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexWrap: 'wrap' }}>
        {categories.map((cat) => (
          <button
            key={cat.key}
            onClick={() => setFilter(cat.key)}
            style={{
              padding: '6px 14px',
              borderRadius: '8px',
              fontSize: '11.5px',
              fontWeight: '600',
              border: 'none',
              cursor: 'pointer',
              backgroundColor: filter === cat.key ? '#241b14' : '#f2ece2',
              color: filter === cat.key ? '#fdfbf7' : '#635b51',
              transition: 'all 0.15s ease'
            }}
          >
            {cat.label} {cat.key === 'All' ? `(${ALL_CERTIFICATES.length})` : ''}
          </button>
        ))}
      </div>

      {/* Certificates Cards Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '16px' }}>
        {filteredCerts.map((cert) => {
          const certTitle = lang === 'ar' && cert.titleAr ? cert.titleAr : cert.title;
          const certIssuer = lang === 'ar' && cert.issuerAr ? cert.issuerAr : cert.issuer;
          const certTier = lang === 'ar' && cert.tierAr ? cert.tierAr : cert.tier;
          const certTag = lang === 'ar' && cert.issuerTagAr ? cert.issuerTagAr : cert.issuerTag;
          const certDesc = lang === 'ar' && cert.descriptionAr ? cert.descriptionAr : cert.description;
          const certSkills = lang === 'ar' && cert.skillsAr ? cert.skillsAr : cert.skills;

          return (
            <div
              key={cert.id}
              onClick={() => setSelectedCert(cert)}
              style={{
                borderRadius: '14px',
                backgroundColor: '#f7f2ea',
                border: '1px solid #e7ded2',
                padding: '20px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                gap: '14px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.03)',
                cursor: 'pointer',
                transition: 'transform 0.15s ease, box-shadow 0.15s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 6px 16px rgba(0,0,0,0.08)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0px)';
                e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.03)';
              }}
            >
              <div>
                {/* Header Badge */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <span className="font-mono-code" style={{ fontSize: '9.5px', fontWeight: '700', textTransform: 'uppercase', padding: '3px 8px', borderRadius: '4px', backgroundColor: '#ebdccb', color: '#8a582c' }}>
                    {certTag}
                  </span>
                  <span style={{ fontSize: '11px', fontWeight: '600', color: '#8c867a' }}>
                    {cert.date}
                  </span>
                </div>

                {/* Title & Issuer */}
                <h3 className="font-serif-display" style={{ fontSize: '20px', fontWeight: '400', color: '#1a1918', marginBottom: '2px', lineHeight: '1.2' }}>
                  {certTitle}
                </h3>
                <p style={{ fontSize: '11.5px', fontWeight: '700', color: '#a86f3e', marginBottom: '8px' }}>
                  {certIssuer} · {certTier}
                </p>

                {/* Description */}
                <p style={{ fontSize: '12px', color: '#4d463d', lineHeight: '1.55', marginBottom: '12px' }}>
                  {certDesc}
                </p>

                {/* Skills Tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
                  {certSkills.map((s) => (
                    <span
                      key={s}
                      style={{ fontSize: '10px', padding: '2px 7px', borderRadius: '4px', backgroundColor: '#eae0d1', color: '#594432', fontWeight: '500' }}
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions: View Certificate & Direct PDF Open */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '10px', borderTop: '1px solid #ebdccb' }}>
                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '6px 14px',
                    borderRadius: '6px',
                    backgroundColor: '#241b14',
                    color: '#fdfbf7',
                    fontSize: '11.5px',
                    fontWeight: '600'
                  }}
                >
                  <Award style={{ width: '13px', height: '13px', color: '#c88a58' }} />
                  <span>{t.certificates.viewCertificate}</span>
                </span>

                <a
                  href={cert.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px',
                    fontSize: '11.5px',
                    fontWeight: '600',
                    color: '#1a1918',
                    textDecoration: 'none'
                  }}
                >
                  <span>{lang === 'ar' ? 'فتح PDF' : 'Open PDF'}</span>
                  <ExternalLink style={{ width: '12px', height: '12px', color: '#a86f3e' }} />
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
