const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result = number.reduce((acc, cur) => {
  const pow = Math.pow(2, cur);
  return acc + pow;
}, 0);
console.log(result);
