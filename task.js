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

var task = new Object();

task.title = 'My Title';
task.description = 'My Description';

Object.defineProperty(task, 'toString', {
    value: function (){
        return this.title;
    },
    writable: false,
    enumerable: true,
    configurable: true
})

console.log(task.toString());