console.log('hi')
 
function leapYears(arrs){
 for(let arr of arrs){
 // A year is a leap year if:
    // (divisible by 4 AND NOT divisible by 100) OR (divisible by 400)
    if ((arr % 4 === 0 && arr % 100 !== 0) || (arr % 400 === 0)) {
      console.log(arr, "-> This is a leap year");
    } else {
      console.log(arr, "-> Not a leap year");
}
 }
}
arrs=[1996,1997,34992,1900,1600,700]
leapYears(arrs);
console.log("By using alternative way for loop")
for(let i=0 ; i<arrs.length;i++){
   let arr=arrs[i]
    if((arr%4==0 && arr%100!==0) || (arr%400==0) ){
        console.log(arr,"->this is leap Year")
    }
    else{
        console.log(arr,"-> this is not leap Year")
    }
}
// console.log(1996%4==0)
// console.log(1996%100!==0)
//module.exports=leapYears; 