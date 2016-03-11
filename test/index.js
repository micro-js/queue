/**
 * Imports
 */

var queue = require('..')
var test = require('tape')

/**
 * Tests
 */

test('should work', function (t) {
  var q = queue()

  q.add(function () { t.pass(); return 2;})
  t.plan(2)
  var result = q.flush()
  t.deepEqual(result, [2])
  // Make sure it really flushed and doesn't
  // re-run our fn
  q.flush()

  t.end()
})
