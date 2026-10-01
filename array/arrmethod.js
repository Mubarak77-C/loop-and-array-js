function camelise(str){
    return str 
    .split('-')  //my-long-word to [ "my", "long", "word" ]
    //map only taking array from split in with conditon  ['my','Long','Word']
    .map(
        (word,index,) =>
             index ==0 ? word : word[0].toUpperCase()+word.slice(1)
    ) //it create new array ['my','Long','Word']
    // .join('');  //at last it will myLongWord
}


const str="my-long-word";

console.log(str);
//make split str will [']and then do map then join like will 
const result=camelise(str)
console.log(result);
//or call
// console.log(camelise(str));

//##
function filterRange(arr,a,b){
    return arr
    .filter(item=>(a<=item && item<=b))  //item take any name this hold array all element and check with conditon with a an b as given

}

let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

//alert( filtered ); // 3,1 (matching values)

//alert( arr ); // 5,3,8,1 (not modified)


//###
//only understand here filterRangeplace not used .filter() look down

//it between rage from 1 to 4 and rest in array should delete as false
function filterRangeInPlace(arr1,a,b){
    for(let i=0 ; i<arr1.length;i++){
        let value=arr1[i];
        if(value<a || value>b){
            arr1.splice(i,1);
            i--;
        }
    }
}

let arr1 = [5, 3, 8, 1];

filterRangeInPlace(arr1, 1, 4); // removed the numbers except from 1 to 4

//alert( arr1 ); // [3, 1]

//sorting

let arrs= [5, 2, 1, -10, 8];

// ... your code to sort it in decreasing order

arrs.sort((a,b)=> b-a)
//alert( arrs); // 8, 5, 2, 1, -10

//slice() - it mean slice bread and give remainigng 
//it work on both array number and string 
//slice(2)- it start from index 2 upto length will display rest from index 0 ,1 it cut slice ignore
let arrslice='hello'; //string 
console.log(arrslice.slice(1)); //it iwll ello where h will cut
console.log(arrslice);

//with nunber arr
let numarr= [10,20,30,40,52]
console.log(numarr.slice(2)); //30,40,52
console.log(numarr)

//#sort

function copySorted(arr4){
   return arr4.slice().sort();
}

let arr4 = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr4);

console.log( "created new arr with sorted",sorted ); // CSS, HTML, JavaScript
console.log("original sort arr" ,arr4 ); // HTML, JavaScript, CSS (no changes)

//

class Calculator {
  calculate(expression) {
    // A simple evaluation for demonstration
    return eval(expression); 
  }
}

//it create an object by new
let calc = new Calculator;  //with new keyword obj array created

console.log( calc.calculate("3 + 7") ); // 10

//shufle by random number
//JavaScript matches arguments to parameters by position, not by name.
//mean down instead array we can use same array name as arr5; result same
function shuffle(array){
    array.sort(()=>Math.random() - 0.5); //i forget to give parenthesis () in random as random() where output in series only arr display while it random shuffle while each run
}

let arr5=[1,2,3,4,5];
shuffle(arr5);
console.log(arr5);

//same as above but here used by developer for shuffle fisher hater algorithm
//for loop from backward length then formula then swap;


function shuffle1(array){
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
    return array // if not written this return statement then o/p undefined 
}
let  array= ['abc','def','ghi','jkl']
let resultshuffle= shuffle1(array) ;
console.log(resultshuffle)

