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
        ? 'الإحسان — شركة استشارات نمو إيرادات الرعاية الصحية في السعودية'
        : lang === 'ly'
        ? 'الإحسان — شركة استشارات نمو إيرادات الرعاية الصحية في ليبيا'
        : lang === 'eg'
        ? 'الإحسان — شركة استشارات نمو إيرادات الرعاية الصحية في مصر'
        : 'الإحسان — شركة استشارات نمو إيرادات الرعاية الصحية';
      const desc = document.querySelector('meta[name="description"]');
      if (desc) desc.setAttribute('content', lang === 'sa'
        ? 'كشف تسربات الإيرادات، تحسين عقود شركات التأمين، وتسريع التحصيل. احجز استشارة مجانية مع الإحسان في الرياض والسعودية.'
        : lang === 'ly'
        ? 'كشف تسربات الإيرادات، تحسين عقود شركات التأمين، وتسريع التحصيل. احجز استشارة مجانية مع الإحسان في طرابلس وليبيا.'
        : lang === 'eg'
        ? 'كشف تسربات الإيرادات، تحسين عقود شركات التأمين، وتسريع التحصيل. احجز استشارة مجانية مع الإحسان في القاهرة ومصر.'
        : 'كشف تسربات الإيرادات، تحسين عقود شركات التأمين، وتسريع التحصيل. احجز استشارة مجانية مع الإحسان.');
      
      const ogTitle = document.querySelector('meta[property="og:title"]');
      if (ogTitle) ogTitle.setAttribute('content', lang === 'sa'
        ? 'الإحسان — شركة استشارات نمو إيرادات الرعاية الصحية في السعودية'
        : lang === 'ly'
        ? 'الإحسان — شركة استشارات نمو إيرادات الرعاية الصحية في ليبيا'
        : lang === 'eg'
        ? 'الإحسان — شركة استشارات نمو إيرادات الرعاية الصحية في مصر'
        : 'الإحسان — شركة استشارات نمو إيرادات الرعاية الصحية');
      const ogDesc = document.querySelector('meta[property="og:description"]');
      if (ogDesc) ogDesc.setAttribute('content', lang === 'sa'
        ? 'كشف تسربات الإيرادات، تحسين عقود شركات التأمين، وتسريع التحصيل. احجز استشارة مجانية مع الإحسان في الرياض والسعودية.'
        : lang === 'ly'
        ? 'كشف تسربات الإيرادات، تحسين عقود شركات التأمين، وتسريع التحصيل. احجز استشارة مجانية مع الإحسان في طرابلس وليبيا.'
        : lang === 'eg'
        ? 'كشف تسربات الإيرادات، تحسين عقود شركات التأمين، وتسريع التحصيل. احجز استشارة مجانية مع الإحسان في القاهرة ومصر.'
        : 'كشف تسربات الإيرادات، تحسين عقود شركات التأمين، وتسريع التحصيل. احجز استشارة مجانية مع الإحسان.');
      
      const twTitle = document.querySelector('meta[name="twitter:title"]');
      if (twTitle) twTitle.setAttribute('content', lang === 'sa'
        ? 'الإحسان — شركة استشارات نمو إيرادات الرعاية الصحية في السعودية'
        : lang === 'ly'
        ? 'الإحسان — شركة استشارات نمو إيرادات الرعاية الصحية في ليبيا'
        : lang === 'eg'
        ? 'الإحسان — شركة استشارات نمو إيرادات الرعاية الصحية في مصر'
        : 'الإحسان — شركة استشارات نمو إيرادات الرعاية الصحية');
      const twDesc = document.querySelector('meta[name="twitter:description"]');
      if (twDesc) twDesc.setAttribute('content', lang === 'sa'
        ? 'كشف تسربات الإيرادات، تحسين عقود شركات التأمين، وتسريع التحصيل. احجز استشارة مجانية مع الإحسان في الرياض والسعودية.'
        : lang === 'ly'
        ? 'كشف تسربات الإيرادات، تحسين عقود شركات التأمين، وتسريع التحصيل. احجز استشارة مجانية مع الإحسان في طرابلس وليبيا.'
        : lang === 'eg'
        ? 'كشف تسربات الإيرادات، تحسين عقود شركات التأمين، وتسريع التحصيل. احجز استشارة مجانية مع الإحسان في القاهرة ومصر.'
        : 'كشف تسربات الإيرادات، تحسين عقود شركات التأمين، وتسريع التحصيل. احجز استشارة مجانية مع الإحسان.');
    } else if (lang === 'bn') {
      document.title = 'আল ইহসান — স্বাস্থ্যসেবা রাজস্ব প্রবৃদ্ধি এবং পরামর্শকারী প্রতিষ্ঠান';
      const desc = document.querySelector('meta[name="description"]');
      if (desc) desc.setAttribute('content', 'লুকানো রাজস্ব উন্মোচন করুন, বীমা চুক্তি অপ্টিমাইজ করুন এবং বকেয়া সংগ্রহ দ্রুত করুন। আল ইহসানের সাথে একটি ফ্রি পরামর্শ বুক করুন।');
      
      const ogTitle = document.querySelector('meta[property="og:title"]');
      if (ogTitle) ogTitle.setAttribute('content', 'আল ইহসান — স্বাস্থ্যসেবা রাজস্ব প্রবৃদ্ধি এবং পরামর্শকারী প্রতিষ্ঠান');
      const ogDesc = document.querySelector('meta[property="og:description"]');
      if (ogDesc) ogDesc.setAttribute('content', 'লুকানো রাজস্ব উন্মোচন করুন, বীমা চুক্তি অপ্টিমাইজ করুন এবং বকেয়া সংগ্রহ দ্রুত করুন। আল ইহসানের সাথে একটি ফ্রি পরামর্শ বুক করুন।');
      
      const twTitle = document.querySelector('meta[name="twitter:title"]');
      if (twTitle) twTitle.setAttribute('content', 'আল ইহসান — স্বাস্থ্যসেবা রাজস্ব প্রবৃদ্ধি এবং পরামর্শকারী প্রতিষ্ঠান');
      const twDesc = document.querySelector('meta[name="twitter:description"]');
      if (twDesc) twDesc.setAttribute('content', 'লুকানো রাজস্ব উন্মোচন করুন, বীমা চুক্তি অপ্টিমাইজ করুন এবং বকেয়া সংগ্রহ দ্রুত করুন। আল ইহসানের সাথে একটি ফ্রি পরামর্শ বুক করুন।');
    } else {
      document.title = 'Al Ihsan — Healthcare Revenue Growth & Consulting Firm';
      const desc = document.querySelector('meta[name="description"]');
      if (desc) desc.setAttribute('content', 'Uncover hidden revenue, optimize contracts, and accelerate collections. Book a free consultation with Al Ihsan.');
      
      const ogTitle = document.querySelector('meta[property="og:title"]');
      if (ogTitle) ogTitle.setAttribute('content', 'Al Ihsan — Healthcare Revenue Growth & Consulting Firm');
      const ogDesc = document.querySelector('meta[property="og:description"]');
      if (ogDesc) ogDesc.setAttribute('content', 'Uncover hidden revenue, optimize contracts, and accelerate collections. Book a free consultation with Al Ihsan.');
      
      const twTitle = document.querySelector('meta[name="twitter:title"]');
      if (twTitle) twTitle.setAttribute('content', 'Al Ihsan — Healthcare Revenue Growth & Consulting Firm');
      const twDesc = document.querySelector('meta[name="twitter:description"]');
      if (twDesc) twDesc.setAttribute('content', 'Uncover hidden revenue, optimize contracts, and accelerate collections. Book a free consultation with Al Ihsan.');
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
