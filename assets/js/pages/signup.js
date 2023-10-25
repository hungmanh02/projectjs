// 1. Chọn element

const btnSignUpSelector = document.querySelector(".btn-signup");
const inputAllSelector = document.querySelectorAll(".form-group input");
const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const errorMessageAll = document.querySelectorAll(".error_message");

// validate cho từng field một ( từng ô input một)
// Trong từng ô input check sẽ đính kèm các rule (quy tắc validate) của nó

// 2. function xử lí sự kiện  + chạy lần đầu khi load

function handleSignUpClick(e) {
  e.preventDefault();
  // 1. Thực hiện validate
  for (let i = 0; i < inputAllSelector.length; i++) {
    let inputSelector = inputAllSelector[i];
    let valueInput = inputSelector.value;
    let divMessageSelector = inputSelector
      .closest(".form-group")
      .querySelector(".error_message");
    let name = inputSelector.name;
    // validate  not empty
    if (name === "name") {
      validateName(inputSelector);
    } else if (name === "email") {
      if (!require(inputSelector)) {
        showError(inputSelector, "Email không được để trống");
      } else if (!minLenght(inputSelector)) {
        showError(
          inputSelector,
          `Email tối thiểu ${inputSelector.getAttribute("min_lenght")}`
        );
      } else if (!emailRegex(inputSelector)) {
        showError(inputSelector, "Email không đúng định dạng");
      } else {
        showSuccess(inputSelector);
      }
    } else if (name === "password") {
      if (!require(inputSelector)) {
        showError(inputSelector, "password không được để trống");
      } else if (!minLenght(inputSelector)) {
        showError(
          inputSelector,
          `password phải ít nhất ${inputSelector.getAttribute(
            "min_lenght"
          )} kí tự`
        );
      } else {
        showSuccess(inputSelector);
      }
    } else {
      if (!require(inputSelector)) {
        showError(inputSelector, "confirm password không được để trống");
      } else if (!minLenght(inputSelector)) {
        showError(
          inputSelector,
          `confirm password phải ít nhất ${inputSelector.getAttribute(
            "min_lenght"
          )} kí tự`
        );
      } else if (!comparePass(inputSelector)) {
        showError(inputSelector, "confirm password không trùng với password");
      } else {
        showSuccess(inputSelector);
      }
    }
  }
}

function validateName(inputSelector) {
  //require
  if (!require(inputSelector)) {
    showError(inputSelector, "Tên không được để trống");
  } else {
    showSuccess(inputSelector);
  }
}

// rule require
// output:return true or false
function require(inputSelector) {
  return inputSelector.value ? true : false;
}
// validate error
function showError(inputSelector, message = null) {
  // hiện thị màu đỏ cho ô input
  inputSelector.classList.add("error");
  // thêm nội dung lỗi cho message dưới ô input
  let divMessageSelector = inputSelector
    .closest(".form-group")
    .querySelector(".error_message");
  divMessageSelector.textContent = message;
}

// validate success
function showSuccess(inputSelector) {
  inputSelector.classList.remove("error");
  let divMessageSelector = inputSelector
    .closest(".form-group")
    .querySelector(".error_message");
  divMessageSelector.textContent = "";
}

// rule min lenght
function minLenght(inputSelector) {
  let minLenght = inputSelector.getAttribute("min_lenght");
  let inputValue = inputSelector.value;
  if (inputValue.length < minLenght) {
    return false;
  }
  return true;
}
// validate email regex
function emailRegex(inputSelector) {
  let inputValue = inputSelector.value;
  return regexEmail.test(inputValue); // return true hoặc false
}
// rule compare
function comparePass(inputSelector) {
  let valueConfirmPass = inputSelector.value;
  let passwordSelector = document.querySelector(
    "." + inputSelector.getAttribute("selector_compare")
  );
  let valuePassword = passwordSelector.value;
  return valueConfirmPass === valuePassword;
}
// hàm chỉ chạy khi người dùng nhập value có sự thay đổi
function handleChangValue(event) {
  let inputSelector = event.target;
  let nameInput = inputSelector.name;
  if (nameInput === "name") {
    validateName(inputSelector);
  } else if (nameInput === "email") {
  } else if (nameInput === "password") {
  } else {
  }
}
// 3. Thêm sự kiện cho phần tử

btnSignUpSelector.addEventListener("click", handleSignUpClick);
//thêm sự kiện input cho các ô input nhập liệu
for (let i = 0; i < inputAllSelector.length; i++) {
  let inputElement = inputAllSelector[i];
  inputElement.addEventListener("input", handleChangValue);
}
