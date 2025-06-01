const leapYears = function(year) {

    const isYearDivisibleByFour = year % 4 === 0;
    console.log(isYearDivisibleByFour);
    const isCentury = year % 100 === 0;
    if (isYearDivisibleByFour && !isCentury) {
            return true;
    }
    if (isCentury && year % 400 === 0) {
        return true;
    }
    else {
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;
