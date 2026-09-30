// console.log('hi')

//in filter same as map callback function again in boolean type either true or false with condtion if greater 18 true or false return only
//Let’s say we had a function, isOdd that returns either true if a number is odd or false if it isn’t.

//The filter method expects the callback to return either true or false. 
//Mean  base on return true value it will return value if filter even all if true then from 1 upto 10 it will return 2,4,6,8,10

function isOdd(num){
    if(num%2!==0){
        return num;
    }
}

const arr=[1,2,3,4,5,6,7,8,9,10];
const filArr = arr.filter(isOdd);
console.log(filArr);  //filter array only true value odd is return from function
console.log(arr); //original arr

//or in simple arrow function

//here make mistake it alway return empty becuase you not assing to store and used unwanted {}
// console.log(arr.filter((num)=>{
//     num%2!==0
// })
// );

//solve recommended clear code
//filter not define when missed arr to put like filter(num=>num%2!==0); only
const filArr2 = arr.filter(num=>num%2!==0); 
console.log(filArr2);