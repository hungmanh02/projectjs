// 1. Chọn element

const btnSignUpSelector = document.querySelector(".btn-signup");
const inputNameSelector = document.querySelector(".name");
const inputEmailSelector = document.querySelector(".email");
const inputPasswordSelector = document.querySelector(".password");
const inputAllSelector = document.querySelectorAll(".form-group input");
const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
// console.log(inputAllSelector);
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
    if (valueInput === "") {
      // thêm viền đỏ cho input
      inputSelector.classList.add("error");
      // hiển thị message lỗi
      let message = name + " không được để trống";
      divMessageSelector.textContent = message;
    } else if (name === "email") {
      // validate email tối thiểu minLenght kí tự
      let isMinLenghtValid = minLengthValidate(inputSelector, name);

      // validete regex email
      let isEmailRegexValid;

      if (isMinLenghtValid) {
        isEmailRegexValid = emailRegexValidate(inputSelector, name);
      }

      // validate khác
      // check validate success
      if (isMinLenghtValid && isEmailRegexValid) {
        showSuccess(inputSelector, divMessageSelector);
      }
    } else if (name === "password") {
      //validate password tối thiểu 8 kí tự
      let isMinLenghtValid = minLengthValidate(
        inputSelector,
        name,
        "password phải có đủ 8 kí tự"
      );
    } else {
      showSuccess(inputSelector, divMessageSelector);
    }
  }
}
// validate success
function showSuccess(inputSelector, divMessageSelector) {
  inputSelector.classList.remove("error");
  divMessageSelector.textContent = "";
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
