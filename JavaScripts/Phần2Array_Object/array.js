const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
num.push(11);
console.log(num);
if (num.length > 12) {
  num.shift();
  console.log(num);
} else {
  num.unshift(0);
  console.log(num);
}
num.reverse();
console.log(num);
let slice = num.slice(2, 4);
let splice = num.splice(2, 4);
console.log(splice);
console.log(slice);

// ! splice là xoá  , chèn thêm phần tử ,
// ! slice là cắt chuỗi

let num1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let num2 = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
let num3 = [...num1, ...num2];
num3.reverse();
if (num3.length > 10 && num3.length < 18) {
  num3 = num3.slice(0, 10);
  console.log(num3);
} else {
  console.log(num3);
}
console.log(num3, typeof num3);

const num4 = [
  1,
  2,
  3,
  4,
  [
    4,
    3,
    2,
    4,
    5,
    [
      7,
      6,
      7,
      5,
      4,
      [12, 32, 43, 24, [76, 9, 8, 4, 2, [3, 5, 6, 4, 3, [55, 100]]]],
    ],
  ],
];
const flat = num4.flat(Infinity);
const setData = new Set(flat);
console.log(flat.length, setData.size);
