// Hàm đệ quy để chuyển đổi các kiểu mã
const convertTo = (str, base) => {
  if (!str.length) return ""; // Nếu str đã chuyển đổi hết thì trả về kết quả rỗng
  const charCode = str.charCodeAt(0).toString(base); // Chuyển đổi ký tự đầu tiên sang kiểu mã Y

  return `${charCode} ${convertTo(str.slice(1), base)}`; // Thêm kết quả mới chuyển đổi vào danh sách, chuyển sang ký tự tiếp theo trong chuỗi,
  // lặp lại quá trình chuyển đổi
};

// Hàm random password
const randomPassword = (length) => {
  let password = "";
  for (let i = 0; i < length; i++) {
    password += String.fromCharCode(Math.floor(Math.random() * 94) + 33);
  }
  return password;
};

// Hàm gọi đệ quy để chuyển đổi từ mã ban đầu sang các kiểu mã khác nhau, sử dụng callback để trả về kết quả
const convert = (str, bases, callback) => {
  const output = bases.map((base) => convertTo(str, base)); // Dùng map để chạy hàm đệ quy cho từng mã kiểu Y trong danh sách

  callback(output); // Trả về danh sách các chuỗi đã chuyển đổi
};

// Sử dụng hàm convert để chuyển đổi một chuỗi ngẫu nhiên thành các chuỗi mã khác nhau và in ra
convert(randomPassword(8), [16, 2, 8, 64], (output) => {
  console.log(output);
});
