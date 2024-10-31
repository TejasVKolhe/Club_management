const express = require('express');
const coachController = require('../controllers/coachController');
const router = express.Router();

router.post('/', coachController.addCoach);
// Add more coach routes as needed

module.exports = router;
