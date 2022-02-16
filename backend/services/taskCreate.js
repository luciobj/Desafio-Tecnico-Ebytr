const createTask = require('../models/createTask');
const errorConstructor = require('../util/functions/errorConstructor');
const taskValidate = require('./taskValidate');

module.exports = async (task) => {
  taskValidate(task);
  const taskObject = {
    name: task.name,
    status: task.status,
    createdAt: ''
  };
  const createdId = await createTask(taskObject);
  if (!createdId) throw new Error;
  taskObject._id = createdId;
  delete taskObject.createdAt;
  return taskObject;
};
