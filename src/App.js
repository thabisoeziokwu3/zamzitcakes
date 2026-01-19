// App.js
import React from 'react';
import './App.css';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Hero />
      <About />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;