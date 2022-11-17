

const count = document.querySelector(".count");
const btnInc = document.getElementById("btn-increase");
const btnDec = document.getElementById("btn-decrease");
const btnRes = document.getElementById("btn-reset");

btnInc.addEventListener("click", ()=>{

    count.textContent++;
    updateStyle();

});


btnDec.addEventListener("click", ()=>{

    count.textContent--;
    updateStyle();

});


btnRes.addEventListener("click", ()=>{

    count.textContent = 0 ;
    updateStyle();

});


function updateStyle(){

    if (count.textContent > 0) {

        count.style.color = "green";
    }
    else if (count.textContent < 0) {

        count.style.color = "red";
    }
    else{
        
        count.style.color = "white";
    }
}
