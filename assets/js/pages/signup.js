let signupInstanceValidate = new Validate({
  container: ".form_register",
  rules: {
    name: { required: true },
    email: {
      required: true,
      minlength: 3,
      regex: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
    },
    password: { required: true, minlength: 8 },
    confirm_password: { required: true, minlength: 8, equal_to: "password" },
  },
  messages: {
    name_required: "Tên không được để trống",
    email_required: "Email không được để trống",
    password_required: "Mật khẩu không được để trống",
    confirm_password_required: "Nhập lại Mật khẩu không được để trống",
    email_regex: "Email không đúng định dạng",
  },
  success: function () {
    // 1. lấy dữ liệu input
    let users = [];
    let dataForm = {};

    document
      .querySelectorAll(".form_register input")
      .forEach(function (element) {
        if (element.name !== "confirm_password") {
          dataForm[element.name] = element.value;
        }
      });
    // 2.1 Create data users array
    dataForm["id"] = crypto.randomUUID();
    users.push(dataForm);
    console.log(users);
    // 2.2 save  to localStorage
    localStorage.setItem("users", JSON.stringify(users));
  },
  // btnClassSubmit: "btn-signup",
});
