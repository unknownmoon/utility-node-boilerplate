# utility-node-boilerplate

> Note that this project is still in preview stage

[![GitHub version](https://badge.fury.io/gh/unknownmoon%2Futility-node-boilerplate.svg)](https://badge.fury.io/gh/unknownmoon%2Futility-node-boilerplate)

| Master | Develop |
| ------ | ------- |
| [![Build Status Master](https://travis-ci.org/unknownmoon/utility-node-boilerplate.svg?branch=master)](https://travis-ci.org/unknownmoon/utility-node-boilerplate) | [![Build Status Develop](https://travis-ci.org/unknownmoon/utility-node-boilerplate.svg?branch=develop)](https://travis-ci.org/unknownmoon/utility-node-boilerplate)|

Simple NodeJS boilerplate, with basic unit test powered by [Mocha][mocha-link]/[Chai][chai-link]/[Sinon][sinon-link];

__Table of Contents__

<!-- MarkdownTOC -->

- [Initialisation](#initialisation)
- [Clean Up](#clean-up)
- [Test](#test)

<!-- /MarkdownTOC -->

<a name="initialisation"></a>
## Initialisation

```bash
# Have Node ^6.0.0 & NPM ^3.8.6 installed

# install dependencies
npm install
```

<a name="clean-up"></a>
## Clean Up

```bash
# remove the built code, for now only the test result 
npm run clean

# remove the built code and node modules
npm run reset
```

<a name="test"></a>
## Test

```bash
npm test
```

<!-- links -->
[mocha-link]: http://mochajs.org/
[chai-link]: http://chaijs.com/ 
[sinon-link]: http://sinonjs.org/

