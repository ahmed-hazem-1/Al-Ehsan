import React from 'react';
import { FileWarning, FileMinus, Clock, ShieldAlert, Link2Off, EyeOff } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import useInView from '../../hooks/useInView';
import './Problem.css';

export default function Problem() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const { t } = useLanguage();

  const problems = [
    {
      icon: <FileWarning size={20} />,
      title: t('problem.leakage.title'),
      desc: t('problem.leakage.desc')
    },
    {
      icon: <FileMinus size={20} />,
      title: t('problem.contracts.title'),
      desc: t('problem.contracts.desc')
    },
    {
      icon: <Clock size={20} />,
      title: t('problem.collections.title'),
      desc: t('problem.collections.desc')
    },
    {
      icon: <ShieldAlert size={20} />,
      title: t('problem.insurance.title'),
      desc: t('problem.insurance.desc')
    },
    {
      icon: <Link2Off size={20} />,
      title: t('problem.partnerships.title'),
      desc: t('problem.partnerships.desc')
    },
    {
      icon: <EyeOff size={20} />,
      title: t('problem.visibility.title'),
      desc: t('problem.visibility.desc')
    }
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

        {/* 6-Card Grid */}
        <div className={`problem__grid ${inView ? 'is-visible' : ''}`}>
          {problems.map((p, i) => (
            <div 
              key={i} 
              className="problem__card scale-in" 
              style={{ transitionDelay: `${300 + i * 80}ms` }}
            >
              <div className="problem__card-icon-wrapper">
                {p.icon}
              </div>
              <h3 className="problem__card-title">{p.title}</h3>
              <p className="problem__card-desc">{p.desc}</p>
            </div>
          ))}
        </div>

        {/* Outcome Pull-Quote */}
        <div className={`problem__quote-wrapper ${inView ? 'is-visible' : ''}`}>
          <blockquote 
            className="problem__quote fade-up" 
            style={{ transitionDelay: '800ms' }}
          >
            {t('problem.quote')}
          </blockquote>
        </div>

      </div>
    </section>
  );
}

