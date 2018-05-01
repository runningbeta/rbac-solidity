// https://github.com/OpenZeppelin/openzeppelin-solidity/blob/master/test/helpers/expectEvent.js

const assert = require('chai').assert;

const inLogs = async (logs, eventName) => {
  const event = logs.find(e => e.event === eventName);
  assert.exists(event);
  return event;
};

const inTransaction = async (tx, eventName) => {
  const { logs } = await tx;
  return inLogs(logs, eventName);
};

module.exports = {
  inLogs,
  inTransaction,
};
