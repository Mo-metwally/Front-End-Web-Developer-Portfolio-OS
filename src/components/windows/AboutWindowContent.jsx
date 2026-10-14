import React from 'react';
import { Award, BookOpen, Code, Layers, Sparkles, CheckCircle2, FileText } from 'lucide-react';
import { PORTFOLIO_DATA } from '../../data/portfolioData';
import { useLanguage } from '../../context/LanguageContext';
import AboutImg1 from '../../assets/about-me.jpg';
import AboutImg2 from '../../assets/IMG-2.jpg';

export default function AboutWindowContent() {
  const { profile } = PORTFOLIO_DATA;
  const { lang, t } = useLanguage();

  const skillMatrix = [
    {
      group: t.about.frontendHeading,
      icon: <Code style={{ width: '15px', height: '15px', color: '#c88a58' }} />,
      items: [
        { name: "HTML", level: t.about.levels.experienced, badgeBg: "#e8ddcc", badgeColor: "#66421e" },
        { name: "CSS", level: t.about.levels.experienced, badgeBg: "#e8ddcc", badgeColor: "#66421e" },
        { name: "JavaScript", level: t.about.levels.intermediate, badgeBg: "#f0e7d8", badgeColor: "#80582d" },
        { name: "Bootstrap", level: t.about.levels.experienced, badgeBg: "#e8ddcc", badgeColor: "#66421e" },
        { name: "Tailwind CSS", level: t.about.levels.intermediate, badgeBg: "#f0e7d8", badgeColor: "#80582d" },
        { name: "React.js", level: t.about.levels.intermediate, badgeBg: "#f0e7d8", badgeColor: "#80582d" },
        { name: "Next.js", level: t.about.levels.intermediate, badgeBg: "#f0e7d8", badgeColor: "#80582d" },
      ]
    },
    {
      group: t.about.uiuxHeading,
      icon: <Layers style={{ width: '15px', height: '15px', color: '#c88a58' }} />,
      items: [
        { name: "Figma", level: t.about.levels.intermediate, badgeBg: "#f0e7d8", badgeColor: "#80582d" },
        { name: "Adobe XD", level: t.about.levels.intermediate, badgeBg: "#f0e7d8", badgeColor: "#80582d" },
        { name: "Adobe Photoshop", level: t.about.levels.intermediate, badgeBg: "#f0e7d8", badgeColor: "#80582d" },
        { name: "Adobe Illustrator", level: t.about.levels.basic, badgeBg: "#f5f0e6", badgeColor: "#997349" },
        { name: "Microsoft Office", level: t.about.levels.intermediate, badgeBg: "#f0e7d8", badgeColor: "#80582d" },
      ]
    }
  ];

  return (
    <div style={{ padding: 'clamp(14px, 3.5vw, 32px)', minHeight: '100%', display: 'flex', flexDirection: 'column', gap: '20px', backgroundColor: '#fdfbf7' }}>
      {/* Top Header */}
      <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', paddingBottom: '12px', borderBottom: '1px solid #ede4d6', flexWrap: 'wrap', gap: '10px' }}>
        <div>
          <span className="font-mono-code" style={{ fontSize: '9.5px', fontWeight: '700', letterSpacing: '0.15em', color: '#a86f3e', textTransform: 'uppercase', display: 'block', marginBottom: '4px' }}>
            {t.about.tag}
          </span>
          <h1 className="font-serif-display" style={{ fontSize: 'clamp(24px, 5vw, 36px)', fontWeight: '400', color: '#1a1918', lineHeight: '1.05', letterSpacing: '-0.02em' }}>
            {lang === 'ar' ? 'نبذة عني' : 'About me'}
          </h1>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
          {/* Resume / CV Page Button */}
          <a
            href="/resume"
            onClick={(e) => {
              e.preventDefault();
              window.history.pushState({}, '', '/resume');
              window.dispatchEvent(new PopStateEvent('popstate'));
            }}
            className="group inline-flex items-center gap-2 text-xs font-semibold select-none cursor-pointer border border-[#423326] hover:border-[#382b20] transition-all duration-200 ease-out active:scale-95"
            style={{
              padding: '8px 18px',
              borderRadius: '999px',
              backgroundColor: 'rgb(36, 27, 20)',
              color: 'rgb(253, 251, 247)',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.25)',
              textDecoration: 'none'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#382b20';
              // e.currentTarget.style.boxShadow = '0 6px 18px rgba(184, 93, 25, 0.4)';
              // e.currentTarget.style.transform = 'translateY(-1px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'rgb(36, 27, 20)';
              e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.25)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
            title={lang === 'ar' ? 'عرض السيرة الذاتية الرسمية (CV)' : 'View Full Interactive Resume / CV'}
          >
            <FileText className="w-3.5 h-3.5 text-[#c88a58] group-hover:text-white transition-colors duration-200" />
            <span className="tracking-wide">{lang === 'ar' ? 'السيرة الذاتية (CV)' : 'Resume / CV'}</span>
            <span className="text-[#c88a58] group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200">↗</span>
          </a>

          <a
            href={profile.linkedin || profile.linkedInUrl || "https://linkedin.com/in/mohamed-metwally-rzq"}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '4px',
              fontSize: '12px',
              fontWeight: '600',
              color: '#1a1918',
              textDecoration: 'none',
              borderBottom: '1px solid rgba(200,138,88,0.5)',
              paddingBottom: '2px'
            }}
          >
            <span>{lang === 'ar' ? 'الملف الشخصي على LinkedIn' : 'My LinkedIn profile'}</span>
            <span>↗</span>
          </a>
        </div>
      </div>

      {/* Main Grid: Story & Dual Profile Photos */}
      <div className="responsive-2col" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', alignItems: 'start' }}>
        {/* Left: Detailed Summary Text */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', fontSize: '13px', lineHeight: '1.7', color: '#4a443c' }}>
          {lang === 'ar' ? (
            <>
              <p>
                مطور واجهات أمامية <strong>(Front-End Developer)</strong> شغوف ومحترف بخبرة واسعة في بناء تطبيقات ويب تفاعلية وقابلة للتوسع بأعلى معايير الأداء والسرعة باستخدام <strong>Next.js و React.js و GSAP و Tailwind CSS</strong>.
              </p>
              <p>
                أمتلك خلفية برمجية متينة في تطوير <strong>الـ Back-End (Node.js, Express, RESTful APIs)</strong> تربط بين تجربة المستخدم السلسة والأنظمة الخادمة القوية.
              </p>
              <p>
                حاصل على <strong>بكالوريوس حاسبات ونظم معلومات (C.I.S) من جامعة الإسكندرية (2018–2022)</strong>، ومعتمد بـ <strong>تخصص مطور الواجهات الأمامية من Meta</strong> ودرجة النانوديجري من <strong>Udacity ومبادرة رواد مصر الرقمية</strong>.
              </p>
            </>
          ) : (
            <>
              <p>
                A highly motivated and detail-oriented <strong>Front-End Developer</strong> with extensive experience in building dynamic, responsive, and scalable web applications using <strong>Next.js, React.js, GSAP, and Tailwind CSS</strong>.
              </p>
              <p>
                Possessing a solid background in <strong>Back-End development (Node.js, Express, RESTful APIs)</strong>, bridging the gap between user-centric interfaces and robust server-side functionality.
              </p>
              <p>
                Graduated with a <strong>Bachelor's Degree in Computer and Information Systems (C.I.S) from Alexandria University (2018–2022)</strong>. Certified with the <strong>Meta Front-End Developer Specialization</strong> and Egypt FWD Professional Web Development Nanodegree.
              </p>
            </>
          )}

          {/* Quick Credential Badges */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', paddingTop: '4px', flexWrap: 'wrap' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '6px 12px', borderRadius: '8px', backgroundColor: '#f2ece2', border: '1px solid #ded4c3', fontSize: '11.5px', fontWeight: '600', color: '#3d2b1f' }}>
              <BookOpen style={{ width: '13px', height: '13px', color: '#a86f3e' }} />
              <span>{lang === 'ar' ? 'جامعة الإسكندرية' : 'Alexandria University'}</span>
            </div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '6px 12px', borderRadius: '8px', backgroundColor: '#f2ece2', border: '1px solid #ded4c3', fontSize: '11.5px', fontWeight: '600', color: '#3d2b1f' }}>
              <Award style={{ width: '13px', height: '13px', color: '#a86f3e' }} />
              <span>{lang === 'ar' ? 'اعتماد Meta ومبادرة مصر الرقمية' : 'Meta & Egypt FWD'}</span>
            </div>
          </div>
        </div>

        {/* Right: Two Portrait Photo Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
          <div style={{ height: '210px', borderRadius: '14px', overflow: 'hidden', border: '1px solid #e0d5c5', boxShadow: '0 4px 14px rgba(0,0,0,0.06)', backgroundColor: '#eae3d5' }}>
            <img
              src={AboutImg1}
              alt={lang === 'ar' ? 'محمد متولي' : 'Mohamed Metwally'}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div style={{ height: '210px', borderRadius: '14px', overflow: 'hidden', border: '1px solid #e0d5c5', boxShadow: '0 4px 14px rgba(0,0,0,0.06)', backgroundColor: '#eae3d5' }}>
            <img
              src={AboutImg2}
              alt={lang === 'ar' ? 'محمد متولي' : 'Mohamed Metwally'}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
        </div>
      </div>

      {/* Technical Skills Matrix Section */}
      <div style={{ padding: '18px 20px', borderRadius: '14px', backgroundColor: '#f7f2ea', border: '1px solid #e2d7c9', marginTop: '4px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid #e0d5c5' }}>
          <Sparkles style={{ width: '16px', height: '16px', color: '#c88a58' }} />
          <h3 style={{ fontSize: '13.5px', fontWeight: '700', color: '#1a1918' }}>
            {t.about.experienceHeading}
          </h3>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
          {skillMatrix.map((group, gIdx) => (
            <div key={gIdx}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '8px' }}>
                {group.icon}
                <span style={{ fontSize: '11.5px', fontWeight: '700', color: '#3d2b1f', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  {group.group}
                </span>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {group.items.map((item, iIdx) => (
                  <div
                    key={iIdx}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      padding: '4px 10px',
                      borderRadius: '8px',
                      backgroundColor: '#fdfbf7',
                      border: '1px solid #ddd2c1',
                      fontSize: '11px'
                    }}
                  >
                    <span style={{ fontWeight: '600', color: '#1c1b18' }}>{item.name}</span>
                    <span
                      style={{
                        fontSize: '9.5px',
                        fontWeight: '700',
                        padding: '1px 6px',
                        borderRadius: '4px',
                        backgroundColor: item.badgeBg,
                        color: item.badgeColor
                      }}
                    >
                      {item.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
