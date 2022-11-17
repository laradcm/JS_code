// 4. Write a JavaScript function to get the last element of an array.
// Passing a parameter 'n' will return the last 'n' elements of the array. 

// Test Data :
console.log(last([7, 9, 0, -2]));
console.log(last([7, 9, 0, -2],-3));
console.log(last([7, 9, 0, -2],6));
// Expected Output :
// -2
// [9, 0, -2]
// [7, 9, 0, -2]


function last(arr, n){
    let elements = [];
    if(n == undefined){
        elements = arr[arr.length-1];
    }else{
        // n = n<0? 0:n;
        // elements = arr.slice(-n);
        elements = arr.slice(Math.max(arr.length - n, 0)); 
    }
    return elements
}