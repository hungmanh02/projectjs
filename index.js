// I Phân biệt cách khai báo biến với từ khóa var(trước khi có es6 ) với let, const (es6)
// 1. Khai báo lại cùng tên biến trong cùng 1 phạm vi

// var x = "global scope";
// var x = "global scope 2";

let x = "global scope 2";
// let x = "global scope 2";
// const và let không được khai báo biến trùng nhau khi đang ở global scope
console.log(x);

// 2. Scope : var -- function scope --- let --- block scope
// var y = "global scope";
// if (true) {
//   var y = " global scope in if";
// }
// console.log(y);
let y = "global scope";
if (true) {
  let y = " global scope in if";
  // let y trong và let y ngoài là 2 biên scope khác nhau, let y trong là scope của trong if còn, let y ngoài là global scope
}
console.log(y);
// 3. Hoisting -- var có -- let ,  const không
// 4. Gán lại value hay còn gọi là update value -- var, let có, const không
