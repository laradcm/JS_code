// 1. Write a JavaScript function to check whether an `input` is an array or not. 

// Test Data :
// console.log(is_array('w3resource'));
// console.log(is_array([1, 2, 4, 0]));
// false
// true



console.log(is_datatype('w3resource', "String"));
console.log(is_datatype({1:1, 2:2, 3:0}, "Object"));
console.log(is_datatype(3, "Number"));

console.log(is_datatype([1, 2, 4, 0], "Array"));
console.log(is_datatype([1, 2, 4, 0], "Oject"));
console.log(is_datatype([1, 2, 4, 0], "Number"));


function is_datatype(variable, datatype){ // works for any datatype
   return Object.prototype.toString.call(variable) === `[object ${datatype}]`;
}


// function is_array2(val){

//    return Array.isArray(val);

// }


// function is_array(input){
//    return input.constructor === Array;
// }

