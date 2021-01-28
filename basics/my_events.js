var events = require('events')

var myEmit = new events.EventEmitter()

myEmit.on('some-event', function (name) {
    console.log(`Hello ${name}`)
})

myEmit.emit('some-event', 'Homer')