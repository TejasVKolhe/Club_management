// src/api/auth.js
import axios from 'axios';

export const loginUser = async (username, password) => {
  return await axios.post('http://localhost:3001/api/login', { username, password });
};

export const registerUser = async (userData) => {
  return await axios.post('http://localhost:3001/api/register', userData);
};

app.post('/api/login', async (req, res) => {
                const { username, password } = req.body;
                // Validate user from the MySQL database
                const user = await db.query(`SELECT * FROM User WHERE username = ? AND password = ?`, [username, password]);
                if (user) {
                  res.json({ userType: user.userType });
                } else {
                  res.status(401).json({ message: 'Invalid credentials' });
                }
});

app.post('/api/register', async (req, res) => {
                const { username, password, gender, nationality, age } = req.body;
                // Insert new user into MySQL database
                try {
                  await db.query(`INSERT INTO User (username, password, gender, nationality, age) VALUES (?, ?, ?, ?, ?)`, 
                  [username, password, gender, nationality, age]);
                  res.status(201).json({ message: 'User created successfully' });
                } catch (error) {
                  res.status(500).json({ message: 'Failed to create user' });
                }
});
              
              