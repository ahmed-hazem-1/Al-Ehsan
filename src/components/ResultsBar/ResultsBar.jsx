import React from 'react';
import { TrendingUp, Handshake, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import useInView from '../../hooks/useInView';
import './ResultsBar.css';

export default function ResultsBar() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const { t } = useLanguage();

  return (
    <section ref={ref} className="section results-section" id="results">
      <div className="section-container results__container">
        
        {/* Section Header */}
        <div className={`results__content ${inView ? 'is-visible' : ''}`}>
          <div className="results__eyebrow-wrapper fade-up" style={{ transitionDelay: '0ms' }}>
            <span className="results__eyebrow">{t('results.eyebrow')}</span>
          </div>
          <h2 className="results__title fade-up" style={{ transitionDelay: '100ms' }}>
            {t('results.title')}
          </h2>
          <p className="results__subtitle fade-up" style={{ transitionDelay: '200ms' }}>
            {t('results.subtitle')}
          </p>
        </div>

        {/* Visual Metrics Grid (Centered Layout) */}
        <div className={`results__visual-grid ${inView ? 'is-visible' : ''}`}>
          
          {/* Left Column: Large Card (Metric + Key Performance Focus Areas) */}
          <div className="results__card results__card--large scale-in" style={{ transitionDelay: '300ms' }}>
            <div className="results__card-large-content">
              
              {/* Left Side: Financial Growth Metric */}
              <div className="results__card-large-metrics">
                <div className="results__card-header">
                  <div className="results__card-icon-wrapper">
                    <TrendingUp size={16} className="results__card-icon" />
                  </div>
                  <span className="results__card-label">{t('results.financialGrowth')}</span>
                </div>
                <div className="results__card-body">
                  <span className="results__card-metric">{t('results.mainMetric')}</span>
                  <p className="results__card-text">{t('results.avgRevenueGrowth')}</p>
                </div>
              </div>
              
              <div className="results__card-large-divider"></div>
              
              {/* Right Side: Solved Pain Points/Focus Areas List */}
              <div className="results__card-large-details">
                <span className="results__card-details-title">{t('results.corePerformanceFocus')}</span>
                <ul className="results__card-details-list">
                  <li>
                    <div className="results__card-details-dot"></div>
                    <span>{t('results.eliminateLeakage')}</span>
                  </li>
                  <li>
                    <div className="results__card-details-dot"></div>
                    <span>{t('results.renegotiateContracts')}</span>
                  </li>
                  <li>
                    <div className="results__card-details-dot"></div>
                    <span>{t('results.speedUpCollections')}</span>
                  </li>
                  <li>
                    <div className="results__card-details-dot"></div>
                    <span>{t('results.operationalVisibility')}</span>
                  </li>
                </ul>
              </div>

            </div>
          </div>

          {/* Right Column: Stack of 2 Smaller Cards */}
          <div className="results__visual-stack-right">
            
            {/* Card 2: Contracts Restructured */}
            <div className="results__card results__card--small scale-in" style={{ transitionDelay: '450ms' }}>
              <div className="results__card-header">
                <div className="results__card-icon-wrapper">
                  <Handshake size={16} className="results__card-icon" />
                </div>
                <span className="results__card-label">{t('results.contractsLabel')}</span>
              </div>
              <div className="results__card-body">
                <span className="results__card-metric">{t('results.secondaryMetric')}</span>
                <p className="results__card-text">{t('results.contractsText')}</p>
              </div>
            </div>

            {/* Card 3: DSO Reduction */}
            <div className="results__card results__card--small scale-in" style={{ transitionDelay: '600ms' }}>
              <div className="results__card-header">
                <div className="results__card-icon-wrapper">
                  <ShieldCheck size={16} className="results__card-icon" />
                </div>
                <span className="results__card-label">{t('results.efficiencyLabel')}</span>
              </div>
              <div className="results__card-body">
                <span className="results__card-metric">{t('results.tertiaryMetric')}</span>
                <p className="results__card-text">{t('results.efficiencyText')}</p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
