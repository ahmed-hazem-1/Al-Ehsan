import React from 'react';
import { DollarSign, Handshake, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import PillarCard from './PillarCard';
import useInView from '../../hooks/useInView';
import './Services.css';

export default function Services() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const { t } = useLanguage();

  const pillars = [
    {
      icon: <DollarSign size={24} />,
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
      icon: <Handshake size={24} />,
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
      icon: <ShieldCheck size={24} />,
      title: t('services.pillar3.title'),
      points: [
        t('services.pillar3.p1'),
        t('services.pillar3.p2'),
        t('services.pillar3.p3'),
        t('services.pillar3.p4'),
        t('services.pillar3.p5'),
        t('services.pillar3.p6')
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

        {/* 3-Column Pillars Grid */}
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

