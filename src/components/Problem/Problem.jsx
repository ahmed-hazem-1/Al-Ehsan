import React from 'react';
import { TrendingDown, FileX, Hourglass, XCircle, TrendingUp, FileCheck, Zap, BarChart3, ChevronRight } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import useInView from '../../hooks/useInView';
import './Problem.css';
import '../BeforeAfter/BeforeAfter.css';

export default function Problem() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const { t } = useLanguage();

  const beforeItems = [
    { icon: <TrendingDown size={18} />, text: t('problem.table.row1.before') },
    { icon: <FileX size={18} />, text: t('problem.table.row2.before') },
    { icon: <Hourglass size={18} />, text: t('problem.table.row3.before') },
    { icon: <XCircle size={18} />, text: t('problem.table.row4.before') }
  ];

  const afterItems = [
    { icon: <TrendingUp size={18} />, text: t('problem.table.row1.after') },
    { icon: <FileCheck size={18} />, text: t('problem.table.row2.after') },
    { icon: <Zap size={18} />, text: t('problem.table.row3.after') },
    { icon: <BarChart3 size={18} />, text: t('problem.table.row4.after') }
  ];

  return (
    <section ref={ref} className="section problem-section" id="problem">
      <div className="section-container problem__container">
        
        {/* Section Header */}
        <div className={`problem__content ${inView ? 'is-visible' : ''}`}>
          <div className="problem__eyebrow-wrapper fade-up" style={{ transitionDelay: '0ms' }}>
            <span className="problem__eyebrow">{t('problem.eyebrow')}</span>
          </div>
          <h2 className="problem__title fade-up" style={{ transitionDelay: '100ms' }}>
            {t('problem.title')}
          </h2>
          <p className="problem__subtitle fade-up" style={{ transitionDelay: '200ms' }}>
            {t('problem.subtitle')}
          </p>
        </div>

        <div className={`before-after__comparison ${inView ? 'is-visible' : ''}`}>
          <div
            className="before-after__col before-after__col--before fade-left"
            style={{ transitionDelay: '300ms' }}
          >
            <h3 className="before-after__col-title">{t('problem.table.beforeTitle')}</h3>
            <ul className="before-after__list">
              {beforeItems.map((item, index) => (
                <li key={index} className="before-after__item">
                  <div className="before-after__icon-holder before-after__icon-holder--before">
                    {item.icon}
                  </div>
                  <span className="before-after__item-text">
                    {item.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div
            className="before-after__connector scale-in"
            style={{ transitionDelay: '550ms' }}
          >
            <div className="before-after__arrow-wrapper">
              <ChevronRight size={24} className="before-after__arrow" />
            </div>
          </div>

          <div
            className="before-after__col before-after__col--after fade-right"
            style={{ transitionDelay: '450ms' }}
          >
            <h3 className="before-after__col-title">{t('problem.table.afterTitle')}</h3>
            <ul className="before-after__list">
              {afterItems.map((item, index) => (
                <li key={index} className="before-after__item">
                  <div className="before-after__icon-holder before-after__icon-holder--after">
                    {item.icon}
                  </div>
                  <span className="before-after__item-text">
                    {item.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
}
