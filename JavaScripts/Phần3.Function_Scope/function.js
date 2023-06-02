const showData = (name, age, address) => {
  return `tôi tên là ${name} hiện tại ${age} tuổi , đang sinh sống tại ${address}`;
};
const result = showData("Đinh Văn Khôi", 22, "Hà Nội");
console.log(result);
const sum = (a, b) => {
  return a + b && a - b && a * b && a / b;
};
const sum1 = sum(1, 2);
console.log(sum1);
