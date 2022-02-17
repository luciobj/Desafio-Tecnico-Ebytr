const errorConstructor = require('../util/functions/errorConstructor');
const { badRequest, notFound } = require('../util/library/statusCode');
const updateTask = require('../models/updateTask');
const { ObjectId } = require('mongodb');
const findTaskById = require('../models/findTaskById');

module.exports = async (id, status) => {
  if (!ObjectId(id)) throw errorConstructor(badRequest, 'Invalid id');
  if (!findTaskById(id)) throw errorConstructor(notFound, 'Task not found');
  if (!status) throw errorConstructor(badRequest, 'Missing or empty status');
  const updatedStatus = await updateTask(id, status);
  if (!updatedStatus) throw new Error;
  return 'Done';
};
