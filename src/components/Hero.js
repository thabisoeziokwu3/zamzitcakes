// components/Hero.js - UPDATED with working scroll buttons
import React, { useEffect, useState } from 'react';
import './Hero.css';
import logoImage from '../assets/zamzitlogo.jpg';
import heroCakeImage from '../assets/hero-cake.jpg';

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Function to scroll to any section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Calculate position with offset for any fixed headers
      const offset = 80; // Adjust if you have a fixed header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Handle "Order Now" button click
  const handleOrderClick = () => {
    scrollToSection('contact'); // Scrolls to contact section (your order form)
  };

  // Handle "View Gallery" button click
  const handleGalleryClick = () => {
    scrollToSection('gallery'); // Scrolls to gallery section
  };

  return (
    <section 
      className="hero"
      style={{ 
        backgroundPositionY: scrollY * 0.5,
        backgroundImage: `url(${heroCakeImage})`
      }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <div className="logo-wrapper">
          <div className="logo-container">
            <img 
              src={logoImage} 
              alt="ZamZit Cakes Logo" 
              className="company-logo"
            />
          </div>
          
          <div className="tagline-box">
            <p className="tagline">MEMORY BITES</p>
            <p className="phone-number">📞 0803 553 3388</p>
          </div>
        </div>
        
        <div className="hero-text">
          <h1 className="hero-title">
            Where every slice tells a story, 
            <span className="highlight"> and every bite creates a memory</span>
          </h1>
          
          <div className="cta-buttons">
            {/* Order Now button - scrolls to contact/order section */}
            <button 
              className="btn-primary pulse-animation"
              onClick={handleOrderClick}
              aria-label="Order a cake - goes to order form"
            >
              <span className="btn-text">Order Now</span>
              <span className="btn-icon">🎂</span>
            </button>
            
            {/* View Gallery button - scrolls to gallery section */}
            <button 
              className="btn-secondary"
              onClick={handleGalleryClick}
              aria-label="View cake gallery"
            >
              <span className="btn-text">View Gallery</span>
              <span className="btn-icon">👁️</span>
            </button>
          </div>
        </div>
        
        {/* <div className="scroll-indicator">
          <div className="mouse">
            <div className="wheel"></div>
          </div>
        </div> */}
      </div>
      
      <div className="gradient-overlay top"></div>
      <div className="gradient-overlay bottom"></div>
    </section>
  );
};

export default Hero;