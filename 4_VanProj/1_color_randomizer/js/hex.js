

const hex = [0, 1, 2, 3, 4, 5 ,6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");


btn.addEventListener("click", ()=>{
    const randomColor = populateRandomColor(hex, 6)
    document.body.style.background = randomColor;
    color.textContent = randomColor;

})

function populateRandomColor(arr , length){
    
    let str = "#";

    for (let i = 0; i < length; i++) {
        
        str += arr[getRadomNum(0, arr.length)];

    }

    return str;

}

function getRadomNum(min, max){

    return Math.floor(Math.random()*max + min);
    
 }