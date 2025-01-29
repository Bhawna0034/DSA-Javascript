//Convert Celsius To Fahrenheit
function celsiusToFahrenheit(celsius){
    let fahrenheit = celsius* (9/5) + 32;
    return fahrenheit;
}

const prompt = require("prompt-sync")();
const celsius = parseFloat(prompt("Enter celsius number: "));
const fahrenheit = celsiusToFahrenheit(celsius);
console.log(fahrenheit);