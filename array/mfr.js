
function tripplesum(arr){
    return arr
.filter(num=>num%2!==0) //// 1. Keeps odd numbers: [1, 3, 5]
.map(num=>num*3)  // 2. Triples each number: [3, 9, 15]
.reduce((sum,currentItem)=>sum+currentItem,0); // 3. Sums them up: 27
}

const arr = [1,2,3,4,5];

const result=tripplesum(arr);
console.log(result);