const data = [];
for (let i = 0; i < 50; i += 5) {
  if (i % 3 === 0) {
    // console.log(i);
    data.push(i);
    console.log(data);
  } else {
    continue;
  }
}
