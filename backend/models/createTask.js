const errorConstructor = require('../util/functions/errorConstructor');
const connect = require('./connection');

module.exports = async (task) => {
  const connection = await connect();
  const { insertedId } = await connection.collection('tasks').insertOne(task);
  const setCreatedAt = await connection.collection('tasks')
    .updateOne({ _id: ObjectId(insertedId) }, { $currentDate: { createdAt: true } });
  console.log(setCreatedAt);
  if (setCreatedAt) {
    return insertedId;
  }
  next('error');
};
