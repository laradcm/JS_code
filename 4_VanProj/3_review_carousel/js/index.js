//refer to data.js to see review

const btnPrev = document.querySelector(".prev-btn");
const btnNext = document.querySelector(".next-btn");
const btnRnd = document.querySelector(".random-btn");

const name = document.getElementById("name");
const job = document.getElementById("job");
const text = document.getElementById("text");
const img = document.getElementById("person-img");

let id = 0;

window.onload = () =>{
    id = randomNum(1,review.length);
    updateContent(id);
}

btnPrev.addEventListener("click", ()=>{

    id = id < 2? review.length:--id;
    updateContent(id);
    console.log(id);

});

btnNext.addEventListener("click", ()=>{

    id = id == review.length? 1 :++id;
    updateContent(id);
    console.log(id);

});

btnRnd.addEventListener("click", ()=>{

    id = randomNum(1,review.length);
    updateContent(id);
    console.log(id);

})

function updateContent(id){

    const index = review.findIndex((obj)=> obj.id == id);

    name.textContent = review[index].name;
    job.textContent = review[index].job;
    text.textContent = review[index].text;
    img.src = review[index].img;
}

function randomNum(min, max) {
    return Math.floor(Math.random()*max) + min;
}