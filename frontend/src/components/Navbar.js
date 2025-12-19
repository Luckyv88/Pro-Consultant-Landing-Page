import React from 'react';
import '../styles/navbar.css';

const Navbar = () => {
  // Smooth scroll function
  const handleScroll = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      // Offset of 80px to account for the fixed navbar height
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <a href="#home" onClick={(e) => handleScroll(e, 'home')} className="logo-link">
          MyCompany
        </a>
      </div>
      <ul>
        <li><a href="#home" className="nav-link" onClick={(e) => handleScroll(e, 'home')}>Home</a></li>
        <li><a href="#about" className="nav-link" onClick={(e) => handleScroll(e, 'about')}>About</a></li>
        <li><a href="#clients" className="nav-link" onClick={(e) => handleScroll(e, 'clients')}>Clients</a></li>
        {/* Contact is now Projects */}
        <li><a href="#projects" className="nav-link" onClick={(e) => handleScroll(e, 'projects')}>Projects</a></li>
        <li><a href="#newsletter" className="nav-link" onClick={(e) => handleScroll(e, 'newsletter')}>Newsletter</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;