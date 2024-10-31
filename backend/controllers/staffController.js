const Staff = require('../models/Staff'); // Assume you have a Staff model

const staffController = {
    addStaff: (req, res) => {
        const staffData = req.body;
        Staff.create(staffData, (err, result) => {
            if (err) {
                return res.status(500).json({ message: 'Error adding staff' });
            }
            res.status(201).json({ message: 'Staff added successfully' });
        });
    },

    // Additional staff methods can be added here
};

module.exports = staffController;
