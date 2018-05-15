// We can use Strict Mode globally
// What is Strict Mode? = "JS is trying to help you, don't let it"
// Without strict mode JS will try to do thing for you
// sometimes you dont want to.
'use strict';
var x = 23;

var func = function() {
    // We can use it only in function scope
    'use strict'
}

console.log(x);

var obj = {
    value: 'Hi there',
    printVal: function(){
        console.log(this.value);
    }
}

var obj2 = {
    value: "What's up",
}

// This will not work with strict mode
var print = obj.printVal;
// print();

obj2.printVal = obj.printVal;
// obj2.printVal();

// binding scope of obj2 to print2
var print2 = obj.printVal.bind(obj2)
print2()

var obj3 = function() {
    // This is a good practice to be sure that we
    // are operating on a good scope
    var _this = this;
}

