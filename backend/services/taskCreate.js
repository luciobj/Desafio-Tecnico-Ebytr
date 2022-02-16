const createTask = require('../models/createTask');
const taskValidate = require('./taskValidate');

module.exports = async (task) => {
  taskValidate(task);
  const taskObject = {
    name: task.name,
    status: task.satus,
    createdAt: ''
  };
  const createdId = await createTask(taskObject);
  taskObject._id = createdId;
  return taskObject;
};
