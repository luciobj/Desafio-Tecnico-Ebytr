const mongodb = require('mongodb').MongoClient;
const { MongoMemoryServer } = require('mongodb-memory-server');

let connection = null;
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

module.exports = async (dbName) => {
  const mongoServer = await MongoMemoryServer.create();
  mongoServer.start();
  const dbUrl = mongoServer.getUri();
  connection = connection || await mongodb.connect(dbUrl, options);
  return connection;
};
