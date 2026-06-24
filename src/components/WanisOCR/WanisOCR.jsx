import React, { useRef, useState } from 'react';
import { 
  Play, Pause, Volume2, VolumeX, Maximize, ExternalLink,
  Cpu, ClipboardList, Briefcase, FileText, FolderTree, Sliders, 
  Stethoscope, Activity, ShieldCheck, RefreshCw, Eye, BarChart3 
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import useInView from '../../hooks/useInView';
import wanisOcrVideo from '../../assets/wanis-ocr.mp4';
import './WanisOCR.css';

export default function WanisOCR() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const { t } = useLanguage();
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play().catch(err => console.log("Video play interrupted:", err));
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleFullscreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      } else if (videoRef.current.webkitRequestFullscreen) {
        videoRef.current.webkitRequestFullscreen();
      } else if (videoRef.current.msRequestFullscreen) {
        videoRef.current.msRequestFullscreen();
      }
    }
  };

  const features = [
    { id: 'aiOcr', icon: <Cpu size={20} /> },
    { id: 'claims', icon: <ClipboardList size={20} /> },
    { id: 'company', icon: <Briefcase size={20} /> },
    { id: 'contracts', icon: <FileText size={20} /> },
    { id: 'classification', icon: <FolderTree size={20} /> },
    { id: 'rules', icon: <Sliders size={20} /> },
    { id: 'catalog', icon: <Stethoscope size={20} /> },
    { id: 'provider', icon: <Activity size={20} /> },
    { id: 'auth', icon: <ShieldCheck size={20} /> },
    { id: 'queue', icon: <RefreshCw size={20} /> },
    { id: 'review', icon: <Eye size={20} /> },
    { id: 'analytics', icon: <BarChart3 size={20} /> },
  ];

  return (
    <section ref={ref} className="section wanis-ocr-section" id="wanis-ocr">
      {/* Background Glows */}
      <div className="wanis-ocr__bg-glow-1"></div>
      <div className="wanis-ocr__bg-glow-2"></div>
      
      <div className="section-container wanis-ocr__container">
        {/* Two Column Intro Section */}
        <div className="wanis-ocr__intro-grid">
          {/* Left Column: Info */}
          <div className="wanis-ocr__info-content">
            <div className={`wanis-ocr__eyebrow-wrapper fade-up ${inView ? 'is-visible' : ''}`} style={{ transitionDelay: '0ms' }}>
              <span className="wanis-ocr__eyebrow">{t('wanis.eyebrow')}</span>
            </div>
            <h2 className={`wanis-ocr__title fade-up ${inView ? 'is-visible' : ''}`} style={{ transitionDelay: '100ms' }}>
              {t('wanis.title')}
            </h2>
            <p className={`wanis-ocr__subtitle fade-up ${inView ? 'is-visible' : ''}`} style={{ transitionDelay: '200ms' }}>
              {t('wanis.subtitle')}
            </p>
            <div className={`wanis-ocr__ctas fade-up ${inView ? 'is-visible' : ''}`} style={{ transitionDelay: '300ms' }}>
              <a 
                href="https://app.alehsan.online" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-primary wanis-ocr__cta-btn"
                id="wanis-ocr-cta-live"
              >
                <span>{t('wanis.visitPlatform')}</span>
                <ExternalLink size={16} style={{ marginLeft: '8px', marginRight: '8px' }} />
              </a>
            </div>
          </div>

          {/* Right Column: Video Player Mockup */}
          <div 
            className={`wanis-ocr__video-mockup scale-in ${inView ? 'is-visible' : ''}`}
            style={{ transitionDelay: '400ms' }}
          >
            <div className="wanis-ocr__video-wrapper">
              <video 
                ref={videoRef}
                src={wanisOcrVideo}
                className="wanis-ocr__video"
                playsInline
                muted={isMuted}
                loop
                autoPlay
                onClick={togglePlay}
              />
              
              {/* Play state indicator overlays */}
              {!isPlaying && (
                <div className="wanis-ocr__play-overlay" onClick={togglePlay}>
                  <button className="wanis-ocr__play-overlay-btn" aria-label="Play video">
                    <Play size={28} fill="currentColor" />
                  </button>
                </div>
              )}

              {/* Video custom controls bar */}
              <div className="wanis-ocr__video-controls">
                <button 
                  onClick={togglePlay}
                  className="wanis-ocr__control-btn"
                  aria-label={isPlaying ? "Pause video" : "Play video"}
                >
                  {isPlaying ? <Pause size={18} fill="currentColor" /> : <Play size={18} fill="currentColor" />}
                </button>
                
                <button 
                  onClick={toggleMute}
                  className="wanis-ocr__control-btn"
                  aria-label={isMuted ? "Unmute video" : "Mute video"}
                >
                  {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
                </button>
                
                <div className="wanis-ocr__controls-spacer"></div>
                
                <button 
                  onClick={handleFullscreen}
                  className="wanis-ocr__control-btn"
                  aria-label="Fullscreen"
                >
                  <Maximize size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Grid Header */}
        <div className={`wanis-ocr__features-header ${inView ? 'is-visible' : ''}`}>
          <h3 className="wanis-ocr__features-title fade-up" style={{ transitionDelay: '500ms' }}>
            {t('wanis.featuresTitle')}
          </h3>
        </div>

        {/* 12 Features Grid */}
        <div className="wanis-ocr__features-grid">
          {features.map((feature, i) => (
            <div 
              key={feature.id} 
              className={`wanis-ocr__feature-card scale-in ${inView ? 'is-visible' : ''}`}
              style={{ transitionDelay: `${550 + i * 50}ms` }}
            >
              <div className="wanis-ocr__feature-card-accent"></div>
              <div className="wanis-ocr__feature-icon-wrapper">
                {feature.icon}
              </div>
              <h4 className="wanis-ocr__feature-title">
                {t(`wanis.feature.${feature.id}.title`)}
              </h4>
              <p className="wanis-ocr__feature-desc">
                {t(`wanis.feature.${feature.id}.desc`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
