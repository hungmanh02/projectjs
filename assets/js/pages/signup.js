const formRegister = document.querySelector(".form_register");
const togglePass = formRegister.querySelector(".toogle_password");
function rules() {
  return {
    name: { required: true },
    email: {
      required: true,
      minlength: 3,
      regex: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
    },
    password: { required: true, minlength: 8 },
    confirm_password: { required: true, minlength: 8, equal_to: "password" },
  };
}
function messages() {
  return {
    name_required: "Tên không được để trống",
    email_required: "Email không được để trống",
    password_required: "Mật khẩu không được để trống",
    confirm_password_required: "Nhập lại Mật khẩu không được để trống",
    email_regex: "Email không đúng định dạng",
  };
}
function validateSuccess() {
  // 1. lấy dữ liệu input
  let dataForm = {};
  // 1. Chưa có thông tin user trong localStorage
  let users = JSON.parse(localStorage.getItem("users")) || [];
  // check emial exits
  const email = formRegister.querySelector(".email").value;
  let isEmailExit = users.some(function (element) {
    return element.email === email;
  });
  // Nếu email chưa tồn tại thì mới thêm thông tin user vào local
  if (!isEmailExit) {
    formRegister.querySelectorAll("input").forEach(function (element) {
      if (element.name !== "confirm_password") {
        dataForm[element.name] = element.value;
      }
    });
    // 2.1 Create data users array
    dataForm["id"] = crypto.randomUUID();
    dataForm["status"] = "";
    users.push(dataForm);
    // 2.2 save  to localStorage
    localStorage.setItem("users", JSON.stringify(users));
    // 3. redirect to page login
    window.location.href = "/login.html";
  }
}
function handleTogglePass(event) {
  const clicked = event.target;
  const inputChangeType = clicked
    .closest(".form-group")
    .querySelector(".password");
  const type =
    inputChangeType.getAttribute("type") === "password" ? "text" : "password";
  inputChangeType.setAttribute("type", type);

  clicked.classList.toggle("fa-eye-slash");
  clicked.classList.toggle("fa-eye");
}
togglePass.addEventListener("click", handleTogglePass);
// config validate form
let signupInstanceValidate = new Validate({
  container: ".form_register",
  btnClassSubmit: "btn-signup",
  rules: rules(),
  messages: messages(),
  success: validateSuccess,
});
