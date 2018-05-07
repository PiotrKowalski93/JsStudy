// Without strict mode this code will run and
// nothing will happen.
// That is bad because we want to know what is wrong.
'use strict'

var obj = {}

Object.defineProperty(obj, 'readOnly', {
    enumerable: false,
    configurable: false,
    writable: false,
    value: 'This value is readonly'
})

obj.readOnly = 'Something new';
console.log(obj.readOnly);