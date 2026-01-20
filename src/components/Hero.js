// components/Hero.js - UPDATED with fixed background and better alignment
import React from 'react';
import './Hero.css';
import logoImage from '../assets/zamzitlogo.jpg';
import heroCakeImage from '../assets/hero-cake.jpg';

const Hero = () => {
  // Function to scroll to any section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleOrderClick = () => {
    scrollToSection('contact');
  };

  const handleGalleryClick = () => {
    scrollToSection('gallery');
  };

  return (
    <section className="hero">
      {/* Background image layer - now fixed */}
      <div 
        className="hero-bg" 
        style={{ backgroundImage: `url(${heroCakeImage})` }}
      ></div>
      
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
          
          <div className="tagline-container">
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
            <button 
              className="btn-primary pulse-animation"
              onClick={handleOrderClick}
              aria-label="Order a cake - goes to order form"
            >
              <span className="btn-text">Order Now</span>
              <span className="btn-icon">🎂</span>
            </button>
            
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
      </div>
      
      <div className="gradient-overlay top"></div>
      <div className="gradient-overlay bottom"></div>
    </section>
  );
};

export default Hero;