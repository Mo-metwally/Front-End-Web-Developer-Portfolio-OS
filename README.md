# 💻 Mohamed Metwally — Front-End Web Developer Portfolio OS

<div align="center">

![Portfolio OS Banner](https://img.shields.io/badge/Mohamed_Metwally-Portfolio_OS-c88a58?style=for-the-badge&logo=apple&logoColor=white)

[![Live Demo](https://img.shields.io/badge/🌐_Live_Demo-mohammed--metwally.web.app-2563eb?style=for-the-badge)](https://mohammed-metwally.web.app)
[![React](https://img.shields.io/badge/React_19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite_8-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS_4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Firebase](https://img.shields.io/badge/Firebase_Hosting-FFCA28?style=for-the-badge&logo=firebase&logoColor=black)](https://firebase.google.com/)

**An interactive, macOS & Linux-inspired Web Operating System showcasing Front-End engineering excellence, interactive UI/UX design, real projects, and verified credentials.**

[English Documentation](#-english-documentation) • [توثيق باللغة العربية](#-التوثيق-باللغة-العربية)

</div>

---

## 📑 Table of Contents / فهرس المحتويات

- [🇬🇧 English Documentation](#-english-documentation)
  - [✨ Overview](#-overview)
  - [🚀 Key Features](#-key-features)
  - [🖥️ Operating System Modules](#️-operating-system-modules)
  - [🛠️ Tech Stack & Dependencies](#️-tech-stack--dependencies)
  - [📂 Project Directory Structure](#-project-directory-structure)
  - [⚡ Getting Started & Local Development](#-getting-started--local-development)
  - [📜 Available NPM Scripts](#-available-npm-scripts)
  - [🌐 i18n & Theme Architecture](#-i18n--theme-architecture)
  - [🔥 Deployment Guide (Firebase)](#-deployment-guide-firebase)
  - [👨‍💻 Author & Contact](#-author--contact)
- [🇪🇬 التوثيق باللغة العربية](#-التوثيق-باللغة-العربية)
  - [✨ نبذة عن المشروع](#-نبذة-عن-المشروع)
  - [🚀 المميزات الرئيسية](#-المميزات-الرئيسية)
  - [🖥️ وحدات ومكونات نظام التشغيل](#️-وحدات-ومكونات-نظام-التشغيل)
  - [🛠️ حزمة التقنيات والمكتبات المستخدمة](#️-حزمة-التقنيات-والمكتبات-المستخدمة)
  - [📂 هيكل المجلدات والملفات بالتفصيل](#-هيكل-المجلدات-والملفات-بالتفصيل)
  - [⚡ التثبيت والتشغيل المحلي](#-التثبيت-والتشغيل-المحلي)
  - [📜 أوامر السكربتات المتاحة](#-أوامر-السكربتات-المتاحة)
  - [🌐 معمارية اللغات والسمات (Dark/Light)](#-معمارية-اللغات-والسمات-darklight)
  - [🔥 دليل النشر والاستضافة على Firebase](#-دليل-النشر-والاستضافة-على-firebase)
  - [👨‍💻 المطور وبيانات التواصل](#-المطور-وبيانات-التواصل)

---

# 🇬🇧 English Documentation

## ✨ Overview

**Portfolio OS** is a browser-based desktop operating system simulation built with **React 19**, **Vite**, and **Tailwind CSS**. It replicates a desktop OS workflow (combining elements from macOS Sonoma/Sequoia and Linux environments) to present a modern portfolio for **Mohamed Metwally**, a Front-End Web Developer with a strong Back-End background.

Instead of a traditional static scrolling website, visitors interact with floating multi-tasking windows, interactive terminal CLI, spotlight search, desktop widgets, dock magnification, notifications, and custom themes.

---

## 🚀 Key Features

- 🖥️ **Window Management Engine**: Multi-window system with dragging, minimizing, maximizing, stacking (z-index layering), and auto-dock hiding on fullscreen.
- 🍏 **macOS Top Menu Bar & Dock**: Interactive top navigation bar with battery, live clock, status indicators, and a floating bottom dock with hover animations.
- ⚡ **Spotlight Search (Cmd+K / Ctrl+K)**: Instant search overlay across all portfolio projects, certifications, skills, and window shortcuts.
- 💻 **Interactive CLI Terminal**: Functional Linux-style terminal with custom interactive commands (`help`, `about`, `skills`, `projects`, `contact`, `theme`, `clear`, `sudo`, `cat`, etc.).
- 📜 **Certified Credentials Viewer**: Embedded PDF modal previewer and verification system for 18+ accredited certifications (Meta, Udacity, etc.).
- 🤖 **Interactive Desktop Mascot**: Animated floating robot assistant providing helpful tips and quick actions.
- 🌓 **Dual Theme Engine**: Seamless real-time switching between macOS Dark Mode and Light Mode with CSS custom properties.
- 🌍 **Full Bilingual (i18n) Support**: Instant switching between English (LTR) and Arabic (RTL) with dynamic window repositioning.
- 📬 **Live Contact Center**: Integrated email form powered by EmailJS with real-time feedback and direct links (WhatsApp, LinkedIn, GitHub).
- 📱 **Mobile & Tablet Optimized**: Adaptive layouts tailored for ultra-wide monitors, standard laptops, tablets, and smartphones.

---

## 🖥️ Operating System Modules

```
┌────────────────────────────────────────────────────────────────────────┐
│                        macOS TOP MENU BAR                              │
├────────────┬─────────────────────────────────────────────┬─────────────┤
│  DESKTOP   │             FLOATING WINDOWS                │   WIDGETS   │
│   ICONS    │   ┌─────────────────────────────────────┐   │   SIDEBAR   │
│            │   │  ● ● ●  About Mohamed Metwally     │   │             │
│  [Home]    │   ├─────────────────────────────────────┤   │  • Profile  │
│  [About]   │   │  Frontend Dev | React & Next.js     │   │  • Skills   │
│  [Certs]   │   │  Bio, Tech Stack, Timeline & Resume │   │  • Music    │
│  [Projects]│   └─────────────────────────────────────┘   │  • System   │
│  [Clients] │         [Interactive Robot Mascot] 🤖       │             │
├────────────┴─────────────────────────────────────────────┴─────────────┤
│                     FLOATING TRANSLUCENT DOCK                          │
│        [Home] [About] [Certs] [Clients] [Projects] [Mail] [Notes]      │
└────────────────────────────────────────────────────────────────────────┘
```

| Window App | Description |
| :--- | :--- |
| **🏠 Home (`HomeWindowContent.jsx`)** | Hero dashboard, developer identity overview, quick launcher buttons, and key stats. |
| **👤 About (`AboutWindowContent.jsx`)** | Professional background, categorized technical skills, career timeline, and downloadable CV. |
| **🏆 Certificates (`CertificatesWindowContent.jsx`)** | 18+ verified credentials with in-browser PDF previews, issued by Meta, Udacity, Coursera, etc. |
| **💼 Projects (`ProjectsWindowContent.jsx`)** | Live showcase of commercial and enterprise projects with screenshots, tech tags, and live demos. |
| **⭐ Experience & Clients (`ClientsWindowContent.jsx`)** | Client reviews, testimonials, company collaborations, and deliverable highlights. |
| **⌨️ Terminal (`TerminalWindowContent.jsx`)** | Bash-like interactive CLI terminal emulator supporting custom command execution. |
| **✉️ Mail (`ContactWindowContent.jsx`)** | Direct contact form connected to EmailJS, location data, and instant communication links. |
| **📝 Notes (`NotesWindowContent.jsx`)** | Sticky notes with development principles, architecture notes, and developer thoughts. |

---

## 🛠️ Tech Stack & Dependencies

### Core Technologies
- **React 19** (`react`, `react-dom`): UI components and declarative lifecycle management.
- **Vite 8** (`vite`, `@vitejs/plugin-react`): Lightning-fast build tool, HMR, and bundling.
- **Tailwind CSS 4** (`tailwindcss`, `@tailwindcss/vite`): Modern utility-first CSS engine.
- **Vanilla CSS3**: Custom desktop styling, glassmorphism, responsive breakpoints, and animations.

### Utilities & Libraries
- **Lucide React** (`lucide-react`) & **React Icons** (`react-icons`): UI icons.
- **EmailJS** (`@emailjs/browser`): Contact form email transmission.
- **Canvas Confetti** (`canvas-confetti`): Interactive celebration animations upon actions.
- **Firebase** (`firebase`): Production hosting on Google Cloud infrastructure.
- **Oxlint** (`oxlint`): Fast JavaScript linter.

---

## 📂 Project Directory Structure

```
Portfolio/
├── .firebase/                     # Firebase deployment cache
├── .firebaserc                    # Firebase project targeting config
├── firebase.json                  # Firebase hosting configuration
├── index.html                     # HTML5 entry template & SEO meta tags
├── package.json                   # Dependencies, metadata & scripts
├── vite.config.js                 # Vite bundler & Tailwind configuration
├── public/                        # Static public assets (icons, favicon)
└── src/
    ├── main.jsx                   # React application entry point
    ├── App.jsx                    # Core OS state, window manager & layout
    ├── App.css                    # Supporting styles & animation frames
    ├── index.css                  # Design system, CSS variables & responsive media queries
    │
    ├── assets/                    # Optimized images (.avif, .png, .jpg) & PDF certificates
    │
    ├── context/
    │   └── LanguageContext.jsx    # i18n context (English / Arabic RTL toggle)
    │
    ├── data/
    │   ├── portfolioData.js       # Developer profile, skills, timeline, stats & contact info
    │   ├── projects.json          # Portfolio projects dataset (links, descriptions, tags)
    │   └── translations.js        # Comprehensive bilingual UI dictionary (AR/EN)
    │
    └── components/
        ├── BootScreen.jsx         # Linux-style boot sequence & entrance modal
        ├── TopBar.jsx             # macOS top status bar with time, battery & controls
        ├── Dock.jsx               # Floating bottom dock with magnification effect
        ├── DesktopIcon.jsx        # Desktop shortcuts with drag/click triggers
        ├── DesktopWindow.jsx      # Draggable, resizable & layered window container
        ├── Mascot.jsx             # Floating animated robot assistant
        ├── RightSidebar.jsx       # Control Center widgets (Profile, Skills, Music, Stats)
        ├── SpotlightSearch.jsx    # Cmd+K / Ctrl+K search palette
        ├── NotificationCenter.jsx # macOS notifications drawer
        │
        └── windows/               # App window content views
            ├── HomeWindowContent.jsx
            ├── AboutWindowContent.jsx
            ├── CertificatesWindowContent.jsx
            ├── ProjectsWindowContent.jsx
            ├── ClientsWindowContent.jsx
            ├── TerminalWindowContent.jsx
            ├── ContactWindowContent.jsx
            └── NotesWindowContent.jsx
```

---

## ⚡ Getting Started & Local Development

### Prerequisites
- **Node.js** (version 18.0.0 or higher)
- **npm**, **pnpm**, or **yarn**

### Installation Steps

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Mo-metwally/Front-End-Web-Developer-Portfolio-OS.git
   cd Front-End-Web-Developer-Portfolio-OS
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser.

4. **Access from mobile/local network (Optional):**
   ```bash
   npm run host
   ```

---

## 📜 Available NPM Scripts

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts the Vite development server with Hot Module Replacement (HMR). |
| `npm run host` | Starts the dev server bound to network IP for testing across local devices. |
| `npm run build` | Compiles and bundles production-ready assets into the `dist/` directory. |
| `npm run preview` | Previews the production build locally before deployment. |
| `npm run lint` | Runs `oxlint` to analyze and enforce code quality. |

---

## 🌐 i18n & Theme Architecture

### Bilingual Support (Arabic / English)
- Managed via `LanguageContext.jsx` and synchronized across all views.
- Toggling the language automatically flips document direction (`dir="rtl"` / `dir="ltr"`), font families, and dynamically recalibrates desktop window initial coordinates for optimal spatial layout.

### Theme Modes (Dark & Light)
- Controlled via `data-theme="dark"` and `data-theme="light"` on the root document element.
- CSS variables define palette colors, translucency levels, and shadows for seamless adaptation.

---

## 🔥 Deployment Guide (Firebase)

The project is configured for single-command deployment to **Firebase Hosting**:

1. **Build the production bundle:**
   ```bash
   npm run build
   ```

2. **Deploy to Firebase:**
   ```bash
   firebase deploy
   ```

Live URL: **[https://mohammed-metwally.web.app](https://mohammed-metwally.web.app)**

---

## 👨‍💻 Author & Contact

**Mohamed Metwally** — *Front-End Web Developer*

- 🌐 **Portfolio Website**: [mohammed-metwally.web.app](https://mohammed-metwally.web.app)
- 💼 **LinkedIn**: [linkedin.com/in/mohamed-metwally-rzq](https://linkedin.com/in/mohamed-metwally-rzq)
- 🐙 **GitHub**: [github.com/Mo-metwally](https://github.com/Mo-metwally)
- 📧 **Email**: [m.metwally.rzq@gmail.com](mailto:m.metwally.rzq@gmail.com)
- 📱 **WhatsApp**: [+20 102 134 0475](https://api.whatsapp.com/send?phone=201021340475)
- 📍 **Location**: Alexandria, Egypt

---
---

# 🇪🇬 التوثيق باللغة العربية

## ✨ نبذة عن المشروع

**بورتفوليو نظام التشغيل (Portfolio OS)** هو محاكاة متكاملة لنظام تشغيل حاسوبي داخل المتصفح، تم بناؤه وتطويره باستخدام **React 19** و **Vite** و **Tailwind CSS**. يجمع النظام بين جمالية واجهة **macOS** وقوة بيئات **Linux** لتقديم معرض أعمال تفاعلي واحترافي للمطور **محمد متولي** (مطور واجهات أمامية Front-End بخلفية برمجية في الـ Back-End).

بدلاً من أسلوب المواقع التقليدية المعتمدة على التمرير العمودي البسيط، يوفر هذا الموقع تجربة تفاعلية حية تتضمن نوافذ عائمة متعددة المهام، طرفية أوامر تفاعلية (Terminal)، بحث Spotlight فوري، ويدجتس لسطح المكتب، وقائمة Dock سفلية بتأثيرات بصرية متقدمة.

---

## 🚀 المميزات الرئيسية

- 🖥️ **محرك إدارة النوافذ (Window Manager)**: إمكانية تحريك، تصغير، تكبير، وإغلاق النوافذ، مع ترتيب الطبقات (Z-Index) والإخفاء التلقائي للشريط السفلي عند ملء الشاشة.
- 🍏 **شريط macOS العلوي و Dock سفلي عائم**: شريط تحكم علوي يحتوي على الساعة، مؤشر البطارية، وتغيير اللغة، مع دوك سفلي تفاعلي بتأثير التكبير عند التمرير.
- ⚡ **بحث Spotlight الذكي (Cmd+K / Ctrl+K)**: نافذة بحث سريعة للوصول المباشر لكافة المشاريع، الشهادات، المهارات التقنية، والنوافذ.
- 💻 **طرفية أوامر تفاعلية (Interactive Terminal CLI)**: موجه أوامر حقيقي يدعم أوامر مخصصة (`help`, `about`, `skills`, `projects`, `contact`, `theme`, `clear`, `sudo`, `cat`, إلخ).
- 📜 **مستعرض الشهادات والاعتمادات الرسمية**: عارض تفاعلي مدمج لملفات الـ PDF والشهادات المعتمدة (18+ شهادة من Meta و Udacity وغيرها) مع روابط التحقق.
- 🤖 **مساعد سطح المكتب الذكي (Robot Mascot)**: روبوت عائم يقدم نصائح واختصارات ذكية للتنقل داخل النظام.
- 🌓 **دعم الوضع الليلي والنهاري (Dark & Light Mode)**: تبديل سلس ومرن للألوان والسمات في الوقت الفعلي.
- 🌍 **دعم كامل للغتين (العربية والإنجليزية)**: توافق كامل مع اتجاه الكتابة من اليمين لليسار (RTL) ومن اليسار لليمين (LTR) مع إعادة ضبط إحداثيات النوافذ تلقائياً.
- 📬 **مركز تواصل مباشر**: نموذج مراسلة متصل مباشرة بخدمة EmailJS لإرسال الرسائل الفورية مع روابط مباشرة للواتساب ولينكد إن وجيت هاب.
- 📱 **تصميم متجاوب بالكامل**: تجربة استخدام مهيأة للشاشات الكبيرة، اللابتوب، الأجهزة اللوحية، والهواتف الذكية.

---

## 🖥️ وحدات ومكونات نظام التشغيل

```
┌────────────────────────────────────────────────────────────────────────┐
│                        شريط القوائم العلوي (macOS TopBar)               │
├────────────┬─────────────────────────────────────────────┬─────────────┤
│  أيقونات   │               النوافذ العائمة                │  القائمة    │
│  سطح المكتب│   ┌─────────────────────────────────────┐   │  الجانبية   │
│            │   │  ● ● ●  نبذة عن محمد متولي          │   │  (Widgets)  │
│  [الرئيسية] │   ├─────────────────────────────────────┤   │             │
│  [نبذة عني]│   │  مطور واجهات أمامية | React & Next  │   │  • الحساب   │
│  [الشهادات]│   │  المهارات، الخبرات، السيرة الذاتية  │   │  • المهارات │
│  [المشاريع]│   └─────────────────────────────────────┘   │  • المشغل   │
│  [الخبرات] │             [روبوت المساعد التفاعلي] 🤖      │  • النظام   │
├────────────┴─────────────────────────────────────────────┴─────────────┤
│                       شريط التطبيقات العائم (Dock)                      │
│     [الرئيسية] [نبذة عني] [الشهادات] [الخبرات] [المشاريع] [البريد] [الملاحظات] │
└────────────────────────────────────────────────────────────────────────┘
```

| تطبيق النافذة | الوصف والمحتوى |
| :--- | :--- |
| **🏠 الرئيسية (`HomeWindowContent.jsx`)** | الواجهة الترحيبية، نظرة سريعة على هوية المطور، أزرار إطلاق سريعة، وإحصائيات عامة. |
| **👤 نبذة عني (`AboutWindowContent.jsx`)** | السيرة المهنية بالتفصيل، تصنيف المهارات التقنية، جدول الخبرات، وتنزيل السيرة الذاتية (CV). |
| **🏆 الشهادات (`CertificatesWindowContent.jsx`)** | استعراض 18+ شهادة معتمدة مع معاينة مباشرة لملفات الـ PDF من Meta و Udacity و Coursera. |
| **💼 المشاريع (`ProjectsWindowContent.jsx`)** | معرض لأبرز المشاريع والتطبيقات الحية مع تفاصيل التقنيات المستخدمة وروابط المعاينة والكود. |
| **⭐ الخبرات والعملاء (`ClientsWindowContent.jsx`)** | آراء وتقييمات العملاء، الشركات التي تم التعاون معها، ومخرجات المشاريع المنفذة. |
| **⌨️ الطرفية (`TerminalWindowContent.jsx`)** | موجه أوامر تفاعلي مستوحى من أنظمة Linux يتيح استكشاف البورتفوليو عبر كتابة الأوامر. |
| **✉️ البريد والتواصل (`ContactWindowContent.jsx`)** | نموذج مراسلة فوري متصل بـ EmailJS مع بيانات التواصل المباشرة وروابط المنصات. |
| **📝 الملاحظات (`NotesWindowContent.jsx`)** | أوراق ملاحظات لاصقة تحتوي على فلسفة التطوير وأفكار برمجية للمطور. |

---

## 🛠️ حزمة التقنيات والمكتبات المستخدمة

### التقنيات الأساسية
- **React 19** (`react`, `react-dom`): بناء المكونات التفاعلية وإدارة دورة حياة التطبيق.
- **Vite 8** (`vite`, `@vitejs/plugin-react`): أداة بناء فائقة السرعة مع دعم التحديث المباشر الساخن (HMR).
- **Tailwind CSS 4** (`tailwindcss`, `@tailwindcss/vite`): تنسيق الواجهات بأسلوب الفئات المساعدة الحديث.
- **Vanilla CSS3**: متغيرات CSS المخصصة، تأثيرات الزجاج المصنفر (Glassmorphism)، ومحددات التجاوب الشاملة.

### الأدوات والمكتبات الإضافية
- **Lucide React** و **React Icons**: أيقونات الواجهة الحديثة.
- **EmailJS** (`@emailjs/browser`): استقبال وإرسال رسائل البريد الإلكتروني مباشرة من المتصفح.
- **Canvas Confetti** (`canvas-confetti`): تأثيرات احتفالية بصرية تفاعلية.
- **Firebase** (`firebase`): الاستضافة السحابية السريعة والآمنة من Google.
- **Oxlint** (`oxlint`): فحص وتحليل جودة الكود البرمجي.

---

## 📂 هيكل المجلدات والملفات بالتفصيل

```
Portfolio/
├── .firebase/                     # ملفات كاش النشر على Firebase
├── .firebaserc                    # ملف تحديد مشروع Firebase المستهدف
├── firebase.json                  # إعدادات وتوجيهات استضافة Firebase
├── index.html                     # الصفحة الرئيسية مع وسوم تحسين محركات البحث (SEO)
├── package.json                   # تفاصيل الحزم، الاعتماديات والسكربتات
├── vite.config.js                 # إعدادات حزمة Vite و Tailwind
├── public/                        # الملفات الثابتة والأيقونات العامة
└── src/
    ├── main.jsx                   # نقطة الانطلاق الرئيسية لتطبيق React
    ├── App.jsx                    # المحرك الرئيسي لنظام التشغيل وإدارة النوافذ
    ├── App.css                    # تنسيقات مكملة وإطارات الحركة
    ├── index.css                  # نظام التصميم، متغيرات الألوان واستعلامات الميديا
    │
    ├── assets/                    # الصور المحسنة (.avif, .png, .jpg) وملفات الشهادات PDF
    │
    ├── context/
    │   └── LanguageContext.jsx    # إدارة حالة وتغيير اللغة (عربي / إنجليزي)
    │
    ├── data/
    │   ├── portfolioData.js       # بيانات المطور، المهارات، الخبرات، ومعلومات الاتصال
    │   ├── projects.json          # قاعدة بيانات المشاريع وروابط المعاينة
    │   └── translations.js        # قاموس النصوص والترجمات الكاملة (عربي / إنجليزي)
    │
    └── components/
        ├── BootScreen.jsx         # شاشة إقلاع النظام التفاعلية بأسلوب Linux
        ├── TopBar.jsx             # شريط النظام العلوي (الساعة، البطارية، التحكم)
        ├── Dock.jsx               # شريط التطبيقات السفلي العائم
        ├── DesktopIcon.jsx        # أيقونات واختصارات سطح المكتب
        ├── DesktopWindow.jsx      # حاوية النوافذ القابلة للسحب والتحجيم
        ├── Mascot.jsx             # الروبوت المساعد التفاعلي العائم
        ├── RightSidebar.jsx       # قائمة الويدجتس الجانبية (الملف، المهارات، المشغل)
        ├── SpotlightSearch.jsx    # نافذة البحث السريع (Cmd+K)
        ├── NotificationCenter.jsx # مركز إشعارات النظام
        │
        └── windows/               # محتويات وتطبيقات النوافذ المنفصلة
            ├── HomeWindowContent.jsx
            ├── AboutWindowContent.jsx
            ├── CertificatesWindowContent.jsx
            ├── ProjectsWindowContent.jsx
            ├── ClientsWindowContent.jsx
            ├── TerminalWindowContent.jsx
            ├── ContactWindowContent.jsx
            └── NotesWindowContent.jsx
```

---

## ⚡ التثبيت والتشغيل المحلي

### المتطلبات الأساسية
- تثبيت **Node.js** (الإصدار 18.0.0 أو أحدث)
- مدير حزم مثل **npm** أو **pnpm** أو **yarn**

### خطوات التشغيل

1. **استنساخ المستودع (Clone):**
   ```bash
   git clone https://github.com/Mo-metwally/Front-End-Web-Developer-Portfolio-OS.git
   cd Front-End-Web-Developer-Portfolio-OS
   ```

2. **تثبيت الحزم والاعتماديات:**
   ```bash
   npm install
   ```

3. **بدء خادم التطوير المحلي:**
   ```bash
   npm run dev
   ```
   افتح المتصفح على الرابط [http://localhost:5173](http://localhost:5173).

4. **المعاينة عبر الشبكة المحلية أو الهاتف (اختياري):**
   ```bash
   npm run host
   ```

---

## 📜 أوامر السكربتات المتاحة

| الأمر | الوظيفة |
| :--- | :--- |
| `npm run dev` | تشغيل خادم التطوير المحلي السريع مع التحديث التلقائي (HMR). |
| `npm run host` | تشغيل الخادم على عنوان الـ IP المحلي للتجربة عبر أجهزة متعددة. |
| `npm run build` | بناء وتحزيم المشروع للإنتاج النهائي داخل مجلد `dist/`. |
| `npm run preview` | معاينة النسخة الإنتاجية المبنية محلياً قبل النشر. |
| `npm run lint` | فحص الكود البرمجي عبر أداة `oxlint` للتأكد من جودته وخلوه من الأخطاء. |

---

## 🌐 معمارية اللغات والسمات (Dark/Light)

### دعم اللغتين (العربية والإنجليزية)
- تتم إدارة النصوص واتجاه العرض من خلال `LanguageContext.jsx`.
- عند تغيير اللغة يتم تلقائياً ضبط اتجاه الصفحة (`dir="rtl"` أو `dir="ltr"`) وتغيير الخطوط وضبط إحداثيات ومواقع النوافذ الافتراضية لتتناسب مع اتجاه شاشة المستخدم.

### سمات الألوان (الوضع الليلي والنهاري)
- يتم التحكم بالسمة عبر السمة `data-theme` على العنصر الجذري للمستند.
- تم بناء متغيرات الألوان والشفافية في `index.css` لضمان وضوح وجمالية العناصر في كلا الوضعين.

---

## 🔥 دليل النشر والاستضافة على Firebase

تم إعداد المشروع للنشر المباشر بضغطة زر عبر **Firebase Hosting**:

1. **إنشاء الحزمة الإنتاجية:**
   ```bash
   npm run build
   ```

2. **النشر إلى Firebase:**
   ```bash
   firebase deploy
   ```

رابط الموقع المباشر: **[https://mohammed-metwally.web.app](https://mohammed-metwally.web.app)**

---

## 👨‍💻 المطور وبيانات التواصل

**محمد متولي** — *مطور واجهات أمامية Front-End Web Developer*

- 🌐 **الموقع الشخصي**: [mohammed-metwally.web.app](https://mohammed-metwally.web.app)
- 💼 **لينكد إن (LinkedIn)**: [linkedin.com/in/mohamed-metwally-rzq](https://linkedin.com/in/mohamed-metwally-rzq)
- 🐙 **جيت هاب (GitHub)**: [github.com/Mo-metwally](https://github.com/Mo-metwally)
- 📧 **البريد الإلكتروني**: [m.metwally.rzq@gmail.com](mailto:m.metwally.rzq@gmail.com)
- 📱 **واتساب (WhatsApp)**: [+20 102 134 0475](https://api.whatsapp.com/send?phone=201021340475)
- 📍 **الموقع الجغرافي**: الإسكندرية، مصر

---

<div align="center">
  <sub>Designed & Developed with ❤️ by Mohamed Metwally • Portfolio OS © 2026</sub>
</div>
