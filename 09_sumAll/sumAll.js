const sumAll = function(a, b) {

if (a < 0 || b < 0 || !isNaN(a) || !isNaN(b) || !Number.isInteger(a) || !Number.isInteger(b)) {
    return "ERROR";
}


const avg = (a + b) / 2;
const number = (Math.abs(b - a)) + 1;
console.log(number);
console.log(Math.abs(b-a));
const sum = avg * number;
return sum;

};

// Do not edit below this line
module.exports = sumAll;
