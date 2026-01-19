// components/Gallery.js - UPDATED WITH ACTUAL IMAGES
import React, { useState } from 'react';
import './Gallery.css';

// Import your gallery images
// WEDDING CAKES
import wedding1 from '../assets/gallery/wedding/wedding-1.jpg';
import wedding2 from '../assets/gallery/wedding/wedding-2.jpg';
import wedding3 from '../assets/gallery/wedding/wedding-3.jpg';
import wedding4 from '../assets/gallery/wedding/wedding-4.jpg';

// BIRTHDAY CAKES
import birthday1 from '../assets/gallery/birthday/birthday-1.jpg';
import birthday2 from '../assets/gallery/birthday/birthday-2.jpg';
import birthday3 from '../assets/gallery/birthday/birthday-3.jpg';
import birthday4 from '../assets/gallery/birthday/birthday-4.jpg';
import birthday5 from '../assets/gallery/birthday/birthday-5.jpg';
import birthday6 from '../assets/gallery/birthday/birthday-6.jpg';
import birthday7 from '../assets/gallery/birthday/birthday-7.jpg';
import birthday8 from '../assets/gallery/birthday/birthday-8.jpg';
import birthday9 from '../assets/gallery/birthday/birthday-9.jpg';
import birthday10 from '../assets/gallery/birthday/birthday-10.jpg';
import birthday11 from '../assets/gallery/birthday/birthday-11.jpg';
import birthday12 from '../assets/gallery/birthday/birthday-12.jpg';
import birthday13 from '../assets/gallery/birthday/birthday-13.jpg';
import birthday14 from '../assets/gallery/birthday/birthday-14.jpg';
import birthday15 from '../assets/gallery/birthday/birthday-15.jpg';
import birthday16 from '../assets/gallery/birthday/birthday-16.jpg';
import birthday17 from '../assets/gallery/birthday/birthday-17.jpg';
import birthday18 from '../assets/gallery/birthday/birthday-18.jpg';
import birthday19 from '../assets/gallery/birthday/birthday-19.jpg';
import birthday20 from '../assets/gallery/birthday/birthday-20.jpg';

// CUSTOM CAKES
import custom1 from '../assets/gallery/custom/custom-1.jpg';
import custom2 from '../assets/gallery/custom/custom-2.jpg';
import custom3 from '../assets/gallery/custom/custom-3.jpg';
import custom4 from '../assets/gallery/custom/custom-4.jpg';
import custom5 from '../assets/gallery/custom/custom-5.jpg';
import custom6 from '../assets/gallery/custom/custom-6.jpg';
import custom7 from '../assets/gallery/custom/custom-7.jpg';
import custom8 from '../assets/gallery/custom/custom-8.jpg';
import custom9 from '../assets/gallery/custom/custom-9.jpg';
import custom10 from '../assets/gallery/custom/custom-10.jpg';
import custom11 from '../assets/gallery/custom/custom-11.jpg';
import custom12 from '../assets/gallery/custom/custom-12.jpg';
import custom13 from '../assets/gallery/custom/custom-13.jpg';

// MINI CAKES
import mini1 from '../assets/gallery/minicakes/mini-1.jpg';
import mini2 from '../assets/gallery/minicakes/mini-2.jpg';
import mini3 from '../assets/gallery/minicakes/mini-3.jpg';
import mini4 from '../assets/gallery/minicakes/mini-4.jpg';
import mini5 from '../assets/gallery/minicakes/mini-5.jpg';
import mini6 from '../assets/gallery/minicakes/mini-6.jpg';
import mini7 from '../assets/gallery/minicakes/mini-7.jpg';
import mini8 from '../assets/gallery/minicakes/mini-8.jpg';

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const cakeCategories = [
    'all', 'wedding', 'birthday', 'custom', 'seasonal', 'minicakes'
  ];

  // Your actual cake images data
  const cakeImages = [
    // Wedding Cakes
    {
      id: 1,
      category: 'wedding',
      title: 'Elegant Three-Tier',
      description: 'Classic white with gold leaf accents',
      image: wedding1
    },
    {
      id: 2,
      category: 'wedding',
      title: 'Modern Naked Cake',
      description: 'Rustic design with fresh flowers',
      image: wedding2
    },
    {
      id: 3,
      category: 'wedding',
      title: 'Royal Wedding Cake',
      description: 'Luxurious multi-tier masterpiece',
      image: wedding3
    },
    
    // Birthday Cakes
    {
      id: 4,
      category: 'birthday',
      title: 'Chocolate Fudge Delight',
      description: 'Rich chocolate with buttercream',
      image: birthday1
    },
    {
      id: 5,
      category: 'birthday',
      title: 'Rainbow Sprinkle Fun',
      description: 'Colorful celebration cake',
      image: birthday2
    },
    {
      id: 6,
      category: 'birthday',
      title: 'Number Cake Special',
      description: 'Personalized age celebration',
      image: birthday3
    },
        {
      id: 7,
      category: 'birthday',
      title: 'Number Cake Special',
      description: 'Personalized age celebration',
      image: birthday7
    },
        {
      id: 8,
      category: 'birthday',
      title: 'Number Cake Special',
      description: 'Personalized age celebration',
      image: birthday8
    },
        {
      id: 9,
      category: 'birthday',
      title: 'Number Cake Special',
      description: 'Personalized age celebration',
      image: birthday9
    },
        {
      id: 10,
      category: 'birthday',
      title: 'Number Cake Special',
      description: 'Personalized age celebration',
      image: birthday10
    },
        {
      id: 11,
      category: 'birthday',
      title: 'Number Cake Special',
      description: 'Personalized age celebration',
      image: birthday11
    },
        {
      id: 12,
      category: 'birthday',
      title: 'Number Cake Special',
      description: 'Personalized age celebration',
      image: birthday12
    },
        {
      id: 13,
      category: 'birthday',
      title: 'Number Cake Special',
      description: 'Personalized age celebration',
      image: birthday3
    },
        {
      id: 14,
      category: 'birthday',
      title: 'Number Cake Special',
      description: 'Personalized age celebration',
      image: birthday14
    },
        {
      id: 15,
      category: 'birthday',
      title: 'Number Cake Special',
      description: 'Personalized age celebration',
      image: birthday15
    },
      {
      id: 16,
      category: 'birthday',
      title: 'Number Cake Special',
      description: 'Personalized age celebration',
      image: birthday16
    },
        {
      id: 17,
      category: 'birthday',
      title: 'Number Cake Special',
      description: 'Personalized age celebration',
      image: birthday17
    },
        {
      id: 18,
      category: 'birthday',
      title: 'Number Cake Special',
      description: 'Personalized age celebration',
      image: birthday18
    },
        {
      id: 19,
      category: 'birthday',
      title: 'Number Cake Special',
      description: 'Personalized age celebration',
      image: birthday19
    },
        {
      id: 20,
      category: 'birthday',
      title: 'Number Cake Special',
      description: 'Personalized age celebration',
      image: birthday20
    },
    
    // Custom Cakes
    {
      id: 21,
      category: 'custom',
      title: 'Corporate Logo Design',
      description: 'Branded cake for company events',
      image: custom1
    },
    {
      id: 22,
      category: 'custom',
      title: 'Character Themed Cake',
      description: 'Custom character creation',
      image: custom2
    },
    {
      id: 23,
      category: 'custom',
      title: 'Sports Theme Cake',
      description: 'Team spirit in edible form',
      image: custom3
    },
        {
      id: 24,
      category: 'custom',
      title: 'Sports Theme Cake',
      description: 'Team spirit in edible form',
      image: custom4
    },
        {
      id: 25,
      category: 'custom',
      title: 'Sports Theme Cake',
      description: 'Team spirit in edible form',
      image: custom5
    },
        {
      id: 26,
      category: 'custom',
      title: 'Sports Theme Cake',
      description: 'Team spirit in edible form',
      image: custom6
    },
        {
      id: 27,
      category: 'custom',
      title: 'Sports Theme Cake',
      description: 'Team spirit in edible form',
      image: custom7
    },
        {
      id: 28,
      category: 'custom',
      title: 'Sports Theme Cake',
      description: 'Team spirit in edible form',
      image: custom8
    },
        {
      id: 29,
      category: 'custom',
      title: 'Sports Theme Cake',
      description: 'Team spirit in edible form',
      image: custom9
    },
        {
      id: 30,
      category: 'custom',
      title: 'Sports Theme Cake',
      description: 'Team spirit in edible form',
      image: custom10
    },
        {
      id: 31,
      category: 'custom',
      title: 'Sports Theme Cake',
      description: 'Team spirit in edible form',
      image: custom11
    },
        {
      id: 32,
      category: 'custom',
      title: 'Sports Theme Cake',
      description: 'Team spirit in edible form',
      image: custom12
    },
        {
      id: 33,
      category: 'custom',
      title: 'Sports Theme Cake',
      description: 'Team spirit in edible form',
      image: custom13
    },
    
    
    // Mini Cakes
    {
      id: 34,
      category: 'minicakes',
      title: 'Miniature Cupcakes',
      description: 'Assorted flavors pack',
      image: mini1
    },
    {
      id: 35,
      category: 'minicakes',
      title: 'Petite Celebration Cakes',
      description: 'Small but perfectly formed',
      image: mini2
    },
    {
      id: 36,
      category: 'minicakes',
      title: 'Mini Wedding Cakes',
      description: 'Elegance in miniature',
      image: mini3
    },
        {
      id: 37,
      category: 'minicakes',
      title: 'Mini Wedding Cakes',
      description: 'Elegance in miniature',
      image: mini4
    },
        {
      id: 38,
      category: 'minicakes',
      title: 'Mini Wedding Cakes',
      description: 'Elegance in miniature',
      image: mini4
    },
        {
      id: 39,
      category: 'minicakes',
      title: 'Mini Wedding Cakes',
      description: 'Elegance in miniature',
      image: mini5
    },
        {
      id: 40,
      category: 'minicakes',
      title: 'Mini Wedding Cakes',
      description: 'Elegance in miniature',
      image: mini6
    },
        {
      id: 41,
      category: 'minicakes',
      title: 'Mini Wedding Cakes',
      description: 'Elegance in miniature',
      image: mini7
    },
        {
      id: 42,
      category: 'minicakes',
      title: 'Mini Wedding Cakes',
      description: 'Elegance in miniature',
      image: mini8
    },

    {
      id: 43,
      category: 'wedding',
      title: 'Royal Wedding Cake',
      description: 'Luxurious multi-tier masterpiece',
      image: wedding3
    },

  ];

  const filteredCakes = activeFilter === 'all' 
    ? cakeImages 
    : cakeImages.filter(cake => cake.category === activeFilter);

  return (
    <section className="gallery" id="gallery">
      <div className="section-header">
        <h2 className="section-title">Our <span className="highlight">Creations</span></h2>
        <p className="section-subtitle">Each cake is a masterpiece, crafted with love and attention to detail</p>
      </div>

      <div className="filter-buttons">
        {cakeCategories.map(category => (
          <button
            key={category}
            className={`filter-btn ${activeFilter === category ? 'active' : ''}`}
            onClick={() => setActiveFilter(category)}
          >
            {category.charAt(0).toUpperCase() + category.slice(1).replace('-', ' ')}
          </button>
        ))}
      </div>

      <div className="gallery-grid">
        {filteredCakes.map((cake, index) => (
          <div 
            key={cake.id} 
            className="gallery-item"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="image-container">
              <img 
                src={cake.image} 
                alt={`${cake.title} - ${cake.description}`}
                className="gallery-image"
                loading="lazy"
              />
              <div className="image-overlay">
                <h3>{cake.title}</h3>
                <p>{cake.description}</p>
                <span className="category-badge">{cake.category}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;