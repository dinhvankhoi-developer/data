const showPerson = () => {
  let name = "Đinh Văn Khôi";
  let age = 22;
  let address = `Hà Nội`;

  const showChild = () => {
    return console.log(
      `tôi tên là ${name} hiện tại ${age} tuổi , đang sinh sống tại ${address}`
    );
  };
  showChild();
  return showChild;
};

let rest = showPerson();
console.log(rest());

const hinhVuong = () => {
  let x = 10;
  let y = 25;
  const showRectangle = () => {
    return console.log(`x = ${x}, y = ${y}`);
  };

  const showCircle = () => {
    let sum = (x + y) * 2;
    return sum; // lưu giá trị vào biến
  };

  const showArea = () => {
    let area = x * y;
    return area; // lưu giá trị vào biến
  };

  const showPerimeter = () => {
    let result = {
      sum: showCircle(),
      area: showArea(),
      rectangle: showRectangle(), // lưu kết quả từ console.log vào thuộc tính rectangle
    };
    return result; // trả về object
  };

  return showPerimeter(); // lưu object trả về vào biến khác rồi truy cập các thuộc tính tương ứng.
};
const result = hinhVuong();
console.log(result.sum); // output: 70
console.log(result.area); // output: 250
console.log(result.rectangle); // output: 'x = 10, y = 25'
