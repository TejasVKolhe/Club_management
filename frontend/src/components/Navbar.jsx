// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa'; // You can install react-icons if you haven't yet

const Navbar = ({ user, onLogout }) => {
  return (
    <nav className="bg-blue-900 text-white p-4">
      <ul className="flex justify-between items-center">
        <li>
          <Link to="/" className="text-xl font-bold">Football Club</Link>
        </li>
        <li className="flex space-x-4">
          {user ? (
            <>
              <span className="flex items-center">
                <FaUserCircle className="mr-1" />
                {user}
              </span>
              <button onClick={onLogout} className="hover:underline">Logout</button>
            </>
          ) : (
            <>
              <Link to="/login">Login</Link>
              <Link to="/signup">Sign Up</Link>
            </>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
