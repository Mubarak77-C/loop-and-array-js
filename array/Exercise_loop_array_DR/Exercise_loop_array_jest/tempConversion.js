console.log('hi')

//formula celcius = (x × ⁠9/5⁠ + 32) °F
//x °F ≘ (x − 32) × ⁠5/9⁠ °C        #this is celciyse

//#dry run
// function tempConversion(num){
//     let f =((num -32)*5/9) 
//     console.log(Math.floor(f))
//     let c = ((num * 9/5+32))
//     console.log(c);
// }

// tempConversion(0);

//jest test with 2 function 

const convertToCelsius= function (fahrenheit){
 let celcius = (fahrenheit -32) * 5/9;
 return Number(celcius.toFixed(1));
}

const convertToFahrenheit = function (celcius){
 let fahrenheit = (celcius *9/5+32)
 return Number(fahrenheit.toFixed(1))
}

module.exports =  {
    convertToCelsius,
    convertToFahrenheit
};