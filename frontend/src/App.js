import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Client from './components/Client';
import Project from './components/Project';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

import AdminDashboard from './components/Admin/AdminDashboard';

function App() {
  return (
    <Router>
      <Routes>
        {/* MAIN WEBSITE */}
        <Route
          path="/"
          element={
            <>
              <Navbar />

              <section id="home" className="section-offset"><Home /></section>
              <section id="about"><About /></section>
              <section id="clients"><Client /></section>
              <section id="projects"><Project /></section>
              <section id="newsletter"><Newsletter /></section>

              <Footer />
            </>
          }
        />

        {/* ADMIN DASHBOARD use= /#/admindashboard */}
        <Route path="/admindashboard" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
