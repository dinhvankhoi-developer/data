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
