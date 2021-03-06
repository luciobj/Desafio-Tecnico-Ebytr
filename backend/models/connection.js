const mongodb = require('mongodb').MongoClient;
require('dotenv').config();

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const mongoUrl = `mongodb://${process.env.HOST || 'mongodb'}:27017/ToDoList`;
const dbName = 'ToDoList';

module.exports = async () => {
  try {
    const connection = await mongodb.connect(mongoUrl, options);
    return await connection.db(dbName);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};
