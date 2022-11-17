// Exercise 04
// Using a regex pattern, find the telephone number contained within the ex4 string.

const ex4 = 'Contact customer support on 0800 300 500 also 0800-333444 or 0800111222333444555';

const telNumber = /\b\d{4}\s?-?\d{3}\s?-?\d{3}\b/g;

console.log(ex4.match(telNumber));