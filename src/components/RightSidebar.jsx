import React, { useState, useEffect } from 'react';
import { 
  ExternalLink, 
  Sparkles, 
  Folder, 
  FileText, 
  Code2, 
  Globe, 
  Cpu, 
  Shield,
  Award 
} from 'lucide-react';
import { 
  FaWhatsapp, 
  FaGithub, 
  FaLinkedinIn, 
  FaEnvelope 
} from 'react-icons/fa6';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';

export default function RightSidebar({ openApp }) {
  const { lang, t } = useLanguage();
  const linkedInPosts = t.sidebar?.linkedInPosts || PORTFOLIO_DATA.linkedInPosts;
  const tips = t.sidebar?.tips || PORTFOLIO_DATA.tips;
  const { shortcuts } = PORTFOLIO_DATA;
  const [tipIndex, setTipIndex] = useState(0);
  const [logs, setLogs] = useState([
    { id: 1, text: '04:05:43 cursor -> 982, 149' },
    { id: 2, text: '04:05:44 cursor -> 1452, 198' },
    { id: 3, text: '04:05:44 cursor -> 1596, 354' },
    { id: 4, text: '04:05:46 cursor -> 1557, 380' }
  ]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTipIndex((prev) => (prev + 1) % tips.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [tips.length]);

  useEffect(() => {
    const handleMove = (e) => {
      if (Math.random() > 0.96) {
        const now = new Date();
        const time = now.toTimeString().split(' ')[0];
        const logText = `${time} cursor -> ${e.clientX}, ${e.clientY}`;
        setLogs((prev) => [...prev.slice(-3), { id: Date.now(), text: logText }]);
      }
    };

    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  const currentTip = tips[tipIndex];

  return (
    <aside
      className="right-sidebar-container"
      style={{
        position: 'fixed',
        right: lang === 'ar' ? 'auto' : '24px',
        left: lang === 'ar' ? '24px' : 'auto',
        top: '46px',
        bottom: '16px',
        width: '270px',
        maxHeight: 'calc(100vh - 62px)',
        display: 'flex',
        flexDirection: 'column',
        gap: '9px',
        zIndex: 10,
        userSelect: 'none',
        overflowY: 'auto',
        overflowX: 'hidden',
        paddingRight: lang === 'ar' ? '2px' : '6px',
        paddingLeft: lang === 'ar' ? '6px' : '2px',
        paddingBottom: '32px'
      }}
    >
      {/* 1. ON LINKEDIN CARD */}
      <div style={{ backgroundColor: 'rgba(26, 22, 19, 0.92)', border: '1px solid rgba(200, 138, 88, 0.15)', borderRadius: '16px', padding: '11px 13px', backdropFilter: 'blur(16px)', boxShadow: '0 10px 25px rgba(0,0,0,0.5)' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingBottom: '7px', borderBottom: '1px solid rgba(255, 255, 255, 0.08)', marginBottom: '7px' }}>
          <span className="font-mono-code" style={{ fontSize: '9px', fontWeight: '700', letterSpacing: '0.15em', color: '#a88d77', textTransform: 'uppercase' }}>
            {t.sidebar.onLinkedIn}
          </span>
          <a
            href="https://linkedin.com/in/mohamed-metwally-rzq"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '10.5px', fontWeight: '500', color: '#d99c6b', textDecoration: 'none' }}
          >
            <span>{t.sidebar.viewProfile}</span>
            <ExternalLink style={{ width: '10px', height: '10px' }} />
          </a>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '7px' }}>
          {linkedInPosts.slice(0, 3).map((post) => (
            <a
              key={post.id}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: 'flex', alignItems: 'flex-start', gap: '9px', textDecoration: 'none', color: 'inherit' }}
            >
              <div style={{ width: '34px', height: '34px', borderRadius: '7px', overflow: 'hidden', flexShrink: 0, border: '1px solid rgba(255,255,255,0.1)', backgroundColor: 'rgba(255,255,255,0.05)' }}>
                <img
                  src={post.image}
                  alt="Post"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <div style={{ minWidth: 0, flex: 1 }}>
                <h4 style={{ fontSize: '10.5px', fontWeight: '500', color: '#dedad2', lineHeight: '1.25', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                  {post.title}
                </h4>
                <span className="font-mono-code" style={{ fontSize: '8px', fontWeight: '700', color: '#a88d77', textTransform: 'uppercase', letterSpacing: '0.05em', display: 'block', marginTop: '2px' }}>
                  {post.timestamp}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* 2. PORTFOLIO HIGHLIGHTS CAROUSEL CARD */}
      <div style={{ backgroundColor: '#fdfbf7', borderRadius: '16px', padding: '11px 13px', color: '#1a1918', border: '1px solid rgba(200, 138, 88, 0.2)', boxShadow: '0 10px 25px rgba(0,0,0,0.5)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <div>
          <span className="font-mono-code" style={{ fontSize: '9px', fontWeight: '700', letterSpacing: '0.15em', color: '#a86f3e', textTransform: 'uppercase', display: 'block', marginBottom: '5px' }}>
            {t.sidebar.portfolioHighlights}
          </span>

          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', marginBottom: '5px' }}>
            <div style={{ width: '26px', height: '26px', borderRadius: '7px', backgroundColor: '#382b20', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#c88a58', flexShrink: 0 }}>
              <Sparkles style={{ width: '13px', height: '13px' }} />
            </div>
            <div>
              <h4 style={{ fontSize: '11.5px', fontWeight: '700', color: '#1a1918', lineHeight: '1.2' }}>
                {currentTip.title}
              </h4>
              <p style={{ fontSize: '10.5px', color: '#615c54', marginTop: '2px', lineHeight: '1.3' }}>
                {currentTip.subtitle}
              </p>
            </div>
          </div>

          <button
            onClick={() => openApp(currentTip.targetApp)}
            style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', fontSize: '10.5px', fontWeight: '600', color: '#a86f3e', backgroundColor: 'transparent', border: 'none', cursor: 'pointer', marginTop: '2px', padding: 0 }}
          >
            <span>{currentTip.actionText}</span>
          </button>
        </div>

        {/* Pagination Dots */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '5px', paddingTop: '6px', marginTop: '5px', borderTop: '1px solid rgba(0,0,0,0.06)' }}>
          {tips.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setTipIndex(idx)}
              style={{
                width: tipIndex === idx ? '12px' : '5px',
                height: '4px',
                borderRadius: '3px',
                backgroundColor: tipIndex === idx ? '#c88a58' : 'rgba(0,0,0,0.2)',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                padding: 0
              }}
            />
          ))}
        </div>
      </div>

      {/* 3. SHORTCUTS GRID */}
      <div style={{ backgroundColor: '#fdfbf7', borderRadius: '16px', padding: '11px 13px', color: '#1a1918', border: '1px solid rgba(200, 138, 88, 0.2)', boxShadow: '0 10px 25px rgba(0,0,0,0.5)' }}>
        <span className="font-mono-code" style={{ fontSize: '9px', fontWeight: '700', letterSpacing: '0.15em', color: '#a86f3e', textTransform: 'uppercase', display: 'block', marginBottom: '6px' }}>
          {t.sidebar.shortcuts}
        </span>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5px' }}>
          {shortcuts.map((sc) => {
            const scLabel = lang === 'ar'
              ? (sc.target === 'certificates' ? 'الشهادات' : sc.target === 'projects' ? 'المشاريع' : sc.target === 'notes' ? 'السيرة' : sc.target === 'terminal' ? 'الطرفية' : sc.target === 'about' ? 'نبذة عني' : 'الخبرات')
              : sc.name;

            return (
              <button
                key={sc.id}
                onClick={() => openApp(sc.target)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '5px',
                  padding: '5px 7px',
                  borderRadius: '7px',
                  backgroundColor: '#f5efe4',
                  border: '1px solid #e2d7c9',
                  cursor: 'pointer',
                  textAlign: 'left',
                  transition: 'background-color 0.15s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#ebe2d3'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#f5efe4'}
              >
                <div style={{ padding: '2px', borderRadius: '4px', backgroundColor: '#e2d7c9', color: '#2c221a', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {sc.icon === 'sparkles' && <Award style={{ width: '11px', height: '11px' }} />}
                  {sc.icon === 'folder' && <Folder style={{ width: '11px', height: '11px' }} />}
                  {sc.icon === 'file-text' && <FileText style={{ width: '11px', height: '11px' }} />}
                  {sc.icon === 'code-2' && <Code2 style={{ width: '11px', height: '11px' }} />}
                  {sc.icon === 'globe' && <Globe style={{ width: '11px', height: '11px' }} />}
                  {sc.icon === 'cpu' && <Cpu style={{ width: '11px', height: '11px' }} />}
                </div>
                <span style={{ fontSize: '10px', fontWeight: '700', color: '#26201a', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                  {scLabel}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 4. SYSTEM TELEMETRY */}
      <div className="font-mono-code" style={{ backgroundColor: 'rgba(26, 22, 19, 0.92)', border: '1px solid rgba(200, 138, 88, 0.15)', borderRadius: '16px', padding: '10px 13px', backdropFilter: 'blur(16px)', boxShadow: '0 10px 25px rgba(0,0,0,0.5)' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingBottom: '5px', borderBottom: '1px solid rgba(255, 255, 255, 0.08)', marginBottom: '5px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '10.5px', fontWeight: '600', color: '#dedad2' }}>
            <Shield style={{ width: '11px', height: '11px', color: '#c88a58' }} />
            <span>{t.sidebar.devEnv}</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '9px', color: '#3ea562' }}>
            <span style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: '#3ea562' }} />
            <span>{t.sidebar.location}</span>
          </div>
        </div>

        <div style={{ fontSize: '9px', color: 'rgba(255,255,255,0.4)', marginBottom: '3px', fontFamily: 'var(--font-sans)' }}>
          {t.sidebar.activeSession}
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', fontSize: '8.5px', color: '#98cbb4' }}>
          {logs.slice(-3).map((log) => (
            <div key={log.id} style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              {log.text}
            </div>
          ))}
        </div>
      </div>

      {/* 5. DIRECT CONTACT & SOCIAL CHANNELS */}
      <div style={{ backgroundColor: '#fdfbf7', borderRadius: '16px', padding: '10px 13px', color: '#1a1918', border: '1px solid rgba(200, 138, 88, 0.2)', boxShadow: '0 10px 25px rgba(0,0,0,0.5)' }}>
        <span className="font-mono-code" style={{ fontSize: '9px', fontWeight: '700', letterSpacing: '0.15em', color: '#a86f3e', textTransform: 'uppercase', display: 'block', marginBottom: '7px' }}>
          {t.sidebar.connectSocial}
        </span>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '7px' }}>
          {/* WhatsApp */}
          <a
            href="https://api.whatsapp.com/send?phone=201021340475"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '9px 0',
              borderRadius: '10px',
              backgroundColor: 'rgba(37, 211, 102, 0.14)',
              border: '1px solid rgba(37, 211, 102, 0.35)',
              color: '#25D366',
              textDecoration: 'none',
              transition: 'transform 0.16s ease, background-color 0.16s ease, box-shadow 0.16s ease'
            }}
            title="WhatsApp (+201021340475)"
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(37, 211, 102, 0.25)';
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(37, 211, 102, 0.25)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(37, 211, 102, 0.14)';
              e.currentTarget.style.transform = 'translateY(0px)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <FaWhatsapp style={{ width: '18px', height: '18px' }} />
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/Mo-metwally"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '9px 0',
              borderRadius: '10px',
              backgroundColor: 'rgba(36, 41, 46, 0.12)',
              border: '1px solid rgba(36, 41, 46, 0.25)',
              color: '#24292e',
              textDecoration: 'none',
              transition: 'transform 0.16s ease, background-color 0.16s ease, box-shadow 0.16s ease'
            }}
            title="GitHub (Mo-metwally)"
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(36, 41, 46, 0.22)';
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(36, 41, 46, 0.12)';
              e.currentTarget.style.transform = 'translateY(0px)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <FaGithub style={{ width: '18px', height: '18px' }} />
          </a>

          {/* Email */}
          <a
            href="mailto:m.metwally.rzq@gmail.com"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '9px 0',
              borderRadius: '10px',
              backgroundColor: 'rgba(234, 67, 53, 0.14)',
              border: '1px solid rgba(234, 67, 53, 0.35)',
              color: '#EA4335',
              textDecoration: 'none',
              transition: 'transform 0.16s ease, background-color 0.16s ease, box-shadow 0.16s ease'
            }}
            title="Email (m.metwally.rzq@gmail.com)"
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(234, 67, 53, 0.25)';
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(234, 67, 53, 0.25)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(234, 67, 53, 0.14)';
              e.currentTarget.style.transform = 'translateY(0px)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <FaEnvelope style={{ width: '17px', height: '17px' }} />
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/mohamed-metwally-rzq"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '9px 0',
              borderRadius: '10px',
              backgroundColor: 'rgba(10, 102, 194, 0.14)',
              border: '1px solid rgba(10, 102, 194, 0.35)',
              color: '#0A66C2',
              textDecoration: 'none',
              transition: 'transform 0.16s ease, background-color 0.16s ease, box-shadow 0.16s ease'
            }}
            title="LinkedIn (mohamed-metwally-rzq)"
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(10, 102, 194, 0.25)';
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(10, 102, 194, 0.25)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(10, 102, 194, 0.14)';
              e.currentTarget.style.transform = 'translateY(0px)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <FaLinkedinIn style={{ width: '18px', height: '18px' }} />
          </a>
        </div>
      </div>
    </aside>
  );
}
