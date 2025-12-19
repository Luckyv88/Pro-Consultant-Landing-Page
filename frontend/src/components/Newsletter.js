import React, { useState } from 'react';
import axios from 'axios';
import '../styles/newsletter.css';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const subscribe = (e) => {
    e.preventDefault();
    if (!email) return alert("Please enter an email");
    
    axios.post('https://pro-consultant-landing-page-backend.onrender.com/api/subscribers', { email })
      .then(() => {
        alert('Subscribed successfully!');
        setEmail('');
      })
      .catch(err => console.error("Subscription error", err));
  };

  return (
    <section className="newsletter-section">
      {/* Background Image Overlay */}
      <div className="newsletter-bg-overlay">
        <img src="https://pro-consultant-landing-page-backend.onrender.com/uploads/fotter.jpg" alt="Newsletter Background" />
      </div>

      <div className="newsletter-container">
        <div className="newsletter-content">
          <h3 className="newsletter-title">Subscribe to our Newsletter</h3>
          <div className="newsletter-underline"></div>
          
          <form className="newsletter-form" onSubmit={subscribe}>
            <div className="input-group">
              <input
                type="email"
                className="newsletter-input"
                placeholder="Enter Email Address"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="newsletter-submit-btn">
                SUBSCRIBE
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
