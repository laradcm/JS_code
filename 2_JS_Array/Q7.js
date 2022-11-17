// 7. Write a JavaScript program to sort the items of an array. 

// Sample array : var arr1 = [ 3, 8, 7, 6, 5, -4, 3, 2, 1 ];
// Sample Output : -4,-3,1,2,3,5,6,7,8

//---------------sorting numbers---------------------

const arr1 = [ 3, 8, 7, 100, 5, -4, -3, 2, 1 ];
let arrR = [];
console.log("original array:\t\t" + arr1);

//ascending order 1st way
arrR = Array.from(arr1);
console.log("ascending 1 order:\t" + arrR.sort()); //bad for numbers

//ascending order 2nd way
arrR = Array.from(arr1);
console.log("ascending 2 order:\t" + arrR.sort((a,b) => a-b));

//descending order 
arrR = Array.from(arr1);
console.log("descending order:\t" + arrR.sort((a,b) => b-a));


console.log();
//---------------sorting strings---------------------

const arrW = ["Banana", "Orange", "Apple", "Mango", "Apple"];
console.log("original order:        \t" + arrW);

//words ascending
arrR = Array.from(arrW);
console.log("sort words ascending:\t" + arrR.sort());

//words descending
arrR = Array.from(arrW);
console.log("sort words descending:\t" + arrR.sort((a,b)=>b<a?-1:0));




// When the sort() function compares two values, 
//it sends the values to the compare function, 
//and sorts the values according to the returned (negative, zero, positive) value.

// If the result is negative a is sorted before b.

// If the result is positive b is sorted before a.

// If the result is 0 no changes are done with the sort order of the two values.