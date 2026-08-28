import React from 'react';
import { Building2, Award, Briefcase, CheckCircle2, GraduationCap } from 'lucide-react';
import { PORTFOLIO_DATA } from '../../data/portfolioData';
import { useLanguage } from '../../context/LanguageContext';

export default function ClientsWindowContent() {
  const { lang, t } = useLanguage();
  const { education, certifications } = PORTFOLIO_DATA;

  const experienceItems = [
    {
      company: t.experience.missanCompany,
      role: t.experience.missanRole,
      period: t.experience.missanDate,
      type: t.experience.missanType,
      description: t.experience.missanDesc,
      highlights: t.experience.missanHighlights
    },
    {
      company: t.experience.freelanceCompany,
      role: t.experience.freelanceRole,
      period: t.experience.freelanceDate,
      type: t.experience.freelanceType,
      description: t.experience.freelanceDesc,
      highlights: t.experience.freelanceHighlights
    }
  ];

  return (
    <div style={{ padding: '32px', display: 'flex', flexDirection: 'column', gap: '24px', backgroundColor: '#fdfbf7', minHeight: '100%' }}>
      {/* Header */}
      <div style={{ paddingBottom: '14px', borderBottom: '1px solid #ede4d6' }}>
        <span className="font-mono-code" style={{ fontSize: '10px', fontWeight: '700', letterSpacing: '0.15em', color: '#a86f3e', textTransform: 'uppercase', display: 'block', marginBottom: '4px' }}>
          {t.experience.tag}
        </span>
        <h2 className="font-serif-display" style={{ fontSize: '28px', fontWeight: '400', color: '#1a1918', lineHeight: '1.1' }}>
          {t.experience.heading}
        </h2>
        <p style={{ fontSize: '12px', color: '#635b51', marginTop: '4px' }}>
          {t.experience.subtitle}
        </p>
      </div>

      {/* Experience Timeline Cards */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
        {experienceItems.map((exp, idx) => (
          <div
            key={idx}
            style={{
              padding: '20px',
              borderRadius: '14px',
              backgroundColor: '#f7f2ea',
              border: '1px solid #e7ded2',
              display: 'flex',
              flexDirection: 'column',
              gap: '10px'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ width: '42px', height: '42px', borderRadius: '10px', backgroundColor: '#ebdccb', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Briefcase style={{ width: '20px', height: '20px', color: '#8a582c' }} />
                </div>
                <div>
                  <h4 style={{ fontSize: '15px', fontWeight: '700', color: '#1a1918' }}>{exp.company}</h4>
                  <p style={{ fontSize: '12px', fontWeight: '600', color: '#a86f3e' }}>{exp.role}</p>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span className="font-mono-code" style={{ fontSize: '11px', fontWeight: '600', color: '#8a582c', backgroundColor: '#ebe0d0', padding: '3px 10px', borderRadius: '6px' }}>
                  {exp.period}
                </span>
                <span style={{ fontSize: '10px', fontWeight: '700', color: '#615c54', padding: '3px 8px', borderRadius: '6px', backgroundColor: '#ded4c4' }}>
                  {exp.type}
                </span>
              </div>
            </div>

            <p style={{ fontSize: '12.5px', color: '#48423a', lineHeight: '1.6' }}>
              {exp.description}
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', paddingTop: '4px' }}>
              {exp.highlights.map((h, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '11px', color: '#38322a', backgroundColor: '#ebe1d2', padding: '3px 8px', borderRadius: '6px' }}>
                  <CheckCircle2 style={{ width: '12px', height: '12px', color: '#3ea562' }} />
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Education & Certifications Row */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '14px' }}>
        {/* Education Box */}
        <div style={{ padding: '18px', borderRadius: '14px', backgroundColor: '#f2ece2', border: '1px solid #dfd6c6', display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <GraduationCap style={{ width: '18px', height: '18px', color: '#a86f3e' }} />
            <h4 style={{ fontSize: '13px', fontWeight: '700', color: '#1a1918' }}>{t.experience.educationTitle}</h4>
          </div>
          <h5 style={{ fontSize: '12.5px', fontWeight: '700', color: '#2b2620' }}>
            {lang === 'ar' ? 'بكالوريوس حاسبات ونظم معلومات (C.I.S)' : (education?.degree || "Bachelor's Degree in Computer and Information Systems (C.I.S)")}
          </h5>
          <p style={{ fontSize: '11.5px', color: '#615c54' }}>
            {lang === 'ar' ? 'جامعة الإسكندرية' : (education?.university || "Alexandria University")} · <span className="font-mono-code">{education?.years || "2018 – 2022"}</span>
          </p>
        </div>

        {/* Certifications Box */}
        <div style={{ padding: '18px', borderRadius: '14px', backgroundColor: '#f2ece2', border: '1px solid #dfd6c6', display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Award style={{ width: '18px', height: '18px', color: '#a86f3e' }} />
            <h4 style={{ fontSize: '13px', fontWeight: '700', color: '#1a1918' }}>{t.experience.certificationsTitle}</h4>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', fontSize: '11px', color: '#453f37' }}>
            {(certifications || []).map((c, idx) => (
              <div key={idx} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span>• {c.title} ({c.issuer})</span>
                <span className="font-mono-code" style={{ fontSize: '9.5px', color: '#8c867a' }}>{c.date}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
