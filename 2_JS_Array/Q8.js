// 8. Write a JavaScript program to find the most frequent item of an array. 

// Sample array : var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
// Sample Output : a ( 5 times )

const arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
const arrR = Array.from(arr1);
const mostFrequent = findMostFrequent(arrR);

console.log(`${mostFrequent[0]} occurences of: ${mostFrequent[1]}`);

function findMostFrequent(arr){
    const arrTempVal = [];
    const arrTempIndex = [];
    let n = 0;
    let value;

    for (let val of arr) {

        if(!arrTempVal.includes(val)){
            arrTempVal.push(val);
            arrTempIndex.push(1); 
        }else{
            arrTempIndex[arrTempVal.indexOf(val)] += 1; 
        }

    }

    n = Math.max(...arrTempIndex);//needs the three dots as arg because it needs more than 1 input
    value = arrTempVal[arrTempIndex.indexOf(n)];
    console.log(arrTempVal);
    console.log(arrTempIndex);
    return [n,value];
}

