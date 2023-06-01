var name = 'Khôi';
function printName() {
    let name = "Khôi1";
    console.log(name);
    return name
}
printName();
const date = new Date();
const hour = date.getHours();
const minute = date.getMinutes();
const second = date.getSeconds();
console.log(hour, minute, second);
// ! khi khai báo var là phạm vi global , có thể ghi đè lại biến,  gán giá trị . 
// ! khai báo let la phạm vi local, không thể tạo biến , ghi đè lại biến , có thể gián giá trị  . 
// ! khai báo const là dạng hằng số , khi tạo  biến luôn có giá trị , nếu không lỗi cú pháp , const không thể gán lại giá trị 