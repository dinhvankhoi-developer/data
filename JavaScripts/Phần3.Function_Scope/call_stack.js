const one = () => {
  setTimeout(() => {
    console.log(`chương trình 1 đang thực thi`);
    two();
  }, 1000);
};
const two = () => {
  setTimeout(() => {
    console.log(`chương trình 2 đang thực thi`);
    three();
  }, 1000);
};
const three = () => {
  setTimeout(() => {
    console.log(`chương trình 3 đang thực thi`);
  }, 1000);
};
one();
