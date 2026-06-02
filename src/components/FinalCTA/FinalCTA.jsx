import React from 'react';
import LeadForm from './LeadForm';
import { useLanguage } from '../../context/LanguageContext';
import useInView from '../../hooks/useInView';
import { Check } from 'lucide-react';
import './FinalCTA.css';

export default function FinalCTA() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const { t } = useLanguage();

  const benefits = [
    t('cta.benefit1'),
    t('cta.benefit2'),
    t('cta.benefit3'),
    t('cta.benefit4')
  ];

  return (
    <section ref={ref} className="section final-cta-section" id="contact">
      <div className="section-container final-cta__container">
        
        <div className="final-cta__grid">
          
          {/* Left Column: Heading and Checklist */}
          <div className={`final-cta__content ${inView ? 'is-visible' : ''}`}>
            <div className="final-cta__eyebrow-wrapper fade-up" style={{ transitionDelay: '0ms' }}>
              <span className="final-cta__eyebrow">{t('cta.eyebrow')}</span>
            </div>
            
            <h2 className="final-cta__title fade-up" style={{ transitionDelay: '100ms' }}>
              {t('cta.title')}
            </h2>
            
            <p className="final-cta__subtitle fade-up" style={{ transitionDelay: '200ms' }}>
              {t('cta.subtitle')}
            </p>

            <ul className="final-cta__benefits fade-up" style={{ transitionDelay: '300ms' }}>
              {benefits.map((benefit, idx) => (
                <li key={idx} className="final-cta__benefit-item">
                  <div className="final-cta__benefit-check">
                    <Check size={14} />
                  </div>
                  <span className="final-cta__benefit-text">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column: Interactive Form Card */}
          <div 
            className={`final-cta__form-card scale-in ${inView ? 'is-visible' : ''}`}
            style={{ transitionDelay: '400ms' }}
          >
            <h3 className="final-cta__form-title">{t('cta.form.title')}</h3>
            <p className="final-cta__form-subtitle">
              {t('cta.form.subtitle')}
            </p>
            <LeadForm />
          </div>

        </div>

      </div>
    </section>
  );
}
