// components/About.js - UPDATED with other confectionaries
import React from 'react';
import './About.css';
import cake1 from '../assets/gallery/featured/cake-2.jpg';
import cake2 from '../assets/gallery/featured/cake-1.jpg';
import cake3 from '../assets/gallery/featured/cake-3.jpg';

const About = () => {
  const cakes = [
    { 
      id: 1, 
      image: cake1, 
      label: 'Wedding Special', 
      desc: 'Elegant designs for your special day',
      aspectRatio: 'tall'
    },
    { 
      id: 2, 
      image: cake2, 
      label: 'Birthday Cake', 
      desc: 'Celebrate in sweet style',
      aspectRatio: 'tall'
    },
    { 
      id: 3, 
      image: cake3, 
      label: 'Custom Design', 
      desc: 'Personalized just for you',
      aspectRatio: 'wide'
    }
  ];

  const otherConfectionaries = [
    'Chin Chin', 'Samoosas', 'Puff Puff', 'Spring Rolls', 'Doughnuts'
  ];

  return (
    <section className="about" id="about">
      <div className="about-container">
        <div className="about-content">
          <h2 className="about-title">Crafting <span className="highlight">Sweet Memories</span> Since 2021</h2>
          <div className="about-text">
            <p>
              At ZamZit Cakes, we believe every celebration deserves a masterpiece. 
              Our journey began with a simple passion for transforming the finest 
              ingredients into edible art.
            </p>
            <p>
              Each creation is meticulously crafted by our team of excellent bakers, blending traditional techniques with innovative designs.
            </p>
            
            {/* Other Confectionaries Section */}
            <div className="other-confectionaries">
              <h3 className="confectionaries-title">We Also Specialize In:</h3>
              <div className="confectionaries-list">
                {otherConfectionaries.map((item, index) => (
                  <span key={index} className="confectionary-item">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          <div className="stats-grid">
            <div className="stat-item">
              <h3 className="stat-number">World Class</h3>
              <p className="stat-label">Cakes Crafted</p>
            </div>
            <div className="stat-item">
              <h3 className="stat-number">5</h3>
              <p className="stat-label">Years of Excellence</p>
            </div>
            <div className="stat-item">
              <h3 className="stat-number">Multiple</h3>
              <p className="stat-label">Awards Won</p>
            </div>
            <div className="stat-item">
              <h3 className="stat-number">100%</h3>
              <p className="stat-label">Customer Satisfaction</p>
            </div>
          </div>
        </div>
        
        <div className="about-image">
          <div className="cakes-grid">
            {cakes.map((cake) => (
              <div key={cake.id} className={`cake-card ${cake.aspectRatio}`}>
                <div className="image-wrapper">
                  <img 
                    src={cake.image} 
                    alt={cake.label}
                    className="cake-image"
                    loading="lazy"
                  />
                  <div className="cake-content">
                    <h3 className="cake-title">{cake.label}</h3>
                    <p className="cake-description">{cake.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;