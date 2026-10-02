function reverseString(str){
    // 1. Handle the edge case for blank strings
 if(str === '') return '';  
 
 // 2. Handle all other strings by splitting, reversing, and joining
 return str.split('').reverse().join('');
}


// Another approach could be to loop over the string in reverse direction to construct a new one
/*
  const reverseString = function (string) {
    let reversedString = "";

    for (let i = string.length -1; i >= 0; i--) {
      reversedString += string[i];
    }
    return reversedString;
  };
*/ 

module.exports = reverseString