import React, { useState } from 'react';
import { ExternalLink, Search, Globe, Code, Layers } from 'lucide-react';
import { PORTFOLIO_DATA } from '../../data/portfolioData';
import { useLanguage } from '../../context/LanguageContext';

export default function ProjectsWindowContent() {
  const { projects } = PORTFOLIO_DATA;
  const { lang, t } = useLanguage();
  const [filter, setFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { key: 'All', label: lang === 'ar' ? 'الكل (13)' : 'All (13)' },
    { key: 'Full-Stack & Legal', label: lang === 'ar' ? 'منصات ومحاماة' : 'Full-Stack & Legal' },
    { key: 'E-Commerce', label: lang === 'ar' ? 'متاجر إلكترونية' : 'E-Commerce' },
    { key: 'EdTech & Games', label: lang === 'ar' ? 'ألعاب وتعليم' : 'EdTech & Games' },
    { key: 'Agency & Services', label: lang === 'ar' ? 'وكالات وخدمات' : 'Agency & Services' }
  ];

  const filteredProjects = projects.filter((project) => {
    const matchesCategory = 
      filter === 'All' || 
      project.category.toLowerCase().includes(filter.toLowerCase()) ||
      (filter === 'Full-Stack & Legal' && (project.category.includes('Legal') || project.category.includes('Full-Stack'))) ||
      (filter === 'E-Commerce' && project.category.includes('E-Commerce')) ||
      (filter === 'EdTech & Games' && (project.category.includes('EdTech') || project.category.includes('Games') || project.category.includes('Hospitality'))) ||
      (filter === 'Agency & Services' && (project.category.includes('Agency') || project.category.includes('Graduation')));

    const titleSearch = (project.title + ' ' + (project.titleAr || '')).toLowerCase();
    const descSearch = (project.description + ' ' + (project.descriptionAr || '')).toLowerCase();
    const roleSearch = (project.role + ' ' + (project.roleAr || '')).toLowerCase();
    const query = searchQuery.toLowerCase();

    const matchesSearch =
      titleSearch.includes(query) ||
      descSearch.includes(query) ||
      roleSearch.includes(query) ||
      project.tags.some(t => t.toLowerCase().includes(query));

    return matchesCategory && matchesSearch;
  });

  return (
    <div style={{ padding: '32px', display: 'flex', flexDirection: 'column', gap: '24px', backgroundColor: '#fdfbf7', minHeight: '100%' }}>
      {/* Top Header & Search Bar */}
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', paddingBottom: '16px', borderBottom: '1px solid #ede4d6', flexWrap: 'wrap', gap: '16px' }}>
        <div>
          <span className="font-mono-code" style={{ fontSize: '10px', fontWeight: '700', letterSpacing: '0.15em', color: '#a86f3e', textTransform: 'uppercase', display: 'block', marginBottom: '4px' }}>
            {t.projects.tag} ({projects.length})
          </span>
          <h2 className="font-serif-display" style={{ fontSize: '32px', fontWeight: '400', color: '#1a1918', lineHeight: '1.1' }}>
            {t.projects.heading}
          </h2>
          <p style={{ fontSize: '12.5px', color: '#635b51', marginTop: '4px' }}>
            {t.projects.subtitle}
          </p>
        </div>

        {/* Search */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '8px 14px', borderRadius: '10px', backgroundColor: '#f5efe4', border: '1px solid #e2d7c9', width: '260px' }}>
          <Search style={{ width: '15px', height: '15px', color: '#a86f3e', flexShrink: 0 }} />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={t.projects.searchPlaceholder}
            style={{ width: '100%', backgroundColor: 'transparent', border: 'none', outline: 'none', fontSize: '12px', color: '#1c1b18' }}
          />
        </div>
      </div>

      {/* Filter Pills */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexWrap: 'wrap' }}>
        {categories.map((cat) => (
          <button
            key={cat.key}
            onClick={() => setFilter(cat.key)}
            style={{
              padding: '6px 14px',
              borderRadius: '8px',
              fontSize: '11.5px',
              fontWeight: '600',
              border: 'none',
              cursor: 'pointer',
              backgroundColor: filter === cat.key ? '#241b14' : '#f2ece2',
              color: filter === cat.key ? '#fdfbf7' : '#635b51',
              transition: 'all 0.15s ease'
            }}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(330px, 1fr))', gap: '18px' }}>
        {filteredProjects.map((project) => {
          const projectTitle = lang === 'ar' && project.titleAr ? project.titleAr : project.title;
          const projectCategory = lang === 'ar' && project.categoryAr ? project.categoryAr : project.category;
          const projectRole = lang === 'ar' && project.roleAr ? project.roleAr : project.role;
          const projectDesc = lang === 'ar' && project.descriptionAr ? project.descriptionAr : project.description;
          const projectMetrics = lang === 'ar' && project.metricsAr ? project.metricsAr : project.metrics;
          const projectPeriod = lang === 'ar' && project.periodAr ? project.periodAr : project.period;

          return (
            <div
              key={project.id}
              style={{
                borderRadius: '14px',
                backgroundColor: '#f7f2ea',
                border: '1px solid #e7ded2',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: '0 2px 8px rgba(0,0,0,0.03)',
                transition: 'transform 0.18s ease, box-shadow 0.18s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.08)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0px)';
                e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.03)';
              }}
            >
              {/* Project Image Preview */}
              {project.image && (
                <div style={{ width: '100%', height: '150px', overflow: 'hidden', backgroundColor: '#e2dbcc', position: 'relative' }}>
                  <img
                    src={project.image}
                    alt={projectTitle}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div style={{ position: 'absolute', top: '10px', right: lang === 'ar' ? 'auto' : '10px', left: lang === 'ar' ? '10px' : 'auto', backgroundColor: 'rgba(26,20,16,0.85)', backdropFilter: 'blur(8px)', color: '#fdfbf7', fontSize: '10px', fontWeight: '700', padding: '3px 8px', borderRadius: '6px' }}>
                    {projectPeriod}
                  </div>
                </div>
              )}

              <div style={{ padding: '18px', display: 'flex', flexDirection: 'column', gap: '12px', flex: 1, justifyContent: 'space-between' }}>
                <div>
                  <span className="font-mono-code" style={{ fontSize: '9.5px', fontWeight: '700', textTransform: 'uppercase', padding: '3px 8px', borderRadius: '4px', backgroundColor: '#ebdccb', color: '#8a582c', display: 'inline-block', marginBottom: '8px' }}>
                    {projectCategory}
                  </span>

                  <h3 className="font-serif-display" style={{ fontSize: '22px', fontWeight: '400', color: '#1a1918', marginBottom: '2px', lineHeight: '1.2' }}>
                    {projectTitle}
                  </h3>
                  <p style={{ fontSize: '11.5px', fontWeight: '700', color: '#a86f3e', marginBottom: '8px' }}>
                    {projectRole}
                  </p>

                  <p style={{ fontSize: '12px', color: '#4d463d', lineHeight: '1.55', marginBottom: '10px' }}>
                    {projectDesc}
                  </p>

                  <div style={{ padding: '8px 12px', borderRadius: '8px', backgroundColor: '#ede4d6', border: '1px solid #ded3c2', fontSize: '11px', fontWeight: '600', color: '#38322a' }}>
                    ⚡ {projectMetrics}
                  </div>
                </div>

                <div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px', marginBottom: '12px', marginTop: '6px' }}>
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        style={{ fontSize: '10px', padding: '2px 7px', borderRadius: '4px', backgroundColor: '#ebe0d0', color: '#594432', fontWeight: '500' }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        fontSize: '12px',
                        fontWeight: '700',
                        color: '#1a1918',
                        textDecoration: 'none',
                        padding: '6px 12px',
                        borderRadius: '6px',
                        backgroundColor: '#ebdccb',
                        transition: 'background-color 0.15s ease'
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#dfccb7'}
                      onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#ebdccb'}
                    >
                      <span>{t.projects.liveSite}</span>
                      <ExternalLink style={{ width: '13px', height: '13px', color: '#8a582c' }} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
