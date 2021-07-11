const router = require('express').Router();
const workoutRoutes = require('./workoutRoutes');


router.use('/projects', workoutRoutes);

module.exports = router;
