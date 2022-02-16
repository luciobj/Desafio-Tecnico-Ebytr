const errorConstructor = require('../util/functions/errorConstructor');
const connect = require('./connection');
const { ObjectId } = require('mongodb');

module.exports = async (id, status) => {
  const connection = await connect();
  const { modifiedCount } = await connection.collection('tasks')
    .updateOne({ _id: ObjectId(id) }, { status });
  if (modifiedCount === 1) {
    return;
  }
  next('error');
};
