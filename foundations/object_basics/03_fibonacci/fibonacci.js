const fibonacci = function(num) {
    // convert string to number
    num = parseInt(num, 10);

    // edge cases
    if (num < 0) return "OOPS";
    if (num === 0) return 0;

    const fibonacci = [1, 1];
    
    while (fibonacci.length < num) {
        let currIndex = fibonacci.length - 1;
        fibonacci.push(fibonacci[currIndex] + fibonacci[currIndex - 1]);
    }

    return fibonacci[num-1];
};

// Do not edit below this line
module.exports = fibonacci;
