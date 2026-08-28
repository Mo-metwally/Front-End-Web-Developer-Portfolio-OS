import React, { useState } from 'react';
import { 
  User, 
  Scan,
  Folder, 
  Mail, 
  Terminal, 
  FileText,
  Award
} from 'lucide-react';
import LogoImg from '../assets/Logo.png';
import { useLanguage } from '../context/LanguageContext';

export default function Dock({ openApp, toggleApp, activeWindows, focusedAppId, isAutoHide }) {
  const { lang } = useLanguage();
  const [isDockHovered, setIsDockHovered] = useState(false);
  const [hoveredApp, setHoveredApp] = useState(null);

  const handleDockClick = (id) => {
    const w = activeWindows[id];
    if (w?.isOpen && !w?.isMinimized && focusedAppId === id) {
      if (toggleApp) {
        toggleApp(id);
      } else {
        openApp(id);
      }
    } else {
      openApp(id);
    }
  };

  const dockLabels = {
    home: lang === 'ar' ? 'الرئيسية' : 'Home',
    about: lang === 'ar' ? 'نبذة عني' : 'About me',
    certificates: lang === 'ar' ? 'الشهادات' : 'Certificates',
    clients: lang === 'ar' ? 'الخبرات' : 'Experience',
    projects: lang === 'ar' ? 'المشاريع' : 'Projects',
    contact: lang === 'ar' ? 'البريد' : 'Mail',
    terminal: lang === 'ar' ? 'الطرفية' : 'Terminal',
    notes: lang === 'ar' ? 'الملاحظات' : 'Notes'
  };

  const dockApps = [
    {
      id: 'home',
      label: dockLabels.home,
      element: (
        <div style={{ width: '100%', height: '100%', borderRadius: '10px', overflow: 'hidden', background: 'linear-gradient(135deg, #d29864 0%, #ba7e4a 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img 
            src={LogoImg} 
            alt="Home" 
            style={{ width: '100%', height: '100%', objectFit: 'cover', transform: 'scale(1.18)' }}
          />
        </div>
      )
    },
    {
      id: 'about',
      label: dockLabels.about,
      element: (
        <div style={{ width: '100%', height: '100%', borderRadius: '10px', backgroundColor: '#f5ede3', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#382618' }}>
          <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Scan style={{ width: '22px', height: '22px', strokeWidth: '1.8' }} />
            <User style={{ width: '11px', height: '11px', position: 'absolute', fill: '#382618', stroke: 'none' }} />
          </div>
        </div>
      )
    },
    {
      id: 'certificates',
      label: dockLabels.certificates,
      element: (
        <div style={{ width: '100%', height: '100%', borderRadius: '10px', background: 'linear-gradient(135deg, #f0e6d6 0%, #e2d2bd 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#a86f3e' }}>
          <Award style={{ width: '20px', height: '20px', strokeWidth: '2' }} />
        </div>
      )
    },
    {
      id: 'clients',
      label: dockLabels.clients,
      element: (
        <div style={{ width: '100%', height: '100%', borderRadius: '10px', backgroundColor: '#d2ded8', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ width: '18px', height: '18px', borderRadius: '3px', border: '1.8px solid #22332a', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '2.5px', padding: '1px' }}>
            <div style={{ width: '10px', height: '1.8px', backgroundColor: '#22332a', borderRadius: '2px' }} />
            <div style={{ width: '10px', height: '1.8px', backgroundColor: '#22332a', borderRadius: '2px' }} />
            <div style={{ width: '6px', height: '1.8px', backgroundColor: '#22332a', borderRadius: '2px', alignSelf: 'flex-start', marginLeft: '1px' }} />
          </div>
        </div>
      )
    },
    {
      id: 'projects',
      label: dockLabels.projects,
      element: (
        <div style={{ width: '100%', height: '100%', borderRadius: '10px', backgroundColor: '#e8d5be', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ width: '18px', height: '16px', borderRadius: '4px', border: '1.8px solid #422d1d', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ width: '6px', height: '6px', borderRadius: '50%', border: '1.8px solid #422d1d' }} />
          </div>
        </div>
      )
    },
    {
      id: 'contact',
      label: dockLabels.contact,
      element: (
        <div style={{ width: '100%', height: '100%', borderRadius: '10px', backgroundColor: '#f5ede3', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#382618' }}>
          <Mail style={{ width: '18px', height: '18px', strokeWidth: '1.8' }} />
        </div>
      )
    },
    {
      id: 'terminal',
      label: dockLabels.terminal,
      element: (
        <div style={{ width: '100%', height: '100%', borderRadius: '10px', backgroundColor: '#161311', border: '1px solid rgba(200,138,88,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#c88a58', fontFamily: 'var(--font-mono)', fontWeight: 'bold', fontSize: '13px' }}>
          {'>_'}
        </div>
      )
    },
    {
      id: 'notes',
      label: dockLabels.notes,
      element: (
        <div style={{ width: '100%', height: '100%', borderRadius: '10px', backgroundColor: '#e8d5be', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#422d1d' }}>
          <FileText style={{ width: '18px', height: '18px', strokeWidth: '1.8' }} />
        </div>
      )
    }
  ];

  const isVisible = !isAutoHide || isDockHovered;

  return (
    <div
      className="dock-container"
      onMouseEnter={() => setIsDockHovered(true)}
      onMouseLeave={() => {
        setIsDockHovered(false);
        setHoveredApp(null);
      }}
      style={{
        position: 'fixed',
        bottom: '0px',
        left: '50%',
        transform: 'translateX(-50%)',
        paddingBottom: '14px',
        paddingTop: '20px',
        paddingLeft: '24px',
        paddingRight: '24px',
        zIndex: 99999,
        userSelect: 'none',
        pointerEvents: 'auto',
        opacity: isVisible ? 1 : 0,
        transition: 'opacity 0.6s linear'
      }}
    >
      <div 
        className="dock-inner"
        style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '8px', 
          padding: '8px 14px', 
          borderRadius: '22px', 
          backgroundColor: 'rgba(22, 19, 17, 0.88)', 
          backdropFilter: 'blur(24px)', 
          border: '1px solid rgba(255, 255, 255, 0.14)', 
          boxShadow: '0 20px 50px rgba(0, 0, 0, 0.85)',
          transform: isAutoHide && !isDockHovered ? 'translateY(12px)' : 'translateY(0px)',
          transition: 'transform 0.6s linear'
        }}
      >
        {dockApps.map((app) => {
          const isOpen = !!activeWindows[app.id]?.isOpen;
          const isFocused = focusedAppId === app.id;

          return (
            <div
              key={app.id}
              className={`dock-item dock-item-${app.id}`}
              style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
              onMouseEnter={() => setHoveredApp(app.id)}
              onMouseLeave={() => setHoveredApp(null)}
            >
              {hoveredApp === app.id && (
                <div style={{ position: 'absolute', top: '-36px', padding: '3px 10px', borderRadius: '6px', backgroundColor: 'rgba(36, 27, 20, 0.95)', border: '1px solid rgba(200, 138, 88, 0.3)', fontSize: '11px', fontWeight: '600', color: '#fcfbfa', whiteSpace: 'nowrap', pointerEvents: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.5)' }}>
                  {app.label}
                </div>
              )}

              <button
                onClick={() => handleDockClick(app.id)}
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '12px',
                  padding: '2px',
                  backgroundColor: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'transform 0.18s ease',
                  transform: hoveredApp === app.id ? 'translateY(-6px) scale(1.08)' : 'translateY(0px) scale(1)'
                }}
              >
                {app.element}
              </button>

              <div style={{ height: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '3px' }}>
                {isOpen && (
                  <span
                    style={{
                      width: isFocused ? '6px' : '4px',
                      height: '4px',
                      borderRadius: '2px',
                      backgroundColor: isFocused ? '#c88a58' : 'rgba(255,255,255,0.7)',
                      transition: 'all 0.2s ease'
                    }}
                  />
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
