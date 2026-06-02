import React from 'react';
import { TrendingDown, FileX, Hourglass, XCircle, TrendingUp, FileCheck, Zap, BarChart3, ChevronRight } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import useInView from '../../hooks/useInView';
import './BeforeAfter.css';

export default function BeforeAfter() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const { t } = useLanguage();

  const beforeItems = [
    { icon: <TrendingDown size={18} />, text: t('beforeAfter.before1') },
    { icon: <FileX size={18} />, text: t('beforeAfter.before2') },
    { icon: <Hourglass size={18} />, text: t('beforeAfter.before3') },
    { icon: <XCircle size={18} />, text: t('beforeAfter.before4') }
  ];

  const afterItems = [
    { icon: <TrendingUp size={18} />, text: t('beforeAfter.after1') },
    { icon: <FileCheck size={18} />, text: t('beforeAfter.after2') },
    { icon: <Zap size={18} />, text: t('beforeAfter.after3') },
    { icon: <BarChart3 size={18} />, text: t('beforeAfter.after4') }
  ];

  return (
    <section ref={ref} className="section before-after-section" id="before-after">
      <div className="section-container before-after__container">
        
        {/* Section Header */}
        <div className={`before-after__content ${inView ? 'is-visible' : ''}`}>
          <div className="before-after__eyebrow-wrapper fade-up" style={{ transitionDelay: '0ms' }}>
            <span className="before-after__eyebrow">{t('beforeAfter.eyebrow')}</span>
          </div>
          <h2 className="before-after__title fade-up" style={{ transitionDelay: '100ms' }}>
            {t('beforeAfter.title')}
          </h2>
          <p className="before-after__subtitle fade-up" style={{ transitionDelay: '200ms' }}>
            {t('beforeAfter.subtitle')}
          </p>
        </div>

        {/* Comparison Layout */}
        <div className={`before-after__comparison ${inView ? 'is-visible' : ''}`}>
          
          {/* Before Column */}
          <div 
            className="before-after__col before-after__col--before fade-left"
            style={{ transitionDelay: '300ms' }}
          >
            <h3 className="before-after__col-title">{t('beforeAfter.beforeTitle')}</h3>
            <ul className="before-after__list">
              {beforeItems.map((item, i) => (
                <li key={i} className="before-after__item">
                  <div className="before-after__icon-holder before-after__icon-holder--before">
                    {item.icon}
                  </div>
                  <span className="before-after__item-text">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Connector Arrow */}
          <div 
            className="before-after__connector scale-in"
            style={{ transitionDelay: '550ms' }}
          >
            <div className="before-after__arrow-wrapper">
              <ChevronRight size={24} className="before-after__arrow" />
            </div>
          </div>

          {/* After Column */}
          <div 
            className="before-after__col before-after__col--after fade-right"
            style={{ transitionDelay: '450ms' }}
          >
            <h3 className="before-after__col-title">{t('beforeAfter.afterTitle')}</h3>
            <ul className="before-after__list">
              {afterItems.map((item, i) => (
                <li key={i} className="before-after__item">
                  <div className="before-after__icon-holder before-after__icon-holder--after">
                    {item.icon}
                  </div>
                  <span className="before-after__item-text">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
}

