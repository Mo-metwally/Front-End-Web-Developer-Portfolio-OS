import React, { useState, useEffect } from 'react';
import { PORTFOLIO_DATA } from '../../data/portfolioData';
import { useLanguage } from '../../context/LanguageContext';

export default function NotesWindowContent() {
  const { lang, t } = useLanguage();
  const { notes } = PORTFOLIO_DATA;
  const [selectedNoteId, setSelectedNoteId] = useState(notes[0].id);
  const [isMobile, setIsMobile] = useState(() => typeof window !== 'undefined' ? window.innerWidth < 640 : false);

  useEffect(() => {
    const checkResize = () => {
      setIsMobile(window.innerWidth < 640);
    };
    window.addEventListener('resize', checkResize);
    return () => window.removeEventListener('resize', checkResize);
  }, []);

  const currentNote = notes.find((n) => n.id === selectedNoteId) || notes[0];

  const currentTitle = lang === 'ar' && currentNote.titleAr ? currentNote.titleAr : currentNote.title;
  const currentDate = lang === 'ar' && currentNote.dateAr ? currentNote.dateAr : currentNote.date;
  const currentContent = lang === 'ar' && currentNote.contentAr ? currentNote.contentAr : currentNote.content;

  return (
    <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', height: '100%', minHeight: '380px', backgroundColor: '#fcfbfa' }}>
      {/* Notes Sidebar / Top Pill Bar on Mobile */}
      <div
        style={{
          width: isMobile ? '100%' : '220px',
          borderRight: isMobile ? 'none' : (lang === 'ar' ? 'none' : '1px solid #eae6dc'),
          borderLeft: isMobile ? 'none' : (lang === 'ar' ? '1px solid #eae6dc' : 'none'),
          borderBottom: isMobile ? '1px solid #eae6dc' : 'none',
          backgroundColor: '#f5f1e8',
          padding: isMobile ? '10px 12px' : '16px 12px',
          display: 'flex',
          flexDirection: isMobile ? 'row' : 'column',
          overflowX: isMobile ? 'auto' : 'hidden',
          gap: '6px',
          flexShrink: 0
        }}
      >
        {!isMobile && (
          <span className="font-mono-code" style={{ fontSize: '9px', fontWeight: '700', color: '#8c867a', textTransform: 'uppercase', padding: '0 8px 8px 8px', borderBottom: '1px solid #e8e2d4' }}>
            {t.notes.tag}
          </span>
        )}
        {notes.map((note) => {
          const noteTitle = lang === 'ar' && note.titleAr ? note.titleAr : note.title;
          const noteDate = lang === 'ar' && note.dateAr ? note.dateAr : note.date;
          const isSelected = selectedNoteId === note.id;

          return (
            <button
              key={note.id}
              onClick={() => setSelectedNoteId(note.id)}
              style={{
                textAlign: lang === 'ar' ? 'right' : 'left',
                padding: isMobile ? '6px 12px' : '10px 12px',
                borderRadius: '8px',
                border: 'none',
                cursor: 'pointer',
                backgroundColor: isSelected ? '#eae3d5' : 'transparent',
                color: isSelected ? '#1a1918' : '#615c54',
                transition: 'all 0.15s ease',
                whiteSpace: isMobile ? 'nowrap' : 'normal',
                flexShrink: 0
              }}
            >
              <div style={{ fontSize: '11.5px', fontWeight: '700', overflow: 'hidden', textOverflow: 'ellipsis' }}>{noteTitle}</div>
              {!isMobile && <div style={{ fontSize: '9.5px', color: '#8f887c', marginTop: '2px' }}>{noteDate}</div>}
            </button>
          );
        })}
      </div>

      {/* Note Content Area */}
      <div style={{ flex: 1, padding: 'clamp(14px, 3.5vw, 32px)', display: 'flex', flexDirection: 'column', gap: '14px', overflowY: 'auto' }}>
        <div style={{ paddingBottom: '10px', borderBottom: '1px solid #eae6dc', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-start', gap: '8px' }}>
          <div>
            <span className="font-mono-code" style={{ fontSize: '9.5px', fontWeight: '700', textTransform: 'uppercase', color: '#8c867a', display: 'block', marginBottom: '3px' }}>
              {currentDate}
            </span>
            <h2 className="font-serif-display" style={{ fontSize: 'clamp(18px, 4vw, 26px)', fontWeight: '700', color: '#1a1918', lineHeight: '1.2' }}>
              {currentTitle}
            </h2>
          </div>
          {currentNote.id === 'resume' && (
            <button
              onClick={() => {
                window.history.pushState({}, '', '/resume');
                window.dispatchEvent(new PopStateEvent('popstate'));
              }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '6px 14px',
                borderRadius: '8px',
                backgroundColor: '#b85d19',
                color: '#ffffff',
                border: 'none',
                fontSize: '11px',
                fontWeight: '700',
                cursor: 'pointer',
                boxShadow: '0 2px 8px rgba(184, 93, 25, 0.3)',
                transition: 'all 0.15s ease'
              }}
            >
              <span>{lang === 'ar' ? 'فتح السيرة الذاتية الكاملة (A4 PDF) ↗' : 'Open Full Resume (A4 PDF) ↗'}</span>
            </button>
          )}
        </div>

        <div style={{ fontSize: 'clamp(11.5px, 2.5vw, 13px)', color: '#3d3a35', lineHeight: '1.8', whiteSpace: 'pre-wrap', fontWeight: '400' }}>
          {currentContent}
        </div>
      </div>
    </div>
  );
}
