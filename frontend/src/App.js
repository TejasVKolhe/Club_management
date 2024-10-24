// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Login from './pages/Login';
// import Home from './components/Home';
// import Players from './components/Players';
// import Coaches from './components/Coaches';
// import Staff from './components/Staff';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            {/* <li><Link to="/">Home</Link></li> */}
            <li><Link to="/login">Login</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          {/* <Route path="/players-home" element={<Players />} />
          <Route path="/coaches-home" element={<Coaches />} />
          <Route path="/staff-home" element={<Staff />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
