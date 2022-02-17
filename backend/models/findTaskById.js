const connect = require('./connection');
const { ObjectId } = require('mongodb');

module.exports = async (id) => {
  const connection = await connect();
  const task = await connection.collection('tasks')
    .findOne({ _id: ObjectId(id) });
  return task;
};
