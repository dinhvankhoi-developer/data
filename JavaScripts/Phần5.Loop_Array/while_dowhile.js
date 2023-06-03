let i = 0;
while (i < 30) {
  console.log(i);

  i++; // Di chuyển lệnh tăng i lên đầu vòng lặp

  if (i % 2 === 1) {
    continue;
  }

  console.log(`i = ${i}`);
}

const course = ["HTML", "CSS", "JS"];

let j = 0;
while (j < course.length) {
  if (course[j] === "JS") {
    console.log(`có môn ${course[j]}`);
  }
  j++;
}

// Dowhile

let y = 1;
do {
  y++;
  console.log(y);
} while (y < 60);

let attempts = 0; // số lần nạp thẻ đã thử
const maxAttempts = 3; // số lần nạp thẻ tối đa cho phép

while (attempts < maxAttempts) {
  let cardCode = prompt("Nhập mã thẻ cào (4 kí tự):");

  if (cardCode.length === 4) {
    if (cardCode === "1234") {
      // Kiểm tra mã thẻ cào
      console.log("Nạp thẻ thành công! Bạn đã nhận được thẻ $300.");
      break; // Thoát khỏi vòng lặp nếu nạp thẻ thành công
    } else {
      console.log("Mã thẻ cào không đúng. Vui lòng thử lại!");
    }
  } else {
    console.log("Mã thẻ cào phải có 4 kí tự. Vui lòng thử lại!");
  }

  attempts++; // Tăng số lần nạp thẻ đã thử
}

if (attempts === maxAttempts) {
  console.log("Thẻ đã bị khóa. Vui lòng liên hệ tổng đài hỗ trợ.");
}
