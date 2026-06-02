import React from 'react';
import './AnimatedBackground.css';

export default function AnimatedBackground() {
  return (
    <div className="hero__bg-container">
      <div className="hero__bg-bubble hero__bg-bubble--1"></div>
      <div className="hero__bg-bubble hero__bg-bubble--2"></div>
      <div className="hero__bg-bubble hero__bg-bubble--3"></div>
      <div className="hero__bg-bubble hero__bg-bubble--4"></div>
    </div>
  );
}
