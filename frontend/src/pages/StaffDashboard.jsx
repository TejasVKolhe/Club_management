// src/pages/StaffDashboard.jsx
import React from 'react';
import Navbar from '../components/Navbar';
import heroImage from '../assets/staff-hero.jpg';

const StaffDashboard = () => {
  return (
    <div className="bg-gray-100">
      <Navbar />

      {/* Hero Section */}
      <section
        className="h-80 bg-cover bg-center flex items-center justify-center text-white"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="text-center bg-opacity-50 bg-blue-900 p-4 rounded">
          <h1 className="text-5xl font-bold">Welcome, Staff Member!</h1>
          <p className="mt-2 text-lg">Manage your tasks and support the team.</p>
        </div>
      </section>

      {/* Assigned Tasks */}
      <section className="p-6 bg-white shadow-md mt-6 rounded mx-4 md:mx-12 lg:mx-24">
        <h2 className="text-3xl font-bold">Your Tasks</h2>
        <ul className="mt-4 space-y-2 text-lg">
          <li>Task 1 - Due Date</li>
          <li>Task 2 - Due Date</li>
          {/* Add more tasks */}
        </ul>
        <a href="/staff/tasks" className="mt-4 inline-block text-blue-600 hover:underline">View All Tasks</a>
      </section>

      {/* Announcements */}
      <section className="p-6 bg-white shadow-md mt-6 rounded mx-4 md:mx-12 lg:mx-24">
        <h2 className="text-3xl font-bold">Announcements</h2>
        <p>Latest updates from the administration...</p>
        <a href="/staff/announcements" className="mt-4 inline-block text-blue-600 hover:underline">View All Announcements</a>
      </section>

      {/* Team Support Resources */}
      <section className="p-6 bg-white shadow-md mt-6 rounded mx-4 md:mx-12 lg:mx-24">
        <h2 className="text-3xl font-bold">Team Support Resources</h2>
        <p>Access support documents, guides, and more.</p>
        <a href="/staff/resources" className="mt-4 inline-block text-blue-600 hover:underline">View Resources</a>
      </section>
    </div>
  );
};

export default StaffDashboard;
