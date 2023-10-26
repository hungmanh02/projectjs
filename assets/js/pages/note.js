// I. Phân tích tài liệu validate cho phần register
// Phần yêu cầu về bài toán cho trước (input)
// + Đây là yêu cầu cho validate trường hợp nhập thông tin name
//  - Tên không được để trống
// + Đây là yêu cầu cho validate trường hợp nhập thông tin email
//  - email không được để trống
//  - email phải có ít nhất 3 kí tự
//  - email phải đúng định dạng
// + Đây là yêu cầu cho validate trường hợp nhập thông tin password
//  - password không được để trống
//  - password phải có ít nhất 8 kí tự cho bảo mật
// + Đây là yêu cầu cho validate trường hợp nhập thông tin config password
//  - confirm password không được để trống
//   confirm password phải có ít nhất 8 kí tự cho bảo mật
//  - confirm password phải trùng với giá trị password

// Bài toán cần được giải quyết (Output)

// rules message
const rules = {
  name: required,
  email: required | min | email,
  password: required | min,
  confirm_password: required | min,
};
// 1. chuẩn hóa dữ liệu
const rules1 = {
  name: {
    required: true,
  },
  email: {
    required: true,
    minlenght: 3,
  },
  password: {
    required: true,
    minlenght: 8,
  },
  confirm_password: {
    required: true,
    minlenght: 8,
    equal_to: password,
  },
};
