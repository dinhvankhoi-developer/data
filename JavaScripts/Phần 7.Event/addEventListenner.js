let showFunction;

const show = () => {
  const h5 = document.createElement("h5");
  h5.textContent = `Xem toạ độ`;
  document.body.appendChild(h5);

  const p = document.createElement("p");
  document.body.appendChild(p);

  const showPosition = (event) => {
    p.textContent = `X: ${event.clientX} Y: ${event.clientY}`;
  };

  document.documentElement.addEventListener("mousemove", showPosition);

  // Xoá sự kiện sau 6 giây
  setTimeout(() => {
    document.documentElement.removeEventListener("mousemove", showPosition);
  }, 6000);

  return { h5, p };
};

showFunction = show();

// Xoá hàm show sau 7 giây
setTimeout(() => {
  document.body.removeChild(showFunction.h5) &&
    document.body.removeChild(showFunction.p);
}, 7000);
