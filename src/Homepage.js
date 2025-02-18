import React, { useState, useEffect } from 'react';
import './Homepage.css';
import '@fortawesome/fontawesome-free/css/all.css';

function Homepage() {
  const [email, setEmail] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        // Subscription successful
        alert('Subscription successful');
      } else {
        // Subscription failed
        alert('Subscription failed');
      }
    } catch (error) {
      console.error('Error subscribing:', error);
      alert('An error occurred while subscribing');
    }
  };

  return (
    <section className={`homepage-section ${isVisible ? 'visible' : ''}`}>
      <div className="container">
        <div className="content-grid">
          <div className="hero-content">
            <h1 className="hero-title">
              Daily Wisdom for
              <span className="highlight"> Modern Life</span>
            </h1>
            <p className="hero-subtitle">
              Join thousands finding clarity and purpose through daily scripture readings
            </p>
            
            <form className="subscribe-form" onSubmit={handleSubmit}>
              <div className="input-group">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  aria-label="Email address"
                  required
                />
                <button type="submit" className="btn-primary">
                  Start Free
                </button>
              </div>
              <p className="form-note">
                ✨ Join 10,000+ subscribers receiving daily inspiration
              </p>
            </form>
          </div>

          <div className="features-grid">
            <div className="feature-card">
              <span className="feature-icon">📱</span>
              <h3>Daily Delivery</h3>
              <p>Receive curated verses every morning</p>
            </div>
            <div className="feature-card">
              <span className="feature-icon">💭</span>
              <h3>Deep Insights</h3>
              <p>Thoughtful commentary and context</p>
            </div>
            <div className="feature-card">
              <span className="feature-icon">🌟</span>
              <h3>Personal Growth</h3>
              <p>Transform your daily routine</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Homepage;
