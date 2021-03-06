# utility-node-boilerplate

> Note that this project is still in unstable stage

[![GitHub version](https://badge.fury.io/gh/unknownmoon%2Futility-node-boilerplate.svg)](https://badge.fury.io/gh/unknownmoon%2Futility-node-boilerplate)
[![Dependency Status](https://david-dm.org/unknownmoon/utility-node-boilerplate.svg)](https://david-dm.org/unknownmoon/utility-node-boilerplate)
[![devDependency Status](https://david-dm.org/unknownmoon/utility-node-boilerplate/dev-status.svg)](https://david-dm.org/unknownmoon/utility-node-boilerplate#info=devDependencies)

| Master | Develop |
| ------ | ------- |
| [![Build Status Master](https://travis-ci.org/unknownmoon/utility-node-boilerplate.svg?branch=master)](https://travis-ci.org/unknownmoon/utility-node-boilerplate) | [![Build Status Develop](https://travis-ci.org/unknownmoon/utility-node-boilerplate.svg?branch=develop)](https://travis-ci.org/unknownmoon/utility-node-boilerplate) |
| [![codecov](https://codecov.io/gh/unknownmoon/utility-node-boilerplate/branch/master/graph/badge.svg)](https://codecov.io/gh/unknownmoon/utility-node-boilerplate) | [![codecov](https://codecov.io/gh/unknownmoon/utility-node-boilerplate/branch/develop/graph/badge.svg)](https://codecov.io/gh/unknownmoon/utility-node-boilerplate) |

Simple NodeJS boilerplate, with basic unit test powered by [Mocha][mocha-link]/[Chai][chai-link]/[Sinon][sinon-link];

__Table of Contents__

<!-- MarkdownTOC -->

- [Development](#development)
    - [Initialisation](#initialisation)
    - [Clean Up](#clean-up)
    - [Test](#test)
    - [Build](#build)
    - [Generate JSDoc Documentation](#generate-jsdoc-documentation)
    - [Release](#release)

<!-- /MarkdownTOC -->

<a name="development"></a>
## Development

<a name="initialisation"></a>
### Initialisation

```bash
# Have Node ^6.0.0 & NPM ^3.8.6 installed

# install dependencies
npm install
```

<a name="clean-up"></a>
### Clean Up

```bash
# remove the built code, for now only the test result 
npm run clean

# remove the built code and node modules
npm run reset
```

<a name="test"></a>
### Test

Coverage report can be found in `./coverage` folder.

```bash
npm test
```

<a name="build"></a>
### Build

The source code is written in ES2015, hence before NodeJS fully support ES2015, we need to build the code to `es2015-node` using [Babel][babel-link].

The built code can be found in `./dist` folder. 

```bash
npm run build
```

<a name="generate-jsdoc-documentation"></a>
### Generate JSDoc Documentation

```bash
# generate the documentation
npm run doc

# serve the generated documentation using `http-server`
# note that no watch functionality is hooked, hence
# changing code won't trigger documentation regeneration.
npm run serve-doc
```

<a name="release"></a>
### Release

Shorthand script to generate release content, including `./coverage`, `./jsdoc` and `./dist`.

```bash
npm run release
```

<!-- links -->
[mocha-link]: http://mochajs.org/
[chai-link]: http://chaijs.com/ 
[sinon-link]: http://sinonjs.org/
[babel-link]: https://babeljs.io/

