//#DRY RUN
// function RemoveFromArray(arr,removeNo){
//     for(const a of arr){
//         console.log(a)
//     }
//     let result =[]
//     for(let i =0 ; i<arr.length ; i++){
//         //console.log(arr[i])
//         if(arr[i]===removeNo){
//             continue;  // Skip the number we want to remove
//         }else{     
//        //  result+=arr[i]  // by this it taking arr to string return like 1245
//        result.push(arr[i]); // Use .push() for arrays!
//         } 
//     }
//     return result;
// }

// const arr=[1,2,3,4,5]
// let removeNo=3
// const ans=RemoveFromArray(arr,removeNo)
// console.log(ans);


//by industrial used filter() same result as above 
// it only pass 3 where not used ... spread operator to take rest argument
//const removeFromArray = (arr, removeNo) => arr.filter(item => item !== removeNo);

const removeFromArray=(arr, ...args) => arr.filter(item => !args.includes(item))
console.log(removeFromArray([1, 2, 3, 4, 5], 3)); // [1, 2, 4, 5]


console.log("ERROR Ignore module exports because it for jest unit test case run in terminal npm test removeFromArray.spec.js")





module.exports = removeFromArray;