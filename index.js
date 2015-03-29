'use strict';

var re = /\]\]>/g;

exports.name = 'cdata';
exports.outputFormat = 'html';

exports.render = function (str, options) {
  var escaped = str.replace(re, "]]]]><![CDATA[>");
  return '<![CDATA[' + escaped + ']]>';
}
