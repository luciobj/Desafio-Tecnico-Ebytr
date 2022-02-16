const taskCreate = require("../services/taskCreate");
const tasksList = require("../services/tasksList");
const { success } = require("../util/library/statusCode");

const findAllTasksController = async (_request, response, next) => {
  try {
    const list = await tasksList();
    return response.status(success).json(list);
  } catch (error) {
    console.log('GET ALL TASKS:', error);
    return next(error);
  }
};
const createTaskController = async (request, response, next) => {
  try {
    const task = request.body;
    const createdObj = await taskCreate(task);
    return response.status(success).json(createdObj);
  } catch (error) {
    console.log('CREATE TASK:', error);
    return next(error);
  }
};

module.exports = {
  findAllTasksController,
  createTaskController
};
