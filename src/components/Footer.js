// components/Footer.js - Fixed with logo image
import React from 'react';
import './Footer.css';
import logoImage from '../assets/zamzitlogo.jpg'; // Import your logo

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          {/* Logo image - FIXED */}
          <img 
            src={logoImage} 
            alt="ZamZit Cakes Logo" 
            className="footer-logo-image"
          />
          <p className="footer-tagline">Creating sweet memories, one bite at a time</p>
          
          <div className="social-links">
            <a 
              href="https://wa.me/2348035533388" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link whatsapp-link"
            >
              <span className="social-icon">💬</span>
              <span className="social-text">WhatsApp</span>
            </a>
            
            <a 
              href="https://www.instagram.com/zamzitcakes?igsh=bHVwbXZkNmEzcTky" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link instagram-link"
            >
              <span className="social-icon">📷</span>
              <span className="social-text">Instagram</span>
            </a>
          </div>
        </div>
        
        <div className="footer-links">
          <div className="link-group">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#gallery">Gallery</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><a href="#contact">Order Now</a></li>
            </ul>
          </div>
          
          <div className="link-group">
            <h4>Business Hours</h4>
            <ul>
              <li>Monday - Friday: 9am - 6pm</li>
              <li>Saturday: 10am - 4pm</li>
              <li>Sunday: Closed</li>
              <li>Emergency orders: Available</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {currentYear} ZamZit Cakes. All rights reserved. | MEMORY BITES</p>
        <p className="phone-number">📞 0803 553 3388 | 💬 WhatsApp Available</p>
      </div>
    </footer>
  );
};

export default Footer;