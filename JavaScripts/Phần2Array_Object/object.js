const person = {
  name: "Đinh Văn Khôi",
  age: 22,
  address: "Hà Nội",
  job: ["Frontend", "Backend", "Fullstack"],
  salary: {
    primary: "$ 5233",
    secondary: "$ 2000",
  },
  infoPerson: function () {
    return `tôi tên là ${this.name} hiện tại ${this.age} tuổi , đang sinh sông tại ${this.address}`;
  },
};

let person2 = Object.assign({}, person);
person2.name = "Khôi";
person.infoPerson();
console.log(person2.infoPerson());
