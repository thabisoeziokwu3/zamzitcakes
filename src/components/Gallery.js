// components/Gallery.js - OPTIMIZED WITH SHOW ALL FEATURE
import React, { useState, useEffect } from 'react';
import './Gallery.css';

// Wedding Cakes
import wedding1 from '../assets/gallery/wedding/wedding-1.jpg';
import wedding2 from '../assets/gallery/wedding/wedding-2.jpg';
import wedding3 from '../assets/gallery/wedding/wedding-3.jpg';
import wedding4 from '../assets/gallery/wedding/wedding-4.jpg';

// Birthday Cakes - Only importing first 8 for initial display
import birthday4 from '../assets/gallery/birthday/birthday-1.jpg';
import birthday5 from '../assets/gallery/birthday/birthday-2.jpg';
import birthday6 from '../assets/gallery/birthday/birthday-3.jpg';
import birthday7 from '../assets/gallery/birthday/birthday-4.jpg';
import birthday8 from '../assets/gallery/birthday/birthday-5.jpg';
import birthday9 from '../assets/gallery/birthday/birthday-6.jpg';
import birthday10 from '../assets/gallery/birthday/birthday-7.jpg';
import birthday11 from '../assets/gallery/birthday/birthday-8.jpg';
import birthday12 from '../assets/gallery/birthday/birthday-9.jpg';
import birthday13 from '../assets/gallery/birthday/birthday-10.jpg';
import birthday14 from '../assets/gallery/birthday/birthday-11.jpg';
import birthday15 from '../assets/gallery/birthday/birthday-12.jpg';
import birthday16 from '../assets/gallery/birthday/birthday-13.jpg';
import birthday17 from '../assets/gallery/birthday/birthday-14.jpg';
import birthday18 from '../assets/gallery/birthday/birthday-15.jpg';
import birthday19 from '../assets/gallery/birthday/birthday-16.jpg';
import birthday20 from '../assets/gallery/birthday/birthday-17.jpg';

// Custom Cakes - Only importing first 6 for initial display
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

// Mini Cakes - Only importing first 6 for initial display
import mini1 from '../assets/gallery/minicakes/mini-1.jpg';
import mini2 from '../assets/gallery/minicakes/mini-2.jpg';
import mini3 from '../assets/gallery/minicakes/mini-3.jpg';
import mini4 from '../assets/gallery/minicakes/mini-4.jpg';
import mini5 from '../assets/gallery/minicakes/mini-5.jpg';
import mini6 from '../assets/gallery/minicakes/mini-6.jpg';
import mini7 from '../assets/gallery/minicakes/mini-7.jpg';
import mini8 from '../assets/gallery/minicakes/mini-8.jpg';

// Cake images data organized by category
const cakeImages = [
  // Wedding Cakes
  {
    id: 1,
    category: 'wedding',
    image: wedding1
  },
  {
    id: 2,
    category: 'wedding',
    image: wedding2
  },
  {
    id: 3,
    category: 'wedding',
    image: wedding3
  },
  {
    id: 43,
    category: 'wedding',
    image: wedding4
  },
  
  // Birthday Cakes
  {
    id: 4,
    category: 'birthday',
    image: birthday4
  },
  {
    id: 5,
    category: 'birthday',
    image: birthday5
  },
  {
    id: 6,
    category: 'birthday',
    image: birthday6
  },
  {
    id: 7,
    category: 'birthday',
    image: birthday7
  },
  {
    id: 8,
    category: 'birthday',
    image: birthday8
  },
  {
    id: 9,
    category: 'birthday',
    image: birthday9
  },
  {
    id: 10,
    category: 'birthday',
    image: birthday10
  },
  {
    id: 11,
    category: 'birthday',
    image: birthday11
  },
  {
    id: 12,
    category: 'birthday',
    image: birthday12
  },
  {
    id: 13,
    category: 'birthday',
    image: birthday13
  },
  {
    id: 14,
    category: 'birthday',
    image: birthday14
  },
  {
    id: 15,
    category: 'birthday',
    image: birthday15
  },
  {
    id: 16,
    category: 'birthday',
    image: birthday16
  },
  {
    id: 17,
    category: 'birthday',
    image: birthday17
  },
  {
    id: 18,
    category: 'birthday',
    image: birthday18
  },
  {
    id: 19,
    category: 'birthday',
    image: birthday19
  },
  {
    id: 20,
    category: 'birthday',
    image: birthday20
  },
  
  // Custom Cakes
  {
    id: 21,
    category: 'custom',
    image: custom1
  },
  {
    id: 33,
    category: 'custom',
    image: custom13
  },
  {
    id: 22,
    category: 'custom',
    image: custom2
  },
  {
    id: 23,
    category: 'custom',
    image: custom3
  },
  {
    id: 24,
    category: 'custom',
    image: custom4
  },
  {
    id: 25,
    category: 'custom',
    image: custom5
  },
  {
    id: 26,
    category: 'custom',
    image: custom6
  },
  {
    id: 27,
    category: 'custom',
    image: custom7
  },
  {
    id: 28,
    category: 'custom',
    image: custom8
  },
  {
    id: 29,
    category: 'custom',
    image: custom9
  },
  {
    id: 30,
    category: 'custom',
    image: custom10
  },
  {
    id: 31,
    category: 'custom',
    image: custom11
  },
  {
    id: 32,
    category: 'custom',
    image: custom12
  },

  
  // Mini Cakes
  {
    id: 34,
    category: 'minicakes',
    image: mini1
  },
  {
    id: 35,
    category: 'minicakes',
    image: mini2
  },
  {
    id: 36,
    category: 'minicakes',
    image: mini3
  },
  {
    id: 37,
    category: 'minicakes',
    image: mini4
  },
  {
    id: 38,
    category: 'minicakes',
    image: mini5
  },
  {
    id: 39,
    category: 'minicakes',
    image: mini6
  },
  {
    id: 40,
    category: 'minicakes',
    image: mini7
  },
  {
    id: 41,
    category: 'minicakes',
    image: mini8
  }
];

// Category configuration
const cakeCategories = [
  { id: 'all', name: 'All Creations' },
  { id: 'wedding', name: 'Wedding Cakes' },
  { id: 'birthday', name: 'Birthday Cakes' },
  { id: 'custom', name: 'Custom' },
  { id: 'minicakes', name: 'Mini Cakes' }
];

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [showAll, setShowAll] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  // Check if mobile on mount and resize
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);
  
  // Filter cakes based on active filter
  const filteredCakes = activeFilter === 'all' 
    ? cakeImages 
    : cakeImages.filter(cake => cake.category === activeFilter);
  
  // Determine how many cakes to show (limited on mobile unless "Show All" is clicked)
  const displayedCakes = () => {
    if (!isMobile || showAll) {
      return filteredCakes;
    }
    
    // Show limited number on mobile
    if (activeFilter === 'all') {
      return filteredCakes.slice(0, 8); // Show first 8 for "All"
    } else if (activeFilter === 'birthday') {
      return filteredCakes.slice(0, 6); // Show first 6 for birthday
    } else if (activeFilter === 'custom') {
      return filteredCakes.slice(0, 6); // Show first 6 for custom
    } else if (activeFilter === 'minicakes') {
      return filteredCakes.slice(0, 6); // Show first 6 for minicakes
    }
    return filteredCakes; // Show all for categories with fewer items
  };
  
  // Check if there are more cakes to show
  const hasMoreCakes = () => {
    if (!isMobile) return false;
    return filteredCakes.length > displayedCakes().length;
  };
  
  // Toggle show all on mobile
  const toggleShowAll = () => {
    setShowAll(!showAll);
  };
  
  return (
    <section className="gallery" id="gallery">
      <div className="section-header">
        <h2 className="section-title">Our <span className="highlight">Creations</span></h2>
        <p className="section-subtitle">Each cake is a masterpiece, crafted with love and attention to detail</p>
      </div>

      <div className="filter-buttons">
        {cakeCategories.map(category => (
          <button
            key={category.id}
            className={`filter-btn ${activeFilter === category.id ? 'active' : ''}`}
            onClick={() => {
              setActiveFilter(category.id);
              setShowAll(false); // Reset show all when changing filter
            }}
          >
            {category.name}
          </button>
        ))}
      </div>

      <div className="gallery-grid">
        {displayedCakes().map((cake, index) => (
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
      
      {/* Show All / Show Less Button for Mobile */}
      {hasMoreCakes() && (
        <div className="show-all-container">
          <button 
            className="show-all-btn"
            onClick={toggleShowAll}
          >
            {showAll ? 'Show Less' : `Show All ${filteredCakes.length} Items`}
            <span className="arrow">{showAll ? '↑' : '↓'}</span>
          </button>
        </div>
      )}
    </section>
  );
};

export default Gallery;