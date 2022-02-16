const sinon = require('sinon');
const { expect } = require('chai');
const findAllTasks = require('../../models/findAllTasks');

describe('Tests the list all tasks', () => {
  describe('Tests the success case', () => {
    it('returns a array', async () => {
      const findResult = await findAllTasks();
      expect(findResult).to.be.a('array');
    });
  });
});
