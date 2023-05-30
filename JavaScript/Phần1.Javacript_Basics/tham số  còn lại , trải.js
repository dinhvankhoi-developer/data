const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const filter = (...number) => {
  number.forEach((item) => {
    if (item % 2 === 0) {
      console.log(item);
      return item;
    }
  });
};
filter(...number);

const number1 = [1, 2, 3, 4, 5, 6];
const filter1 = (numbers) => numbers.filter((item) => item % 3 === 0);

console.log(filter1(number1)); // Output: [3, 6]
