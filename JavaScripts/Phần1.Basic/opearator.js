/**
 * Toán tử số học:
+ - cộng
- - trừ
* - nhân
/ - chia
% - chia lấy phần dư
Toán tử gán:
= - gán giá trị cho biến
+= - cộng giá trị vào biến và gán
-= - trừ giá trị khỏi biến và gán
*= - nhân giá trị cho biến và gán
/= - chia giá trị cho biến và gán
Toán tử so sánh:
== - so sánh giá trị chỉ bằng với nhau
=== - so sánh giá trị và kiểu dữ liệu
!= hoặc !== - so sánh giá trị khác với nhau
< - so sánh giá trị nhỏ hơn của hai biểu thức
> - so sánh giá trị lớn hơn của hai biểu thức
<= - so sánh giá trị nhỏ hơn hoặc bằng của hai biểu thức
>= - so sánh giá trị lớn hơn hoặc bằng của hai biểu thức
Toán tử logic:
&& - phép AND
|| - phép OR
! - phép NOT
Toán tử ba ngôi:
condition ? value1 : value2 - trả về value1 nếu condition đúng và value2 nếu condition sai.
 */




let a = 4;
let b = 7;
if (a > b) {
    console.log(a);
} else {
    console.log(`không có `);
}

const data = 0 && null && undefined && NaN;
console.log(data);
const data1 = 0 || null || undefined || NaN || 46;
console.log(data1);
// ! khi so sánh  logical ,đối với && , thì nó  ưu iên giá trị sai , nếu không có giá trị sai , thì lấy giá trị sai, đầu tiên tìm thấy .
// ? khi so sánh  logical ,đối với || , thì nó  ưu iên giá trị đúng , nếu không có giá trị đúng , thì lấy giá trị sai, đầu tiên tìm thấy .