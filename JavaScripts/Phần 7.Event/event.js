const renderData = () => {
  const div = document.createElement("div");
  div.innerHTML = `
    <h2> Nội dung liên quan đến Event </h2>
    <p>Event là chủ yếu để lắng nghe sự kiện , của người dùng khi thao tác với trang web </p>
    
    `;
  document.body.appendChild(div);
};
renderData();
const clickShow = (e) => {
  console.log(e);
  e.preventDefault();
  e.target.innerHTML = "Click";
  const show = setTimeout(() => {
    alert("Bạn đã click vào button");
  }, 2000);
  setTimeout(() => {
    clearTimeout(show);
  }, 3000);
};

window.addEventListener("click", clickShow);

const button = document.querySelector("button");

button.addEventListener("click", function (e) {
  console.log("Button clicked!");
  console.log(e); // log ra event object
});

const showButton = () => {
  const btn = document.createElement("button");
  btn.innerHTML = "Click me";
  document.body.appendChild(btn);
  btn.addEventListener("click", (e) => {
    console.log("Button clicked!");
    console.log(e); // log ra event object
    e.stopPropagation();
    e.stopImmediatePropagation();
  });
};
showButton();
