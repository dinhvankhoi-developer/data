for (let i = 0; i < 10; i++) {
  console.log(`hiện có ${i} đang tham gia bỏ phiếu bầu cử`);
  for (let j = 1; j < 50; j += 5) {
    const random = Math.floor(Math.random() * j);
    console.log(`hiện có ${i} đang tham gia bỏ phiếu bầu cử số  ${random}`);
  }
}

// 10 tên học lập trình
const course = ["HTML", "CSS", "JS", "React", "NodeJS", "MongoDB", "Python"];
for (let i = 0; i < course.length; i++) {
  if (course[i] === "React") {
    console.log(`có môn ${course[i]} trong danh sách`);
  }
}
