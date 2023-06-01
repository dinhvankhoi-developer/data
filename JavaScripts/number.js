let number = 24.5768769;
let num = number.toFixed(2);
num =number.toExponential(2);
num =number.toPrecision(2);
num = number.toString();
console.log(num , typeof num);

console.log(Number.prototype);
// 1 số phương thức khi làm việc với number 
// ! toFixed() => làm tròn số
// ! toExponential() => số mũ 
// ! toPrecision() => số căn 
// ! toString() => chuyển chuỗi