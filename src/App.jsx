import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import ResultsBar from './components/ResultsBar/ResultsBar';
import Problem from './components/Problem/Problem';
import BeforeAfter from './components/BeforeAfter/BeforeAfter';
import Services from './components/Services/Services';
import WanisOCR from './components/WanisOCR/WanisOCR';
import WhyAlIhsan from './components/WhyAlIhsan/WhyAlIhsan';
import VisionMission from './components/VisionMission/VisionMission';
import USPs from './components/USPs/USPs';
import FinalCTA from './components/FinalCTA/FinalCTA';
import Footer from './components/Footer/Footer';
import useInView from './hooks/useInView';
import './App.css';

export default function App() {
  const [heroRef, heroInView] = useInView({ threshold: 0.1, triggerOnce: false });
  const [showMobileCta, setShowMobileCta] = useState(false);
  const [showScrollToTop, setShowScrollToTop] = useState(false);
  const [animateHero, setAnimateHero] = useState(false);

  useEffect(() => {
    // Trigger Hero animations shortly after mounting
    const timer = setTimeout(() => {
      setAnimateHero(true);
    }, 50);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      // Show mobile sticky CTA if hero is out of view and we have scrolled past it
      if (!heroInView && window.scrollY > 350) {
        setShowMobileCta(true);
      } else {
        setShowMobileCta(false);
      }

      // Show scroll to top button
      if (window.scrollY > 500) {
        setShowScrollToTop(true);
      } else {
        setShowScrollToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [heroInView]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      <Header showMobileCta={showMobileCta} />
      <main>
        <Hero heroRef={heroRef} animate={animateHero} />
        <ResultsBar />
        <Problem />
        <BeforeAfter />
        <Services />
        <WanisOCR />
        <WhyAlIhsan />
        <VisionMission />
        <USPs />
        <FinalCTA />
      </main>
      <Footer />

      {/* Floating Scroll to Top Button */}
      <button 
        onClick={scrollToTop} 
        className={`scroll-to-top ${showScrollToTop ? 'scroll-to-top--visible' : ''}`} 
        aria-label="Scroll to top"
      >
        <ChevronUp size={20} />
      </button>
    </>
  );
}
