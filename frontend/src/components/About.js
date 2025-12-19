import React from 'react';
import '../styles/about.css';

const About = () => {
  return (
    <div className="about-page-wrapper">
      <section className="about-section">
        <div className="content-container">
          {/* Decorative Background Elements */}
          <div className="bg-shape circle-top-left"></div>
          <div className="bg-shape circle-bottom-right"></div>
          <div className="bg-shape blue-square-top"></div>
          <div className="bg-shape orange-square-right"></div>
          <div className="bg-shape dots-pattern"></div>

          {/* Image Layout Grid */}
          <div className="image-grid-container">
            <div className="side-img-wrapper left-img">
              <div className="img-frame">
                <img src="https://pro-consultant-landing-page-backend.onrender.com/uploads/aboutus2.png" alt="Agent" />
              </div>
              <div className="bracket bracket-orange-bottom-left"></div>
            </div>

            <div className="main-img-wrapper">
              <div className="img-frame-large">
                <img src="https://pro-consultant-landing-page-backend.onrender.com/uploads/aboutus1.jpg" alt="Agent" />
              </div>
              <div className="bracket bracket-blue-top-left"></div>
            </div>

            <div className="side-img-wrapper right-img">
              <div className="img-frame">
                <img src="https://pro-consultant-landing-page-backend.onrender.com/uploads/aboutus3.jpg" alt="Agent" />
              </div>
              <div className="bracket bracket-blue-top-right"></div>
            </div>
          </div>

          {/* Text Content */}
          <div className="text-content-area">
            <h1 className="about-header">About Us</h1>
            <div className="blue-divider"></div>
            <p className="about-text">
              Fifteen years of experience are behind our excellent customer service and a
              commitment to work hard, listen and follow through. We provide quality services to
              build relationships with clients and, more importantly, maintain these relationships
              by communicating effectively.
            </p>
            <button className="btn-learn-more">LEARN MORE</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
