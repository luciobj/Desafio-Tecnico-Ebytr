const taskCreate = require("../services/taskCreate");
const taskDelete = require("../services/taskDelete");
const tasksList = require("../services/tasksList");
const taskUpdate = require("../services/taskUpdate");
const { success, created } = require("../util/library/statusCode");

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
    return response.status(created).json(createdObj);
  } catch (error) {
    console.log('CREATE TASK:', error);
    return next(error);
  }
};

const updateTaskController = async (request, response, next) => {
  try {
    const status = request.body;
    const { id } = request.params;
    const updateStatus = await taskUpdate(id, status);
    return response.status(success).json(updateStatus);
  } catch (error) {
    console.log('UPDATE TASK:', error);
    return next(error);
  }
};

const deleteTaskController = async (request, response, next) => {
  try {
    const { id } = request.params;
    const deleteStatus = await taskDelete(id);
    return response.status(success).json(deleteStatus);
  } catch (error) {
    console.log('DELETE TASK:', error);
    return next(error);
  }
};

module.exports = {
  findAllTasksController,
  createTaskController,
  updateTaskController,
  deleteTaskController
};
