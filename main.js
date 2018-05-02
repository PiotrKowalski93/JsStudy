var Car = require('./creationalDesignPatterns')
var Person = require('./person')
var Module = require('./Module')
var Exports = require('./Exports')

Exports.sayHello();
Exports.sayHi();

// var firstCar = new Car("Honda", 55000);
// console.log(firstCar.toString());

var person = new Person("Piotr", 24);
// console.log(person.toString());

var secondCar = new Car(Module.get(1));
console.log(secondCar.toString())