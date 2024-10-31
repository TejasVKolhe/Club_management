const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const playerRoutes = require('./routes/playerRoutes');
const app = express();

app.use(bodyParser.json());
app.use(cors());

// Use auth routes
app.use('/api', authRoutes);
app.use('/routes', playerRoutes); // Register the route

// const playerRoutes = require('./routes/playerRoutes');
// app.use('/api', playerRoutes);

app.listen(3001, () => {
  console.log('Server running on port 3001');
});
