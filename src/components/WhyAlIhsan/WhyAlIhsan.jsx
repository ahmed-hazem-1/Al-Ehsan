import React, { useState, useEffect } from 'react';
import { HeartPulse, Target, Layers, Users } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import useInView from '../../hooks/useInView';
import './WhyAlIhsan.css';

export default function WhyAlIhsan() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const { t } = useLanguage();

  const items = [
    {
      question: t('why.q1'),
      title: t('why.t1'),
      desc: t('why.d1'),
      icon: <HeartPulse size={20} />
    },
    {
      question: t('why.q2'),
      title: t('why.t2'),
      desc: t('why.d2'),
      icon: <Target size={20} />
    },
    {
      question: t('why.q3'),
      title: t('why.t3'),
      desc: t('why.d3'),
      icon: <Layers size={20} />
    },
    {
      question: t('why.q4'),
      title: t('why.t4'),
      desc: t('why.d4'),
      icon: <Users size={20} />
    }
  ];

  // Clone first item to allow seamless endless loop
  const displayItems = [...items, items[0]];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [transitionEnabled, setTransitionEnabled] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setTransitionEnabled(true);
      setCurrentIndex((prev) => prev + 1);
    }, 3800); // Cycles every 3.8 seconds
    
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (currentIndex === displayItems.length - 1) {
      const snapTimer = setTimeout(() => {
        setTransitionEnabled(false);
        setCurrentIndex(0); // Snap back to first item instantly
      }, 650); // Matches CSS transition speed
      
      return () => clearTimeout(snapTimer);
    }
  }, [currentIndex, displayItems.length]);

  return (
    <section ref={ref} className="section why-section" id="why-al-ihsan">
      <div className="section-container why__container">
        
        <div className="why__grid-layout">
          
          {/* Left Column: Eyebrow, Synced Question Rotator & Static Desc */}
          <div className={`why__content ${inView ? 'is-visible' : ''}`}>
            <div className="why__eyebrow-wrapper fade-up" style={{ transitionDelay: '0ms' }}>
              <span className="why__eyebrow">{t('why.eyebrow')}</span>
            </div>
            
            <h2 className="why__title fade-up" style={{ transitionDelay: '100ms' }}>
              <span className="why__title-static">{t('why.titleStatic')}</span>
              <span className="why__title-rotator">
                <span 
                  className="why__title-words-container"
                  style={{ 
                    transform: `translateY(-${currentIndex * 1.25}em)`,
                    transition: transitionEnabled ? 'transform 650ms cubic-bezier(0.76, 0, 0.24, 1)' : 'none'
                  }}
                >
                  {displayItems.map((item, i) => (
                    <span key={i} className="why__title-word">
                      {item.question}
                    </span>
                  ))}
                </span>
              </span>
            </h2>
            
            <p className="why__subtitle fade-up" style={{ transitionDelay: '200ms' }}>
              {t('why.subtitle')}
            </p>
          </div>

          {/* Right Column: Synced Card Carousel */}
          <div 
            className={`why__carousel-viewport scale-in ${inView ? 'is-visible' : ''}`}
            style={{ transitionDelay: '300ms' }}
          >
            <div 
              className="why__carousel-container"
              style={{ 
                transform: `translateY(-${currentIndex * 100}%)`,
                transition: transitionEnabled ? 'transform 650ms cubic-bezier(0.76, 0, 0.24, 1)' : 'none'
              }}
            >
              {displayItems.map((item, i) => (
                <div key={i} className="why__card">
                  <div className="why__card-icon-wrapper">
                    {item.icon}
                  </div>
                  <h3 className="why__card-title">{item.title}</h3>
                  <p className="why__card-desc">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

