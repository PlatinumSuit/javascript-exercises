const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(num) {
	return num.reduce((total, number) => {
    return total + number
  }, 0);
};

const multiply = function(num) {
  return num.reduce((total, number) => {
    return total * number
  });
};

const power = function(num1, num2) {
	return num1 ** num2;
};

const factorial = function(num) {
	if (num === 0) {
    return 1;
  };

  let result = 1;
  for (let i = num; i > 1; i--) {
    result *= i;
  }
  return result;
};

add(0)
add(2)
add(2,6)

subtract(10, 4)
subtract(-10, -4)
subtract(-8, 7)

sum([])
sum([7])
sum([7, 11])
sum([1, 3, 5, 7, 9])

multiply([2, 4])
multiply([2, 4, 6, 8, 10, 12, 14])

power(4, 3)
power(3, 10)

factorial(0)
factorial(1)
factorial(2)
factorial(5)
factorial(10)






// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
