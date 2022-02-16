const sinon = require('sinon');
const { expect } = require('chai');
const findAllTasks = require('../../models/findAllTasks');
const { MongoClient } = require('mongodb');
const connectionMemory = require('../../util/functions/connectionMemory');

describe('Tests the list all tasks', () => {
  before(async () => {
    const connectionMock = await connectionMemory();
    sinon.stub(MongoClient, 'connect').resolves(connectionMock);
  });
  after(() => {
    sinon.reset();
  });

  describe('Tests the success case', () => {
    it('returns a array', async () => {
      const findResult = await findAllTasks();
      expect(findResult).to.be.a('array');
    });
  });
});
