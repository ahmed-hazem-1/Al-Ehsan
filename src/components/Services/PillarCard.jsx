import React from 'react';
import { Check } from 'lucide-react';

export default function PillarCard({ icon, title, points, index }) {
  return (
    <div 
      className="services__card scale-in"
      style={{ transitionDelay: `${300 + index * 150}ms` }}
    >
      <div className="services__card-accent"></div>
      
      <div className="services__card-icon-wrapper">
        {icon}
      </div>
      
      <h3 className="services__card-title">{title}</h3>
      
      <ul className="services__card-list">
        {points.map((point, idx) => (
          <li key={idx} className="services__card-item">
            <Check size={14} className="services__card-item-check" />
            <span className="services__card-item-text">{point}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
