/**
 * ! String  => Chuỗi
 * ! Number  => Số
 * ! Boolean => Giá trị true/false
 * ! Undefined => Không xác định => không có giá trị
 * ! Null => Không xác định => không biết giá tri => gán null thẳng vào giá trị .
 * ! Symbol => Giá trị duy nhất 
 * ! BigInt => Số phức tạp lớn , không để đọc được.
 */

let name = 'Đinh Văn Khôi';
let age = 24;
let isMale = true;
let address;
let phone = null;
let money = 356605n;

console.log(name, age, isMale, address, phone, money , typeof name, typeof age, typeof isMale, typeof address, typeof phone, typeof money);



// ? Quan trọng  : 
//!  Khi khai báo là kiểu dữ liệu nguyên thuỷ thì nó lưu trong bộ nhớ stack ,(stack là ngăn xếp , khi tạo nó sẽ push vào stack , nếu sau khi  xử lí thành công thì nó xoá khỏi ngăn stack  , stack là ngăn chứ giá trị , với phạm vi lưu trữ   ,không  lớn  , lưu trữ thời gian ngắn (khi gán biến sang biến khác cùng dữ liệu thì nó trỏ tới ô nhớ khác nhau))
// ? Khi khai báo kiểu dữ  liệu khác dữ liệu nguyên thuỷ  (tức là kiểu  dữ liệu tham chiếu) , thì nó  sẽ lưu trong bộ nhớ heap , trong bộ nhớ heap , có phạm vi lưu trữ lớn , có thể chứa nhiều dữ liệu khác nhau  ,  lưu trữ trong thời gian dài ,  , cùng trỏ tới 1 cùng đối tượng , khi thay đổi thuộc tính của kiểu dữ liệu tham chiếu , thì nó cung sẽ thay đổi theo



// heap 
const person = {
    name: 'Đinh Văn Khôi',
    age: 24,
    isMale: true,
    address: 'Hà Nội',
    info: function () {
        console.log(`tôi tên là ${this.name} hiện tại ${this.age} tuổi đang sinh sông tại ${this.address}`);
    }
}
console.log(person.name);
let person2 = person;
person2.name = 'Đinh Văn Khôi 2';
console.log(person.name);
console.log(person2.name);