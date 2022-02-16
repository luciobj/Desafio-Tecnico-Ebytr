const connect = require('./connection');
const { ObjectId } = require('mongodb');

module.exports = async (id) => {
  const connection = await connect();
  const { deletedCount } = await connection.collection('tasks')
    .deleteOne({ _id: ObjectId(id) });
  if (deletedCount === 1) {
    return;
  }
  return false;
};
