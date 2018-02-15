'use strict'

const re = /]]>/g

exports.name = 'cdata'
exports.outputFormat = 'html'

exports.render = function (str) {
  const escaped = str.replace(re, ']]]]><![CDATA[>')
  return '<![CDATA[' + escaped + ']]>'
}
