function reverseString(str){
    let blank="";  //take each words and store with index and without index whole word

    //string method used in daily life web dev 
   const countStr =str.length
   console.log(countStr);

   const trimStr = str.trim();
   console.log(trimStr);  //space remove look at end there is space that removed and get printed in console

   const lowerStr= str.toLowerCase();
   console.log(lowerStr);

   const upperStr = str.toUpperCase();
   console.log(upperStr)

   //string.includes() - to check word,char, sub string are exist if true print else false not print 
   if(str.includes("World")){
    console.log(`true i having World in sentence`) //World
   }else{
    console.log(`No this is not in sentence`) //world ,it check exact pass if lower case then false
   }

   //.split() (The Bridge to Arrays)- convert string to array
   const splitStr=str.split(" ");
   console.log(splitStr)

   //.slice() (Extraction & Truncating)-like bread slice rest remainging give me mean get result
   //str.slice(index initial ,  upto length )
   const slicstr=str.slice(0,5) //0 is index start and length 5 upto 
   console.log(slicstr)

   //replaceAll and replace() only in SEO USED
   const strreplaceAll = str.replaceAll("","-").replace("d","d!");
   console.log(strreplaceAll)

   //.startsWith() & .endsWith() (Validation & Routing)
   let text = "/api/v1/users";
   if(text.startsWith("/api")){
      console.log("Yes, starting with api correct")
   }

//Interview Classic: .substring() vs .slice()
//.slice(): Accepts negative indices (counts from the back of the string).

//.substring(): Treats negative indices as 0 and swaps arguments if start > end.
console.log(str)
console.log(str.slice(-4))  //rld  there is space at end so used trim then for four word come orld rather rldspace where not visisvle space 
console.log(`by trim whitespace remove and ans will and slice : ${str.trim().slice(-4)}`)


//************Actual code reverse string */
   //started loop for reverseString
for(let i=str.length-1;i>=0;i--){
   // blank +=str  // Hello World Hello World Hello World Hello World Hello World Hello World Hello World Hello World Hello World Hello World Hello World 
blank +=str[i]
}
return blank;
}

let result=reverseString('Hello World ')
console.log(result)