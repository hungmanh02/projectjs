const selectCate = document.querySelector(".category_wrapper_form");
const formProduct = document.querySelector("#form_save_product");
const tbodyProduct = document.querySelector(".product_table");
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
//Hiện thị products khi load page
showProductsInlocal();
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
  // 4. Hiển thị dữ liệu từ trong local
  showProductsInlocal();
}
function showProductsInlocal() {
  const products = JSON.parse(localStorage.getItem("products")) || [];
  let htmlResult = "";
  products.forEach(function (element) {
    htmlResult =
      htmlResult +
      `<tr>
          <td>${element.name}</td>
          <td>${element.price_product}</td>
          <td><img src="${element.image}" alt="${element.name}" /></td>
          <td>
            <button class="btn_common btn_edit">
              Edit
            </button>
            <button class="btn_common btn_delete">
              Delete
            </button>
          </td>
      </tr>`;
  });
  tbodyProduct.innerHTML = htmlResult;
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
