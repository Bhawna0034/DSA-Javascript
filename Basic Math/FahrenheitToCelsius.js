//Convert Fahrenheit to Celsius
function fahrenheitToCelsius(fahrenheit){
    let celsius  = 5/9 *(fahrenheit - 32);
    return celsius;
}
const prompt = require("prompt-sync")();
const fahrenheit = parseFloat(prompt("Enter fahrenheit number: "));
const celsius = fahrenheitToCelsius(fahrenheit);
console.log(celsius);


