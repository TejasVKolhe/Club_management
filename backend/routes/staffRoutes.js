const express = require('express');
const staffController = require('../controllers/staffController');
const router = express.Router();

router.post('/', staffController.addStaff);
// Add more staff routes as needed

module.exports = router;
