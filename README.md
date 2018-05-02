# rbac-solidity 🃏

[![CircleCI](https://circleci.com/gh/runningbeta/rbac-solidity/tree/master.svg?style=svg)](https://circleci.com/gh/runningbeta/rbac-solidity/tree/master)

This is a RBAC (Role-Based Access Control) library based on [openzeppelin-solidity](https://github.com/OpenZeppelin/openzeppelin-solidity/blob/master/contracts/ownership/rbac/RBAC.sol) but using bytes32 type for roles. We use this RBAC implementation, combined with a delegate proxy in [r8-app](https://github.com/runningbeta/r8-app) project.

## Getting started

You will need [Truffle framework](http://truffleframework.com):
```bash
# Make sure we have the latest truffle version
npm uninstall -g truffle
npm install -g truffle@latest
```

To test this project locally, clone the repo and run:

```bash
# install dependencies
npm install

# run tests
truffle test
```

To use the code we provide an NPM package:

```bash
# install dependencies
npm install @runningbeta/rbac-solidity
```
