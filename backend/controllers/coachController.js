const Coach = require('../models/Coach'); // Assume you have a Coach model

const coachController = {
    addCoach: (req, res) => {
        const coachData = req.body;
        Coach.create(coachData, (err, result) => {
            if (err) {
                return res.status(500).json({ message: 'Error adding coach' });
            }
            res.status(201).json({ message: 'Coach added successfully' });
        });
    },

    // Additional coach methods can be added here
};

module.exports = coachController;
