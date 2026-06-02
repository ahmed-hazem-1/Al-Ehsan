import React from 'react';
import { Eye, Compass } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import useInView from '../../hooks/useInView';
import './VisionMission.css';

export default function VisionMission() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const { t } = useLanguage();

  return (
    <section ref={ref} className="section vision-mission-section" id="vision-mission">
      <div className="section-container vision-mission__container">
        
        {/* Section Header */}
        <div className={`vision-mission__content ${inView ? 'is-visible' : ''}`}>
          <div className="vision-mission__eyebrow-wrapper fade-up" style={{ transitionDelay: '0ms' }}>
            <span className="vision-mission__eyebrow">{t('purpose.eyebrow')}</span>
          </div>
          <h2 className="vision-mission__title fade-up" style={{ transitionDelay: '100ms' }}>
            {t('purpose.title')}
          </h2>
          <p className="vision-mission__subtitle fade-up" style={{ transitionDelay: '200ms' }}>
            {t('purpose.subtitle')}
          </p>
        </div>

        {/* Side-by-Side Cards */}
        <div className={`vision-mission__blocks ${inView ? 'is-visible' : ''}`}>
          
          {/* Vision Block */}
          <div 
            className="vision-mission__card scale-in"
            style={{ transitionDelay: '300ms' }}
          >
            <div className="vision-mission__card-icon-wrapper">
              <Eye size={24} />
            </div>
            <h3 className="vision-mission__card-title">{t('purpose.vision.title')}</h3>
            <p className="vision-mission__card-text">
              {t('purpose.vision.text')}
            </p>
          </div>

          {/* Mission Block */}
          <div 
            className="vision-mission__card scale-in"
            style={{ transitionDelay: '450ms' }}
          >
            <div className="vision-mission__card-icon-wrapper">
              <Compass size={24} />
            </div>
            <h3 className="vision-mission__card-title">{t('purpose.mission.title')}</h3>
            <p className="vision-mission__card-text">
              {t('purpose.mission.text')}
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

