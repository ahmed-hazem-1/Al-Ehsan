import React from 'react';
import { FileText, Building2, Pill, TrendingUp, Clock3 } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import useInView from '../../hooks/useInView';
import './ResultsBar.css';

export default function ResultsBar() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const { t } = useLanguage();

  const stats = [
    {
      icon: <FileText size={16} className="results__card-icon" />,
      metric: t('results.stat1.metric'),
      title: t('results.stat1.title'),
      text: t('results.stat1.desc')
    },
    {
      icon: <Building2 size={16} className="results__card-icon" />,
      metric: t('results.stat2.metric'),
      title: t('results.stat2.title'),
      text: t('results.stat2.desc')
    },
    {
      icon: <Pill size={16} className="results__card-icon" />,
      metric: t('results.stat3.metric'),
      title: t('results.stat3.title'),
      text: t('results.stat3.desc')
    },
    {
      icon: <TrendingUp size={16} className="results__card-icon" />,
      metric: t('results.stat4.metric'),
      title: t('results.stat4.title'),
      text: t('results.stat4.desc')
    },
    {
      icon: <Clock3 size={16} className="results__card-icon" />,
      metric: t('results.stat5.metric'),
      title: t('results.stat5.title'),
      text: t('results.stat5.desc')
    }
  ];

  return (
    <section ref={ref} className="section results-section" id="results">
      <div className="section-container results__container">
        
        {/* Section Header */}
        <div className={`results__content ${inView ? 'is-visible' : ''}`}>
          <div className="results__eyebrow-wrapper fade-up" style={{ transitionDelay: '0ms' }}>
            <span className="results__eyebrow">{t('results.eyebrow')}</span>
          </div>
          <h2 className="results__title fade-up" style={{ transitionDelay: '100ms' }}>
            {t('results.title')}
          </h2>
          <p className="results__subtitle fade-up" style={{ transitionDelay: '200ms' }}>
            {t('results.subtitle')}
          </p>
        </div>

        <div className={`results__stats-grid ${inView ? 'is-visible' : ''}`}>
          {stats.map((stat, index) => (
            <div
              key={index}
              className="results__card results__stat-card scale-in"
              style={{ transitionDelay: `${300 + index * 100}ms` }}
            >
              <div className="results__card-header">
                <div className="results__card-icon-wrapper">
                  {stat.icon}
                </div>
                <span className="results__card-label">{stat.title}</span>
              </div>
              <div className="results__card-body">
                <span className="results__card-metric">{stat.metric}</span>
                <p className="results__card-text">{stat.text}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

