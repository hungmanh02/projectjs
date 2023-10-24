// 1. Chọn element

const btnSignUpSelector = document.querySelector(".btn-signup");
const inputNameSelector = document.querySelector(".name");

// 2. function xử lí sự kiện  + chạy lần đầu khi load

function handleSignUpClick(e) {
  e.preventDefault();
  // 1. Thực hiện validate
  let inputValueName = inputNameSelector.value;
  let errorNameSelector = inputNameSelector
    .closest(".form-group")
    .querySelector(".error_message"); // tìm tới class cha gần nhất rồi querySelector tới error_message
  if (inputValueName === "") {
    inputNameSelector.classList.add("error"); // add class error để báo lỗi khi form trống , class error đã css
    errorNameSelector.textContent = "Tên không được để trống";
  } else {
    inputNameSelector.classList.remove("error"); // remove class error để báo lỗi khi form trống , class error đã css
    errorNameSelector.textContent = "";
  }
}

// 3. Thêm sự kiện cho phần tử

btnSignUpSelector.addEventListener("click", handleSignUpClick);
