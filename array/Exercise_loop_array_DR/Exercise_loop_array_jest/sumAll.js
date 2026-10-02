
function sumAll(min,max){
  // Check for negatives, correct types, AND make sure they are integers
    if (
        min < 0 || 
        max < 0 || 
        typeof min !== 'number' || 
        typeof max !== 'number' || 
        !Number.isInteger(min) || 
        !Number.isInteger(max)
    ) {
        return 'ERROR';
    }

    // Handle larger number first (Swap if needed)
    if(min>max){
        temp =min;
        min=max;
        max = temp;
    }

    // 3. Changed i < max to i <= max so it includes the 'max' number
    const number = [];
    for(let i=min; i<=max;i++){
        number.push(i);
    }

    // 4Now you can use .reduce() on the array!

    return number.reduce((total,currentItem)=> total+currentItem,0);

 }



let sumresult=sumAll(1,4);

console.log(sumresult);

module.exports =  sumAll