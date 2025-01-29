//Swap Two Number with using Third Variable
let a = 10, b = 20;
console.log(`Before swapping, a = ${a} and b = ${b}`);

// let temp = a;
// a = b;
// b = temp;

// console.log(`After swapping, a = ${a} and b = ${b}`);

//Swap Two Number without using Third Variable

[a, b] = [b, a];
console.log(`After swapping, a = ${a} and b = ${b}`);