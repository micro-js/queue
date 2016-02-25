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

  q.add(function () { t.pass() })
  t.plan(1)
  q.flush()
  // Make sure it really flushed and doesn't
  // re-run our fn
  q.flush()

  t.end()
})
