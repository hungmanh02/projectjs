// 1. Chọn element

const btnSignUpSelector = document.querySelector(".btn-signup");
const inputAllSelector = document.querySelectorAll(".form-group input");
const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

// validate cho từng field một ( từng ô input một)
// Trong từng ô input check sẽ đính kèm các rule (quy tắc validate) của nó

// input
const rules = {
  name: { required: true },
  email: { required: true, minlenght: 3, email: true },
  password: { required: true, minlenght: 8 },
  confirm_password: { required: true, minlenght: 8, equal_to: password },
};

// 2. function xử lí sự kiện  + chạy lần đầu khi load
// ===== start Listener function =====

function handleSignUpClick(e) {
  e.preventDefault();
  console.log("click button ");
}
// ===== end Listener function =====

// 3. Thêm sự kiện cho phần tử

btnSignUpSelector.addEventListener("click", handleSignUpClick);
