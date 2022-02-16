const express = require('express');
const { findAllTasksController } = require('../controllers/taskControllers');

const router = express.Router();

router.get('/task', findAllTasksController);

module.exports = router;
