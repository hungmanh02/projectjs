// Phần 1: kiểu dữ liệu nguyên thủy
// 1. Tìm hiểu câu lệnh đầu tiên console.log('Hello word')
console.log("hello word");

// 2. Cách khai báo 1 biến trong  js
var nameInfor;
// 3. Khởi tạo giá trị cho biến
nameInfor = "hungmanh";
// 4. Khai báo và khởi tạo cùng 1 câu lệnh
var nameInfoClone = "codelove";
// 5. Các kiểu dữ liệu cơ bản trong js
// 5.1 Kiểu dữ liệu boolean
console.log(typeof true);
console.log(typeof false);
var isTrue = true;
console.log(typeof isTrue);

// 5.2 kiểu dữ liệu number
console.log(typeof 12);
var y = 12;
console.log(typeof y);
//5.3 kiểu dữ liệu string
console.log(typeof "hello");
console.log(typeof "hello");
console.log(typeof "hello");
// 5.4 kiểu dữ liệu underfined

var z;
console.log(typeof z);
// 5.5 kiểu dữ liệu null
console.log(typeof null);
var z2 = null;
console.log(typeof z2);
// Phần 2: kiểu dữ liệu mảng
var car1 = "Toyota";
var car2 = "bmw";
var car3 = "Ford";
// 1. Tại sao cần dữ liệu mảng ?
// 2. Cách khai báo mảng
var cars = ["toyota", "bmw", "ford"];
// 3. Các thành phần của một mảng
console.log(cars);
console.log(cars.length);
// 3.1 cars là tên mảng
// 3.2 length là chiều dài hay số phần tử  có trong mảng
// 3.3 các value items của mảng
// 3.4 các key của mảng được đánh số bắt đầu tử 0
// 3.5 Giữa key và value được ngăng cách bằng dấu :

// 4. Cách truy xuất lấy value và set lại value của mảng
console.log(cars[0]);
console.log(cars[1]);
console.log(cars[2]);
// gán lại values

cars[0] = "Toyota Edit";
console.log(cars);
// 5. Các hàm thông dụng thao tác với mảng
// Phần 3. Kiểu dữ liệu object
// 1. tại sao cần dữ liệu object
var student = {
  name: "Duy",
  age: 18,
  class: "7a",
};
// 2. cách khai báo object
// 3. các thành phần của một object
// 4. Cách truy xuất lấy value và set lại value của object
console.log(student.name);
console.log(student["name"]);
// 5. Liên hệ với mảng
console.log(cars);
// mảng chẳng qua là trường hợp đặc biệt của object
//với key index bắt đầu từ 0
for (var index = 0; index < cars.length; index++) {
  console.log(cars[index]);
}
// 6. Các hàm thông dụng thao tác với object

// var x = 10;
// console.log(x);

// 1. cách phán đoán value của biến tại vị trí nào đó trong mã\
// 1.1 xác định phạm vi của câu lệnh lấy giá trị biến cần phán đoán
// 1.2 Nếu trong phạm vi đó không có nó có thể di chuyển lên phạm vi cha gần nhất để nhận giá trị

let x = "global scope";

if (true) {
  x = "scope in if";
}
console.log(x);
