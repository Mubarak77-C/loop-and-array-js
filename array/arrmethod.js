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