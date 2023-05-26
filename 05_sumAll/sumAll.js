
// I was stuck on this for well over a week - the number methods were not taught - at a certain point you need to 
// move on

const sumAll = function (min, max) {
  if (!Number.isInteger(min) || !Number.isInteger(max)) return "ERROR";
  if (min < 0 || max < 0) return "ERROR";
  if (min > max) {
    const temp = min;
    min = max;
    max = temp;
  }
  let sum = 0;
  for (let i = min; i < max + 1; i++) {
    sum += i;
  }
  return sum;
};

console.log(sumAll(1, 4000));

// Do not edit below this line
module.exports = sumAll;
