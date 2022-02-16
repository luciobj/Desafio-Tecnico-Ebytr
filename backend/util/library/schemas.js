const Joi = require('joi');

const taskSchema = Joi.object({
  name: Joi.string().required(),
  status: Joi.string().required()
});

module.exports = {
  taskSchema
};
