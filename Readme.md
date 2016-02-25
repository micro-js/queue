
# queue

[![Build status][travis-image]][travis-url]
[![Git tag][git-image]][git-url]
[![NPM version][npm-image]][npm-url]
[![Code style][standard-image]][standard-url]

Simple function queue

## Installation

    $ npm install @f/queue

## Usage

```js
var createQueue = require('@f/queue')
var queue = createQueue()

queue.push(function () {
  console.log('hello world')
})

queue.flush()
```

Or in ES6:

```javascript
import createQueue from '@f/queue'

const {add, flush} = createQueue()
add(() => console.log('hello world'))

setTimeout(flush)
```

## API

### queue()

**Returns:** An object containing two functions, `add` and `flush`. These are not on the prototype, so you can destructure them and you can use them without invoking them on the queue. `add` enqueues something and `flush` runs everything in the queue and clears it.

## License

MIT

[travis-image]: https://img.shields.io/travis/micro-js/queue.svg?style=flat-square
[travis-url]: https://travis-ci.org/micro-js/queue
[git-image]: https://img.shields.io/github/tag/micro-js/queue.svg?style=flat-square
[git-url]: https://github.com/micro-js/queue
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[standard-url]: https://github.com/feross/standard
[npm-image]: https://img.shields.io/npm/v/@f/queue.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@f/queue
