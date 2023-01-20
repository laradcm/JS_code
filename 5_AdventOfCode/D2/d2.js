const fs = require("fs/promises");
const path = require("path");
const { dirname } = require("path");
const pathData = __dirname + "/data.txt"
let elfData = "";


grabInputandGetHighestCount();


async function grabInputandGetHighestCount(){

    try {

        elfData = await fs.readFile(pathData, "utf8");
        const elfCals = elfData.split("\r\n");
        const highestCal =  getHighestCaSum(elfCals);
        console.log(highestCal);

    } catch (error) {

        console.log(error);
    }


}


function getHighestCaSum(calsArr){

    let maxCals = [0,0,0];
    let sumCals = 0;
    const ELF_END = "";

    for (const cals of calsArr) {

        if (cals !== ELF_END) {

            sumCals+= parseInt(cals);

        } else {

            if (sumCals > maxCals[0]) {
                maxCals[2] = maxCals[1];
                maxCals [1] = maxCals[0]; 
                maxCals[0] = sumCals;
                
            }else if(sumCals > maxCals[1]){

                maxCals[2] = maxCals[1];
                maxCals[1] = sumCals;

            }else if(sumCals > maxCals[2]){

                maxCals[2] = sumCals;
            }

            sumCals = 0;
        }
    }

    return maxCals.reduce((a,b) => a + b );
}




