const mysql = require('mysql');
const dotenv = require('dotenv');

dotenv.config();

const db = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    connectionLimit: 10, // Adjust the limit as per your application needs
});

db.getConnection((err, connection) => {
    if (err) {
        console.error('Database connection failed:', err.stack);
        return;
    }
    if (connection) connection.release(); // Release the connection back to the pool
    console.log('Connected to MySQL database.');
});

module.exports = db;
