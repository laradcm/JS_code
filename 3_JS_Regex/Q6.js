// 21. Write a JavaScript function to print an integer with commas as thousands separators. 
// ?= (lookup operator, looks around match. if ?=abc then look at abc|)
// ?| (negative lookup operator)
// Test Data :
// console.log(thousands_separators(1000));
// "1,000"
// console.log(thousands_separators(10000.23));
// "10,000.23"
// console.log(thousands_separators(100000));
// "100,000"


// partial solution
// console.log(thounsands_seps(1000000.25));
// function thounsands_seps(val) {
//     let divided = val.toString().split('.');
//     let regex = /(\d*)(\d{1})(\d{3})+$/
  
//     divided[0] = divided[0].replace(regex, "$1$2,$3");
//     return divided.join('.');
//   }

// site solution
function thousands_separators(num)
  {
    const num_parts = num.toString().split(".");
    num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ","); //?= and ?! look in betwwen
    return num_parts.join(".");
  }

console.log(thousands_separators(1000));
console.log(thousands_separators(10000.23));
console.log(thousands_separators(1000000));