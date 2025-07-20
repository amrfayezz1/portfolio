import React, { useState, useEffect, useRef } from 'react';
import './ScrollNavbar.css';

interface ScrollNavbarProps {
  children: React.ReactNode;
}

export const ScrollNavbar: React.FC<ScrollNavbarProps> = ({ children }) => {
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const navbarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const navbar = navbarRef.current;
      
      if (!navbar) return;
      
      const navbarHeight = navbar.offsetHeight;
      const offsetThreshold = navbarHeight;

      // Check if the original navbar is not visible (user has scrolled past it)
      if (scrollTop > offsetThreshold) {
        if (scrollTop > lastScrollTop) {
          // User is scrolling down
          setIsHidden(true);
        } else {
          // User is scrolling up
          setIsHidden(false);
        }
      } else {
        // If user is near the top, show the navbar
        setIsHidden(false);
      }

      setLastScrollTop(scrollTop);
    };

    const handleResize = () => {
      const navbar = navbarRef.current;
      const main = document.querySelector('main');
      
      if (navbar && main) {
        const navbarHeight = navbar.offsetHeight;
        main.style.paddingTop = `${navbarHeight}px`;
      }
    };

    // Set initial padding
    handleResize();

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [lastScrollTop]);

  return (
    <div 
      ref={navbarRef}
      className={`scroll-navbar ${isHidden ? 'hidden' : ''}`}
    >
      {children}
    </div>
  );
};