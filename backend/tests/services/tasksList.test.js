const sinon = require('sinon');
const { expect } = require('chai');
const taskList = require('../../services/tasksList');
const { MongoClient } = require('mongodb');
const connectionMemory = require('../../util/functions/connectionMemory');

const dbName = 'ToDoList';
const collection = 'tasks';

describe('Tests the list all tasks service', () => {
  let connectionMock;

  before(async () => {
    connectionMock = await connectionMemory();
    sinon.stub(MongoClient, 'connect').resolves(connectionMock);
  });
  after(() => {
    // await connectionMock.db(dbName).collection(collection).drop();
    MongoClient.connect.restore();
    sinon.reset();
  });

  describe('Tests the success case', () => {
    it('returns a array', async () => {
      const findResult = await taskList();
      expect(findResult).to.be.a('array');
    });
  });
});
