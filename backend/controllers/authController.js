const bcrypt = require('bcrypt');
const db = require('../config/db');

// Login endpoint
exports.loginUser = async (req, res) => {
  const { username, password } = req.body;
  try {
    db.query(`SELECT * FROM User WHERE username = ?`, [username], async (error, results) => {
      if (error) {
        console.error('Database query error:', error);
        res.status(500).json({ message: 'Database query error' });
        return;
      }

      console.log('Login attempt for username:', username);
      console.log('Query Results:', results);

      // Check if a user was found
      const user = results.length > 0 ? results[0] : null;

      if (user) {
        // Compare the hashed password
        const isPasswordMatch = await bcrypt.compare(password, user.password);
        if (isPasswordMatch) {
          res.json({ userType: user.userType });
        } else {
          console.log('Invalid credentials for username:', username);
          res.status(401).json({ message: 'Invalid credentials' });
        }
      } else {
        console.log('Invalid credentials for username:', username);
        res.status(401).json({ message: 'Invalid credentials' });
      }
    });
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ message: 'Error during login' });
  }
};

// Register endpoint
exports.registerUser = async (req, res) => {
  const { username, password, gender, nationality, age } = req.body;
  try {
    // Hash the password asynchronously
    const hashedPassword = await bcrypt.hash(password, 10);

    db.query(
      `INSERT INTO User (username, password, gender, nationality, age) VALUES (?, ?, ?, ?, ?)`,
      [username, hashedPassword, gender, nationality, age],
      (err) => {
        if (err) {
          console.error('Error creating user:', err);
          res.status(500).json({ message: 'Failed to create user' });
        } else {
          res.status(201).json({ message: 'User created successfully' });
        }
      }
    );
  } catch (error) {
    console.error('Error during user registration:', error);
    res.status(500).json({ message: 'Error during user registration' });
  }
};
