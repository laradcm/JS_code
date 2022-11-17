const colors = ["blue", "pink", "rgba(120, 200, 0)", "#f15025"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", () =>{
    const randomNum = getRadomNum(0, colors.length);
    console.log(randomNum);
    document.body.style.backgroundColor = colors[randomNum];
    color.textContent = colors[randomNum];
})

function getRadomNum(min, max){
   return Math.floor(Math.random()*max + min)
}