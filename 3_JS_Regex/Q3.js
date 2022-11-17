// Exercise 03
// Using a regex pattern, find the monetary value contained within the ex3 string.

const ex3 = 'The salad costs $9.99 $3.444';

const money = /\B\$(\d+\.\d{2})\b/g; //for some reason \b doesnt work with \$ or \. .. etc

console.log(ex3.match(money));
