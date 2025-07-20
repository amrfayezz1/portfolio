import React from 'react';
import { NavItem } from '../../types';
import './Navigation.css';

interface NavigationProps {
  items: NavItem[];
  className?: string;
  variant?: 'horizontal' | 'vertical';
  onItemClick?: (item: NavItem) => void;
}

export const Navigation: React.FC<NavigationProps> = ({ 
  items, 
  className = '', 
  variant = 'horizontal',
  onItemClick 
}) => {
  const handleClick = (item: NavItem) => {
    if (onItemClick) {
      onItemClick(item);
    }
  };

  return (
    <ul className={`navigation navigation--${variant} ${className}`}>
      {items.map((item, index) => (
        <li key={index}>
          <a 
            href={item.href}
            target={item.external ? '_blank' : undefined}
            rel={item.external ? 'noopener noreferrer' : undefined}
            onClick={() => handleClick(item)}
          >
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  );
};