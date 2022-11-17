// 2. Write a JavaScript function to clone an array.

// Test Data :
// console.log(array_Clone([1, 2, 4, 0]));
// console.log(array_Clone([1, 2, [4, 0]]));
// [1, 2, 4, 0]
// [1, 2, [4, 0]]



const originalArray = [1, 2, 4, 0];
let finalArray = array_Clone(originalArray);

console.log(originalArray);
console.log(finalArray);


function array_Clone(array){
    let resultArr = [];
    resultArr = array.sort();
    resultArr[0] = 400;
    return resultArr;
}

//resultArr = array.slice();
//resultArr = Array.from(array);
//resultArr = [...array];
//resultArr = array.map(a=>a);
//resultArr = array.filter(()=>true);

