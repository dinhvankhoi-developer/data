const createButton = (btnText) => {
  const button = document.createElement("button");
  button.textContent = btnText;
  return button;
};

//  showContent
const showContent = ({ title, content }) => {
  const div = document.createElement("div");
  div.innerHTML = `
    <h2>${title}</h2>
    <p>${content}</p>
    `;
  const showBtn = createButton("Click Me");
  div.appendChild(showBtn);
  document.body.appendChild(div);
  return;
};

showContent({
  title: "Tìm hiểu cách lập kế hoạch kinh doanh hiệu quả",
  content:
    "Lập kế hoạch kinh doanh là một bước quan trọng trong việc khởi nghiệp và phát triển kinh doanh. Một kế hoạch kinh doanh đầy đủ và chính xác giúp bạn nắm bắt được tình hình thị trường, mục tiêu kinh doanh của bạn, cách tận dụng cơ hội để đạt được mục tiêu và cách quản lý tài chính của bạn Để lập kế hoạch kinh doanh hiệu quả, bạn cần xác định đúng mục tiêu kinh doanh",
});
