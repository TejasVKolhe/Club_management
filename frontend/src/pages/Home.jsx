// src/pages/Home.jsx
import React from 'react';
import Navbar from '../components/Navbar';
import heroImage from '../assets/hero-image.jpeg';

const Home = () => {
  return (
    <div className="bg-gray-100">
      

      {/* Hero Section */}
      <section
        className="h-80 bg-cover bg-center flex items-center justify-center text-white"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="text-center bg-opacity-50 bg-blue-900 p-4 rounded">
          <h1 className="text-5xl font-bold">Welcome to the Football Club!</h1>
          <p className="mt-2 text-lg">Join us on our journey to victory!</p>
          <a href="/tickets" className="mt-4 inline-block bg-yellow-500 text-blue-900 py-2 px-6 rounded hover:bg-yellow-400 transition duration-300">Get Tickets</a>
        </div>
      </section>

      {/* Upcoming Fixtures */}
      <section className="p-6 bg-white shadow-md mt-6 rounded mx-4 md:mx-12 lg:mx-24">
        <h2 className="text-3xl font-bold">Upcoming Fixtures</h2>
        <ul className="mt-4 space-y-2 text-lg">
          <li>Team A vs Team B - Date</li>
          <li>Team C vs Team D - Date</li>
          <li>Team E vs Team F - Date</li>
        </ul>
        <a href="/fixtures" className="mt-4 inline-block text-blue-600 hover:underline">View All Fixtures</a>
      </section>

      {/* Latest News */}
      <section className="p-6 bg-white shadow-md mt-6 rounded mx-4 md:mx-12 lg:mx-24">
        <h2 className="text-3xl font-bold">Latest News</h2>
        <div className="space-y-4">
          <article className="mt-4">
            <h3 className="text-2xl font-semibold">News Title 1</h3>
            <p className="text-lg">Summary of news article...</p>
            <a href="/news/1" className="text-blue-600 hover:underline">Read More</a>
          </article>
          <article className="mt-4">
            <h3 className="text-2xl font-semibold">News Title 2</h3>
            <p className="text-lg">Summary of news article...</p>
            <a href="/news/2" className="text-blue-600 hover:underline">Read More</a>
          </article>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="p-6 bg-white shadow-md mt-6 rounded mx-4 md:mx-12 lg:mx-24">
        <h2 className="text-3xl font-bold">Meet Our Team</h2>
        <div className="flex flex-wrap justify-between mt-4">
          <div className="w-1/2 md:w-1/4 p-2">
            <div className="bg-gray-200 p-4 text-center rounded">
              <img src="player1.jpg" alt="Player 1" className="mx-auto mb-2 w-full h-32 object-cover rounded" />
              <h3 className="font-semibold">Player 1</h3>
              <p>Position</p>
            </div>
          </div>
          <div className="w-1/2 md:w-1/4 p-2">
            <div className="bg-gray-200 p-4 text-center rounded">
              <img src="player2.jpg" alt="Player 2" className="mx-auto mb-2 w-full h-32 object-cover rounded" />
              <h3 className="font-semibold">Player 2</h3>
              <p>Position</p>
            </div>
          </div>
          {/* Add more players as needed */}
        </div>
        <a href="/teams" className="mt-4 inline-block text-blue-600 hover:underline">Meet the Team</a>
      </section>
    </div>
  );
};

export default Home;
