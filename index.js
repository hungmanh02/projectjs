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
