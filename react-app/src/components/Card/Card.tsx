import React, { ReactNode } from 'react';
import './Card.css';

interface CardProps {
  children: ReactNode;
  className?: string;
  animationDelay?: number;
}

interface CardFrontProps {
  children: ReactNode;
  backgroundImage?: string;
  className?: string;
}

interface CardBackProps {
  children: ReactNode;
  className?: string;
}

export const Card: React.FC<CardProps> = ({ children, className = '', animationDelay = 0 }) => {
  return (
    <div 
      className={`card ${className}`}
      data-aos="fade-up"
      data-aos-delay={animationDelay}
    >
      <div className="card-inner">
        {children}
      </div>
    </div>
  );
};

export const CardFront: React.FC<CardFrontProps> = ({ children, backgroundImage, className = '' }) => {
  const style = backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : {};
  
  return (
    <div className={`card-front ${className}`} style={style}>
      <div className="hover-icon">
        <i className="fas fa-hand-pointer"></i>
      </div>
      {children}
    </div>
  );
};

export const CardBack: React.FC<CardBackProps> = ({ children, className = '' }) => {
  return (
    <div className={`card-back ${className}`}>
      {children}
    </div>
  );
};