var assert = require('assert');
var fs = require('fs');
var join = require('path').join;

var transform = require('../');

var failed = false;

function assertEqual(output, expected) {
  console.log('\tOutput:', JSON.stringify(output));
  console.log('\tExpected:', JSON.stringify(expected));
  if (output !== expected) {
    console.log('\tFAILED');
    failed = true;
  } else {
    console.log('\tPASSED');
  }
}

function test(file, desc) {
  file = join(__dirname, 'THING-' + file + '.txt');
  var input = fs.readFileSync(file.replace('THING', 'sample'), 'utf8');
  var expected = fs.readFileSync(file.replace('THING', 'expected'), 'utf8');
  try {
    console.log('\n' + desc + ':');
    output = transform.render(input);
    assertEqual(output, expected);
  } catch (e) {
    failed = true;
    console.error(e.stack);
  }
}
test('a', 'Regular input');
test('b', 'Input with `]]>`');

console.log('\nTests ' + (failed ? 'FAILED' : 'PASSED'));

if (failed) process.exit(1);
