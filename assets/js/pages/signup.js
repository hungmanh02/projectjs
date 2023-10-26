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
      //require
      if (!require(inputSelector)) {
        // show error
      } else {
        // show success
      }
      console.log(require(inputSelector));
    } else if (name === "email") {
      // 1. require
      // 2. minLenght
      // 3. regex validate email
    } else if (name === "password") {
      // 1. require
      // 2. minLenght
    } else {
      // 1. require
      // 2. minLenght
      // 3. compare password
    }
  }

  // kiểm tra không có ô input nào có lỗi validate
  // 1. lưu vào user vào localStorage
  // 2. redirect đến màn hình login
  // for (let i = 0; i < errorMessageAll.length; i++) {
  //   if (errorMessageAll[i].textContent !== "") {
  //     isFormValid = false;
  //     break;
  //   }
  // }

  // if (isFormValid) {
  //   console.log("to page login");
  // }
}

// rule require
// output:return true or false
function require(inputSelector) {
  return inputSelector.value ? true : false;
}

// validate success
function showSuccess(inputSelector, divMessageSelector) {
  inputSelector.classList.remove("error");
  divMessageSelector.textContent = "";
}
// rule compare data
function compareFileValidate(inputSelector, name, message) {
  let isValid = true;
  let valueInput = inputSelector.value;
  let divMessageSelector = inputSelector
    .closest(".form-group")
    .querySelector(".error_message");
  let compareSelectorClass = inputSelector.getAttribute("selector_compare");
  let compareSelector = document.querySelector("." + compareSelectorClass);
  if (compareSelector.value !== valueInput) {
    isValid = false;
    // thêm viền đỏ cho input
    inputSelector.classList.add("error");
    // hiển thị message lỗi
    let messageError =
      "dữ liệu nhập ở " +
      name +
      " không trùng với dữ liệu nhập ở" +
      compareSelectorClass;
    if (message) {
      messageError = message;
    }
    divMessageSelector.textContent = messageError;
  }
  return isValid;
}
// rule required validate
function requireValidate(inputSelector, name, message) {
  // 1. Kiểm tra xem rule có hợp lệ hay không ?
  // 2. Nếu không hợp lệ, hiện thị thông báo lỗi dưới ô input
  let isValid = true;
  let divMessageSelector = inputSelector
    .closest(".form-group")
    .querySelector(".error_message");
  let valueInput = inputSelector.value;
  if (valueInput === "") {
    isValid = false;
    // thêm viền đỏ cho input
    inputSelector.classList.add("error");
    // hiển thị message lỗi
    let messageError = name + " không được để trống";
    if (message) {
      messageError = message;
    }
    divMessageSelector.textContent = messageError;
  }
  return isValid;
}
// rule validate regex email
function emailRegexValidate(inputSelector, name, message) {
  let isValid = true;
  let valueInput = inputSelector.value;
  let isValidRegex = regexEmail.test(valueInput);
  let divMessageSelector = inputSelector
    .closest(".form-group")
    .querySelector(".error_message");
  if (isValidRegex == false) {
    isValid = false;
    inputSelector.classList.add("error");
    let messageError = "Không phải định dạng " + name + " hợp lệ";
    if (message) {
      messageError = message;
    }
    divMessageSelector.textContent = messageError;
  }
  return isValid;
}

// rule validate min-lenght
function minLengthValidate(inputSelector, name, message) {
  let isValid = true;
  let valueInput = inputSelector.value;
  let divMessageSelector = inputSelector
    .closest(".form-group")
    .querySelector(".error_message");
  //optional
  let minLenght = inputSelector.getAttribute("min_lenght");
  if (valueInput.length < minLenght) {
    isValid = false;
    inputSelector.classList.add("error");
    let messageError = name + " tối thiểu " + minLenght + " kí tự";
    if (message) {
      messageError = message;
    }
    divMessageSelector.textContent = messageError;
  }
  return isValid;
}
// 3. Thêm sự kiện cho phần tử

btnSignUpSelector.addEventListener("click", handleSignUpClick);
