// Exercise 01
// Using a regex pattern, get the 3 letter words in the ex1 string.

const ex1 = 'The quick brown fox jumped over the lazy dog the';

const threeLetterWord = /\b\w{3}\b/g;

console.log(ex1.match(threeLetterWord));



