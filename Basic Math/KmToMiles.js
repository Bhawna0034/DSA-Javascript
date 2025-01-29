//Convert KM to Miles
const prompt = require('prompt-sync')();
const KM = parseFloat(prompt("Enter a KM to convert in miles: "));
const factors = 0.621371;
let miles = KM * factors;
console.log(miles);
