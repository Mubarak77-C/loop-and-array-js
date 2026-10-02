// console.log('hi')

function repeatString(str,num){
 //   console.log(str,num)  //pasing arg in parameter is passed output printing
    let blank="";
 if(num<0 && str===null) return 'ERROR'
    for(let i=0;i<num;i++){

  //  blank   += str[i]; //this getting by index because you added i like str[i]
   
  //we need whole string in blank with loop it will 3times will execuse so whole only keep str without index i
    blank += str;
       
    //  console.log(str[i]) ; //hey from index 0 h 1e 2y upto num=3 length 
     //  console.log(num[i]) ; //undefined
    //   console.log(i);  //0,1,2

    }
    return blank;
}

 let result=repeatString('hey', 3) // returns 'heyheyhey'
 console.log(result);