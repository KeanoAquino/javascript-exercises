const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1- num2;
};

const sum = function(arr) {
  if (arr.length === 0) {
    return 0;
  } else {
    return arr.reduce((sum, num) => sum += num, 0);
  }
};

const multiply = function(arr) {
  return arr.reduce((quo, num) => quo * num);
};

const power = function(num, exp) {
	return num ** exp;
};

const factorial = function(num) {
  if (num === 0) {
    return 1;
  } else if (num === 1) {
    return 1;
  } else {
      for (let i = num - 1; i > 0; i--){
        num *= i;
      }
      return num;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
