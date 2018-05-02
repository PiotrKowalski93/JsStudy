
// var firstCar = new Car("Honda", 55000);
// console.log(firstCar.toString());

// Prototypes
// To do not create toString Function for every car we can use prototypes
function Car2(name, cost) {
    this.name = name;
    this.cost = cost;
}

Car2.prototype.toString = function () {
    return this.cost + " " + this.name;
}

var car = new Car2("Opel", 10000);
var car2 = new Car2("Opel", 12000);

// console.log(car.toString());
// console.log(car2.toString());

// module.exports = Car;