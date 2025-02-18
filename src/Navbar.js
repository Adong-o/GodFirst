import React, { useState, useEffect } from 'react';
import './Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''} ${isOpen ? 'nav-open' : ''}`}>
      <div className="container nav-container">
        <a href="/" className="nav-logo">
          Daily Light
          <span className="logo-dot">.</span>
        </a>

        <button 
          className="menu-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          <span className="hamburger"></span>
        </button>

        <div className="nav-content">
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#testimonials">Stories</a></li>
            <li>
              <a href="#subscribe" className="nav-cta">
                Get Started
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

