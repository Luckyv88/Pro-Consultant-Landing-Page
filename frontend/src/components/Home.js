import React from 'react'
import Contact from './Contact'
import ChooseUs from './ChooseUs'
import '../styles/home.css'

const Home = () => {
  return (
    <>
      <section className="home-hero">
        <img
          src="http://localhost:5000/uploads/home.jpg"
          alt="Consultation"
          className="hero-bg"
        />

        <div className="hero-overlay">
          {/* LEFT CONTENT */}
          <div className="hero-left">
            <h1>
              Consultation,<br />
              Design<br />
              & Marketing
            </h1>
          </div>

          {/* RIGHT FORM */}
          <div className="hero-right">
            <h3>Get a Free<br />Consultation</h3>
            <Contact />
          </div>
        </div>
      </section>

      {/* SCROLLABLE SECTIONS */}

      <section id="chooseus">
           <ChooseUs />
       </section>

      
    </>
  )
}

export default Home
