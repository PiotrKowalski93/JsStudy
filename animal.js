function Animal() {
}

Animal.prototype.speak = function(){
  console.log('Hello')
}

function Cat(name, color){
  this.name = name
  this.color = color
}

Cat.prototype = Object.create(Animal.prototype)
Cat.prototype.age = 4

var fluffy = new Cat('Fluffy', 'White')

console.log(fluffy.age)

fluffy.age = 5
console.log(fluffy.__proto__.age)
console.log(fluffy.age)

fluffy.speak()

// Cat.prototype = { age: 6 }
// console.log(fluffy.__proto__.age)

// var muffin = new Cat('Muffin', 'White')
// console.log(muffin.age)

// muffin.speak()