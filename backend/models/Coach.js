const db = require('../config/db');

const Coach = {
    create: (coachData, callback) => {
        const sql = 'INSERT INTO Coach (user_id, team_id, experience) VALUES (?, ?, ?)';
        db.query(sql, [coachData.user_id, coachData.team_id, coachData.experience], callback);
    },
    // Add more methods as needed
};

module.exports = Coach;
