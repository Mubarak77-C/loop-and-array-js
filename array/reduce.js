
'use strict';

//total ,currentItem 
//rather than loop iterate with calculating so simple used reduce 
// arr.reduce(accumulator,currentItem , 0); acc-with initial value like sum=0 then sum+=currentItem 
//currentItem - elemetn of arr with index 

//multiple each element in arry
const arr=[1,2,3,4,5];
const reduceArr = arr.reduce((total, currentItem)=>{
 return total*currentItem; //if you forget to write return it will give undefined error;
},1); // here intial value 1 start of total 1*currentItem in arr elemeent till length upto

console.log(reduceArr);  //120;
console.log(arr); // original arr