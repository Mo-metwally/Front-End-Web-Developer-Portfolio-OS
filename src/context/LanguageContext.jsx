import React, { createContext, useContext, useState, useEffect } from 'react';
import { TRANSLATIONS } from '../data/translations';

const LanguageContext = createContext();

const getInitialLanguage = () => {
  if (typeof window !== 'undefined') {
    const params = new URLSearchParams(window.location.search);
    const queryLang = params.get('lang')?.toLowerCase();
    if (queryLang === 'ar' || queryLang === 'en') {
      return queryLang;
    }
    const saved = localStorage.getItem('portfolio_os_lang');
    if (saved === 'ar' || saved === 'en') {
      return saved;
    }
  }
  return 'en';
};

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(getInitialLanguage);

  useEffect(() => {
    localStorage.setItem('portfolio_os_lang', lang);
    document.documentElement.setAttribute('lang', lang);
    if (lang === 'ar') {
      document.documentElement.setAttribute('dir', 'rtl');
    } else {
      document.documentElement.setAttribute('dir', 'ltr');
    }

    // Sync URL query param ?lang=ar or ?lang=en seamlessly without reloading
    try {
      const url = new URL(window.location.href);
      if (url.searchParams.get('lang') !== lang) {
        url.searchParams.set('lang', lang);
        window.history.replaceState(null, '', url.toString());
      }
    } catch (e) {
      // Safe fallback
    }
  }, [lang]);

  const toggleLang = () => {
    setLang((prev) => (prev === 'en' ? 'ar' : 'en'));
  };

  const t = TRANSLATIONS[lang] || TRANSLATIONS.en;

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    return {
      lang: 'en',
      toggleLang: () => {},
      t: TRANSLATIONS.en
    };
  }
  return context;
}
