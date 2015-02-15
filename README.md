# jstransformer-cdata

Transformer that converts a string to an XML CDATA.

[![Build Status](https://img.shields.io/travis/jstransformers/jstransformer-cdata/master.svg)](https://travis-ci.org/jstransformers/jstransformer-cdata)
[![Coverage Status](https://img.shields.io/coveralls/jstransformers/jstransformer-cdata/master.svg)](https://coveralls.io/r/jstransformers/jstransformer-cdata?branch=master)
[![NPM version](https://img.shields.io/npm/v/jstransformer-cdata.svg)](https://www.npmjs.org/package/jstransformer-cdata)

## Installation

    npm install jstransformer-cdata

## API

```js
var cdata = jstransformer(require('jstransformer-cdata'))

cdata.render('hello world')
//=> '<![CDATA[hello world]]>'

// ']]>' is properly escaped:
cdata.render('<[[goodbye world]]>')
//=> '<![CDATA[<[[goodbye world]]]]><![CDATA[>]]>'
```

## License

MIT
