import React, { useState } from 'react';
import { Sparkles, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Mascot({ openApp }) {
  const { lang } = useLanguage();
  const [showBubble, setShowBubble] = useState(false);

  const tipsEn = [
    "Tip: Drag windows by their titlebar just like on macOS!",
    "Tip: Open the Terminal to run developer CLI commands.",
    "Tip: You can switch between Dark and Light mode from the top bar.",
    "Tip: Click the green traffic light button to maximize any window."
  ];

  const tipsAr = [
    "تلميح: يمكنك سحب النوافذ من شريط العنوان تماماً مثل نظام macOS!",
    "تلميح: افتح الطرفية (Terminal) لتشغيل الأوامر البرمجية التفاعلية.",
    "تلميح: يمكنك التبديل بين الوضع الليلي والفاتح من الشريط العلوي.",
    "تلميح: اضغط على الزر الأخضر في أي نافذة لتكبيرها لملء الشاشة."
  ];

  const tips = lang === 'ar' ? tipsAr : tipsEn;
  const [bubbleText, setBubbleText] = useState(lang === 'ar' ? "مرحباً بك! أنا مساعدك الذكي في النظام." : "Hi! I'm your OS Assistant. Click any app to explore!");

  const handleMascotClick = () => {
    const randomTip = tips[Math.floor(Math.random() * tips.length)];
    setBubbleText(randomTip);
    setShowBubble(true);
  };

  return (
    <div 
      className="mascot-container"
      style={{ 
        position: 'fixed', 
        right: lang === 'ar' ? 'auto' : '320px', 
        left: lang === 'ar' ? '320px' : 'auto', 
        bottom: '180px', 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        zIndex: 10, 
        userSelect: 'none' 
      }}
    >
      {/* Speech Bubble */}
      {showBubble && (
        <div style={{ position: 'relative', marginBottom: '12px', maxWidth: '210px', padding: '10px 12px', borderRadius: '14px', backgroundColor: 'rgba(32, 29, 27, 0.95)', border: '1px solid rgba(203, 162, 101, 0.4)', fontSize: '11px', color: '#f5f4ef', boxShadow: '0 10px 25px rgba(0,0,0,0.6)', textAlign: lang === 'ar' ? 'right' : 'left' }}>
          <button
            onClick={() => setShowBubble(false)}
            style={{ position: 'absolute', top: '6px', right: lang === 'ar' ? 'auto' : '6px', left: lang === 'ar' ? '6px' : 'auto', background: 'none', border: 'none', color: 'rgba(255,255,255,0.4)', cursor: 'pointer' }}
          >
            <X style={{ width: '12px', height: '12px' }} />
          </button>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '6px', paddingRight: lang === 'ar' ? 0 : '8px', paddingLeft: lang === 'ar' ? '8px' : 0 }}>
            <Sparkles style={{ width: '13px', height: '13px', color: '#cba265', flexShrink: 0, marginTop: '2px' }} />
            <p style={{ lineHeight: '1.4' }}>{bubbleText}</p>
          </div>
          {/* Triangle pointer */}
          <div style={{ position: 'absolute', bottom: '-8px', left: '50%', transform: 'translateX(-50%)', width: 0, height: 0, borderLeft: '7px solid transparent', borderRight: '7px solid transparent', borderTop: '8px solid rgba(32, 29, 27, 0.95)' }} />
        </div>
      )}

      {/* Floating 3D Robot */}
      <div
        onClick={handleMascotClick}
        className="animate-mascot"
        style={{ width: '56px', height: '70px', cursor: 'pointer', filter: 'drop-shadow(0 12px 20px rgba(0,0,0,0.7))', transition: 'transform 0.2s ease' }}
        title={lang === 'ar' ? "انقر للحصول على تلميحات مفيدة!" : "Click me for tips!"}
      >
        <svg viewBox="0 0 100 120" style={{ width: '100%', height: '100%' }}>
          {/* Subtle Shadow */}
          <ellipse cx="50" cy="116" rx="22" ry="3.5" fill="rgba(0,0,0,0.4)" />

          {/* Antenna */}
          <line x1="50" y1="20" x2="50" y2="7" stroke="#cba265" strokeWidth="3.5" strokeLinecap="round" />
          <circle cx="50" cy="5" r="4.5" fill="#f5d6a2" />

          {/* Head */}
          <rect x="25" y="18" width="50" height="42" rx="14" fill="#ede8df" stroke="#cfc8bc" strokeWidth="1.8" />
          
          {/* Visor Screen */}
          <rect x="31" y="26" width="38" height="24" rx="8" fill="#1b1a18" />
          
          {/* Glowing Blue Eyes */}
          <ellipse cx="43" cy="38" rx="3.5" ry="4.5" fill="#5ad2ec" />
          <ellipse cx="57" cy="38" rx="3.5" ry="4.5" fill="#5ad2ec" />

          {/* Body */}
          <path
            d="M 30 64 Q 50 61 70 64 L 75 98 Q 50 102 25 98 Z"
            fill="#ded8cb"
            stroke="#bebaae"
            strokeWidth="1.8"
          />

          {/* Core Chest Badge */}
          <circle cx="50" cy="80" r="6.5" fill="#2a2824" stroke="#cba265" strokeWidth="1.5" />
          <polygon points="50,76 54,82 46,82" fill="#cba265" />

          {/* Hands */}
          <circle cx="18" cy="76" r="5.5" fill="#ede8df" stroke="#bebaae" strokeWidth="1.5" />
          <circle cx="82" cy="76" r="5.5" fill="#ede8df" stroke="#bebaae" strokeWidth="1.5" />
        </svg>
      </div>
    </div>
  );
}
