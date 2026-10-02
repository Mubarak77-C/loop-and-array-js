function reverseString(str){
    // 1. Handle the edge case for blank strings
 if(str === '') return '';  
 
 // 2. Handle all other strings by splitting, reversing, and joining
 return str.split('').reverse().join('');
}

module.exports = reverseString