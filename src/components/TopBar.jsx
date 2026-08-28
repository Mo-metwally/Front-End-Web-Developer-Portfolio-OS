import React, { useState, useEffect } from 'react';
import { 
  Bell, 
  Search, 
  Sun, 
  Moon,
  User 
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';
import LogoImg from '../assets/Logo.png';

export default function TopBar({ 
  activeAppName, 
  openApp, 
  onOpenSearch, 
  onToggleNotifications,
  unreadCount,
  onResetLayout,
  theme = 'dark',
  toggleTheme
}) {
  const { lang, toggleLang, t } = useLanguage();
  const [timeStr, setTimeStr] = useState('');
  const [activeMenu, setActiveMenu] = useState(null);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const locale = lang === 'ar' ? 'ar-EG' : 'en-US';
      const options = { 
        hour: '2-digit', 
        minute: '2-digit',
        hour12: true 
      };
      const formatted = now.toLocaleTimeString(locale, options);
      setTimeStr(formatted);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, [lang]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest('.topbar-menu-container')) {
        setActiveMenu(null);
      }
    };
    window.addEventListener('click', handleClickOutside);
    return () => window.removeEventListener('click', handleClickOutside);
  }, []);

  const menus = [
    { key: 'aboutMe', label: t.menus.aboutMe },
    { key: 'file', label: t.menus.file },
    { key: 'edit', label: t.menus.edit },
    { key: 'view', label: t.menus.view },
    { key: 'window', label: t.menus.window },
    { key: 'help', label: t.menus.help }
  ];

  const menuItems = {
    aboutMe: [
      { label: t.menuItems.aboutMohamed, action: () => openApp('about') },
      { label: t.menuItems.viewCerts18, shortcut: '⌘E', action: () => openApp('certificates') },
      { label: t.menuItems.systemResume, action: () => openApp('notes') },
      { divider: true },
      { label: t.menuItems.lockWorkspace, shortcut: '⌃⌘Q', action: () => alert(t.systemLocked) },
      { label: t.menuItems.restartOS, action: () => window.location.reload() },
    ],
    file: [
      { label: t.menuItems.viewCerts18, shortcut: '⌘E', action: () => openApp('certificates') },
      { label: t.menuItems.newTerminal, shortcut: '⌘T', action: () => openApp('terminal') },
      { label: t.menuItems.openAbout, shortcut: '⌘A', action: () => openApp('about') },
      { label: t.menuItems.viewProjects, shortcut: '⌘P', action: () => openApp('projects') },
      { divider: true },
      { label: t.menuItems.resetLayout, shortcut: '⌘R', action: onResetLayout },
    ],
    edit: [
      { label: t.menuItems.copyBio, shortcut: '⌘C', action: () => navigator.clipboard.writeText(PORTFOLIO_DATA.profile.summary) },
      { label: t.menuItems.copyEmail, shortcut: '⇧⌘C', action: () => navigator.clipboard.writeText('m.metwally.rzq@gmail.com') },
    ],
    view: [
      { label: t.menuItems.spotlightSearch, shortcut: '⌘K', action: onOpenSearch },
      { label: t.menuItems.notificationsPanel, shortcut: '⌘N', action: onToggleNotifications },
      { label: theme === 'dark' ? t.themeDark : t.themeLight, action: toggleTheme },
      { label: t.menuItems.focusHome, action: () => openApp('home') },
      { label: t.menuItems.certificationsNanodegrees, action: () => openApp('certificates') },
    ],
    window: [
      { label: t.menuItems.showAllWindows, action: onResetLayout },
      { label: t.menuItems.viewCerts18, action: () => openApp('certificates') },
      { label: t.menuItems.openContact, action: () => openApp('contact') },
      { label: t.menuItems.openExperience, action: () => openApp('clients') },
      { label: t.menuItems.openNotes, action: () => openApp('notes') },
    ],
    help: [
      { label: t.menuItems.viewCerts18, action: () => openApp('certificates') },
      { label: t.menuItems.aboutMohamed, action: () => openApp('about') },
    ]
  };

  return (
    <header className="top-menu-bar" style={{ padding: '0 clamp(8px, 2vw, 16px)' }}>
      {/* Left Menu Section */}
      <div className="flex items-center gap-1">
        {/* Brand Logo Avatar */}
        <button
          onClick={() => openApp('home')}
          className="flex items-center justify-center p-1 rounded hover:bg-white/10 transition-colors focus:outline-none mr-1"
          title={t.brandSubtitle}
        >
          <div style={{ width: '22px', height: '22px', borderRadius: '6px', overflow: 'hidden', border: '1px solid rgba(200, 138, 88, 0.5)', background: 'linear-gradient(135deg, #c88a58 0%, #ba7e4a 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img
              src={LogoImg}
              alt="Logo"
              style={{ width: '100%', height: '100%', objectFit: 'cover', transform: 'scale(1.2)' }}
            />
          </div>
        </button>

        {/* macOS Menu Items */}
        {menus.map((menu) => (
          <div key={menu.key} className={`relative topbar-menu-container ${menu.key !== 'aboutMe' ? 'hidden md:block' : ''}`}>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setActiveMenu(activeMenu === menu.key ? null : menu.key);
              }}
              style={{
                padding: '2px 7px',
                borderRadius: '4px',
                fontSize: '12px',
                fontWeight: menu.key === 'aboutMe' ? '700' : '400',
                color: activeMenu === menu.key ? '#ffffff' : 'inherit',
                backgroundColor: activeMenu === menu.key ? 'rgba(200, 138, 88, 0.25)' : 'transparent',
                border: 'none',
                cursor: 'pointer',
                transition: 'background-color 0.15s ease'
              }}
            >
              {menu.label}
            </button>

            {/* Dropdown Menu Window */}
            {activeMenu === menu.key && (
              <div
                style={{
                  position: 'absolute',
                  left: lang === 'ar' ? 'auto' : 0,
                  right: lang === 'ar' ? 0 : 'auto',
                  top: '32px',
                  width: '230px',
                  backgroundColor: theme === 'dark' ? '#1f1d1b' : '#faf6ef',
                  border: theme === 'dark' ? '1px solid rgba(255, 255, 255, 0.16)' : '1px solid rgba(0, 0, 0, 0.14)',
                  borderRadius: '10px',
                  padding: '6px',
                  boxShadow: '0 18px 40px rgba(0, 0, 0, 0.65)',
                  zIndex: 999999,
                  backdropFilter: 'blur(16px)'
                }}
              >
                {menuItems[menu.key]?.map((item, idx) => (
                  item.divider ? (
                    <div 
                      key={idx} 
                      style={{ 
                        height: '1px', 
                        backgroundColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)', 
                        margin: '4px 0' 
                      }} 
                    />
                  ) : (
                    <button
                      key={idx}
                      onClick={() => {
                        item.action?.();
                        setActiveMenu(null);
                      }}
                      style={{
                        width: '100%',
                        textAlign: lang === 'ar' ? 'right' : 'left',
                        padding: '6px 10px',
                        borderRadius: '6px',
                        fontSize: '12px',
                        color: theme === 'dark' ? '#f0ece4' : '#1c1917',
                        backgroundColor: 'transparent',
                        border: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        cursor: 'pointer',
                        transition: 'background-color 0.15s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = 'rgba(200, 138, 88, 0.25)';
                        e.currentTarget.style.color = theme === 'dark' ? '#ffffff' : '#8a582c';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'transparent';
                        e.currentTarget.style.color = theme === 'dark' ? '#f0ece4' : '#1c1917';
                      }}
                    >
                      <span style={{ fontWeight: item.label === activeAppName ? '700' : '400' }}>
                        {item.label}
                      </span>
                      {item.shortcut && (
                        <span className="font-mono-code" style={{ fontSize: '10px', color: '#9c9589' }}>
                          {item.shortcut}
                        </span>
                      )}
                    </button>
                  )
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Right Status & Controls Section */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px' }}>
        {/* Live Chat Status pill */}
        <button 
          onClick={() => openApp('contact')}
          style={{ display: 'flex', alignItems: 'center', gap: '5px', padding: '2px 8px', borderRadius: '999px', backgroundColor: 'rgba(200, 138, 88, 0.15)', color: '#c88a58', border: '1px solid rgba(200, 138, 88, 0.35)', cursor: 'pointer', fontSize: '11px', fontWeight: '600' }}
        >
          <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#c88a58', boxShadow: '0 0 6px #c88a58' }} />
          <span className="hidden sm:inline">{t.liveChat}</span>
        </button>

        {/* Online Count */}
        <div className="hidden sm:flex items-center gap-1 text-[11px] opacity-80">
          <User style={{ width: '12px', height: '12px' }} />
          <span>{PORTFOLIO_DATA.profile.onlineUsers}</span>
        </div>

        {/* Language Switcher Badge (AR / EN) */}
        <button
          onClick={toggleLang}
          style={{ 
            fontSize: '11px', 
            fontWeight: '700', 
            padding: '2px 6px', 
            borderRadius: '4px', 
            backgroundColor: 'rgba(200, 138, 88, 0.18)', 
            color: '#c88a58', 
            border: '1px solid rgba(200, 138, 88, 0.35)', 
            cursor: 'pointer',
            transition: 'all 0.15s ease'
          }}
          title={t.langTitle}
        >
          {t.langCode}
        </button>

        {/* Theme Toggle (Dark / Light) */}
        <button
          onClick={toggleTheme}
          style={{ padding: '3px', borderRadius: '4px', background: 'none', border: 'none', color: '#c88a58', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          title={theme === 'dark' ? t.themeDark : t.themeLight}
        >
          {theme === 'dark' ? (
            <Sun style={{ width: '14px', height: '14px' }} />
          ) : (
            <Moon style={{ width: '14px', height: '14px' }} />
          )}
        </button>

        {/* Notification Bell */}
        <button
          onClick={onToggleNotifications}
          className="relative"
          style={{ padding: '3px', borderRadius: '4px', background: 'none', border: 'none', color: '#c88a58', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          title={t.notifications}
        >
          <Bell style={{ width: '14px', height: '14px' }} />
          {unreadCount > 0 && (
            <span
              style={{
                position: 'absolute',
                top: '2px',
                right: '2px',
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                backgroundColor: '#e63946'
              }}
            />
          )}
        </button>

        {/* Search Icon */}
        <button
          onClick={onOpenSearch}
          style={{ padding: '3px', borderRadius: '4px', background: 'none', border: 'none', color: '#c88a58', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          title={t.spotlight}
        >
          <Search style={{ width: '14px', height: '14px' }} />
        </button>

        {/* Compact Time */}
        <div className="font-mono-code text-[11px] font-semibold text-[#a88d77] opacity-90 pl-1">
          {timeStr}
        </div>
      </div>
    </header>
  );
}
