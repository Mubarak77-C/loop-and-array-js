function repeatString(word, num){
    if(num<0) return "ERROR";
    let blank="";
    for(let i=0;i<num;i++){
        blank +=word;

    }
    return blank;
}



module.exports = repeatString;