const errorConstructor = require('../util/functions/errorConstructor');
const connect = require('./connection');
const { ObjectId } = require('mongodb');

module.exports = async (task) => {
  const connection = await connect();
  const { insertedId } = await connection.collection('tasks').insertOne(task);
  const { modifiedCount } = await connection.collection('tasks')
    .updateOne({ _id: ObjectId(insertedId) }, { $currentDate: { createdAt: true } });
  if (modifiedCount === 1) {
    return insertedId;
  }
  return false;
};
