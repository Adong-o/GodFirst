import React from 'react';
import './About.css'; // Import your CSS file for styling

function About() {
  return (
    <div className="about-section">
      <h1 className="section-title">About Our Newsletter</h1>
      <div className="about-content">
        <p className="description">
        Welcome to <strong>GodFirst</strong>, your daily dose of spiritual upliftment! Dive into the timeless wisdom of the Bible with our curated selection of daily verses delivered straight to your inbox. Each morning, awaken your soul to profound insights, comforting messages, and empowering truths that resonate through the ages.
        Experience the transformative power of scripture as our daily newsletters illuminate your path with inspiration, guidance, and hope. Whether you seek solace in times of uncertainty, encouragement for life's journey, or simply a moment of reflection, our handpicked verses are tailored to enrich your spiritual journey.</p>
        <div className="about-image-container">
          <img src="https://i.postimg.cc/PfSzszpW/4-bible-verses-to-fill-your-heart-with-peace.png" alt="About" />
        </div>
      </div>
    </div>
  );
}

export default About;
