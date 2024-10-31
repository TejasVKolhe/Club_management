const db = require('../config/db');

const Player = {
    create: (playerData, callback) => {
        const sql = 'INSERT INTO Player (user_id, team_id, contract_start_date, contract_end_date, training_history) VALUES (?, ?, ?, ?, ?)';
        db.query(sql, [playerData.user_id, playerData.team_id, playerData.contract_start_date, playerData.contract_end_date, playerData.training_history], callback);
    },
    // Add more methods as needed
};

module.exports = Player;
