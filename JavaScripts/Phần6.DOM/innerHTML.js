const showRender = (text) => {
  const p = document.createElement("p");
  p.innerHTML = `nội dung được truyền:  ${text}`;
  document.body.appendChild(p);
};

showRender("hello world");

const renderHouse = ({ imgSrc, title, content }) => {
  const imgElement = document.createElement("img");
  imgElement.src = imgSrc;
  const titleElement = document.createElement("h4");
  titleElement.innerHTML = title;
  const contentElement = document.createElement("p");
  contentElement.innerHTML = content;
  document.body.append(imgElement);
  document.body.append(titleElement);
  document.body.append(contentElement);
  const style = {
    "max-width": "500px",
    "min-height": "300px",
  };
  Object.assign(imgElement.style, style);
};

renderHouse({
  imgSrc:
    "https://th.bing.com/th/id/R.9e6636a3531d504311061164455c64c8?rik=y9V755H9Ke9asQ&riu=http%3a%2f%2fwww.tandemconstruction.com%2fsites%2fdefault%2ffiles%2fstyles%2fproject_slider_main%2fpublic%2fimages%2fproject-images%2fIMG-Fieldhouse-10.jpg%3fitok%3dWhi8hHo9&ehk=t1nDF87WTMz8iSo0pL2yzkvG6Xx5q0lh%2fLjJGldosyg%3d&risl=&pid=ImgRaw&r=0",
  title: "Khám phá ngôi nhà cổ độc đáo ở vùng quê yên bình",
  content:
    "Ngôi nhà cổ này nằm ở một vùng quê yên bình, với không khí trong lành và phong cảnh tuyệt đẹp. Ngôi nhà có bề ngoài độc đáo và lịch sử lâu đời, với kiến trúc đặc biệt và những chi tiết rất đẹp mắt. Bên trong, bạn sẽ tìm thấy nhiều đồ vật mang tính lịch sử và văn hóa, cho phép bạn khám phá và tìm hiểu thêm về nơi đây. Nếu bạn muốn tìm một địa điểm du lịch yên bình và độc đáo, ngôi nhà cổ này là một lựa chọn tuyệt vời cho bạn.",
});
