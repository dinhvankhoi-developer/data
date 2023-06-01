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
const person3 = {
  name: "Đinh Văn Khôi2",
  age: 22,
  address: "Hà Nội2",
  job: ["Frontend1", "Backend1", "Fullstack1"],
  salary: {
    primary: "$ 52533",
    secondary: "$ 21000",
  },
  infoPerson: function () {
    return `tôi tên là ${this.name} hiện tại ${this.age} tuổi , đang sinh sông tại ${this.address}`;
  },
};
const person5 = { ...person, ...person3 };
console.log(person5);
