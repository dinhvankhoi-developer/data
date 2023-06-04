const person = {
  name: `Đinh Văn Khôi`,
  age: 24,
  gender: "male",
  address: `Quảng Nam`,
  checker: function () {
    if (this.gender === "male") {
      return "Nam";
    } else {
      return "Nữ";
    }
  },
  info: function () {
    console.log(
      `tôi tên là ${this.name} , hiện tại ${
        this.age
      } tuổi  ,đang sinh sống tại ${this.address} tôi là ${this.checker()}`
    );
  },
};
person.info();

for (const key in person) {
  if (Object.hasOwnProperty.call(person, key)) {
    const data = person[key];
    console.log(`${key}: ${data}`);
  }
}
