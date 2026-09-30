// console.log("array")

function sumOfTripledEvens(arr){
    let sum = 0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]%2==0){  //check it true print if false not print upto 1 to 5 all checked 
            // console.log(arr[i]);  //2 , 4 even nos
        let tripple = arr[i] *3;   //2*3=6 , 4*3 =12  ans 6 and 12  
            sum+=tripple;    // here process above here
            //like 0+2*3 = 6 
            // then 6 prev sum hold+ 4 arr[i]*3  from above formula = 12
        console.log(tripple);    
    }
    }
}


let array=[1,2,3,4,5];
sumOfTripledEvens(array);