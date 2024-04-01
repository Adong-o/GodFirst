import React from 'react';
import './Footer.css'; 
import '@fortawesome/fontawesome-free/css/all.css';


function Footer() {
  return (
    <footer className="footer">
      <div className="footer-logo">
        <img src="https://i.postimg.cc/bdXYx60g/godfirst.jpg" alt="Logo" />
      </div>
      <div className="footer-social">
        <i className="fab fa-facebook"></i>
        <i className="fab fa-twitter"></i>
        <i className="fab fa-instagram"></i>
      </div>
      <div className="footer-menu">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Testimonials</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
      <div className="subscription-card">
        <h2>Subscribe to Our Newsletter</h2>
        <div className="subscribe-form">
          <input type="email" placeholder="Enter your email" />
          <button>Subscribe</button>
        </div>
        <p className="policy">By subscribing, you agree to our <a href="#">Privacy Policy</a></p>
      </div>
    </footer>
  );
}

export default Footer;
