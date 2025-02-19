import React, { useState, useEffect } from 'react';
import './Navbar.css';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <a href="/" className="nav-logo">
          Verse<span className="nav-logo-accent">Daily</span>
        </a>

        <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <a href="#features">Features</a>
          <a href="#testimonials">Stories</a>
          <a href="#about">About</a>
          <a href="#pricing">Pricing</a>
          <button className="nav-cta">Get Started</button>
        </div>

        <button 
          className={`nav-toggle ${isMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
