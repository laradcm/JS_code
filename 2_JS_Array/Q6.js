// 6. Write a JavaScript program which accept a number as input and insert dashes (-) between 
// each two even numbers. 

// For example if you accept 025468 the output should be 0-254-6-8. 

//console.log(evenDash(25468));

console.log(evenDash("022154456"));

function evenDash(inputNumber){
    let numArr = inputNumber.toString().split("");// why does it need to be a array

    for (let i = 0; i < numArr.length-1; i++) {

        if(is_even(numArr[i]) && is_even(numArr[i+1])){
           numArr[i] += "-";
        }
    }
    return numArr.join("");
}


function is_even(n){
    return n % 2 == 0;
}