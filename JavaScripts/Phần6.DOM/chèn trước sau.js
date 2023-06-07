const Button = (name) => {
  const button = document.createElement("button");
  button.innerHTML = name;
  return button;
};

const insertBefore = ({ title }) => {
  const p = document.createElement("p");
  p.innerHTML = `
      <b>${title}</b>
      `;
  return p;
};

const renderData = ({ title, content }) => {
  const div = document.createElement("div");
  div.innerHTML = `
      <h4>${title}</h4>
      <p>${content}</p>
      `;
  const btn = Button("Xóa");
  const confirm = insertBefore({ title: `Bạn muốn xoá dữ liệu không ?` });
  div.appendChild(btn);
  div.insertBefore(confirm, div.firstChild);
  document.body.appendChild(div);
};

renderData({
  title: "Tìm hiểu cách lập kế hoạch kinh doanh hiệu quả",
  content:
    "Lập kế hoạch kinh doanh là một bước quan trọng trong việc khởi nghiệp và phát triển kinh doanh. Một kế hoạch kinh doanh đầy đủ và chính xác giúp bạn nắm bắt được tình hình thị trường, mục tiêu kinh doanh của bạn, cách tận dụng cơ hội để đạt được mục tiêu và cách quản lý tài chính của bạn",
});
