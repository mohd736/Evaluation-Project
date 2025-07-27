import React, { useState } from 'react';
import './AdminDashboard.css';

const AdminDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="admin-dashboard">
      {/* Top Navigation Bar */}
      <nav className="admin-navbar">
        <button className="sidebar-toggle" onClick={toggleSidebar}>
          {sidebarOpen ? '✖' : '☰'}
        </button>
        <h1>Admin Dashboard</h1>
        <div className="admin-nav-links">
          <a href="/admin/profile">Profile</a>
          <a href="/admin/settings">Settings</a>
          <a href="/logout">Logout</a>
        </div>
      </nav>

      {/* Sidebar & Main Content */}
      <div className="admin-content">
        {/* Sidebar */}
        <aside className={`admin-sidebar ${sidebarOpen ? 'open' : 'closed'}`}>
          <ul>
            <li><a href="/admin/users"><i className="fas fa-users"></i> User Management</a></li>
            <li><a href="/admin/roles"><i className="fas fa-user-tag"></i> Role Management</a></li>
            <li><a href="/admin/permissions"><i className="fas fa-key"></i> Permissions</a></li>
            <li><a href="/admin/system-settings"><i className="fas fa-cog"></i> System Settings</a></li>
            <li><a href="/admin/audit-logs"><i className="fas fa-clipboard-list"></i> Audit Logs</a></li>
            <li><a href="/admin/reports"><i className="fas fa-chart-bar"></i> Reports</a></li>
          </ul>
        </aside>

        {/* Main Content Area */}
        <main className="admin-main">
          <h2>Welcome, System Administrator!</h2>
          <p>Manage all system activities from here.</p>
          
          {/* Admin Statistics Cards */}
          <div className="admin-stats">
            <div className="stat-card">
              <div className="stat-icon"><i className="fas fa-users"></i></div>
              <h3>Total Users</h3>
              <p>1,245</p>
            </div>
            <div className="stat-card">
              <div className="stat-icon"><i className="fas fa-user-shield"></i></div>
              <h3>Active Admins</h3>
              <p>15</p>
            </div>
            <div className="stat-card">
              <div className="stat-icon"><i className="fas fa-exclamation-triangle"></i></div>
              <h3>Pending Actions</h3>
              <p>23</p>
            </div>
            <div className="stat-card">
              <div className="stat-icon"><i className="fas fa-clipboard-check"></i></div>
              <h3>Completed Tasks</h3>
              <p>156</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;