function rules() {
  return {
    email: {
      required: true,
      minlength: 3,
      regex: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
    },
    password: { required: true, minlength: 8 },
  };
}
function messages() {
  return {
    email_required: "Email không được để trống",
    password_required: "Mật khẩu không được để trống",
    email_regex: "Email không đúng định dạng",
  };
}
function validateSuccess() {
  console.log(" validate sucsses");
}
let loginInstanceValidate = new Validate({
  container: ".login_form",
  btnclassSubmit: "btn-login",
  rules: rules(),
  messages: messages(),
  success: validateSuccess,
});
