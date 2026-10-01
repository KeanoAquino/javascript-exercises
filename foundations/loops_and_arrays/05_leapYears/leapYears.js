const leapYears = function(year) {
    let result = false;
    if ( (year % 4 === 0) && (!(year % 100 === 0) || (year % 400 === 0)) ){
        result = true;
        return result;
    }
    return result;
};

// improvements: let arguments be variables so function params are easier to read

// divisible by 4 is leap year
// divisible by 100 is not leap year, except if divisible by 400

// Do not edit below this line
module.exports = leapYears;
