
let currentDate = new Date();

console.log(currentDate.toISOString());

Date.prototype.monthNames = ["January", "February", "March", "April", "May", "June",

"July", "August", "September", "October", "November", "December"];

Date.prototype.monthShortNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];


Date.prototype.formatted = function(format) {

    format = format.split(",");

    let outputDate = "";

    for (let f of format)

    {
        if (f.substr(0,1) === "^")

        {
            outputDate += f.substr(1,);
        }

        switch (f)

        {

            case "SP":

                outputDate += " ";

                break;

            case "MMM":

                outputDate += this.monthNames[this.getMonth()];

                break;

            case "MM":

                outputDate += this.monthShortNames[this.getMonth()];

                break;

            case "YYYY":

                outputDate += this.getFullYear();

                break;

        }

    }

    return outputDate;
}

console.log(currentDate.formatted("MMM,SP,MM,SP,^Brendan,SP,YYYY"))