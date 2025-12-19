import React, { useState, useEffect, useRef } from 'react'; // Added useRef
import ProjectForm from './ProjectForm';
import ClientForm from './ClientForm';
import ContactList from './ContactList';
import SubscriberList from './SubscriberList';
import '../../styles/admin.css';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('projects');

  // ✅ Show alert once when page loads
  const alertShown = useRef(false);
  useEffect(() => {
    if (!alertShown.current) {
      alert("Because of the recruiter view I did not add the login and authentication page");
      alertShown.current = true;
    }
  }, []);

  const renderContent = () => {
    switch (activeTab) {
      case 'projects': return <ProjectForm />;
      case 'clients': return <ClientForm />;
      case 'contacts': return <ContactList />;
      case 'subscribers': return <SubscriberList />;
      default: return <ProjectForm />;
    }
  };

  return (
    <div className="admin-layout">
      {/* Modern Sidebar */}
      <aside className="admin-sidebar">
        <div className="sidebar-header">
          <h3>Admin Panel</h3>
        </div>
        <nav className="sidebar-nav">
          <button 
            className={activeTab === 'projects' ? 'active' : ''} 
            onClick={() => setActiveTab('projects')}
          >
            <i className="fas fa-tasks"></i> Projects
          </button>
          <button 
            className={activeTab === 'clients' ? 'active' : ''} 
            onClick={() => setActiveTab('clients')}
          >
            <i className="fas fa-users"></i> Clients
          </button>
          <button 
            className={activeTab === 'contacts' ? 'active' : ''} 
            onClick={() => setActiveTab('contacts')}
          >
            <i className="fas fa-envelope"></i> Contact Leads
          </button>
          <button 
            className={activeTab === 'subscribers' ? 'active' : ''} 
            onClick={() => setActiveTab('subscribers')}
          >
            <i className="fas fa-bell"></i> Subscribers
          </button>
        </nav>
        <div className="sidebar-footer">
          <button onClick={() => {
            localStorage.clear(); 
            window.location.href='/'; 
          }}>
            <i className="fas fa-sign-out-alt"></i> Logout
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="admin-main">
        <header className="content-header">
          <h1>{activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Management</h1>
        </header>
        <section className="content-card">
          {renderContent()}
        </section>
      </main>
    </div>
  );
};

export default AdminDashboard;
