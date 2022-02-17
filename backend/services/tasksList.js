const findAllTasks = require('../models/findAllTasks');

module.exports = async () => {
  const taskList = await findAllTasks();
  return taskList;
};
