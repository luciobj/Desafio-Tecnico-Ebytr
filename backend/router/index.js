const express = require('express');
const {
  findAllTasksController,
  createTaskController,
  updateTaskController,
  deleteTaskController
} = require('../controllers/taskControllers');

const router = express.Router();

router.get('/task', findAllTasksController);
router.post('/task', createTaskController);
router.put('/task/:id', updateTaskController);
router.delete('/task/:id', deleteTaskController);

module.exports = router;
