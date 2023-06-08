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
/**
 * !
 * Dưới đây là chi tiết về các loại sự kiện (event) trong JavaScript:

1. Sự kiện bàn phím (keyboard events)
keydown: Sự kiện xảy ra khi một phím bàn phím được nhấn xuống.
keyup: Sự kiện xảy ra khi một phím bàn phím được nhả ra.
keypress: Sự kiện xảy ra khi một phím bàn phím được nhấn xuống và giữ trong một thời gian ngắn.
2. Sự kiện chuột (mouse events)
click: Sự kiện xảy ra khi một phần tử được click.
dblclick: Sự kiện xảy ra khi một phần tử được click hai lần liên tiếp.
mousedown: Sự kiện xảy ra khi một phần tử được bấm giữ chuột.
mouseup: Sự kiện xảy ra khi một phần tử được nhả chuột ra.
mousemove: Sự kiện xảy ra khi chuột được di chuyển trên một phần tử.
mouseover: Sự kiện xảy ra khi chuột được di chuyển vào phần tử.
mouseout: Sự kiện xảy ra khi chuột được di chuyển ra khỏi phần tử.
3. Sự kiện form (form events)
submit: Sự kiện xảy ra khi một form được submit.
reset: Sự kiện xảy ra khi một form được reset.
change: Sự kiện xảy ra khi giá trị của một phần tử form thay đổi.
focus: Sự kiện xảy ra khi một phần tử form được focus.
blur: Sự kiện xảy ra khi một phần tử form bị mất focus.
4. Sự kiện trang (window events)
load: Sự kiện xảy ra khi trang web được load hoàn tất.
resize: Sự kiện xảy ra khi kích thước của trang web thay đổi.
scroll: Sự kiện xảy ra khi trang web được cuộn.
unload: Sự kiện xảy ra khi trang web được đóng lại.
 */
