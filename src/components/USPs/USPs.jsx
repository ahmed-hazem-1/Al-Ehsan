import React from 'react';
import { BadgeCheck, BarChart3, Handshake, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import useInView from '../../hooks/useInView';
import './USPs.css';

export default function USPs() {
  const [ref, inView] = useInView({ threshold: 0.12, triggerOnce: true });
  const { t } = useLanguage();

  const items = [
    {
      title: t('usps.item1.title'),
      desc: t('usps.item1.desc'),
      icon: <BadgeCheck size={22} />
    },
    {
      title: t('usps.item2.title'),
      desc: t('usps.item2.desc'),
      icon: <BarChart3 size={22} />
    },
    {
      title: t('usps.item3.title'),
      desc: t('usps.item3.desc'),
      icon: <Handshake size={22} />
    },
    {
      title: t('usps.item4.title'),
      desc: t('usps.item4.desc'),
      icon: <ShieldCheck size={22} />
    }
  ];
  const loopGroups = [0, 1, 2];

  return (
    <section ref={ref} className="section usps-section" id="usps">
      <div className="section-container usps__container">
        <div className={`usps__header ${inView ? 'is-visible' : ''}`}>
          <span className="usps__eyebrow fade-up" style={{ transitionDelay: '0ms' }}>
            {t('usps.eyebrow')}
          </span>
          <h2 className="usps__title fade-up" style={{ transitionDelay: '100ms' }}>
            {t('usps.title')}
          </h2>
          <p className="usps__subtitle fade-up" style={{ transitionDelay: '200ms' }}>
            {t('usps.subtitle')}
          </p>
        </div>

        <div className={`usps__marquee ${inView ? 'is-visible' : ''}`}>
          <div className="usps__marquee-track" aria-label={t('usps.eyebrow')}>
            {loopGroups.map((groupIndex) => (
              <div
                className="usps__marquee-group"
                key={groupIndex}
                aria-hidden={groupIndex > 0}
              >
                {items.map((item) => (
                  <article className="usps__card" key={`${item.title}-${groupIndex}`}>
                    <div className="usps__icon-wrapper">
                      {item.icon}
                    </div>
                    <h3 className="usps__card-title">{item.title}</h3>
                    <p className="usps__card-desc">{item.desc}</p>
                  </article>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
