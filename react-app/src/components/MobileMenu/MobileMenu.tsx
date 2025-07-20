import React, { useState, useEffect } from 'react';
import { Navigation } from '../Navigation/Navigation';
import { NavItem } from '../../types';
import './MobileMenu.css';

interface MobileMenuProps {
  navItems: NavItem[];
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ navItems }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Close menu when clicking outside
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      const menu = document.querySelector('.off-canvas-menu');
      const toggle = document.querySelector('.menu-toggle');
      
      if (menu && toggle && !menu.contains(target) && !toggle.contains(target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleNavItemClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Menu Toggle Button */}
      <div className="menu-toggle" onClick={toggleMenu}>
        <i className="fas fa-bars"></i>
      </div>

      {/* Off-canvas Menu */}
      <div className={`off-canvas-menu ${isOpen ? 'open' : ''}`}>
        <div className="close-btn" onClick={closeMenu}>
          <i className="fas fa-times"></i>
        </div>
        <Navigation 
          items={navItems} 
          variant="vertical"
          onItemClick={handleNavItemClick}
        />
      </div>

      {/* Overlay */}
      <div className={`overlay ${isOpen ? 'open' : ''}`} onClick={closeMenu}></div>

      {/* Fixed Contact Button */}
      <a href="#contact" className="fixed-contact-btn">
        <i className="fa-solid fa-address-book"></i>
      </a>
    </>
  );
};