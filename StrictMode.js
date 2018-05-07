// We can use Strict Mode globally
// What is Strict Mode? = "JS is trying to help you, don't let it"
// Without strict mode JS will try to do thing for you
// sometimes you dont want to.
// 'use strict';
var x = 23;

var func = function() {
    // We can use it only in function scope
    'use strict'
}

console.log(x);