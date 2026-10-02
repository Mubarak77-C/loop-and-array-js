function reverseString(str){
    let blank=""
for(let i=str.length-1;i>=0;i--){
   // blank +=str  // Hello World Hello World Hello World Hello World Hello World Hello World Hello World Hello World Hello World Hello World Hello World 
blank +=str[i]
}
return blank;
}

let result=reverseString('Hello World ')
console.log(result)