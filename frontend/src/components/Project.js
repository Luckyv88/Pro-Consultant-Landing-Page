import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/project.css';

const Project = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        // Fetching from your backend route
        const res = await axios.get('https://pro-consultant-landing-page-backend.onrender.com/api/projects');
        setProjects(res.data);
      } catch (err) {
        console.error("Error fetching projects", err);
      }
    };
    fetchProjects();
  }, []);

  return (
    <div className="project-page-wrapper">
      <section className="project-section">
        {/* Background Decorative Elements */}
        <div className="bg-decor decor-circle"></div>
        <div className="bg-decor decor-dots"></div>

        <div className="project-header-container">
          <h2 className="project-main-title">Our Projects</h2>
          <p className="project-subtitle">
            We know what buyers are looking for and suggest projects that will bring 
            clients top dollar for the sale of their homes.
          </p>
        </div>

        <div className="projects-grid-container">
          {projects.map((proj) => (
            <div className="project-card" key={proj._id}>
              <div className="project-image-box">
                {/* Fixed path to reach your backend uploads folder */}
                <img 
                  src={`https://pro-consultant-landing-page-backend.onrender.com${proj.image}`} 
                  alt={proj.name} 
                />
              </div>
              <div className="project-info">
                {/* Dynamically display the Name from your DB */}
                <h4 className="project-category">{proj.name}</h4>
                
                {/* Dynamically display the Description from your DB */}
                <p className="project-desc-short">{proj.description}</p>
                
                <button className="read-more-btn">READ MORE</button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="orange-dot-bottom"></div>
      </section>
    </div>
  );
};

export default Project;
