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
              