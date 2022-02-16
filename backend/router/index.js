const express = require('express');
const {
  findAllTasksController,
  createTaskController
} = require('../controllers/taskControllers');

const router = express.Router();

router.get('/task', findAllTasksController);
router.post('/task', createTaskController);

module.exports = router;
