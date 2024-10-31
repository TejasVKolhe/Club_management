// src/pages/PlayerDashboard.jsx
import React from 'react';
import Navbar from '../components/Navbar';
import heroImage from '../assets/player-hero.jpg';

const PlayerDashboard = () => {
  return (
    <div className="bg-gray-100">
      <Navbar />

      {/* Hero Section */}
      <section
        className="h-80 bg-cover bg-center flex items-center justify-center text-white"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="text-center bg-opacity-50 bg-blue-900 p-4 rounded">
          <h1 className="text-5xl font-bold">Welcome, [Player's Name]!</h1>
          <p className="mt-2 text-lg">Here are your latest match updates and stats.</p>
        </div>
      </section>

      {/* Upcoming Matches */}
      <section className="p-6 bg-white shadow-md mt-6 rounded mx-4 md:mx-12 lg:mx-24">
        <h2 className="text-3xl font-bold">Upcoming Matches</h2>
        <ul className="mt-4 space-y-2 text-lg">
          <li>Match against Team A - Date</li>
          <li>Match against Team B - Date</li>
        </ul>
        <a href="/fixtures" className="mt-4 inline-block text-blue-600 hover:underline">View All Fixtures</a>
      </section>

      {/* Recent Stats */}
      <section className="p-6 bg-white shadow-md mt-6 rounded mx-4 md:mx-12 lg:mx-24">
        <h2 className="text-3xl font-bold">Recent Stats</h2>
        <p>Goals: X | Assists: Y | Minutes Played: Z</p>
        <a href="/player/stats" className="mt-4 inline-block text-blue-600 hover:underline">View Detailed Stats</a>
      </section>

      {/* Teammates */}
      <section className="p-6 bg-white shadow-md mt-6 rounded mx-4 md:mx-12 lg:mx-24">
        <h2 className="text-3xl font-bold">Meet Your Teammates</h2>
        <div className="flex flex-wrap justify-between mt-4">
          <div className="w-1/2 md:w-1/4 p-2">
            <div className="bg-gray-200 p-4 text-center rounded">
              <img src="teammate1.jpg" alt="Teammate 1" className="mx-auto mb-2 w-full h-32 object-cover rounded" />
              <h3 className="font-semibold">Teammate 1</h3>
              <p>Position</p>
            </div>
          </div>
          {/* Add more teammates */}
        </div>
        <a href="/team" className="mt-4 inline-block text-blue-600 hover:underline">View Team</a>
      </section>
    </div>
  );
};

export default PlayerDashboard;
