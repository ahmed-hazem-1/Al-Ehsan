import React from 'react';
import { Briefcase, FileSearch, ClipboardCheck, BarChart3 } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import PillarCard from './PillarCard';
import useInView from '../../hooks/useInView';
import './Services.css';

export default function Services() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const { t } = useLanguage();

  const pillars = [
    {
      icon: <Briefcase size={24} />,
      title: t('services.pillar1.title'),
      points: [
        t('services.pillar1.p1'),
        t('services.pillar1.p2'),
        t('services.pillar1.p3'),
        t('services.pillar1.p4'),
        t('services.pillar1.p5')
      ]
    },
    {
      icon: <FileSearch size={24} />,
      title: t('services.pillar2.title'),
      points: [
        t('services.pillar2.p1'),
        t('services.pillar2.p2'),
        t('services.pillar2.p3'),
        t('services.pillar2.p4'),
        t('services.pillar2.p5')
      ]
    },
    {
      icon: <ClipboardCheck size={24} />,
      title: t('services.pillar3.title'),
      points: [
        t('services.pillar3.p1'),
        t('services.pillar3.p2'),
        t('services.pillar3.p3'),
        t('services.pillar3.p4'),
        t('services.pillar3.p5')
      ]
    },
    {
      icon: <BarChart3 size={24} />,
      title: t('services.pillar4.title'),
      points: [
        t('services.pillar4.p1'),
        t('services.pillar4.p2'),
        t('services.pillar4.p3'),
        t('services.pillar4.p4'),
        t('services.pillar4.p5')
      ]
    }
  ];

  return (
    <section ref={ref} className="section services-section" id="services">
      <div className="section-container services__container">
        
        {/* Section Header */}
        <div className={`services__content ${inView ? 'is-visible' : ''}`}>
          <div className="services__eyebrow-wrapper fade-up" style={{ transitionDelay: '0ms' }}>
            <span className="services__eyebrow">{t('services.eyebrow')}</span>
          </div>
          <h2 className="services__title fade-up" style={{ transitionDelay: '100ms' }}>
            {t('services.title')}
          </h2>
          <p className="services__subtitle fade-up" style={{ transitionDelay: '200ms' }}>
            {t('services.subtitle')}
          </p>
        </div>

        {/* Service Pillars Grid */}
        <div className={`services__grid ${inView ? 'is-visible' : ''}`}>
          {pillars.map((pillar, i) => (
            <PillarCard 
              key={i}
              index={i}
              icon={pillar.icon}
              title={pillar.title}
              points={pillar.points}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
