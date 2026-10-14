import React, { useState, useEffect } from 'react';
import LogoImg from '../assets/Logo.png';
import { useLanguage } from '../context/LanguageContext';
import { Globe } from 'lucide-react';

export default function BootScreen({ onComplete, onNavigateToResume }) {
  const { lang, toggleLang } = useLanguage();
  const [bootStep, setBootStep] = useState(0); // 0: log sequence, 1: dialog ready
  const [logs, setLogs] = useState([]);

  const bootLogsEn = [
    '[    0.000000] Linux version 6.8.0-portfolio-os (x86_64)',
    '[    0.124100] Initializing Mohamed Metwally Developer Kernel...',
    '[    0.312000] Loading core engines: Next.js 14, React, Tailwind CSS [ OK ]',
    '[    0.542900] Mounting virtual disks: /projects (13), /certs (18) [ OK ]',
    '[    0.789100] Starting Graphic Server & Portfolio OS Desktop Environment [ OK ]'
  ];

  const bootLogsAr = [
    '[    0.000000] إصدار نواة نظام بورتفوليو 6.8.0-portfolio-os (x86_64)',
    '[    0.124100] بدء تشغيل نواة مطور الويب: محمد متولي...',
    '[    0.312000] تحميل محركات العمل: Next.js 14 و React و Tailwind CSS [ تم ]',
    '[    0.542900] ربط الملفات الافتراضية: /مشاريع (13) و /شهادات (18) [ تم ]',
    '[    0.789100] تشغيل خادم الرسوميات وبيئة سطح مكتب Portfolio OS [ تم ]'
  ];

  const bootLogs = lang === 'ar' ? bootLogsAr : bootLogsEn;

  useEffect(() => {
    let timers = [];
    bootLogs.forEach((text, index) => {
      const delay = (index + 1) * 150;
      const t = setTimeout(() => {
        setLogs(bootLogs.slice(0, index + 1));
        if (index === bootLogs.length - 1) {
          setTimeout(() => {
            setBootStep(1);
          }, 200);
        }
      }, delay);
      timers.push(t);
    });

    return () => {
      timers.forEach(clearTimeout);
    };
  }, [lang]);

  const handleGoWithFlow = () => {
    try {
      sessionStorage.setItem('portfolio_os_booted', 'true');
    } catch (e) {
      // safe fallback
    }
    onComplete();
  };

  const handleClassic = () => {
    try {
      sessionStorage.setItem('portfolio_os_booted', 'true');
    } catch (e) {}
    window.location.href = 'https://mohammed-metwally-classic.web.app/';
  };

  const handleResume = () => {
    try {
      sessionStorage.setItem('portfolio_os_booted', 'true');
    } catch (e) {}
    if (onNavigateToResume) {
      onNavigateToResume();
    } else {
      window.history.pushState({}, '', '/resume');
      window.dispatchEvent(new PopStateEvent('popstate'));
    }
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: '#0c0a08',
        zIndex: 999999,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px',
        color: '#eae5dc',
        userSelect: 'none',
        overflow: 'hidden'
      }}
    >
      {/* Top Language Switcher Bar */}
      <div
        style={{
          position: 'absolute',
          top: '24px',
          right: lang === 'ar' ? 'auto' : '28px',
          left: lang === 'ar' ? '28px' : 'auto',
          zIndex: 10
        }}
      >
        <button
          onClick={toggleLang}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            padding: '6px 12px',
            borderRadius: '8px',
            backgroundColor: 'rgba(200, 138, 88, 0.16)',
            border: '1px solid rgba(200, 138, 88, 0.4)',
            color: '#c88a58',
            fontSize: '12px',
            fontWeight: '700',
            cursor: 'pointer',
            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.4)',
            transition: 'all 0.15s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(200, 138, 88, 0.28)';
            e.currentTarget.style.transform = 'scale(1.05)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(200, 138, 88, 0.16)';
            e.currentTarget.style.transform = 'scale(1)';
          }}
          title={lang === 'ar' ? 'Switch to English' : 'التبديل إلى العربية'}
        >
          <Globe style={{ width: '14px', height: '14px' }} />
          <span>{lang === 'ar' ? 'EN' : 'ع'}</span>
        </button>
      </div>

      {/* Background radial glow */}
      <div
        style={{
          position: 'absolute',
          width: '520px',
          height: '520px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(200, 138, 88, 0.12) 0%, rgba(0,0,0,0) 70%)',
          pointerEvents: 'none'
        }}
      />

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '24px',
          maxWidth: '520px',
          width: '100%',
          zIndex: 2
        }}
      >
        {/* Animated Brand Logo */}
        <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div
            style={{
              position: 'absolute',
              width: '105px',
              height: '105px',
              borderRadius: '28px',
              backgroundColor: 'rgba(200, 138, 88, 0.25)',
              filter: 'blur(16px)',
              animation: 'pulse 2s infinite ease-in-out'
            }}
          />
          <div
            style={{
              width: '78px',
              height: '78px',
              borderRadius: '22px',
              overflow: 'hidden',
              border: '2px solid rgba(200, 138, 88, 0.6)',
              boxShadow: '0 12px 35px rgba(0, 0, 0, 0.8)',
              background: 'linear-gradient(135deg, #2b221a 0%, #171310 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <img
              src={LogoImg}
              alt="Mohamed Metwally Logo"
              style={{ width: '100%', height: '100%', objectFit: 'cover', transform: 'scale(1.15)' }}
            />
          </div>
        </div>

        {/* Linux Kernel Boot Terminal Log */}
        <div
          className="font-mono-code"
          style={{
            width: '100%',
            backgroundColor: 'rgba(18, 15, 13, 0.85)',
            border: '1px solid rgba(200, 138, 88, 0.2)',
            borderRadius: '12px',
            padding: '12px 16px',
            fontSize: '11px',
            color: '#8cb89f',
            lineHeight: '1.6',
            minHeight: '110px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            boxShadow: 'inset 0 2px 8px rgba(0,0,0,0.6)',
            textAlign: lang === 'ar' ? 'right' : 'left',
            direction: lang === 'ar' ? 'rtl' : 'ltr'
          }}
        >
          {logs.map((log, i) => (
            <div key={i} style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              {log}
            </div>
          ))}
          {bootStep === 0 && (
            <div style={{ color: '#c88a58', display: 'flex', alignItems: 'center', gap: '4px' }}>
              <span>_</span>
            </div>
          )}
        </div>

        {/* 3 Action Buttons matching the user's design */}
        {bootStep === 1 && (
          <div
            style={{
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
              animation: 'fadeInUp 0.35s ease forwards'
            }}
          >
            {/* Top Row: Two buttons */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
              {/* Button 1: Go With The Flow (default) */}
              <button
                onClick={handleGoWithFlow}
                style={{
                  padding: '14px 16px',
                  borderRadius: '10px',
                  backgroundColor: '#9a724d',
                  color: '#1a140e',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '13.5px',
                  fontWeight: '700',
                  lineHeight: '1.25',
                  textAlign: 'center',
                  boxShadow: '0 6px 18px rgba(0, 0, 0, 0.4)',
                  transition: 'transform 0.15s ease, background-color 0.15s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#b0845a';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#9a724d';
                  e.currentTarget.style.transform = 'translateY(0px)';
                }}
              >
                <div>{lang === 'ar' ? 'المتابعة بنظام التشغيل' : 'Go With The Flow'}</div>
                <div style={{ fontSize: '11px', fontWeight: '500', opacity: 0.9 }}>
                  {lang === 'ar' ? '(الافتراضي)' : '(default)'}
                </div>
              </button>

              {/* Button 2: Classic (recommend for mobile) */}
              <button
                onClick={handleClassic}
                style={{
                  padding: '14px 16px',
                  borderRadius: '10px',
                  backgroundColor: '#ededeb',
                  color: '#1c1a17',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '13.5px',
                  fontWeight: '700',
                  lineHeight: '1.25',
                  textAlign: 'center',
                  boxShadow: '0 6px 18px rgba(0, 0, 0, 0.4)',
                  transition: 'transform 0.15s ease, background-color 0.15s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#ffffff';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#ededeb';
                  e.currentTarget.style.transform = 'translateY(0px)';
                }}
              >
                <div>{lang === 'ar' ? 'النسخة الكلاسيكية' : 'Classic'}</div>
                <div style={{ fontSize: '11px', fontWeight: '500', opacity: 0.8 }}>
                  {lang === 'ar' ? '(موصى بها للموبايل)' : '(recommend for mobile)'}
                </div>
              </button>
            </div>

            {/* Bottom Row Button: If You Just Want My Resume. (Download CV) */}
            <button
              onClick={handleResume}
              style={{
                width: '100%',
                padding: '12px 18px',
                borderRadius: '10px',
                backgroundColor: 'transparent',
                border: '1px solid rgba(200, 138, 88, 0.45)',
                color: '#c88a58',
                cursor: 'pointer',
                fontSize: '12.5px',
                fontWeight: '600',
                textAlign: 'center',
                transition: 'background-color 0.15s ease, border-color 0.15s ease, transform 0.15s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(200, 138, 88, 0.12)';
                e.currentTarget.style.borderColor = '#c88a58';
                e.currentTarget.style.transform = 'translateY(-1px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.borderColor = 'rgba(200, 138, 88, 0.45)';
                e.currentTarget.style.transform = 'translateY(0px)';
              }}
            >
              {lang === 'ar' ? 'إذا كنت تريد السيرة الذاتية فقط (تحميل CV)' : 'If You Just Want My Resume. (Download CV)'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
