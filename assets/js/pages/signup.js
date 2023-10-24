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
  // 1. Thực hiện validate

  // 1.1 validate input name
  // let inputValueName = inputNameSelector.value;
  // let errorNameSelector = inputNameSelector
  //   .closest(".form-group")
  //   .querySelector(".error_message"); // tìm tới class cha gần nhất rồi querySelector tới error_message
  // if (inputValueName === "") {
  //   inputNameSelector.classList.add("error"); // add class error để báo lỗi khi form trống , class error đã css
  //   errorNameSelector.textContent = "Tên không được để trống";
  // } else {
  //   inputNameSelector.classList.remove("error"); // remove class error để báo lỗi khi form trống , class error đã css
  //   errorNameSelector.textContent = "";
  // }

  // // 1.2 validate input email
  // let inputValueEmail = inputEmailSelector.value;
  // let errorEmailSelector = inputEmailSelector
  //   .closest(".form-group")
  //   .querySelector(".error_message");

  // if (inputValueEmail === "") {
  //   inputNameSelector.classList.add("error");
  //   errorEmailSelector.textContent = "Email không được để trống";
  // } else {
  //   inputNameSelector.classList.remove("error");
  //   errorEmailSelector.textContent = "";
  // }

  // // 1.3 validate input password
  // let inputValuePassword = inputPasswordSelector.value;
  // let errorPasswordSelector = inputPasswordSelector
  //   .closest(".form-group")
  //   .querySelector(".error_message");
  // if (inputValuePassword === "") {
  //   inputPasswordSelector.classList.add("error");
  //   errorPasswordSelector.textContent = "Password không được để trống";
  // } else {
  //   inputPasswordSelector.classList.remove("error");
  //   errorPasswordSelector.textContent = "";
  // }

  // tối ưu validate
  // 1. Thực hiện validate
  for (let i = 0; inputAllSelector.length; i++) {
    let inputSelector = inputAllSelector[i];
    let valueInput = inputSelector.value;
    let divMessageSelector = inputSelector
      .closest(".form-group")
      .querySelector(".error_message");
    // validate  not empty
    if (valueInput === "") {
      // thêm viền đỏ cho input
      inputSelector.classList.add("error");
      // hiển thị message lỗi
      let name = inputSelector.name;
      let message = name + " không được để trống";
      divMessageSelector.textContent = message;
    }
  }
}

// 3. Thêm sự kiện cho phần tử

btnSignUpSelector.addEventListener("click", handleSignUpClick);
