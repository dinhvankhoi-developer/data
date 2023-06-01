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

const save = JSON.stringify(person);
console.log(save);
const saveLocal = localStorage.setItem("person", JSON.stringify(person));
console.log(saveLocal);
const load = JSON.parse(localStorage.getItem("person"));
