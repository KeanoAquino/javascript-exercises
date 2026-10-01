const sumAll = function(low, high) {
    //check if args are positive ints
    if ((typeof low != "number") || (typeof high != "number") || 
        !Number.isInteger(low) || !Number.isInteger(high) ||
        low < 0 || high < 0) {
        return "ERROR";
    }

    if (low > high) {
        let temp = high;
        high = low;
        low = temp;
    }

    let sum = 0;
    for (let i = low; i <= high; i++){
        sum = sum + i;
    }
    return sum;
};


// Improvements: Number.isInteger already checks 
// type of low/high so typeof is redundant

// Do not edit below this line
module.exports = sumAll;
