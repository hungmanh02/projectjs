// I. Phân tích tài liệu validate cho phần register
// Phần yêu cầu về bài toán cho trước (input)
// + Đây là yêu cầu cho validate trường hợp nhập thông tin name
//  - Tên không được để trống
// + Đây là yêu cầu cho validate trường hợp nhập thông tin email
//  - email không được để trống
//  - email phải có ít nhất 3 kí tự
//  - email phải đúng định dạng
// + Đây là yêu cầu cho validate trường hợp nhập thông tin password
//  - password không được để trống
//  - password phải có ít nhất 8 kí tự cho bảo mật
// + Đây là yêu cầu cho validate trường hợp nhập thông tin config password
//  - confirm password không được để trống
//   confirm password phải có ít nhất 8 kí tự cho bảo mật
//  - confirm password phải trùng với giá trị password

// Bài toán cần được giải quyết (Output)

// rules message
// const rules = {
//   name: { required },
//   email: { required, min, email },
//   password: { required, min },
//   confirm_password: { required, min },
// };
// 1. chuẩn hóa dữ liệu
const rules1 = {
  name: {
    required: true,
  },
  email: {
    required: true,
    minlenght: 3,
  },
  password: {
    required: true,
    minlenght: 8,
  },
  confirm_password: {
    required: true,
    minlenght: 8,
    // equal_to: password,
  },
};

// // Function Scope
// // khai báo hàm
// // scope global
// let nameInfo = "global";
// function getStudent() {
//   // scope function 1
//   let nameInfo = "getStudent";

//   function nestedGetStudent() {
//     // scope function 2
//     let nameInfo = "nestedGetStudent";
//     console.log(nameInfo);
//   }
//   console.log(nameInfo);
//   nestedGetStudent();
// }
// // Thực thi hàm
// console.log(nameInfo);
// getStudent();

// function TodoList(callback) {
//   let name = "Todo List data";
//   console.log(callback);
//   // ở đây nếu tôi gọi hàm và truyền data vào hàm
//   // hàm tôi gọi được định nghĩa ở cha -> ok nhận được data
//   callback(name);
// }
// function App() {
//   let funFromParentDefine = function (dataFromChild) {
//     console.log(dataFromChild);
//   };
//   TodoList(funFromParentDefine);
// }
// App();

// TodoList được gọi ở trong phần khai báo hàm App
// App gọi là cha component cha
// TodoList gọi là component con

// 1. truyền data từ cha xuống con -- dễ
// 2. truyền data từ con lên cha
// -- cần đưa data từ scope con lên cha nhận được
let users = [
  {
    name: "hungmanh1",
    email: "hungmanh1@gmail.com",
    address: {
      city: "Hà Nội",
    },
  },
  {
    name: "hungmanh2",
    email: "hungmanh2@gmail.com",
    address: {
      city: "Hải Phòng",
    },
  },
  {
    name: "hungmanh3",
    email: "hungmanh3@gmail.com",
    address: {
      city: "Hồ Chí Minh",
    },
  },
];
// Tư duy học hàm some, every, forEach, map, reducer, filter, find, findIndex

// input --> array

// output --> some
// 1. Nó sẽ return true nếu 1 callback trả về true
// 2. Nếu nó chạy hết tất cả các phần tử trong mảng --> không có phần tử nào return true -> return false
//fresher
function checkOneElementExitName(userArray) {
  for (let i = 0; i < userArray.length; i++) {
    if (userArray[i].name === "hungmanh1") {
      return true;
    }
  }
  return false;
}
//
function checkOneElementExitEmail(userArray) {
  for (let i = 0; i < userArray.length; i++) {
    if (userArray[i].email === "hungmanh1@gmail.com") {
      return true;
    }
  }
  return false;
}
// hàm chung
function checkOneElementExit(userArray, callback) {
  for (let i = 0; i < userArray.length; i++) {
    if (callback(userArray[i])) {
      return true;
    }
  }
  return false;
}
// gọi hàm
let isCheckExitName = checkOneElementExit(users, function (element) {
  return element.name === "hungmanh1";
});
let isCheckExitEmail = checkOneElementExit(users, function (element) {
  return element.email === "hungmanh1@gmail.com";
});
let isCheckExitCity = checkOneElementExit(users, function (element) {
  return element.address.city === "Hồ Chí Minh";
});
console.log(isCheckExitName, isCheckExitEmail, isCheckExitCity);

// junior viết vậy ok rồi --> nhưng mà không ổn cho middle và senior

// góc nhìn senior
// tách ra thành thư viện ở core common
// không chính xác
// 1. Đảm bảo code mới hoạt động ok
// 2. Code cũ cũng ok

// đạt đến lv senior --> nghĩ nhiều --> sau này ít bug nhất --> họ có sửa đổi --> không ảnh hưởng code cũ
// if city) --> điều kiện của bài toán --> hiện tại đang viết trong core common --> nên để người sử dụng thư viện đưa vào
// thực thi hàm if( trong đây là 1 hàm thực thi -> true ->false -> dựa vào điều kiện trong body hàm)

// kết luận:
// 1. hàm define điều kiện do người dùng thư viện define ra
// 2. Thay điều kiện bằng lời gọi hàm
// Phương thức map() làm 2 việc, for qua và return lại object hay array theo điều kiện
