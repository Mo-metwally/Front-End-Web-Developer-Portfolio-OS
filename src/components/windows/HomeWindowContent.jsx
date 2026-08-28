import React from 'react';
import { ArrowRight, Code, Sparkles, Award } from 'lucide-react';
import { PORTFOLIO_DATA } from '../../data/portfolioData';
import { useLanguage } from '../../context/LanguageContext';
import HomeImg from '../../assets/Home-img2.jpg';

export default function HomeWindowContent({ openApp }) {
  const { profile } = PORTFOLIO_DATA;
  const { lang, t } = useLanguage();

  return (
    <div style={{ padding: 'clamp(14px, 3.5vw, 32px)', minHeight: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', backgroundColor: '#fdfbf7', gap: '20px' }}>
      <div className="responsive-2col" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px', alignItems: 'start' }}>
        {/* Left Column: Profile */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          <div>
            <span className="font-mono-code" style={{ fontSize: '9.5px', fontWeight: '700', letterSpacing: '0.15em', color: '#a86f3e', textTransform: 'uppercase', display: 'block', marginBottom: '10px' }}>
              {t.home.tag}
            </span>

            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '10px' }}>
              <div style={{ width: '50px', height: '50px', borderRadius: '50%', overflow: 'hidden', border: '2px solid rgba(200, 138, 88, 0.4)', flexShrink: 0, boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                <img
                  src={HomeImg}
                  alt={lang === 'ar' ? 'محمد متولي' : 'Mohamed Metwally'}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <h1 className="font-serif-display" style={{ fontSize: 'clamp(24px, 5vw, 36px)', fontWeight: '400', color: '#1a1918', lineHeight: '1.05', letterSpacing: '-0.02em' }}>
                {lang === 'ar' ? 'محمد متولي' : (profile.fullName || profile.name)}
              </h1>
            </div>

            <div style={{ fontSize: '13px', fontWeight: '700', color: '#3d2919', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span>{t.home.role}</span>
              <span style={{ color: '#c88a58', fontWeight: '300' }}>|</span>
              <span style={{ color: '#685e54', fontWeight: '600' }}>{t.home.roleHighlight}</span>
            </div>
          </div>

          <p style={{ fontSize: '12.5px', lineHeight: '1.65', color: '#4a443c', fontWeight: '400' }}>
            {t.home.summary}
          </p>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', paddingTop: '4px' }}>
            <button
              onClick={() => openApp('about')}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '9px 20px',
                borderRadius: '999px',
                backgroundColor: '#241b14',
                color: '#fdfbf7',
                fontSize: '12px',
                fontWeight: '600',
                border: 'none',
                cursor: 'pointer',
                transition: 'background-color 0.15s ease',
                boxShadow: '0 2px 6px rgba(0,0,0,0.2)'
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#382b20'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#241b14'}
            >
              <span>{lang === 'ar' ? 'فتح نبذة عني' : 'Open About me'}</span>
              <ArrowRight style={{ width: '14px', height: '14px', color: '#c88a58', transform: lang === 'ar' ? 'rotate(180deg)' : 'none' }} />
            </button>

            <button
              onClick={() => openApp('projects')}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '9px 18px',
                borderRadius: '999px',
                backgroundColor: '#f0ece2',
                color: '#241b14',
                fontSize: '12px',
                fontWeight: '600',
                border: '1px solid #ddd5c7',
                cursor: 'pointer'
              }}
            >
              <span>{t.home.viewProjects}</span>
            </button>
          </div>
        </div>

        {/* Right Column: Welcome to RI/OS */}
        <div style={{ borderLeft: lang === 'ar' ? 'none' : '1px solid #ede4d6', borderRight: lang === 'ar' ? '1px solid #ede4d6' : 'none', paddingLeft: lang === 'ar' ? 0 : '32px', paddingRight: lang === 'ar' ? '32px' : 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div>
            <span className="font-mono-code" style={{ fontSize: '10.5px', fontWeight: '700', letterSpacing: '0.15em', color: '#a86f3e', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>
              {lang === 'ar' ? 'مرحباً بك' : 'WELCOME'}
            </span>
            <h2 className="font-serif-display" style={{ fontSize: '26px', fontWeight: '400', color: '#1a1918', lineHeight: '1.15', marginBottom: '8px' }}>
              {lang === 'ar' ? 'مرحباً بك في بيئة العمل.' : 'Welcome to the Workspace.'}
            </h2>
            <p style={{ fontSize: '12px', lineHeight: '1.6', color: '#635b51' }}>
              {lang === 'ar'
                ? 'تجمع هذه البيئة بين ملفي المهني، مشاريع React و Next.js، خبرتي العملية في ميسان المهارية، والشهادات المعتمدة في واجهة نظام تشغيل تفاعلية.'
                : 'This environment brings together my profile, React & GSAP projects, work experience at Missan Elmaharya, and certifications in an interactive desktop OS.'}
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', paddingTop: '4px' }}>
            <div style={{ display: 'flex', alignItems: 'start', gap: '12px' }}>
              <span className="font-mono-code" style={{ fontSize: '11px', fontWeight: '700', color: '#c88a58', paddingTop: '1px' }}>
                01
              </span>
              <div>
                <h4 style={{ fontSize: '12px', fontWeight: '700', color: '#1a1918', marginBottom: '2px' }}>
                  {lang === 'ar' ? 'شريط التطبيقات (Dock)' : 'Dock'}
                </h4>
                <p style={{ fontSize: '11px', color: '#6e675d', lineHeight: '1.4' }}>
                  {lang === 'ar' ? 'افتح أي مشروع، الملاحظات، الطرفية، أو نموذج التواصل بنقرة واحدة.' : 'Open any project, notes, terminal, or contact form with one click.'}
                </p>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'start', gap: '12px' }}>
              <span className="font-mono-code" style={{ fontSize: '11px', fontWeight: '700', color: '#c88a58', paddingTop: '1px' }}>
                02
              </span>
              <div>
                <h4 style={{ fontSize: '12px', fontWeight: '700', color: '#1a1918', marginBottom: '2px' }}>
                  {lang === 'ar' ? 'الشهادات المعتمدة' : 'Certifications'}
                </h4>
                <p style={{ fontSize: '11px', color: '#6e675d', lineHeight: '1.4' }}>
                  {lang === 'ar' ? '18 شهادة معتمدة من Meta و IBM و Udacity.' : 'Meta Front-End · IBM React · Egypt FWD Nanodegree.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
