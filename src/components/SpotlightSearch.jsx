import React, { useState, useEffect } from 'react';
import { Search, Folder, User, Terminal, Mail, FileText, X, Globe, Sparkles, Briefcase, Award } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function SpotlightSearch({ isOpen, onClose, openApp }) {
  const { lang } = useLanguage();
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        onClose();
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const itemsEn = [
    { title: 'About me — Bio, Education & Nanodegrees', category: 'Application', id: 'about', icon: <User style={{ width: '16px', height: '16px', color: '#c88a58' }} /> },
    { title: 'Certificates — 18 Verified Nanodegrees & Credentials', category: 'Credentials', id: 'certificates', icon: <Award style={{ width: '16px', height: '16px', color: '#c88a58' }} /> },
    { title: 'Projects — Hawash, Jawlah, TrendLine & 10 Systems', category: 'Portfolio', id: 'projects', icon: <Folder style={{ width: '16px', height: '16px', color: '#d99c6b' }} /> },
    { title: 'Experience — Missan Elmaharya & Freelance', category: 'Career', id: 'clients', icon: <Briefcase style={{ width: '16px', height: '16px', color: '#88ab93' }} /> },
    { title: 'Terminal Shell — Interactive CLI', category: 'Developer Tool', id: 'terminal', icon: <Terminal style={{ width: '16px', height: '16px', color: '#c88a58' }} /> },
    { title: 'Contact — Email, Phone & Direct Message', category: 'Messaging', id: 'contact', icon: <Mail style={{ width: '16px', height: '16px', color: '#68a0e2' }} /> },
    { title: 'Resume Notes & Technical Stack', category: 'Documents', id: 'notes', icon: <FileText style={{ width: '16px', height: '16px', color: '#e0b77b' }} /> },
    { title: 'Home — Executive Workspace Overview', category: 'System', id: 'home', icon: <Sparkles style={{ width: '16px', height: '16px', color: '#c88a58' }} /> }
  ];

  const itemsAr = [
    { title: 'نبذة عني — السيرة الذاتية، التعليم والشهادات', category: 'تطبيق', id: 'about', icon: <User style={{ width: '16px', height: '16px', color: '#c88a58' }} /> },
    { title: 'الشهادات والاعتمادات — 18 شهادة ودرجة نانوديجري موثقة', category: 'اعتمادات', id: 'certificates', icon: <Award style={{ width: '16px', height: '16px', color: '#c88a58' }} /> },
    { title: 'المشاريع — حواش، جولة، تريند لاين و 10 منصات حية', category: 'أعمال', id: 'projects', icon: <Folder style={{ width: '16px', height: '16px', color: '#d99c6b' }} /> },
    { title: 'الخبرات والمسار — ميسان المهارية والعمل الحر', category: 'مسيرة مهنية', id: 'clients', icon: <Briefcase style={{ width: '16px', height: '16px', color: '#88ab93' }} /> },
    { title: 'الطرفية — موجه الأوامر البرمجية التفاعلي', category: 'أداة مطور', id: 'terminal', icon: <Terminal style={{ width: '16px', height: '16px', color: '#c88a58' }} /> },
    { title: 'التواصل — رسالة فورية، البريد، والهاتف', category: 'مراسلة', id: 'contact', icon: <Mail style={{ width: '16px', height: '16px', color: '#68a0e2' }} /> },
    { title: 'الملاحظات والسيرة الذاتية الرسمية (PDF)', category: 'وثائق', id: 'notes', icon: <FileText style={{ width: '16px', height: '16px', color: '#e0b77b' }} /> },
    { title: 'الرئيسية — نظرة عامة على الملف المهني', category: 'نظام', id: 'home', icon: <Sparkles style={{ width: '16px', height: '16px', color: '#c88a58' }} /> }
  ];

  const items = lang === 'ar' ? itemsAr : itemsEn;

  const filtered = items.filter((item) =>
    item.title.toLowerCase().includes(query.toLowerCase()) ||
    item.category.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(10, 8, 7, 0.7)',
        backdropFilter: 'blur(16px)',
        zIndex: 99999,
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        paddingTop: '15vh',
        userSelect: 'none'
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width: '580px',
          maxWidth: '92vw',
          backgroundColor: '#1b1816',
          border: '1px solid rgba(200, 138, 88, 0.3)',
          borderRadius: '16px',
          boxShadow: '0 30px 70px rgba(0, 0, 0, 0.9), 0 0 0 1px rgba(0,0,0,0.6)',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        {/* Search Header Bar */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '14px 18px', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
          <Search style={{ width: '18px', height: '18px', color: '#c88a58', flexShrink: 0 }} />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={lang === 'ar' ? 'ابحث في المشاريع، المهارات، الخبرات، التواصل...' : 'Search projects, skills, experience, contact...'}
            style={{
              flex: 1,
              backgroundColor: 'transparent',
              border: 'none',
              outline: 'none',
              fontSize: '15px',
              color: '#faf8f5',
              fontFamily: 'var(--font-sans)',
              textAlign: lang === 'ar' ? 'right' : 'left'
            }}
          />
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span className="font-mono-code" style={{ fontSize: '10px', fontWeight: '700', color: 'rgba(255,255,255,0.4)', backgroundColor: 'rgba(255,255,255,0.08)', padding: '2px 6px', borderRadius: '4px' }}>
              ESC
            </span>
            <button
              onClick={onClose}
              style={{ background: 'none', border: 'none', color: 'rgba(255,255,255,0.4)', cursor: 'pointer', padding: '2px', display: 'flex', alignItems: 'center' }}
            >
              <X style={{ width: '16px', height: '16px' }} />
            </button>
          </div>
        </div>

        {/* Results List */}
        <div style={{ maxHeight: '320px', overflowY: 'auto', padding: '8px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
          {filtered.length === 0 ? (
            <div style={{ padding: '24px', textAlign: 'center', fontSize: '12px', color: 'rgba(255,255,255,0.4)' }}>
              {lang === 'ar' ? `لا توجد نتائج مطابقة لـ "${query}"` : `No results found for "${query}"`}
            </div>
          ) : (
            filtered.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  openApp(item.id);
                  onClose();
                }}
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '10px 12px',
                  borderRadius: '10px',
                  backgroundColor: 'transparent',
                  border: 'none',
                  textAlign: lang === 'ar' ? 'right' : 'left',
                  cursor: 'pointer',
                  transition: 'background-color 0.15s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(200, 138, 88, 0.18)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ width: '32px', height: '32px', borderRadius: '8px', backgroundColor: 'rgba(255, 255, 255, 0.06)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    {item.icon}
                  </div>
                  <div>
                    <h4 style={{ fontSize: '12.5px', fontWeight: '600', color: '#f0ede6' }}>
                      {item.title}
                    </h4>
                    <span className="font-mono-code" style={{ fontSize: '9px', color: '#a88d77', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      {item.category}
                    </span>
                  </div>
                </div>

                <span style={{ fontSize: '11px', fontWeight: '600', color: 'rgba(200, 138, 88, 0.8)' }}>
                  {lang === 'ar' ? '↵ فتح' : '↵ Open'}
                </span>
              </button>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
