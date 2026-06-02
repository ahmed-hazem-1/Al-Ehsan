import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import AnimatedBackground from './AnimatedBackground';
import './Hero.css';

export default function Hero({ heroRef, animate }) {
  const { t } = useLanguage();
  
  const words = [
    t('hero.rotator.growth'),
    t('hero.rotator.profit'),
    t('hero.rotator.contracts'),
    t('hero.rotator.efficiency')
  ];
  
  // Clone the first element to the end of the array to allow infinite seamless looping
  const displayWords = [...words, words[0]];
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [transitionEnabled, setTransitionEnabled] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setTransitionEnabled(true);
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }, 3000); // Transitions forward every 3 seconds
    
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // If we've transitioned to the duplicated first element (index 4)
    if (currentIndex === displayWords.length - 1) {
      const snapTimer = setTimeout(() => {
        setTransitionEnabled(false);
        setCurrentIndex(0); // Snap back to the actual first element (index 0) instantly
      }, 650); // Duration matches the transition animation speed (650ms)
      
      return () => clearTimeout(snapTimer);
    }
  }, [currentIndex, displayWords.length]);

  const scrollToContact = (e) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Each item in the 5-item array represents exactly 20% of the container height
  const translationPercentage = currentIndex * (100 / displayWords.length);

  return (
    <section ref={heroRef} className="section hero" id="hero">
      <AnimatedBackground />
      <div className="section-container hero__container">
        
        {/* Centered Top Column: Eyebrow, Title, Subtitle, and CTAs */}
        <div className={`hero__content ${animate ? 'is-visible' : ''}`}>
          <div className="hero__eyebrow-wrapper fade-up" style={{ transitionDelay: '0ms' }}>
            <span className="hero__eyebrow">{t('hero.eyebrow')}</span>
          </div>
          
          <h1 className="hero__title fade-up" style={{ transitionDelay: '100ms' }}>
            <span className="hero__title-static">{t('hero.static1')}</span>
            <span className="hero__title-rotator">
              <span 
                className="hero__title-words-container"
                style={{ 
                  transform: `translateY(-${translationPercentage}%)`,
                  transition: transitionEnabled ? 'transform 650ms cubic-bezier(0.76, 0, 0.24, 1)' : 'none'
                }}
              >
                {displayWords.map((word, i) => (
                  <span key={i} className="hero__title-word">
                    {word}
                  </span>
                ))}
              </span>
            </span>
            <span className="hero__title-static">{t('hero.static2')}</span>
          </h1>
          
          <p className="hero__subtitle fade-up" style={{ transitionDelay: '200ms' }}>
            {t('hero.subtitle')}
          </p>

          <div className="hero__ctas fade-up" style={{ transitionDelay: '300ms' }}>
            <button 
              id="hero-cta-primary"
              onClick={scrollToContact} 
              className="btn-primary hero__cta-primary"
            >
              {t('hero.cta.primary')}
              <ArrowRight size={16} className="hero__cta-arrow" />
            </button>
            <button 
              id="hero-cta-secondary"
              onClick={scrollToContact} 
              className="btn-secondary hero__cta-secondary"
            >
              {t('hero.cta.secondary')}
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}

