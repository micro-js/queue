/**
 * Modules
 */

var map = require('@f/map-array')

/**
 * Expose queue
 */

module.exports = queue

/**
 * queue
 */

function queue () {
  var fns = []

  return {
    add: function (fn) { fns.push(fn) },
    flush: function () {
      var result = map(function (fn) { return fn() }, fns)
      fns = []
      return result
    }
  }
}
