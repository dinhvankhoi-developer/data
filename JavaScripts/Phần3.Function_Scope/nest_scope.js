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
