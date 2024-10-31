const db = require('../config/db');

const User = {
    create: (userData, callback) => {
        const sql = 'INSERT INTO User (username, password, gender, nationality, age) VALUES (?, ?, ?, ?, ?)';
        db.query(sql, [userData.username, userData.password, userData.gender, userData.nationality, userData.age], callback);
    },
    findByUsername: (username, callback) => {
        const sql = 'SELECT * FROM User WHERE username = ?';
        db.query(sql, [username], callback);
    },
    // Add more methods as needed
};

module.exports = User;
