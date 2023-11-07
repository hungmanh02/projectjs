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
  { name: "hungmanh1", email: "hungmanh1@gmail.com" },
  { name: "hungmanh2", email: "hungmanh2@gmail.com" },
  { name: "hungmanh3", email: "hungmanh3@gmail.com" },
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
function checkOneElementExit(userArray, keyName, value) {
  for (let i = 0; i < userArray.length; i++) {
    if (userArray[i][keyName] === value) {
      return true;
    }
  }
  return false;
}
// gọi hàm
let isCheckExitName = checkOneElementExit(users, "name", "hungmanh1");
let isCheckExitEmail = checkOneElementExit(
  users,
  "email",
  "hungmanh1@gmail.com"
);
console.log(isCheckExitName, isCheckExitEmail);

// junior
