const connect = require('./connection');

module.exports = async () => {
  const connection = await connect();
  const findTasks = await connection.collection('tasks').find().toArray();
  return findTasks;
};
