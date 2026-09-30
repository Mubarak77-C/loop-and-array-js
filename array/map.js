// console.log('hi')
//'use strict'; is used to enforce stricter parsing and error handling in your JavaScript code.
'use strict';
//map returns a new array and does not change the original array.
function addOne(num){
return num+1;
}

const arr=[1,2,3,4,5]
const mapping = arr.map(addOne);
console.log(`Adding with one in array with map creating new array without touch original array  ${mapping}`);
console.log(arr);  // original arr still same not changes

//we also do in same in with simple arrow function

let mappArr=arr.map((num)=> num+1);
console.log(mappArr);