if (true) {
  console.log("true");
} else {
  console.log("false");
}

// ! date
const date = new Date();
const hour = date.getHours();
if (hour < 11) {
  setTimeout(() => {
    console.log(`chào buổi sáng`);
  }, 1000);
  if (hour >= 6 <= 8) {
    setTimeout(() => {
      console.log(`tôi đang chuẩn bị đi làm .`);
    }, 2000);
    if (hour === 7) {
      setTimeout(() => {
        console.log(`tôi đang làm việc tại công ty`);
      }, 1000);
    }
  }
  if (hour >= 8 && hour <= 10) {
    setTimeout(() => {
      console.log(
        `tôi đang làm việc tại công ty   khoảng 15 phút nữa là tôi nghỉ ngơi `
      );
    }, 1000);
  }
} else if (hour < 17) {
  setTimeout(() => {
    console.log(`chào buổi chiều`);
  }, 1000);
  if (hour >= 13 && hour <= 16) {
    setTimeout(() => {
      console.log(`tôi đang làm việc tại công ty`);
    }, 1000);
  }
} else {
  setTimeout(() => {
    console.log(`chào buổi ngày tối`);
  }, 1000);
  if (hour >= 18) {
    setTimeout(() => {
      console.log(`tôi đang làm việc tại công ty`);
    }, 1000);
  } else if (hour >= 18 && hour <= 21) {
    console.log(`tôi nghỉ ngơi và chăm lo gia đình`);
  } else if (hour >= 22 && hour <= 4) {
    console.log(`tôi đang ngủ`);
  }
}
// .
