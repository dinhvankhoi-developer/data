const data = ["JavaScript", "Java", "Python"];
if (data.includes("C++")) {
  return data;
} else {
  data.push("C++");
  console.log(data);
}
if (data.length < 6) {
  const result = data.slice(1, 5).join(" ");
  console.log(result);
}
data
  .map((item) => {
    const string = item.toUpperCase();
    console.log(string);
  })
  .slice(1, 3)
  .join(" ")
  .repeat(3);
console.log(data);
