import React from 'react';
import { X, Award, CheckCircle2, MessageSquare, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function NotificationCenter({ isOpen, onClose, openApp }) {
  const { lang } = useLanguage();

  if (!isOpen) return null;

  const notificationsEn = [
    {
      id: 1,
      title: 'Meta Nanodegree Verified',
      desc: 'Meta Front-End Developer Nanodegree credentials linked.',
      time: 'Just now',
      app: 'about',
      icon: <Award style={{ width: '15px', height: '15px', color: '#c88a58' }} />
    },
    {
      id: 2,
      title: 'Live Client Work Available',
      desc: '13 production projects ready for review including Hawash, Jawlah & TrendLine.',
      time: '1h ago',
      app: 'projects',
      icon: <Sparkles style={{ width: '15px', height: '15px', color: '#88ab93' }} />
    },
    {
      id: 3,
      title: 'Contact Form Ready',
      desc: 'Direct dispatch to m.metwally.rzq@gmail.com is active via EmailJS.',
      time: '3h ago',
      app: 'contact',
      icon: <MessageSquare style={{ width: '15px', height: '15px', color: '#68a0e2' }} />
    }
  ];

  const notificationsAr = [
    {
      id: 1,
      title: 'اعتماد شهادات Meta و Udacity',
      desc: 'تم ربط وتوثيق 18 شهادة مهنية ودرجة نانوديجري في النظام.',
      time: 'الآن',
      app: 'certificates',
      icon: <Award style={{ width: '15px', height: '15px', color: '#c88a58' }} />
    },
    {
      id: 2,
      title: 'مشاريع حية جاهزة للمعاينة',
      desc: '13 مشروعاً في بيئة الإنتاج جاهزة للاستعراض تشمل حواش، جولة، وتريند لاين.',
      time: 'منذ ساعة',
      app: 'projects',
      icon: <Sparkles style={{ width: '15px', height: '15px', color: '#88ab93' }} />
    },
    {
      id: 3,
      title: 'نموذج التواصل السريع نشط',
      desc: 'الإرسال المباشر للبريد الإلكتروني متاح ومربوط عبر EmailJS.',
      time: 'منذ 3 ساعات',
      app: 'contact',
      icon: <MessageSquare style={{ width: '15px', height: '15px', color: '#68a0e2' }} />
    }
  ];

  const notifications = lang === 'ar' ? notificationsAr : notificationsEn;

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(0,0,0,0.3)',
        zIndex: 99999,
        userSelect: 'none'
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          position: 'fixed',
          top: '42px',
          right: lang === 'ar' ? 'auto' : '16px',
          left: lang === 'ar' ? '16px' : 'auto',
          width: '320px',
          backgroundColor: 'rgba(28, 25, 23, 0.96)',
          border: '1px solid rgba(200, 138, 88, 0.3)',
          borderRadius: '16px',
          boxShadow: '0 20px 50px rgba(0,0,0,0.85)',
          padding: '16px',
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
          backdropFilter: 'blur(20px)'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingBottom: '8px', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
          <span className="font-mono-code" style={{ fontSize: '10px', fontWeight: '700', letterSpacing: '0.1em', color: '#c88a58', textTransform: 'uppercase' }}>
            {lang === 'ar' ? 'الإشعارات' : 'NOTIFICATIONS'}
          </span>
          <button
            onClick={onClose}
            style={{ background: 'none', border: 'none', color: 'rgba(255,255,255,0.4)', cursor: 'pointer', padding: '2px' }}
          >
            <X style={{ width: '14px', height: '14px' }} />
          </button>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {notifications.map((n) => (
            <div
              key={n.id}
              onClick={() => {
                openApp(n.app);
                onClose();
              }}
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '10px',
                padding: '10px',
                borderRadius: '10px',
                backgroundColor: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.06)',
                cursor: 'pointer',
                transition: 'background-color 0.15s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(200,138,88,0.15)'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.04)'}
            >
              <div style={{ padding: '6px', borderRadius: '8px', backgroundColor: 'rgba(255,255,255,0.06)', flexShrink: 0 }}>
                {n.icon}
              </div>
              <div style={{ flex: 1, textAlign: lang === 'ar' ? 'right' : 'left' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2px' }}>
                  <h4 style={{ fontSize: '11.5px', fontWeight: '600', color: '#f0ede6' }}>{n.title}</h4>
                  <span className="font-mono-code" style={{ fontSize: '9px', color: '#a88d77' }}>{n.time}</span>
                </div>
                <p style={{ fontSize: '10.5px', color: '#a0998f', lineHeight: '1.35' }}>{n.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
