import React from 'react';
import { Handshake, HeartPulse, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import useInView from '../../hooks/useInView';
import './WhyAlIhsan.css';

export default function WhyAlIhsan() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const { t } = useLanguage();

  const items = [
    {
      title: t('why.t1'),
      desc: t('why.d1'),
      icon: <Handshake size={20} />
    },
    {
      title: t('why.t2'),
      desc: t('why.d2'),
      icon: <HeartPulse size={20} />
    },
    {
      title: t('why.t3'),
      desc: t('why.d3'),
      icon: <ShieldCheck size={20} />
    }
  ];

  return (
    <section ref={ref} className="section why-section" id="why-al-ihsan">
      <div className="section-container why__container">
        
        <div className={`why__content ${inView ? 'is-visible' : ''}`}>
          <div className="why__eyebrow-wrapper fade-up" style={{ transitionDelay: '0ms' }}>
            <span className="why__eyebrow">{t('why.eyebrow')}</span>
          </div>

          <h2 className="why__title fade-up" style={{ transitionDelay: '100ms' }}>
            {t('why.titleStatic')}
          </h2>
        </div>

        <div className={`why__cards ${inView ? 'is-visible' : ''}`}>
          {items.map((item, index) => (
            <article
              key={item.title}
              className="why__card scale-in"
              style={{ transitionDelay: `${250 + index * 120}ms` }}
            >
              <div className="why__card-icon-wrapper">
                {item.icon}
              </div>
              <h3 className="why__card-title">{item.title}</h3>
              <p className="why__card-desc">{item.desc}</p>
            </article>
          ))}
          </div>

      </div>
    </section>
  );
}
