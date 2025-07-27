import React, { useState } from 'react';

const HeadDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex h-screen bg-gray-100 text-black">
      {/* Sidebar */}
      <aside
        className={`${
          sidebarOpen ? 'w-64' : 'w-0'
        } transition-all duration-300 bg-blue-800 text-white overflow-hidden`}
      >
        <div className="p-4 text-xl font-bold border-b border-blue-600">
          Head Panel
        </div>
        <ul className="p-4 space-y-4">
          <li>
            <a href="/head/lecturer-evaluations" className="hover:text-yellow-300 block">
              Lecturer Evaluations
            </a>
          </li>
          <li>
            <a href="/head/performance-reports" className="hover:text-yellow-300 block">
              Performance Reports
            </a>
          </li>
          <li>
            <a href="/head/schedule-review" className="hover:text-yellow-300 block">
              Review Schedules
            </a>
          </li>
          <li>
            <a href="/head/student-feedback" className="hover:text-yellow-300 block">
              Student Feedback
            </a>
          </li>
        </ul>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Nav */}
        <nav className="flex items-center justify-between bg-white p-4 shadow-md">
          <button
            onClick={toggleSidebar}
            className="text-2xl px-3 py-1 rounded hover:bg-gray-200"
          >
            {sidebarOpen ? '✖' : '☰'}
          </button>
          <h1 className="text-xl font-semibold">Head of Department Dashboard</h1>
          <div className="space-x-4">
            <a href="/profile" className="hover:text-blue-600">Profile</a>
            <a href="/settings" className="hover:text-blue-600">Settings</a>
            <a href="/logout" className="hover:text-blue-600">Logout</a>
          </div>
        </nav>

        {/* Main Section */}
        <main className="flex-1 p-6">
          <h2 className="text-2xl font-semibold mb-2">Welcome, Head of Department!</h2>
          <p className="mb-6 text-gray-700">Manage your department activities efficiently.</p>

          {/* Dashboard Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold">Form A Reviews</h3>
              <p className="text-3xl mt-2 text-blue-700">10</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold">Reports Pending</h3>
              <p className="text-3xl mt-2 text-red-600">5</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold">Active Courses</h3>
              <p className="text-3xl mt-2 text-green-600">16</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default HeadDashboard;
