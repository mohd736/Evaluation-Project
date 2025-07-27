import React, { useState } from 'react';
import './StaffDashboard.css';
import { 
  FaHome, 
  FaUsers, 
  FaChartBar, 
  FaCog, 
  FaSignOutAlt,
  FaBell,
  FaUserCircle,
  FaBars,
  FaInfoCircle
} from 'react-icons/fa';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import FormAForm from '../Staff/FormAForm'; // ✅ hakikisha path iko sahihi kulingana na mahali file yako ipo

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const StaffDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [showRatingInfo, setShowRatingInfo] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const performanceData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Tathmini ya Mwezi',
        data: [78, 82, 80, 85, 88, 86, 90, 92, 89, 93, 95, 94],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
      {
        label: 'Wastani wa Idara',
        data: [72, 74, 75, 76, 78, 77, 80, 82, 81, 83, 84, 85],
        backgroundColor: 'rgba(255, 159, 64, 0.6)',
        borderColor: 'rgba(255, 159, 64, 1)',
        borderWidth: 1,
      }
    ]
  };

  const performanceOptions = {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
      title: {
        display: true,
        text: 'Tathmini ya Utendaji wa Mwaka 2023',
        font: { size: 16 }
      },
      tooltip: {
        callbacks: {
          label: function(context) {
            return `${context.dataset.label}: ${context.raw}%`;
          }
        }
      }
    },
    scales: {
      y: {
        beginAtZero: false,
        min: 50,
        max: 100,
        title: {
          display: true,
          text: 'Alama (%)'
        },
        ticks: { stepSize: 10 }
      }
    }
  };

  const ratingScale = [
    { range: '90-100%', grade: 'A', description: 'Bora sana - Anazidi matarajio' },
    { range: '80-89%', grade: 'B', description: 'Vizuri - Anafikia matarajio' },
    { range: '70-79%', grade: 'C', description: 'Ya kukubalika - Inahitaji maboresho' },
    { range: '60-69%', grade: 'D', description: 'Duni - Inahitaji mazingatio' },
    { range: '0-59%', grade: 'F', description: 'Hafifu - Haitoshi' }
  ];

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <div className={`sidebar ${sidebarOpen ? 'open' : 'closed'}`}>
        <div className="sidebar-header">
          <h2>StaffDash</h2>
        </div>
        <ul className="sidebar-menu">
          <li 
            className={activeTab === 'dashboard' ? 'active' : ''}
            onClick={() => setActiveTab('dashboard')}
          >
            <FaHome className="icon" />
            <span>Dashboard</span>
          </li>
          <li 
            className={activeTab === 'formA' ? 'active' : ''}
            onClick={() => setActiveTab('formA')}
          >
            <FaUsers className="icon" />
            <span>Form A</span>
          </li>
          <li 
            className={activeTab === 'reports' ? 'active' : ''}
            onClick={() => setActiveTab('reports')}
          >
            <FaChartBar className="icon" />
            <span>Reports</span>
          </li>
          <li 
            className={activeTab === 'settings' ? 'active' : ''}
            onClick={() => setActiveTab('settings')}
          >
            <FaCog className="icon" />
            <span>Settings</span>
          </li>
        </ul>
        <div className="sidebar-footer">
          <button className="logout-btn">
            <FaSignOutAlt className="icon" />
            <span>Logout</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="main-content">
        {/* Navbar */}
        <div className="navbar">
          <div className="left-section">
            <button className="menu-btn" onClick={toggleSidebar}>
              <FaBars />
            </button>
            <h3>{activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}</h3>
          </div>
          <div className="right-section">
            <div className="notification">
              <FaBell className="icon" />
              <span className="badge">3</span>
            </div>
            <div className="user-profile">
              <FaUserCircle className="avatar" />
              <span>Admin User</span>
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="content-area">
          {activeTab === 'dashboard' && (
            <div className="dashboard-content">
              <h2>Karibu kwenye Dashibodi ya Wafanyakazi</h2>
              <div className="stats-container">
                <div className="stat-card">
                  <h3>Wafanyakazi Wote</h3>
                  <p>24</p>
                </div>
                <div className="stat-card">
                  <h3>Wapo Kazini</h3>
                  <p>18</p>
                </div>
                <div className="stat-card">
                  <h3>Likizoni</h3>
                  <p>6</p>
                </div>
                <div className="stat-card highlight">
                  <h3>Tathmini Yako</h3>
                  <p>94% <span className="grade">(A)</span></p>
                </div>
              </div>

              <div className="graph-container">
                <div className="graph-header">
                  <h3>Ripoti ya Utendaji</h3>
                  <button 
                    className="info-btn"
                    onClick={() => setShowRatingInfo(!showRatingInfo)}
                  >
                    <FaInfoCircle /> Maelezo ya Tathmini
                  </button>
                </div>

                {showRatingInfo && (
                  <div className="rating-info">
                    <h4>Mfumo wa Tathmini:</h4>
                    <table>
                      <thead>
                        <tr>
                          <th>Masafa</th>
                          <th>Daraja</th>
                          <th>Maelezo</th>
                        </tr>
                      </thead>
                      <tbody>
                        {ratingScale.map((item, index) => (
                          <tr key={index}>
                            <td>{item.range}</td>
                            <td>{item.grade}</td>
                            <td>{item.description}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}

                <Bar data={performanceData} options={performanceOptions} />

                <div className="performance-summary">
                  <h4>Tathmini ya Mwisho wa Mwaka: 94% (A) - Bora sana</h4>
                  <p><strong>Maoni ya Mkuu wako:</strong> "Umeonyesha ufanisi mkubwa na uongozi bora katika miradi yote. Umezidi matarajio katika vipengele vyote vya kazi."</p>
                  <div className="improvement-tips">
                    <h5>Mapendekezo ya Uboreshaji:</h5>
                    <ul>
                      <li>Endelea kufanya kazi kwa ufanisi kwa timu</li>
                      <li>Shiriki ujuzi wako na wenzako zaidi</li>
                      <li>Endelea kujifunza mbinu mpya za kazi</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'formA' && (
            <div className="formA-content">
              <FormAForm />
            </div>
          )}

          {activeTab === 'reports' && (
            <div className="reports-content">
              <h2>Reports</h2>
              {/* Reports content would go here */}
            </div>
          )}

          {activeTab === 'settings' && (
            <div className="settings-content">
              <h2>Settings</h2>
              {/* Settings content would go here */}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StaffDashboard;
