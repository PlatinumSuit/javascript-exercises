const sumAll = function(num1, num2) {
    if (num1 < 0 || num2 < 0) {
        return 'ERROR';
    }

    if (!Number.isInteger(num1) || !Number.isInteger(num2)) {
        return 'ERROR';
    }

    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return 'ERROR';
    }

   const start = Math.min(num1, num2);
   const end = Math.max(num1, num2);

   let sum = 0;
   for (let i = start; i <= end; i++) {
    sum += i;
   }
   return sum;
};
console.log(sumAll(2, 4));
console.log(sumAll(1, 4000));
console.log(sumAll(-10, 4));
console.log(sumAll(2.5, 4));
console.log(sumAll(10, "90"));
console.log(sumAll(10, [90, 1]));
// Do not edit below this line
module.exports = sumAll;
