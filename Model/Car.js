// Constructor Pattern
// 1. New returns 'this'
// 2. Binds 'this' to new object scope
// 3. Creates new object

function Car(data) {
    this.name = data.name;
    this.cost = data.cost;

    this.toString = function () {
        return this.cost + " " + this.name;
    }
}

module.exports = Car;