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
// 10 IT
const course = ["JavaScript", "React", "NodeJS", "MongoDB", "Express", "VueJS"];
let { name, age, address, ...rest } = person;
console.log(name, age, address, rest);
let result = ([a, b, , d, ...rest1] = course);
console.log(a, b, d, rest1);
