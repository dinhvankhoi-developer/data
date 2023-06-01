// ! có 3 kiểu conversion :
// ? String 
// ? Number
// ? Boolean


let a = 45;
a = String(a);
a = a.toString();
console.log(a, typeof a);
let b  = '496';
b = +b;
b = Number(b);
b = parseInt(b);
console.log(b, typeof b); 

let c = 0;
c = Boolean(c);
console.log(c  , typeof c);

// ! để conversion sang Number => Number(a) , +a
// ! để conversion sang String => String(a) , a.toString()
// ! để conversion sang Boolean => Boolean(a) 