// 1. Chọn element

const btnSignUpSelector = document.querySelector(".btn-signup");
const inputNameSelector = document.querySelector(".name");
const inputEmailSelector = document.querySelector(".email");
const inputPasswordSelector = document.querySelector(".password");
const inputAllSelector = document.querySelectorAll(".form-group input");
const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

// validate cho từng field một ( từng ô input một)
// Trong từng ô input check sẽ đính kèm các rule (quy tắc validate) của nó

// 2. function xử lí sự kiện  + chạy lần đầu khi load

function handleSignUpClick(e) {
  e.preventDefault();

  // tối ưu validate
  // 1. Thực hiện validate
  for (let i = 0; inputAllSelector.length; i++) {
    let inputSelector = inputAllSelector[i];
    // console.log(inputSelector);
    let valueInput = inputSelector.value;
    let divMessageSelector = inputSelector
      .closest(".form-group")
      .querySelector(".error_message");
    let name = inputSelector.name;
    // validate  not empty
    if (name === "name") {
      let isRequireValid = requireValidate(inputSelector, name);
      if (isRequireValid) {
        showSuccess(inputSelector, divMessageSelector);
      }
    } else if (name === "email") {
      let isMinLenghtValid;
      let isEmailRegexValid;
      let isRequireValid = requireValidate(inputSelector, name);

      // validate email tối thiểu minLenght kí tự
      if (isRequireValid) {
        isMinLenghtValid = minLengthValidate(inputSelector, name);
      }

      // validete regex email

      if (isRequireValid && isMinLenghtValid) {
        isEmailRegexValid = emailRegexValidate(inputSelector, name);
      }

      // validate khác
      // check validate success
      if (isRequireValid && isMinLenghtValid && isEmailRegexValid) {
        showSuccess(inputSelector, divMessageSelector);
      }
    } else if (name === "password") {
      let isMinLenghtValid;
      let isRequireValid = requireValidate(inputSelector, name);
      //validate password tối thiểu 8 kí tự
      if (isRequireValid) {
        isMinLenghtValid = minLengthValidate(inputSelector, name);
      }
      // check success
      if (isRequireValid && isMinLenghtValid) {
        showSuccess(inputSelector, divMessageSelector);
      }
    } else {
      let isMinLenghtValid;
      let isRequireValid = requireValidate(inputSelector, name);
      //validate password tối thiểu 8 kí tự
      if (isRequireValid) {
        isMinLenghtValid = minLengthValidate(inputSelector, name);
      }
      // check success
      if (isRequireValid && isMinLenghtValid) {
        showSuccess(inputSelector, divMessageSelector);
      }
    }
  }
}
// validate success
function showSuccess(inputSelector, divMessageSelector) {
  inputSelector.classList.remove("error");
  divMessageSelector.textContent = "";
}
// rule required validate
function requireValidate(inputSelector, name, message) {
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
