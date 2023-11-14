const selectCate = document.querySelector(".category_wrapper_form");
const formProduct = document.querySelector("#form_save_product");
function showCategoryInProduct() {
  // 1. Lấy toàn bộ danh mục trong localStorage
  const cateAll = JSON.parse(localStorage.getItem("categories")) || [];
  let htmlOption = '<option value="">Chọn danh mục</option>';
  cateAll.forEach(function (element) {
    htmlOption =
      htmlOption + `<option value="${element.id}">${element.name}</option>`;
  });
  // 2. đưa options vào trong select
  selectCate.innerHTML = htmlOption;
}

// Hiện thị danh mục khi load trang lần đầu
showCategoryInProduct();
function validateProductSuccess() {
  // 1. Lấy ra value của input và tạo ra object chứa thông tin sản phẩm
  let objectValue = {};
  const inputAll = formProduct.querySelectorAll(".form-control-item");
  inputAll.forEach(function (element) {
    if (element.name === "category_wrapper_form") {
      objectValue["category_id"] = element.value;
    } else {
      objectValue[element.name] = element.value;
    }
  });
  objectValue.id = crypto.randomUUID();
  const productType = document.querySelector(".type_product:checked").value;
  objectValue.product_type = productType;
  console.log(objectValue);
  // 2. đưa object vào trong mảng
  let products = JSON.parse(localStorage.getItem("products")) || [];
  const productsNew = [objectValue, ...products];

  // 3. Lưu dữ liệu vào local storage

  localStorage.setItem("products", JSON.stringify(productsNew));
}
let validateProduct = new Validate({
  container: "#form_save_product",
  btnClassSubmit: "btn_save",
  rules: {
    name: { required: true },
    category_wrapper_form: { required: true },
    price_product: { required: true },
    image: { required: true },
    description: { required: true },
  },
  messages: {
    name_required: "Tên không được để trống",
  },
  success: validateProductSuccess,
});
