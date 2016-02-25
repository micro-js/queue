/**
 * Modules
 */

var forEach = require('@f/foreach-array')

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
      forEach(function (fn) { fn() }, fns)
      fns = []
    }
  }
}
