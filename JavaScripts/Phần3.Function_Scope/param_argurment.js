// ! thiết lập giá trị mặc định

const helloUser = (name = "Admin") => {
  return `chào mừng bạn ${name} đến với trang web của chúng tôi !`;
};

console.log(helloUser("Khôi"));

// ! ...rest param
const number = (...number) => {
  const data = [];
  for (const value of number) {
    if (value < 5) {
      console.log(value);
      data.push(value);
    } else {
      continue;
    }
  }
  return data;
};

console.log(number(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

const showPerson = (user) => {
  return `tôi tên là ${user.name} hiện tại tôi ${user.age} tuổi , đang sinh sống tại ${user.address} và tôi đang làm việc tại ${user.job}`;
};

console.log(
  showPerson({
    name: "Đinh Văn Khôi",
    age: 22,
    address: "Hà Nội",
    job: "Frontend",
  })
);
