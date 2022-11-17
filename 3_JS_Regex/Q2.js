// Exercise 02
// Using a regex pattern, remove all of the numbers from the ex2 string.

const ex2 = 'A1B2C3D4E5F996G7H8I9J10';

const numbers = /\d/g;

let finalString = ex2.replace(numbers,"");

console.log(finalString);

