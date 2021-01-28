function test1(){
    console.log("test1")
}
test1()

var test2 = function(){
    console.log("test2")
}
test2()

function call(func){
    func()
}
call(test2)

var numbers = [1,2,4,6,7,9]

var modul_1 = require('./moduls/modul_1')
console.log(modul_1(numbers))

var module_2 = require('./moduls/modul_2')
console.log(module_2.size1(numbers))
console.log(module_2.multiply(10, 3))
console.log(module_2.goodbye('Maks'))