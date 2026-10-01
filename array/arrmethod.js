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

alert( filtered ); // 3,1 (matching values)

alert( arr ); // 5,3,8,1 (not modified)


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

alert( arr1 ); // [3, 1]