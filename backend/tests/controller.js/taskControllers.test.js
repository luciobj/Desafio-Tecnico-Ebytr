const sinon = require('sinon');
const { expect } = require('chai');
const { findAllTasksController } = require('../../controllers/taskControllers');
const { MongoClient } = require('mongodb');
const connectionMemory = require('../../util/functions/connectionMemory');

const dbName = 'ToDoList';
const collection = 'tasks';

describe('Tests the tasks controllers', () => {
  describe('Tests the get all tasks controller', () => {
    let connectionMock;
    const request = {};
    const response = {};
    const next = {};

    before(async () => {
      connectionMock = await connectionMemory();
      sinon.stub(MongoClient, 'connect').resolves(connectionMock);
      request.body = {};
      response.status = sinon.stub()
        .returns(response);
      response.json = sinon.stub()
        .returns();
    });
    after(async () => {
      await connectionMock.db(dbName).collection(collection).drop();
      MongoClient.connect.restore();
      sinon.reset();
    });

    describe('Tests the success case', () => {
      it('returns an empty array, when nothing is in the database', async () => {
        await findAllTasksController(request, response, next);
        console.log(response);
        console.log(response.json);
        expect(response.status.calledWith(200)).to.be.equal(true);
        expect(response.json).to.be.a('array');
        expect(response.json).to.be.length(0);
      });
      it('returns a array containing the inserted objects', async () => {
        const task = {
          name: 'Clean the office',
          status: 'Pending',
          createdAt: ''
        };
        await connectionMock.db(dbName).collection(collection).insertOne(task);
        await connectionMock.db(dbName).collection(collection).updateOne({ name: task.name }, { $currentDate: { createdAt: true } });
        await findAllTasksController(request, response, next);
        expect(response.status.calledWith(200)).to.be.equal(true);
        expect(response.json).to.be.a('array');
        expect(response.json).to.be.length(1);
        expect(response.json.calledWith([{ _id }])).to.exist;
        expect(response.json.calledWith([{ name: task.name }])).to.be.equal(true);
        expect(response.json.calledWith([{ status: task.status }])).to.be.equal(true);
        expect(response.json.calledWith([{ createdAt: task.createdAt }])).to.be.equal(true);
        expect(response.json.calledWith([{ createdAt }])).to.exist;
      });
    });
  });
});
