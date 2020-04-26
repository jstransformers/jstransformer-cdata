# jstransformer-cdata

[JSTransformer](http://github.com/jstransformers) that converts a string to an XML CDATA.

[![Build Status](https://img.shields.io/travis/jstransformers/jstransformer-cdata/master.svg)](https://travis-ci.org/jstransformers/jstransformer-cdata)
[![Coverage Status](https://img.shields.io/codecov/c/github/jstransformers/jstransformer-cdata/master.svg)](https://codecov.io/gh/jstransformers/jstransformer-cdata)
[![Dependency Status](https://img.shields.io/david/jstransformers/jstransformer-cdata/master.svg)](http://david-dm.org/jstransformers/jstransformer-cdata)

[![NPM version](https://img.shields.io/npm/v/jstransformer-cdata.svg)](https://www.npmjs.org/package/jstransformer-cdata)

## Installation

    npm install jstransformer-cdata

## API

```js
var cdata = require('jstransformer')(require('jstransformer-cdata'))

cdata.render('hello world').body
//=> '<![CDATA[hello world]]>'

// ']]>' is properly escaped
cdata.render('<[[goodbye world]]>').body
//=> '<![CDATA[<[[goodbye world]]]]><![CDATA[>]]>'
```

## License

MIT
