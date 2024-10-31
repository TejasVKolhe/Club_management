// Example: routes/players.js
const express = require('express');
const router = express.Router();
const db = require('../config/db'); // Adjust this import based on your setup

// GET all players
router.get('/', (req, res) => {
  db.query('SELECT * FROM Players', (error, results) => {
    if (error) {
      return res.status(500).json({ message: 'Database query error' });
    }
    res.json(results);
  });
});

module.exports = router;
