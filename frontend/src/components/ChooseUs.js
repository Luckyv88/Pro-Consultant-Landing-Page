import React from 'react';
import '../styles/chooseUs.css';
import { motion } from 'framer-motion';
import { FaHome, FaPaintBrush, FaDollarSign } from 'react-icons/fa';

const ChooseUs = () => {
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const imageVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: (i) => ({
      scale: 1,
      opacity: 1,
      transition: { delay: i * 0.2, duration: 0.8, type: "spring", stiffness: 100 }
    })
  };

  return (
    <section className="chooseus-section">
      {/* Background Decorative Circles */}
      <div className="bg-decorator circle-blue"></div>
      <div className="bg-decorator circle-orange"></div>

      <div className="chooseus-container">
        <div className="chooseus-content-grid">
          {/* Left Side Text */}
          <motion.div 
            className="chooseus-text-content"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="main-title">Not Your Average Realtor</h2>
            <p className="main-desc">
              Real trust has an eye for seeing a property’s potential, 
              coordinating design, and effective marketing to get 
              homeowners top dollar on their sales.
            </p>
          </motion.div>

          {/* Right Side Circular Images */}
          <div className="chooseus-image-wrapper">
            <svg className="orbit-svg" viewBox="0 0 500 500">
              <circle cx="250" cy="250" r="240" fill="none" stroke="#f0f0f0" strokeWidth="1" strokeDasharray="5,5" />
            </svg>
            
            <motion.div 
              className="img-container large" 
              custom={1} initial="hidden" whileInView="visible" variants={imageVariants}
            >
             <img
          src="https://pro-consultant-landing-page-backend.onrender.com/uploads/chooseus1.jpg"
          alt="Consultation"
          className="hero-bg"
        />
            </motion.div>
            
            <motion.div 
              className="img-container medium top-right" 
              custom={2} initial="hidden" whileInView="visible" variants={imageVariants}
            >
             <img
          src="https://pro-consultant-landing-page-backend.onrender.com/uploads/chooseus2.jpg"
          alt="Consultation"
          className="hero-bg"
        />
            </motion.div>

            <motion.div 
              className="img-container medium bottom-right" 
              custom={3} initial="hidden" whileInView="visible" variants={imageVariants}
            >
             <img
          src="https://pro-consultant-landing-page-backend.onrender.com/uploads/chooseus3.jpg"
          alt="Consultation"
          className="hero-bg"
        />
            </motion.div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="chooseus-bottom">
          <motion.h3 
            initial={{ opacity: 0 }} 
            whileInView={{ opacity: 1 }} 
            className="section-subtitle"
          >
            Why Choose Us?
          </motion.h3>
          
          <div className="chooseus-cards">
            {[
              { icon: <FaHome />, title: "Potential ROI", desc: "Whether you are looking to buy a fixer-upper or renovate your current home for sale, we will walk you through potential returns for projects." },
              { icon: <FaPaintBrush />, title: "Design", desc: "Our in-house interior design meets the partner guide through your design options and coordinating contractors to complete the home upgrades." },
              { icon: <FaDollarSign />, title: "Marketing", desc: "Staging consultation, professional photos, and a sophisticated digital marketing plan accompany every listing to reach today's buyers." }
            ].map((card, index) => (
              <motion.div 
                className="chooseus-card" 
                key={index}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10 }}
              >
                <div className="icon-box">{card.icon}</div>
                <h4>{card.title}</h4>
                <p>{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;
