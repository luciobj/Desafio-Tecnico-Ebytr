const express = require('express');
const {
  findAllTasksController,
  createTaskController,
  updateTaskController
} = require('../controllers/taskControllers');

const router = express.Router();

router.get('/task', findAllTasksController);
router.post('/task', createTaskController);
router.put('/task/:id', updateTaskController);

module.exports = router;
