const cars = [
  {
    id: 1,
    name: "Honda",
    price: 1000000,
    start: 1992,
    end: 2010,
    description:
      "Xe Honda là mẫu xe quốc dân được sản xuất trước 2000 , là dòng xe được người Việt Nam lựa chọn nhiều vào thời gian đó ",
  },
  {
    id: 2,
    name: "Toyota",
    price: 1500000,
    start: 1985,
    end: 2015,
    description:
      "Xe Toyota là mẫu xe bền bỉ và tiết kiệm nhiên liệu, được sản xuất từ những năm 80 và vẫn còn phổ biến đến ngày nay.",
  },
  {
    id: 3,
    name: "BMW",
    price: 2500000,
    start: 1972,
    end: 2021,
    description:
      "Xe BMW là mẫu xe sang trọng và đẳng cấp của Đức. Với thiết kế đầy cá tính, BMW luôn là lựa chọn của những người yêu thích.",
  },
];

cars.forEach((car) => {
  console.log(car.name);
});
const showData = cars
  .filter((price) => {
    return price.price > 200000;
  })
  .map((cars) => {
    return `Chiếc xe ${cars.name} có giá ${cars.price}`;
  });
console.log(showData);
