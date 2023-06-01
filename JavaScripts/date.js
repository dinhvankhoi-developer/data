let date = new Date();
const year = date.getFullYear();    
const month = date.getMonth() + 1;
const day = date.getDate();
const hour = date.getHours();
const minute = date.getMinutes();
const second = date.getSeconds();
const week = date.getDay();
console.log(year);
/**
 * getFullYear() - Trả về năm (4 chữ số)

getMonth() - Trả về tháng (0-11). Chú ý rằng giá trị 0 đại diện cho tháng 1, 1 đại diện cho tháng 2 và vậy tiếp tục.

getDate() - Trả về ngày trong tháng (1-31)

getDay() - Trả về ngày trong tuần (0-6). Chú ý rằng giá trị 0 đại diện cho ngày Chủ nhật, 1 đại diện cho ngày Thứ hai và vậy tiếp tục.

getHours() - Trả về giờ (0-23)

getMinutes() - Trả về phút (0-59)

getSeconds() - Trả về giây (0-59)

getMilliseconds() - Trả về 
 */