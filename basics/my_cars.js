var events = require('events')
var util = require('util')

var Car = function(model) {
    this.model = model    
}

util.inherits(Car, events.EventEmitter)

var bmw = new Car('BMW')
var audi = new Car('Audi')
var volvo = new Car('Volvo')

var cars = [bmw, audi, volvo]

cars.forEach(function(car) {
    //console.log(car.model)
    car.on('speed', function(text) {
        console.log(`${car.model} speed is ${text} km/h`)
    })
})

bmw.emit('speed', '192')
audi.emit('speed', '76')