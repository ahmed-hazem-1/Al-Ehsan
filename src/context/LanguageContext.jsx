import React, { createContext, useState, useEffect, useContext } from 'react';

const LanguageContext = createContext();

import ar from './locales/ar';
import en from './locales/en';
import ly from './locales/ly';
import sa from './locales/sa';
import eg from './locales/eg';
import bn from './locales/bn';

const translations = {
  ar,
  en,
  ly,
  sa,
  eg,
  bn
};

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    return localStorage.getItem('alihsan-lang') || 'ar'; // Arabic is default
  });

  useEffect(() => {
    localStorage.setItem('alihsan-lang', lang);
    const isRtl = lang === 'ar' || lang === 'ly' || lang === 'sa' || lang === 'eg';
    document.documentElement.dir = isRtl ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
    
    // SEO Meta updates
    if (lang === 'ar' || lang === 'ly' || lang === 'sa' || lang === 'eg') {
      document.title = lang === 'sa'
        ? 'الإحسان — إدارة الصناديق الصحية ومراجعة مطالبات الشركات في السعودية'
        : lang === 'ly'
        ? 'الإحسان — إدارة الصناديق الصحية ومراجعة مطالبات الشركات في ليبيا'
        : lang === 'eg'
        ? 'الإحسان — إدارة الصناديق الصحية ومراجعة مطالبات الشركات في مصر'
        : 'الإحسان — إدارة الصناديق الصحية ومراجعة مطالبات الشركات';
      const desc = document.querySelector('meta[name="description"]');
      if (desc) desc.setAttribute('content', lang === 'sa'
        ? 'ندير صناديق الرعاية الصحية للشركات ونراجع فواتير المستشفيات والمطالبات الطبية قبل الدفع لصالح أصحاب العمل في السعودية.'
        : lang === 'ly'
        ? 'ندير صناديق الرعاية الصحية للشركات ونراجع فواتير المستشفيات والمطالبات الطبية قبل الدفع لصالح أصحاب العمل في ليبيا.'
        : lang === 'eg'
        ? 'ندير صناديق الرعاية الصحية للشركات ونراجع فواتير المستشفيات والمطالبات الطبية قبل الدفع لصالح أصحاب العمل في مصر.'
        : 'ندير صناديق الرعاية الصحية للشركات ونراجع فواتير المستشفيات والمطالبات الطبية قبل الدفع لصالح أصحاب العمل.');
      
      const ogTitle = document.querySelector('meta[property="og:title"]');
      if (ogTitle) ogTitle.setAttribute('content', lang === 'sa'
        ? 'الإحسان — إدارة الصناديق الصحية ومراجعة مطالبات الشركات في السعودية'
        : lang === 'ly'
        ? 'الإحسان — إدارة الصناديق الصحية ومراجعة مطالبات الشركات في ليبيا'
        : lang === 'eg'
        ? 'الإحسان — إدارة الصناديق الصحية ومراجعة مطالبات الشركات في مصر'
        : 'الإحسان — إدارة الصناديق الصحية ومراجعة مطالبات الشركات');
      const ogDesc = document.querySelector('meta[property="og:description"]');
      if (ogDesc) ogDesc.setAttribute('content', lang === 'sa'
        ? 'ندير صناديق الرعاية الصحية للشركات ونراجع فواتير المستشفيات والمطالبات الطبية قبل الدفع لصالح أصحاب العمل في السعودية.'
        : lang === 'ly'
        ? 'ندير صناديق الرعاية الصحية للشركات ونراجع فواتير المستشفيات والمطالبات الطبية قبل الدفع لصالح أصحاب العمل في ليبيا.'
        : lang === 'eg'
        ? 'ندير صناديق الرعاية الصحية للشركات ونراجع فواتير المستشفيات والمطالبات الطبية قبل الدفع لصالح أصحاب العمل في مصر.'
        : 'ندير صناديق الرعاية الصحية للشركات ونراجع فواتير المستشفيات والمطالبات الطبية قبل الدفع لصالح أصحاب العمل.');
      
      const twTitle = document.querySelector('meta[name="twitter:title"]');
      if (twTitle) twTitle.setAttribute('content', lang === 'sa'
        ? 'الإحسان — إدارة الصناديق الصحية ومراجعة مطالبات الشركات في السعودية'
        : lang === 'ly'
        ? 'الإحسان — إدارة الصناديق الصحية ومراجعة مطالبات الشركات في ليبيا'
        : lang === 'eg'
        ? 'الإحسان — إدارة الصناديق الصحية ومراجعة مطالبات الشركات في مصر'
        : 'الإحسان — إدارة الصناديق الصحية ومراجعة مطالبات الشركات');
      const twDesc = document.querySelector('meta[name="twitter:description"]');
      if (twDesc) twDesc.setAttribute('content', lang === 'sa'
        ? 'ندير صناديق الرعاية الصحية للشركات ونراجع فواتير المستشفيات والمطالبات الطبية قبل الدفع لصالح أصحاب العمل في السعودية.'
        : lang === 'ly'
        ? 'ندير صناديق الرعاية الصحية للشركات ونراجع فواتير المستشفيات والمطالبات الطبية قبل الدفع لصالح أصحاب العمل في ليبيا.'
        : lang === 'eg'
        ? 'ندير صناديق الرعاية الصحية للشركات ونراجع فواتير المستشفيات والمطالبات الطبية قبل الدفع لصالح أصحاب العمل في مصر.'
        : 'ندير صناديق الرعاية الصحية للشركات ونراجع فواتير المستشفيات والمطالبات الطبية قبل الدفع لصالح أصحاب العمل.');
    } else if (lang === 'bn') {
      document.title = 'Al Ihsan — Healthcare Fund Management and Claims Review';
      const desc = document.querySelector('meta[name="description"]');
      if (desc) desc.setAttribute('content', 'We manage healthcare funds for employers and review hospital invoices and medical claims before payment.');
      
      const ogTitle = document.querySelector('meta[property="og:title"]');
      if (ogTitle) ogTitle.setAttribute('content', 'Al Ihsan — Healthcare Fund Management and Claims Review');
      const ogDesc = document.querySelector('meta[property="og:description"]');
      if (ogDesc) ogDesc.setAttribute('content', 'We manage healthcare funds for employers and review hospital invoices and medical claims before payment.');
      
      const twTitle = document.querySelector('meta[name="twitter:title"]');
      if (twTitle) twTitle.setAttribute('content', 'Al Ihsan — Healthcare Fund Management and Claims Review');
      const twDesc = document.querySelector('meta[name="twitter:description"]');
      if (twDesc) twDesc.setAttribute('content', 'We manage healthcare funds for employers and review hospital invoices and medical claims before payment.');
    } else {
      document.title = 'Al Ihsan — Healthcare Fund Management and Claims Review';
      const desc = document.querySelector('meta[name="description"]');
      if (desc) desc.setAttribute('content', 'We manage healthcare funds for employers and review hospital invoices and medical claims before payment.');
      
      const ogTitle = document.querySelector('meta[property="og:title"]');
      if (ogTitle) ogTitle.setAttribute('content', 'Al Ihsan — Healthcare Fund Management and Claims Review');
      const ogDesc = document.querySelector('meta[property="og:description"]');
      if (ogDesc) ogDesc.setAttribute('content', 'We manage healthcare funds for employers and review hospital invoices and medical claims before payment.');
      
      const twTitle = document.querySelector('meta[name="twitter:title"]');
      if (twTitle) twTitle.setAttribute('content', 'Al Ihsan — Healthcare Fund Management and Claims Review');
      const twDesc = document.querySelector('meta[name="twitter:description"]');
      if (twDesc) twDesc.setAttribute('content', 'We manage healthcare funds for employers and review hospital invoices and medical claims before payment.');
    }
  }, [lang]);

  const toggleLanguage = () => {
    setLang((prev) => {
      if (prev === 'ar') return 'ly';
      if (prev === 'ly') return 'sa';
      if (prev === 'sa') return 'eg';
      if (prev === 'eg') return 'bn';
      if (prev === 'bn') return 'en';
      return 'ar';
    });
  };

  const t = (key) => {
    return translations[lang]?.[key] || translations['ar']?.[key] || key;
  };

  const isRtl = lang === 'ar' || lang === 'ly' || lang === 'sa' || lang === 'eg';

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLanguage, t, isRtl }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
