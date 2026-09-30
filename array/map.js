// console.log('hi')
//'use strict'; is used to enforce stricter parsing and error handling in your JavaScript code.
'use strict';

function addOne(num){
return num+1;
}

const arr=[1,2,3,4,5]
const mapping = arr.map(addOne);
console.log(`Adding with one in array with map creating new array without touch original array  ${mapping}`);