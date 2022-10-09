
let clockElement = document.getElementById("clock");//points to the div at the html file
window.setInterval(updateClock,1000);               //updates the clock every 1s

function updateClock(){

    const currentDate = new Date();

    let currentWeekDay  =    formatDate(currentDate,{weekday:"long"});
    let currentTimeHour =    formatDate(currentDate,{hour12:true, hour:"2-digit"}).replace(/p.m./,"PM").replace(/a.m./,"AM");
    let currentTimeMinutes = formatDate(currentDate,{minute:"2-digit", second:"2-digit"});
    let finalString = "";

    finalString += `Today is ${currentWeekDay} <br>`;
    finalString += `Current Time is:  ${currentTimeHour} : ${currentTimeMinutes} <br>`;

    clockElement.innerHTML = finalString;
}

function formatDate(date, option){
return date.toLocaleString("default", option); 
}
