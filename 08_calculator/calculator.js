const add = function(number1, number2) {
	return number1+number2;
};

const subtract = function(number1, number2) {
	return number1-number2;
};

const sum = function(array) {
  total = +0;
  array.forEach(obj => {
    total += obj;
  });
  return total;
};

const multiply = function(array) {
  let total=1;
  array.forEach(element => {
    total *= element;
  });
  return total;
};

const power = function(number, power) {
	return number ** power;
};

const factorial = function(number) {
  let total = 1;
	for (let i = number; i > 0; i--) {
    total *= i;
  }
  return total;
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
