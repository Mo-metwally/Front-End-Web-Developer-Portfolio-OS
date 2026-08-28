import React, { useState, useEffect } from 'react';
import TopBar from './components/TopBar';
import DesktopIcon from './components/DesktopIcon';
import DesktopWindow from './components/DesktopWindow';
import RightSidebar from './components/RightSidebar';
import Dock from './components/Dock';
import Mascot from './components/Mascot';
import SpotlightSearch from './components/SpotlightSearch';
import NotificationCenter from './components/NotificationCenter';
import BootScreen from './components/BootScreen';
import { useLanguage } from './context/LanguageContext';

// Window content views
import HomeWindowContent from './components/windows/HomeWindowContent';
import AboutWindowContent from './components/windows/AboutWindowContent';
import CertificatesWindowContent from './components/windows/CertificatesWindowContent';
import ProjectsWindowContent from './components/windows/ProjectsWindowContent';
import ClientsWindowContent from './components/windows/ClientsWindowContent';
import TerminalWindowContent from './components/windows/TerminalWindowContent';
import ContactWindowContent from './components/windows/ContactWindowContent';
import NotesWindowContent from './components/windows/NotesWindowContent';

const getInitialWindows = (lang) => {
  const isAr = lang === 'ar';
  const vw = typeof window !== 'undefined' ? window.innerWidth : 1920;
  const vh = typeof window !== 'undefined' ? window.innerHeight : 1080;

  // 1. Mobile Portrait (< 768px)
  if (vw < 768) {
    const mobileWidth = Math.min(vw - 16, 520);
    const mobileHeight = Math.min(vh - 110, 640);
    const centerX = Math.max(8, (vw - mobileWidth) / 2);
    return {
      home: {
        isOpen: true,
        isMinimized: false,
        zIndex: 10,
        initialPosition: { x: centerX, y: 46 },
        size: { width: mobileWidth, height: mobileHeight }
      },
      about: {
        isOpen: true,
        isMinimized: false,
        zIndex: 20,
        initialPosition: { x: centerX, y: 46 },
        size: { width: mobileWidth, height: mobileHeight }
      },
      certificates: {
        isOpen: false,
        isMinimized: false,
        zIndex: 25,
        initialPosition: { x: centerX, y: 46 },
        size: { width: mobileWidth, height: mobileHeight }
      },
      projects: {
        isOpen: false,
        isMinimized: false,
        zIndex: 15,
        initialPosition: { x: centerX, y: 46 },
        size: { width: mobileWidth, height: mobileHeight }
      },
      clients: {
        isOpen: false,
        isMinimized: false,
        zIndex: 15,
        initialPosition: { x: centerX, y: 46 },
        size: { width: mobileWidth, height: mobileHeight }
      },
      terminal: {
        isOpen: false,
        isMinimized: false,
        zIndex: 25,
        initialPosition: { x: centerX, y: 46 },
        size: { width: mobileWidth, height: mobileHeight }
      },
      contact: {
        isOpen: false,
        isMinimized: false,
        zIndex: 25,
        initialPosition: { x: centerX, y: 46 },
        size: { width: mobileWidth, height: mobileHeight }
      },
      notes: {
        isOpen: false,
        isMinimized: false,
        zIndex: 15,
        initialPosition: { x: centerX, y: 46 },
        size: { width: mobileWidth, height: mobileHeight }
      }
    };
  }

  // 2. Laptops & Compact Desktops (768px - 1440px, e.g. 1200px and 1366px screens)
  if (vw <= 1440) {
    const defaultW = Math.min(680, vw - 140);
    const defaultH = Math.min(460, vh - 130);

    if (isAr) {
      // In Arabic on laptops: space between left sidebar (takes 0 to 300px) and right icons (takes vw-90 to vw)
      const homeX = Math.max(300, vw - defaultW - 90);
      const aboutX = Math.max(285, vw - defaultW - 130);
      return {
        home: {
          isOpen: true,
          isMinimized: false,
          zIndex: 10,
          initialPosition: { x: homeX, y: 50 },
          size: { width: defaultW, height: defaultH }
        },
        about: {
          isOpen: true,
          isMinimized: false,
          zIndex: 20,
          initialPosition: { x: aboutX, y: 120 },
          size: { width: Math.min(defaultW + 20, vw - 300), height: defaultH + 30 }
        },
        certificates: {
          isOpen: false,
          isMinimized: false,
          zIndex: 25,
          initialPosition: { x: Math.max(290, vw - defaultW - 90), y: 60 },
          size: { width: defaultW + 30, height: defaultH + 40 }
        },
        projects: {
          isOpen: false,
          isMinimized: false,
          zIndex: 15,
          initialPosition: { x: Math.max(290, vw - defaultW - 90), y: 65 },
          size: { width: defaultW + 20, height: defaultH + 30 }
        },
        clients: {
          isOpen: false,
          isMinimized: false,
          zIndex: 15,
          initialPosition: { x: Math.max(290, vw - defaultW - 90), y: 75 },
          size: { width: defaultW + 10, height: defaultH + 20 }
        },
        terminal: {
          isOpen: false,
          isMinimized: false,
          zIndex: 25,
          initialPosition: { x: Math.max(290, vw - defaultW - 90), y: 85 },
          size: { width: Math.min(620, defaultW), height: 420 }
        },
        contact: {
          isOpen: false,
          isMinimized: false,
          zIndex: 25,
          initialPosition: { x: Math.max(290, vw - defaultW - 90), y: 70 },
          size: { width: defaultW + 10, height: defaultH + 20 }
        },
        notes: {
          isOpen: false,
          isMinimized: false,
          zIndex: 15,
          initialPosition: { x: Math.max(290, vw - defaultW - 90), y: 80 },
          size: { width: defaultW + 20, height: defaultH + 30 }
        }
      };
    } else {
      // In English on laptops
      return {
        home: {
          isOpen: true,
          isMinimized: false,
          zIndex: 10,
          initialPosition: { x: 100, y: 50 },
          size: { width: defaultW, height: defaultH }
        },
        about: {
          isOpen: true,
          isMinimized: false,
          zIndex: 20,
          initialPosition: { x: 130, y: 120 },
          size: { width: Math.min(defaultW + 20, vw - 300), height: defaultH + 30 }
        },
        certificates: {
          isOpen: false,
          isMinimized: false,
          zIndex: 25,
          initialPosition: { x: 110, y: 60 },
          size: { width: defaultW + 30, height: defaultH + 40 }
        },
        projects: {
          isOpen: false,
          isMinimized: false,
          zIndex: 15,
          initialPosition: { x: 110, y: 65 },
          size: { width: defaultW + 20, height: defaultH + 30 }
        },
        clients: {
          isOpen: false,
          isMinimized: false,
          zIndex: 15,
          initialPosition: { x: 110, y: 75 },
          size: { width: defaultW + 10, height: defaultH + 20 }
        },
        terminal: {
          isOpen: false,
          isMinimized: false,
          zIndex: 25,
          initialPosition: { x: 120, y: 85 },
          size: { width: Math.min(620, defaultW), height: 420 }
        },
        contact: {
          isOpen: false,
          isMinimized: false,
          zIndex: 25,
          initialPosition: { x: 110, y: 70 },
          size: { width: defaultW + 10, height: defaultH + 20 }
        },
        notes: {
          isOpen: false,
          isMinimized: false,
          zIndex: 15,
          initialPosition: { x: 110, y: 80 },
          size: { width: defaultW + 20, height: defaultH + 30 }
        }
      };
    }
  }

  // 3. Large Desktop Screens (1920px+)
  return {
    home: {
      isOpen: true,
      isMinimized: false,
      zIndex: 10,
      initialPosition: isAr ? { x: 640, y: 110 } : { x: 130, y: 110 },
      size: { width: 720, height: 460 }
    },
    about: {
      isOpen: true,
      isMinimized: false,
      zIndex: 20,
      initialPosition: isAr ? { x: 390, y: 270 } : { x: 355, y: 270 },
      size: { width: 760, height: 500 }
    },
    certificates: {
      isOpen: false,
      isMinimized: false,
      zIndex: 25,
      initialPosition: isAr ? { x: 420, y: 80 } : { x: 200, y: 80 },
      size: { width: 840, height: 560 }
    },
    projects: {
      isOpen: false,
      isMinimized: false,
      zIndex: 15,
      initialPosition: isAr ? { x: 400, y: 100 } : { x: 180, y: 100 },
      size: { width: 800, height: 520 }
    },
    clients: {
      isOpen: false,
      isMinimized: false,
      zIndex: 15,
      initialPosition: isAr ? { x: 420, y: 120 } : { x: 200, y: 120 },
      size: { width: 760, height: 500 }
    },
    terminal: {
      isOpen: false,
      isMinimized: false,
      zIndex: 25,
      initialPosition: isAr ? { x: 420, y: 140 } : { x: 280, y: 140 },
      size: { width: 680, height: 440 }
    },
    contact: {
      isOpen: false,
      isMinimized: false,
      zIndex: 25,
      initialPosition: isAr ? { x: 420, y: 110 } : { x: 220, y: 110 },
      size: { width: 740, height: 500 }
    },
    notes: {
      isOpen: false,
      isMinimized: false,
      zIndex: 15,
      initialPosition: isAr ? { x: 420, y: 130 } : { x: 200, y: 130 },
      size: { width: 780, height: 500 }
    }
  };
};

export default function App() {
  const { lang, t } = useLanguage();
  const [isBooting, setIsBooting] = useState(() => {
    try {
      return sessionStorage.getItem('portfolio_os_booted') !== 'true';
    } catch (e) {
      return false;
    }
  });

  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('portfolio_os_theme') || 'dark';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('portfolio_os_theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const [windows, setWindows] = useState(() => getInitialWindows(lang));

  // Sync initial window coordinates when language switches or viewport resizes
  useEffect(() => {
    const handleResize = () => {
      setWindows((prev) => {
        const fresh = getInitialWindows(lang);
        const updated = {};
        for (const key of Object.keys(prev)) {
          updated[key] = {
            ...prev[key],
            initialPosition: fresh[key].initialPosition,
            size: fresh[key].size
          };
        }
        return updated;
      });
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [lang]);

  const [maximizedMap, setMaximizedMap] = useState({});
  const [topZIndex, setTopZIndex] = useState(30);
  const [focusedAppId, setFocusedAppId] = useState('about');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);

  const handleMaximizeChange = (id, isMax) => {
    setMaximizedMap((prev) => ({ ...prev, [id]: isMax }));
  };

  const isAnyWindowMaximized = Object.entries(maximizedMap).some(
    ([id, isMax]) => isMax && windows[id]?.isOpen && !windows[id]?.isMinimized
  );

  const focusWindow = (id) => {
    setTopZIndex((prev) => prev + 1);
    setWindows((prev) => ({
      ...prev,
      [id]: {
        ...prev[id],
        isOpen: true,
        isMinimized: false,
        zIndex: topZIndex + 1
      }
    }));
    setFocusedAppId(id);
  };

  const openApp = (id) => {
    if (id === 'files') id = 'projects';
    if (!windows[id]) return;

    focusWindow(id);
  };

  const closeWindow = (id) => {
    setWindows((prev) => ({
      ...prev,
      [id]: { ...prev[id], isOpen: false }
    }));
    setMaximizedMap((prev) => ({ ...prev, [id]: false }));
    if (focusedAppId === id) {
      const openKeys = Object.keys(windows).filter((k) => k !== id && windows[k].isOpen);
      setFocusedAppId(openKeys.length > 0 ? openKeys[openKeys.length - 1] : null);
    }
  };

  // Toggle or close app when clicked from Dock
  const toggleApp = (id) => {
    if (id === 'files') id = 'projects';
    const w = windows[id];
    if (w && w.isOpen && !w.isMinimized && focusedAppId === id) {
      closeWindow(id);
    } else {
      openApp(id);
    }
  };

  const minimizeWindow = (id) => {
    setWindows((prev) => ({
      ...prev,
      [id]: { ...prev[id], isMinimized: true }
    }));
    setMaximizedMap((prev) => ({ ...prev, [id]: false }));
    if (focusedAppId === id) {
      setFocusedAppId(null);
    }
  };

  const resetLayout = () => {
    setWindows(getInitialWindows(lang));
    setMaximizedMap({});
    setFocusedAppId('about');
  };

  const getActiveTitle = () => {
    if (!focusedAppId || !t.windowTitles[focusedAppId]) return t.windowTitles.about;
    return t.windowTitles[focusedAppId];
  };

  return (
    <div className="relative w-screen h-screen os-wallpaper overflow-hidden flex flex-col">
      {/* 0. Linux OS Boot Screen & Decision Dialog */}
      {isBooting && (
        <BootScreen onComplete={() => setIsBooting(false)} />
      )}

      {/* 1. Top macOS Menu Bar */}
      <TopBar
        activeAppName={getActiveTitle()}
        openApp={openApp}
        onOpenSearch={() => setIsSearchOpen(true)}
        onToggleNotifications={() => setIsNotificationsOpen(!isNotificationsOpen)}
        unreadCount={1}
        onResetLayout={resetLayout}
        theme={theme}
        toggleTheme={toggleTheme}
      />

      {/* Main Desktop Area */}
      <main className="relative flex-1 overflow-hidden">
        {/* 2. Desktop Icons Column */}
        <div 
          className="desktop-icons-container"
          style={{ position: 'fixed', left: lang === 'ar' ? 'auto' : '20px', right: lang === 'ar' ? '20px' : 'auto', top: '56px', display: 'flex', flexDirection: 'column', gap: '14px', zIndex: 10 }}
        >
          <DesktopIcon
            id="home"
            label={t.desktopIcons.home}
            isHome={true}
            isOpen={windows.home.isOpen}
            onClick={() => openApp('home')}
          />
          <DesktopIcon
            id="certificates"
            label={t.desktopIcons.certificates}
            iconType="certificates"
            isOpen={windows.certificates.isOpen}
            onClick={() => openApp('certificates')}
          />
          <DesktopIcon
            id="about"
            label={t.desktopIcons.about}
            iconType="about"
            isOpen={windows.about.isOpen}
            onClick={() => openApp('about')}
          />
          <DesktopIcon
            id="clients"
            label={t.desktopIcons.experience}
            iconType="clients"
            isOpen={windows.clients.isOpen}
            onClick={() => openApp('clients')}
          />
          <DesktopIcon
            id="projects"
            label={t.desktopIcons.projects}
            iconType="projects"
            isOpen={windows.projects.isOpen}
            onClick={() => openApp('projects')}
          />
        </div>

        {/* 3. Floating Desktop Windows */}
        <DesktopWindow
          id="home"
          title={t.windowTitles.home}
          isOpen={windows.home.isOpen}
          isMinimized={windows.home.isMinimized}
          zIndex={windows.home.zIndex}
          initialPosition={windows.home.initialPosition}
          defaultSize={windows.home.size}
          onClose={closeWindow}
          onMinimize={minimizeWindow}
          onFocus={focusWindow}
          onMaximizeChange={handleMaximizeChange}
        >
          <HomeWindowContent openApp={openApp} />
        </DesktopWindow>

        <DesktopWindow
          id="about"
          title={t.windowTitles.about}
          isOpen={windows.about.isOpen}
          isMinimized={windows.about.isMinimized}
          zIndex={windows.about.zIndex}
          initialPosition={windows.about.initialPosition}
          defaultSize={windows.about.size}
          onClose={closeWindow}
          onMinimize={minimizeWindow}
          onFocus={focusWindow}
          onMaximizeChange={handleMaximizeChange}
        >
          <AboutWindowContent />
        </DesktopWindow>

        <DesktopWindow
          id="certificates"
          title={t.windowTitles.certificates}
          isOpen={windows.certificates.isOpen}
          isMinimized={windows.certificates.isMinimized}
          zIndex={windows.certificates.zIndex}
          initialPosition={windows.certificates.initialPosition}
          defaultSize={windows.certificates.size}
          onClose={closeWindow}
          onMinimize={minimizeWindow}
          onFocus={focusWindow}
          onMaximizeChange={handleMaximizeChange}
        >
          <CertificatesWindowContent />
        </DesktopWindow>

        <DesktopWindow
          id="projects"
          title={t.windowTitles.projects}
          isOpen={windows.projects.isOpen}
          isMinimized={windows.projects.isMinimized}
          zIndex={windows.projects.zIndex}
          initialPosition={windows.projects.initialPosition}
          defaultSize={windows.projects.size}
          onClose={closeWindow}
          onMinimize={minimizeWindow}
          onFocus={focusWindow}
          onMaximizeChange={handleMaximizeChange}
        >
          <ProjectsWindowContent />
        </DesktopWindow>

        <DesktopWindow
          id="clients"
          title={t.windowTitles.clients}
          isOpen={windows.clients.isOpen}
          isMinimized={windows.clients.isMinimized}
          zIndex={windows.clients.zIndex}
          initialPosition={windows.clients.initialPosition}
          defaultSize={windows.clients.size}
          onClose={closeWindow}
          onMinimize={minimizeWindow}
          onFocus={focusWindow}
          onMaximizeChange={handleMaximizeChange}
        >
          <ClientsWindowContent />
        </DesktopWindow>

        <DesktopWindow
          id="terminal"
          title={t.windowTitles.terminal}
          isOpen={windows.terminal.isOpen}
          isMinimized={windows.terminal.isMinimized}
          zIndex={windows.terminal.zIndex}
          initialPosition={windows.terminal.initialPosition}
          defaultSize={windows.terminal.size}
          onClose={closeWindow}
          onMinimize={minimizeWindow}
          onFocus={focusWindow}
          onMaximizeChange={handleMaximizeChange}
        >
          <TerminalWindowContent openApp={openApp} />
        </DesktopWindow>

        <DesktopWindow
          id="contact"
          title={t.windowTitles.contact}
          isOpen={windows.contact.isOpen}
          isMinimized={windows.contact.isMinimized}
          zIndex={windows.contact.zIndex}
          initialPosition={windows.contact.initialPosition}
          defaultSize={windows.contact.size}
          onClose={closeWindow}
          onMinimize={minimizeWindow}
          onFocus={focusWindow}
          onMaximizeChange={handleMaximizeChange}
        >
          <ContactWindowContent />
        </DesktopWindow>

        <DesktopWindow
          id="notes"
          title={t.windowTitles.notes}
          isOpen={windows.notes.isOpen}
          isMinimized={windows.notes.isMinimized}
          zIndex={windows.notes.zIndex}
          initialPosition={windows.notes.initialPosition}
          defaultSize={windows.notes.size}
          onClose={closeWindow}
          onMinimize={minimizeWindow}
          onFocus={focusWindow}
          onMaximizeChange={handleMaximizeChange}
        >
          <NotesWindowContent />
        </DesktopWindow>

        {/* 4. Desktop Robot Mascot */}
        <Mascot openApp={openApp} />

        {/* 5. Right Desktop Sidebar Widgets */}
        <RightSidebar openApp={openApp} />
      </main>

      {/* 6. macOS Bottom Floating Dock */}
      <Dock
        openApp={openApp}
        toggleApp={toggleApp}
        activeWindows={windows}
        focusedAppId={focusedAppId}
        isAutoHide={isAnyWindowMaximized}
      />

      {/* 7. Spotlight Search Overlay */}
      <SpotlightSearch
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        openApp={openApp}
      />

      {/* 8. Notification Center */}
      <NotificationCenter
        isOpen={isNotificationsOpen}
        onClose={() => setIsNotificationsOpen(false)}
        openApp={openApp}
      />
    </div>
  );
}
