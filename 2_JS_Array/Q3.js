// 3. Write a JavaScript function to get the first element of an array.
// Passing a parameter 'n' will return the first 'n' elements of the array.

// Test Data :
console.log(first([7, 9, 0, -2]));
console.log(first([],3));
console.log(first([7, 9, 0, -2],3));
console.log(first([7, 9, 0, -2],6));
console.log(first([7, 9, 0, -2],-3));
console.log(first([]));
// Expected Output :
// 7
// []
// [7, 9, 0]
// [7, 9, 0, -2]
// []


function first(array, n){
    let elements = [];
    
    if(n == undefined && n == null ) {
        
        elements = array[0];
    }else{
        n = n<0? 0: n;
        elements = array.slice(0,n);
    }

    return elements
}



// function first(array, n){
//     if(n == undefined) n=1;
//     if(n <0) n = 0;
//     return array.slice(0,n);
// }



// function first(array, n){
//     let elements = [];

//     if (n == undefined){
//         elements = array[0];
//     }else{
//         for(let i=0; i<n && i<array.length; i++){
//         elements[i] = array[i];
//         }
//     }
//     return elements;
// }