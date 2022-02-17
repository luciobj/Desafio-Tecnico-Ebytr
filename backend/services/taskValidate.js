const errorConstructor = require("../util/functions/errorConstructor");
const { taskSchema } = require("../util/library/schemas");
const { badRequest } = require("../util/library/statusCode");

module.exports = (task) => {
  const { error } = taskSchema.validate(task);
  if (error) {
    throw errorConstructor(badRequest, error.message);
  }
};
