/**
 * The function takes in an array of numbers, doubles each number, filters out numbers greater than or
 * equal to 5, and returns the filtered array.
 * @param data - This is a rest parameter that allows the function to accept any number of arguments as
 * an array.
 * @returns an array of numbers that are less than 5 and have been multiplied by 2. The specific array
 * being returned depends on the arguments passed to the function when it is called.
 */
// !  cách tạo hàm gồm 3 cách như sau
// 1. Declamation Function
function showData(...data) {
  if (!Array.isArray(data)) {
    return;
  } else {
    let show = [...data];
    let filtered_show = show.map((item) => item * 2).filter((item) => item < 5);
    console.log(filtered_show);
    return filtered_show;
  }
}
console.log(showData(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

// 2. Execution Function
const showData2 = function (...data) {
  if (!Array.isArray(data)) {
    return;
  } else {
    let show = [...data];
    let filtered_show = show.map((item) => item * 2).filter((item) => item < 5);
    console.log(filtered_show);
    return filtered_show;
  }
};
console.log(showData2(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

// 3. Arrow Function
const showData3 = (...data) => {
  if (!Array.isArray(data)) {
    return;
  } else {
    let show = [...data];
    let filtered_show = show.map((item) => item * 2).filter((item) => item < 5);
    console.log(filtered_show);
    return filtered_show;
  }
};
console.log(showData3(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
