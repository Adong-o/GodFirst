/*
import React from 'react';
import './Homepage.css'; 

function Homepage() {
  return (
    <div className="homepage-section">
      <div className="left-section">
        <h1 className="title">Enhanced Every Day: Elevating Your Daily Devotionals</h1>
        <h2 className="subtitle">Unveiling Deeper Insights and Inspiration with Every Edition</h2>
        <div className="subscribe-form">
          <input type="email" placeholder="Enter your email" />
          <button>Subscribe</button>
        </div>
        <div className="subscribe-text">* By clicking <strong>“Subscribe”</strong> button, you agree to our Terms and that you have read our <strong>Data Use Policy.</strong></div>
      </div>
      <br/>
      <div className="right-section">
        <img src="https://i.postimg.cc/9Qqs4rkv/cross-ezgif-com-webp-to-jpg-converter-removebg-preview.png
" alt="Newsletter" />
      </div>
    </div>
  );
}

export default Homepage;
*/
import React, { useState } from 'react';
import './Homepage.css'; // Import your CSS file for styling
import '@fortawesome/fontawesome-free/css/all.css';


function Homepage() {
  const [email, setEmail] = useState('');

  const handleSubscribe = async () => {
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
    <div className="homepage-section">
      <div className="left-section">
        <h1 className="title">Enhanced Every Day: Elevating Your Daily Devotionals</h1>
        <h2 className="subtitle">Unveiling Deeper Insights and Inspiration with Every Edition</h2>
        <div className="subscribe-form">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button onClick={handleSubscribe}>Subscribe</button>
        </div>
        <div className="subscribe-text">
          * By clicking <strong>“Subscribe”</strong> button, you agree to our Terms and that you have read our <strong>Data Use Policy.</strong>
        </div>
      </div>
      <br />
      <div className="right-section">
        <img src="https://i.postimg.cc/9Qqs4rkv/cross-ezgif-com-webp-to-jpg-converter-removebg-preview.png" alt="Newsletter" />
      </div>
    </div>
  );
}

export default Homepage;
