// components/Contact.js - Updated for WhatsApp
import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    occasion: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Format WhatsApp message
    const whatsappMessage = `*New Cake Order Inquiry from ZamZitCakes Website*%0A%0A` +
      `*Name:* ${formData.name}%0A` +
      `*Phone:* ${formData.phone}%0A` +
      `*Occasion:* ${formData.occasion}%0A` +
      `*Message:* ${formData.message}%0A%0A` +
      `_Sent via zamzitcakes.com_`;
    
    // Open WhatsApp with pre-filled message
    const whatsappUrl = `https://wa.me/2348035533388?text=${whatsappMessage}`;
    window.open(whatsappUrl, '_blank');
    
    // Reset form
    setFormData({
      name: '',
      phone: '',
      occasion: '',
      message: ''
    });
  };

  return (
    <section className="contact" id="contact">
      <div className="section-header">
        <h2 className="section-title">Order Your <span className="highlight">Dream Cake</span></h2>
        <p className="section-subtitle">Let's create something extraordinary together</p>
      </div>

      <div className="contact-container">
        <div className="contact-info">
          <div className="info-card">
            <div className="info-icon">📞</div>
            <h3>Call Us</h3>
            <p className="highlight-number">0803 553 3388</p>
            <p>Mon-Sat: 9am-6pm</p>
          </div>
          
          <div className="info-card">
            <div className="info-icon whatsapp-icon">💬</div>
            <h3>WhatsApp</h3>
            <p className="highlight-number">0803 553 3388</p>
            <p>Instant response</p>
            <a 
              href="https://wa.me/2348035533388" 
              target="_blank" 
              rel="noopener noreferrer"
              className="whatsapp-link"
            >
              Send Message
            </a>
          </div>
          
          <div className="info-card">
            <div className="info-icon instagram-icon">📷</div>
            <h3>Instagram</h3>
            <p>@zamzitcakes</p>
            <p>See our latest creations</p>
            <a 
              href="https://www.instagram.com/zamzitcakes?igsh=bHVwbXZkNmEzcTky" 
              target="_blank" 
              rel="noopener noreferrer"
              className="instagram-link"
            >
              Visit Instagram
            </a>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="Your Full Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="form-input"
            />
          </div>
          
          <div className="form-group">
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
              className="form-input"
            />
          </div>
          
          <div className="form-group">
            <div className="select-wrapper">
              <select
                name="occasion"
                value={formData.occasion}
                onChange={handleChange}
                required
                className="form-select"
              >
                <option value="">Select Occasion</option>
                <option value="wedding">Wedding</option>
                <option value="birthday">Birthday</option>
                <option value="anniversary">Anniversary</option>
                <option value="corporate">Corporate Event</option>
                <option value="other">Other</option>
              </select>
              <div className="select-arrow">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M6 9L12 15L18 9" stroke="#EFB5C8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </div>
          
          <div className="form-group">
            <textarea
              name="message"
              placeholder="Tell us about your dream cake... Include details like: flavor preferences, size, design ideas, date needed, and any special requirements"
              value={formData.message}
              onChange={handleChange}
              rows="6"
              required
              className="form-textarea"
            ></textarea>
          </div>
          
          <button type="submit" className="btn-submit whatsapp-submit">
            <span className="btn-icon">💬</span>
            Send via WhatsApp
          </button>
          
          <p className="form-note">
            <small>
              By submitting, you'll be redirected to WhatsApp to send your inquiry directly to our team.
            </small>
          </p>
        </form>
      </div>
    </section>
  );
};

export default Contact;