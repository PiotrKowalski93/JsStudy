// var task = {};
// task.title = 'My Title';
// task.description = 'My Description';
// task.toString = function(){
//     return this.title;
// }
// task.toString();

// var task = Object.create(Object.prototype);

// task.title = 'My Title';
// task.description = 'My Description';

// var task = new Object();

// task.title = 'My Title';
// task.description = 'My Description';

// Object.defineProperty(task, 'toString', {
//     value: function (){
//         return this.title;
//     },
//     writable: false,
//     enumerable: true,
//     configurable: true
// })

// console.log(task.toString());

var Task = function(name) {
    this.name = name;
    this.isCompleted = false;
}

Task.prototype.complete = function() {
    console.log("Completing Task: " + this.name);
    this.isCompleted = true;
}

Task.prototype.save = function() {
    console.log("Saveing Task: " + this.name);
}

var myTask = new Task('Legacy Task');
// myTask.complete();
// myTask.save();

// Decorator Pattern
// we can use call(this) to bind object
var urgenTask = new Task('Urgen Task');

urgenTask.notify = function() {
    console.log('Notify Func');
}

urgenTask.complete();
urgenTask.save = function() {
    this.notify();
    Task.prototype.save.call(this);
}

urgenTask.save();