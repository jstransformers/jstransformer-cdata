'use strict';

exports.name = 'cdata';
exports.outputFormat = 'xml';

exports.render = function (str, options) {
  var escaped = str.replace(/\]\]>/g, "]]]]><![CDATA[>");
  return '<![CDATA[' + escaped + ']]>';
}
