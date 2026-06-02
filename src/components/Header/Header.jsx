import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import './Header.css';

export default function Header({ showMobileCta }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t, lang, toggleLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContact = (e) => {
    e.preventDefault();
    setIsMenuOpen(false);
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleLinkClick = (e, id) => {
    e.preventDefault();
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className={`header ${isScrolled ? 'header--scrolled' : ''} ${isMenuOpen ? 'header--open' : ''}`} id="header">
        <div className="header__container">
          <a href="#" className="header__logo" aria-label={t('nav.logo')}>
            <span className="header__logo-text">{t('nav.logo')}</span>
          </a>

          {/* Navigation Links (Desktop) */}
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li>
                <a href="#hero" className="header__nav-link" onClick={(e) => handleLinkClick(e, 'hero')}>{t('nav.home')}</a>
              </li>
              <li>
                <a href="#results" className="header__nav-link" onClick={(e) => handleLinkClick(e, 'results')}>{t('nav.results')}</a>
              </li>
              <li>
                <a href="#problem" className="header__nav-link" onClick={(e) => handleLinkClick(e, 'problem')}>{t('nav.challenge')}</a>
              </li>
              <li>
                <a href="#services" className="header__nav-link" onClick={(e) => handleLinkClick(e, 'services')}>{t('nav.services')}</a>
              </li>
              <li>
                <a href="#why-al-ihsan" className="header__nav-link" onClick={(e) => handleLinkClick(e, 'why-al-ihsan')}>{t('nav.whyUs')}</a>
              </li>
              <li>
                <a href="#vision-mission" className="header__nav-link" onClick={(e) => handleLinkClick(e, 'vision-mission')}>{t('nav.purpose')}</a>
              </li>
            </ul>
          </nav>

          <div className="header__actions">
            {/* Language Switcher */}
            <button 
              onClick={toggleLanguage}
              className="header__lang-toggle"
              aria-label="Toggle language"
            >
              {lang === 'ar' ? 'English' : 'العربية'}
            </button>

            <button 
              id="header-cta"
              onClick={scrollToContact} 
              className="btn-primary header__cta"
            >
              <span className="header__cta-desktop">{t('nav.bookConsultation')}</span>
              <span className="header__cta-mobile">{t('nav.bookNow')}</span>
            </button>

            {/* Mobile Menu Toggle Button */}
            <button 
              className="header__menu-toggle" 
              onClick={toggleMenu}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown Links */}
        <nav className={`header__mobile-nav ${isMenuOpen ? 'header__mobile-nav--open' : ''}`}>
          <ul className="header__mobile-nav-list">
            <li>
              <a href="#hero" className="header__mobile-nav-link" onClick={(e) => handleLinkClick(e, 'hero')}>{t('nav.home')}</a>
            </li>
            <li>
              <a href="#results" className="header__mobile-nav-link" onClick={(e) => handleLinkClick(e, 'results')}>{t('nav.results')}</a>
            </li>
            <li>
              <a href="#problem" className="header__mobile-nav-link" onClick={(e) => handleLinkClick(e, 'problem')}>{t('nav.challenge')}</a>
            </li>
            <li>
              <a href="#services" className="header__mobile-nav-link" onClick={(e) => handleLinkClick(e, 'services')}>{t('nav.services')}</a>
            </li>
            <li>
              <a href="#why-al-ihsan" className="header__mobile-nav-link" onClick={(e) => handleLinkClick(e, 'why-al-ihsan')}>{t('nav.whyUs')}</a>
            </li>
            <li>
              <a href="#vision-mission" className="header__mobile-nav-link" onClick={(e) => handleLinkClick(e, 'vision-mission')}>{t('nav.purpose')}</a>
            </li>
          </ul>
        </nav>
      </header>

      {/* Mobile Sticky CTA at bottom, visible only on small screens when hero is scrolled out */}
      <div className={`mobile-sticky-cta ${showMobileCta ? 'mobile-sticky-cta--visible' : ''}`}>
        <button 
          id="mobile-sticky-cta-btn"
          onClick={scrollToContact} 
          className="btn-primary mobile-sticky-cta__btn"
        >
          {t('nav.bookConsultation')}
        </button>
      </div>
    </>
  );

}
