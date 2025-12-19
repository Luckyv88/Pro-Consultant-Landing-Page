import React from 'react';
import '../styles/footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* Left: Copyright */}
        <div className="footer-section section-left">
          <p className="copyright-text">All Rights Reserved 2023</p>
        </div>

        {/* Center: Brand/Logo */}
        <div className="footer-section section-center">
          <div className="logo-wrapper">
             <i className="fas fa-home home-icon"></i>
             <span className="brand-name">Real</span>
             <span className="brand-sub">rust</span>
          </div>
        </div>

        {/* Right: Social Icons */}
        <div className="footer-section section-right">
          <div className="social-icon"><i className="fab fa-twitter"></i></div>
          <div className="social-icon"><i className="fab fa-instagram"></i></div>
          <div className="social-icon"><i className="fab fa-facebook-f"></i></div>
          <div className="social-icon"><i className="fab fa-linkedin-in"></i></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;