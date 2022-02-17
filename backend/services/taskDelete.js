const { ObjectId } = require('mongodb');
const deleteTask = require('../models/deleteTask');
const findTaskById = require('../models/findTaskById');
const { badRequest, notFound } = require('../util/library/statusCode');

module.exports = async (id) => {
  if (!ObjectId(id)) throw errorConstructor(badRequest, 'Invalid id');
  if (!findTaskById(id)) throw errorConstructor(notFound, 'Task not found');
  const deletedStatus = await deleteTask(id);
  if (!deletedStatus) throw new Error;
  return 'Done';
};
