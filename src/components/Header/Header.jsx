import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import logoImg from '../../assets/alehsan-logo.png';
import './Header.css';

const languages = [
  { code: 'ar', label: 'العربية' },
  { code: 'ly', label: 'عربي (ليبيا)' },
  { code: 'sa', label: 'عربي (السعودية)' },
  { code: 'eg', label: 'عربي (مصر)' },
  { code: 'bn', label: 'বাংলা' },
  { code: 'en', label: 'English' }
];

export default function Header({ showMobileCta }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const { t, lang, setLang } = useLanguage();
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsLangOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

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
      <header className={`header ${isScrolled ? 'header--scrolled' : ''} ${isMenuOpen ? 'header--open' : ''} ${isLangOpen ? 'header--lang-open' : ''}`} id="header">
        <div className="header__container">
          <a href="#" className="header__logo" aria-label={t('nav.logo')}>
            <img src={logoImg} alt="Al Ihsan Logo" className="header__logo-img" />
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
            {/* Language Dropdown */}
            <div className="header__lang-dropdown" ref={dropdownRef}>
              <button 
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="header__lang-toggle"
                aria-haspopup="true"
                aria-expanded={isLangOpen}
                aria-label="Select language"
              >
                <span>
                  {languages.find((l) => l.code === lang)?.label || 'العربية'}
                </span>
                <ChevronDown size={12} className={`header__lang-chevron ${isLangOpen ? 'header__lang-chevron--open' : ''}`} />
              </button>
              
              {isLangOpen && (
                <ul className="header__lang-menu">
                  {languages.map((l) => (
                    <li key={l.code}>
                      <button
                        onClick={() => {
                          setLang(l.code);
                          setIsLangOpen(false);
                        }}
                        className={`header__lang-option ${lang === l.code ? 'header__lang-option--active' : ''}`}
                      >
                        {l.label}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>

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
