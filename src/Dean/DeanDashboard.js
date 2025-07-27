import React, { useState } from 'react';
import './DeanDashboard.css';

const DeanDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="dean-dashboard">
      {/* Top Navigation Bar */}
      <nav className="dean-navbar">
        <button className="sidebar-toggle" onClick={toggleSidebar}>
          {sidebarOpen ? '✖' : '☰'}
        </button>
        <h1>Dean Dashboard</h1>
        <div className="dean-nav-links">
          <a href="/profile">Profile</a>
          <a href="/settings">Settings</a>
          <a href="/logout">Logout</a>
        </div>
      </nav>

      {/* Sidebar & Main Content */}
      <div className="dean-content">
        {/* Sidebar */}
        <aside className={`dean-sidebar ${sidebarOpen ? 'open' : 'closed'}`}>
          <ul>
            <li><a href="/dean/department-reports">Department Reports</a></li>
            <li><a href="/dean/faculty-meetings">Faculty Meetings</a></li>
            <li><a href="/dean/academic-calendar">Academic Calendar</a></li>
            <li><a href="/dean/budget-allocation">Budget Allocation</a></li>
          </ul>
        </aside>

        {/* Main Content Area */}
        <main className="dean-main">
          <h2>Welcome, Dean!</h2>
          <p>Manage faculty administration activities from here.</p>
          
          {/* Content based on your form */}
          <div className="dean-stats">
            <div className="stat-card">
              <h3>Pending Approvals</h3>
              <p>12</p>
            </div>
            <div className="stat-card">
              <h3>Faculty Members</h3>
              <p>45</p>
            </div>
            <div className="stat-card">
              <h3>Departments</h3>
              <p>8</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default DeanDashboard;