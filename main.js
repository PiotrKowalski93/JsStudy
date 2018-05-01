var Car = require('./creationalDesignPatterns')
var Person = require('./person')

var firstCar = new Car("Honda", 55000);
console.log(firstCar.toString());

var person = new Person("Piotr", 24);
console.log(person.toString());