import React from 'react';
import { FileText, Globe2, LineChart, ReceiptText, Scale, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import useInView from '../../hooks/useInView';
import './Services.css';

export default function Services() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const { t } = useLanguage();

  const groups = [
    {
      title: t('services.group1.title'),
      services: [
        {
          icon: <ShieldCheck size={22} />,
          title: t('services.group1.item1.title'),
          text: t('services.group1.item1.text')
        },
        {
          icon: <FileText size={22} />,
          title: t('services.group1.item2.title'),
          text: t('services.group1.item2.text')
        },
        {
          icon: <Globe2 size={22} />,
          title: t('services.group1.item3.title'),
          text: t('services.group1.item3.text')
        }
      ]
    },
    {
      title: t('services.group2.title'),
      services: [
        {
          icon: <ReceiptText size={22} />,
          title: t('services.group2.item1.title'),
          text: t('services.group2.item1.text')
        },
        {
          icon: <Scale size={22} />,
          title: t('services.group2.item2.title'),
          text: t('services.group2.item2.text')
        },
        {
          icon: <LineChart size={22} />,
          title: t('services.group2.item3.title'),
          text: t('services.group2.item3.text')
        }
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
        </div>

        <div className={`services__groups ${inView ? 'is-visible' : ''}`}>
          {groups.map((group, groupIndex) => (
            <article
              key={group.title}
              className="services__group scale-in"
              style={{ transitionDelay: `${250 + groupIndex * 180}ms` }}
            >
              <h3 className="services__group-title">{group.title}</h3>
              <div className="services__features">
                {group.services.map((service) => (
                  <div key={service.title} className="services__feature">
                    <div className="services__feature-icon">
                      {service.icon}
                    </div>
                    <div>
                      <h4 className="services__feature-title">{service.title}</h4>
                      <p className="services__feature-text">{service.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

