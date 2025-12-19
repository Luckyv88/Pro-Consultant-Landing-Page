import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/client.css';

const Client = () => {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const res = await axios.get('https://pro-consultant-landing-page-backend.onrender.com/api/clients');
        setClients(res.data);
      } catch (err) {
        console.error("Error fetching clients", err);
      }
    };
    fetchClients();
  }, []);

  return (
    <div className="client-outer-wrapper">
      <section className="happy-clients-section">
        {/* Background Decorative Elements */}
        <div className="decor-left-curves"></div>
        <div className="decor-top-dots"></div>
        <div className="decor-bottom-curves"></div>
        
        <div className="client-container">
          <h2 className="happy-clients-title">Happy Clients</h2>
          
          <div className="clients-card-row">
            {clients.map((client) => (
              <div className="testimonial-card" key={client._id}>
                <div className="client-avatar-container">
                  <div className="blue-circle-border">
                    <img 
                      src={`https://pro-consultant-landing-page-backend.onrender.com${client.image}`} 
                      alt={client.name} 
                    />
                  </div>
                </div>
                
                <div className="testimonial-body">
                  <p className="testimonial-text">{client.description}</p>
                  <h4 className="client-display-name">{client.name}</h4>
                  <p className="client-display-designation">({client.designation})</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Client;
