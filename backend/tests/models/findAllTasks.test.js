const sinon = require('sinon');
const { expect } = require('chai');
const findAllTasks = require('../../models/findAllTasks');
const { MongoClient } = require('mongodb');
const connectionMemory = require('../../util/functions/connectionMemory');

const dbName = 'ToDoList';
const collection = 'tasks';

describe('Tests the list all tasks model', () => {
  let connectionMock;

  before(async () => {
    connectionMock = await connectionMemory();
    sinon.stub(MongoClient, 'connect').resolves(connectionMock);
  });
  after(async () => {
    await connectionMock.db(dbName).collection(collection).drop();
    MongoClient.connect.restore();
    sinon.reset();
  });

  describe('Tests the success case', () => {
    it('returns an empty array, when nothing is in the database', async () => {
      const findResult = await findAllTasks();
      expect(findResult).to.be.a('array');
      expect(findResult).to.be.length(0);
    });
    it('returns a array containing the inserted objects', async () => {
      const task = {
        name: 'Clean the office',
        status: 'Pending',
        createdAt: ''
      };
      await connectionMock.db(dbName).collection(collection).insertOne(task);
      await connectionMock.db(dbName).collection(collection).updateOne({ name: task.name }, { $currentDate: { createdAt: true } });
      const findResult = await findAllTasks();
      expect(findResult).to.be.a('array');
      expect(findResult).to.be.length(1);
      expect(findResult[0]._id).to.exist;
      expect(findResult[0].name).to.be.eq(task.name);
      expect(findResult[0].status).to.be.eq(task.status);
      expect(findResult[0].createdAt).to.exist;
    });
  });
});
