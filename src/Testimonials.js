import React from 'react';
import './Testimonials.css'; 

function Testimonials() {
  return (
    <div className="testimonials-section">
      <h1 className="section-title">Testimonials</h1>
      <div className="testimonials-container">
        <div className="testimonials-card">
          <img src="https://i.postimg.cc/SxGkKs6p/20231225-172412.jpg" alt="Avatar" className="avatar" />
          <div className="details">
            <h2>Jakes Adongo</h2>
            <p>Developer</p>
            <hr />
            <p>"As the founder of <strong>GodFirst</strong>, I'm thrilled to witness the profound impact our daily Bible verses have on our subscribers. Each carefully curated verse serves as a beacon of inspiration, offering solace and guidance in our fast-paced world. Join us on this transformative journey today."</p>
          </div>
        </div>
        <div className="testimonials-card">
          <img src="https://i.postimg.cc/L84pH7tF/womanh.jpg" alt="Avatar" className="avatar" />
          <div className="details">
            <h2>Jane Smith</h2>
            <p>Subscriber</p>
            <hr />
            <p>"As someone who leads a busy life, I appreciate the simplicity and depth of <strong>GodFirst</strong>. It's like a little moment of peace amid the chaos. The verses are always relevant and uplifting, and I find myself coming back to them throughout the day for guidance and encouragement."</p>
          </div>
        </div>
        <div className="testimonials-card">
          <img src="https://i.postimg.cc/wThYzznB/manh.jpg" alt="Avatar" className="avatar" />
          <div className="details">
            <h2>Harrison David</h2>
            <p>Subscriber</p>
            <hr />
            <p>"I'm not usually one to subscribe to newsletters, but I decided to give <strong>GodFirst</strong> a try, and I'm so glad I did. It's become a cherished part of my morning routine, providing me with a moment of reflection and connection to something greater than myself. Highly recommended!"</p>
          </div>
        </div>
        
        
        {/* Add more testimonials cards as needed */}
      </div>
    </div>
  );
}

export default Testimonials;
