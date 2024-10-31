// src/pages/CoachDashboard.jsx
import React from 'react';
import Navbar from '../components/Navbar';
import heroImage from '../assets/coach-hero.jpg';

const CoachDashboard = () => {
  return (
    <div className="bg-gray-100">
      <Navbar />

      {/* Hero Section */}
      <section
        className="h-80 bg-cover bg-center flex items-center justify-center text-white"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="text-center bg-opacity-50 bg-blue-900 p-4 rounded">
          <h1 className="text-5xl font-bold">Welcome, Coach!</h1>
          <p className="mt-2 text-lg">Manage your team and track performance.</p>
        </div>
      </section>

      {/* Team Performance */}
      <section className="p-6 bg-white shadow-md mt-6 rounded mx-4 md:mx-12 lg:mx-24">
        <h2 className="text-3xl font-bold">Team Performance</h2>
        <p>Overview of recent team stats...</p>
        <a href="/team/performance" className="mt-4 inline-block text-blue-600 hover:underline">View Performance Details</a>
      </section>

      {/* Recent Player Stats */}
      <section className="p-6 bg-white shadow-md mt-6 rounded mx-4 md:mx-12 lg:mx-24">
        <h2 className="text-3xl font-bold">Player Stats</h2>
        <ul>
          <li>Player 1: Goals - X | Assists - Y</li>
          <li>Player 2: Goals - Z | Assists - W</li>
          {/* Add more players */}
        </ul>
        <a href="/coach/player-stats" className="mt-4 inline-block text-blue-600 hover:underline">View All Player Stats</a>
      </section>

      {/* Upcoming Matches */}
      <section className="p-6 bg-white shadow-md mt-6 rounded mx-4 md:mx-12 lg:mx-24">
        <h2 className="text-3xl font-bold">Upcoming Matches</h2>
        <ul>
          <li>Team A vs Team B - Date</li>
          {/* Add more matches */}
        </ul>
        <a href="/coach/fixtures" className="mt-4 inline-block text-blue-600 hover:underline">Manage Fixtures</a>
      </section>
    </div>
  );
};

export default CoachDashboard;
