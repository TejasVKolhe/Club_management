const Player = require('../models/Player');

const playerController = {
    addPlayer: (req, res) => {
        const playerData = req.body;
        Player.create(playerData, (err, result) => {
            if (err) {
                return res.status(500).json({ message: 'Error adding player' });
            }
            res.status(201).json({ message: 'Player added successfully' });
        });
    },

    // Additional player methods (like get, update, delete) can be added here
};

module.exports = playerController;
