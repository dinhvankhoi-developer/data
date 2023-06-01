const string = `tôi học javascript tại F8 , bên cạnh đó còn hỗ trợ thêm nhiều ngôn ngữ khác nhau  , nói chung JavaScript cũng dễ học  , nếu kiên trì học tập `;

let result = string.split(' ').length
result = string.toUpperCase().toLocaleLowerCase();
result = string.trim().length;
const result2 = string.replace(/javascript/g, 'Python');

// ====== LOG START ======
console.log(result , result2);


/**
 * ! các phương thức nâng cao trong 
 * length => độ dài 
 * toUpperCase => chuyến hoa
 * toLocaleLowerCase => chuyến thuật
 * trim => xóa 2 đầu khoảng trống 
 * replace => thay thế
 * split => tách chuỗi thành mảng 
 * slice => cắt chuỗi 
 * indexOf => tìm kí tự tại vị trí 
 * lastIndexOf => tìm ký tự tại vị trí cuối cùng
 * */