import React from 'react';
import './Testimonials.css';

function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Mitchell",
      role: "Teacher",
      quote: "These daily verses have become an essential part of my morning routine. They provide the clarity and focus I need to start each day.",
      image: "https://i.postimg.cc/L84pH7tF/womanh.jpg"
    },
    {
      name: "David Chen",
      role: "Software Engineer",
      quote: "In our fast-paced world, this newsletter helps me pause and reflect. It's amazing how a single verse can shift your entire perspective.",
      image: "https://i.postimg.cc/wThYzznB/manh.jpg"
    }
  ];

  return (
    <div className="testimonials-section">
      <h2 className="section-title">Community Stories</h2>
      <div className="testimonials-grid">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <img src={testimonial.image} alt={testimonial.name} className="avatar" />
            <blockquote>{testimonial.quote}</blockquote>
            <div className="author">
              <h3>{testimonial.name}</h3>
              <p>{testimonial.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonials;
