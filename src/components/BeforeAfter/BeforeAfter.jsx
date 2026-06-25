import React from 'react';
import { UserRound, Hospital, FileSearch, BadgeCheck } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import useInView from '../../hooks/useInView';
import './BeforeAfter.css';

export default function BeforeAfter() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const { t } = useLanguage();

  const steps = [
    { icon: <UserRound size={20} />, title: t('workflow.step1.title'), text: t('workflow.step1.text') },
    { icon: <Hospital size={20} />, title: t('workflow.step2.title'), text: t('workflow.step2.text') },
    { icon: <FileSearch size={20} />, title: t('workflow.step3.title'), text: t('workflow.step3.text') },
    { icon: <BadgeCheck size={20} />, title: t('workflow.step4.title'), text: t('workflow.step4.text') }
  ];

  return (
    <section ref={ref} className="section before-after-section" id="workflow">
      <div className="section-container before-after__container">
        
        {/* Section Header */}
        <div className={`before-after__content ${inView ? 'is-visible' : ''}`}>
          <div className="before-after__eyebrow-wrapper fade-up" style={{ transitionDelay: '0ms' }}>
            <span className="before-after__eyebrow">{t('beforeAfter.eyebrow')}</span>
          </div>
          <h2 className="before-after__title fade-up" style={{ transitionDelay: '100ms' }}>
            {t('workflow.title')}
          </h2>
          <p className="before-after__subtitle fade-up" style={{ transitionDelay: '200ms' }}>
            {t('workflow.subtitle')}
          </p>
        </div>

        {/* Workflow Layout */}
        <div className={`before-after__workflow ${inView ? 'is-visible' : ''}`}>
          {steps.map((step, i) => (
            <article
              key={step.title}
              className="before-after__workflow-card scale-in"
              style={{ transitionDelay: `${300 + i * 120}ms` }}
            >
              <span className="before-after__workflow-number">{String(i + 1).padStart(2, '0')}</span>
              <div className="before-after__workflow-icon">
                {step.icon}
              </div>
              <h3 className="before-after__workflow-title">{step.title}</h3>
              <p className="before-after__workflow-text">{step.text}</p>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
