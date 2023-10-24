// 1. Chọn element

const btnSignUpSelector = document.querySelector(".btn-signup");
const inputNameSelector = document.querySelector(".name");
const inputEmailSelector = document.querySelector(".email");
const inputPasswordSelector = document.querySelector(".password");
const inputAllSelector = document.querySelectorAll(".form-group input");
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
      minLengthValidate(inputSelector, name);
    } else if (name === "password") {
      //validate password tối thiểu 8 kí tự
      minLengthValidate(inputSelector, name);
    } else {
      divMessageSelector.textContent = "";
    }
  }
}
// rule validate mi-lenght

function minLengthValidate(inputSelector, name) {
  let valueInput = inputSelector.value;
  let divMessageSelector = inputSelector
    .closest(".form-group")
    .querySelector(".error_message");
  //optional
  let minLenght = inputSelector.getAttribute("min_lenght");
  if (valueInput.length < minLenght) {
    let message = name + " tối thiểu " + minLenght + " kí tự";
    divMessageSelector.textContent = message;
  }
}
// 3. Thêm sự kiện cho phần tử

btnSignUpSelector.addEventListener("click", handleSignUpClick);
