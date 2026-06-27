import React from 'react';
import { Phone, MapPin, Facebook } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import logoImg from '../../assets/alehsan-logo.png';
import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  const handleLinkClick = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      {/* Background Glassmorphic Bubbles */}
      <div className="footer__bg-container">
        <div className="footer__bubble footer__bubble--1"></div>
        <div className="footer__bubble footer__bubble--2"></div>
      </div>

      <div className="footer__container">
        
        {/* Main Columns */}
        <div className="footer__grid">
          
          {/* Column 1: Brand & Tagline */}
          <div className="footer__col footer__col--brand">
            <div className="footer__logo-container">
              <img src={logoImg} alt="Al Ihsan Logo" className="footer__logo-img" />
              <span className="footer__logo-text">{t('nav.logo')}</span>
            </div>
            <p className="footer__tagline">
              {t('footer.tagline')}
            </p>
            <div className="footer__socials">
              <a 
                href="https://www.facebook.com/profile.php?id=100088036981088" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="footer__social-link"
                id="footer-social-facebook"
                aria-label="Facebook Profile"
              >
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="footer__col footer__col--links">
            <h4 className="footer__col-title">{t('footer.quickLinks')}</h4>
            <ul className="footer__links-list">
              <li>
                <a href="#hero" onClick={(e) => handleLinkClick(e, 'hero')} id="footer-link-home">{t('nav.home')}</a>
              </li>
              <li>
                <a href="#results" onClick={(e) => handleLinkClick(e, 'results')} id="footer-link-results">{t('nav.results')}</a>
              </li>
              <li>
                <a href="#problem" onClick={(e) => handleLinkClick(e, 'problem')} id="footer-link-problem">{t('nav.challenge')}</a>
              </li>
              <li>
                <a href="#services" onClick={(e) => handleLinkClick(e, 'services')} id="footer-link-services">{t('nav.services')}</a>
              </li>
              <li>
                <a href="#why-al-ihsan" onClick={(e) => handleLinkClick(e, 'why-al-ihsan')} id="footer-link-why">{t('nav.whyUs')}</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div className="footer__col footer__col--contact">
            <h4 className="footer__col-title">{t('footer.contactInfo')}</h4>
            <ul className="footer__contact-list">
              <li>
                <Phone size={16} className="footer__contact-icon" />
                <span className="footer__contact-text" dir="auto">00218910202873</span>
              </li>
              {t('footer.location').split('+').map((loc, index) => (
                <li key={index}>
                  <MapPin size={16} className="footer__contact-icon" />
                  <span className="footer__contact-text">{loc.trim()}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright */}
        <div className="footer__bottom">
          <div className="footer__divider"></div>
          <div className="footer__bottom-content">
            <span className="footer__copyright">
              &copy; {currentYear} {t('footer.copyright')}
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}
