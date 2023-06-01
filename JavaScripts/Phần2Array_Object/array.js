const num = [1,2,3,4,5,6,7,8,9,10];
num.push(11);
console.log(num);
if (num.length > 12) {
    num.shift();
    console.log(num);
} else {
    num.unshift(0);
    console.log(    num);
}
num.reverse();
console.log(num);
let slice = num.slice(2,4);
let splice = num.splice(2,4) ;
console.log(splice);
console.log(slice);

// ! splice là xoá  , chèn thêm phần tử , 
// ! slice là cắt chuỗi  