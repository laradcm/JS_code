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
        const highestCal =  getHighestCaSuml(elfCals);
        console.log(highestCal);

    } catch (error) {

        console.log(error);
    }


}


function getHighestCaSuml(calsArr){

    let maxCals = 0;
    let sumCals = 0;
    const ELF_END = "";

    for (const cals of calsArr) {

        if (cals !== ELF_END) {

            sumCals+= parseInt(cals);

        } else {

            if (sumCals > maxCals) {
                maxCals = sumCals;

            }

            sumCals = 0;
        }
    }

    return maxCals;
}



