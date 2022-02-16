const tasksList = require("../services/tasksList");
const { success } = require("../util/library/statusCode");

const findAllTasksController = async (_request, response, _next) => {
  const list = await tasksList();
  return response.status(success).json(list);
};

module.exports = {
  findAllTasksController
};
