

var WeakSet = require('../cjs');

test();

delete require.cache[require.resolve('../cjs')];
delete global.WeakSet;

WeakSet = require('../cjs');

test();

function test() {
  var a = {};

  var ws1 = new WeakSet;

  console.assert(ws1.has(a) === false);
  console.assert(ws1.add(a) === ws1);
  console.assert(ws1.has(a) === true);
  console.assert(ws1.add(a) === ws1);
  console.assert(ws1.delete(a) === true);
  console.assert(ws1.has(a) === false);
}
