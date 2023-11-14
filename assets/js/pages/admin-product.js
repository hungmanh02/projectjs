const selectCate = document.querySelector(".category_wrapper_form");
const formProduct = document.querySelector("#form_save_product");
const tbodyProduct = document.querySelector(".product_table");
const btnSaveProduct = document.querySelector(".btn_save");
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
function handleUpdateProduct() {
  const idUpdate = btnSaveProduct.getAttribute("data-id");
  // 1. Tạo ra object cho idEdit
  let objectValue = {};
  const inputAll = formProduct.querySelectorAll(".form-control-item");
  inputAll.forEach(function (element) {
    if (element.name === "category_wrapper_form") {
      objectValue["category_id"] = element.value;
    } else {
      objectValue[element.name] = element.value;
    }
  });
  objectValue.id = idUpdate;
  const productType = document.querySelector(".type_product:checked").value;
  objectValue.product_type = productType;
  // 2. Tạo ra mảng chứa object cần edit và các object khác
  const products = JSON.parse(localStorage.getItem("products")) || [];
  const productsUpdate = products.map(function (element) {
    if (element.id === idUpdate) {
      return objectValue;
    } else {
      return element;
    }
  });
  // 3. Lưu dữ liệu vào local storage

  localStorage.setItem("products", JSON.stringify(productsUpdate));
  // 4. Hiển thị dữ liệu từ trong local
  showProductsInlocal();
  // 5. reset đến trạnh thái thêm mới sản phẩm
  btnSaveProduct.textContent = "Save";
  btnSaveProduct.classList.remove("update");
  btnSaveProduct.removeAttribute("data-id");
  // 6. reset input về trạng thái create
  inputAll.forEach(function (element) {
    element.value = "";
  });
}
function validateProductSuccess() {
  if (btnSaveProduct.classList.contains("update")) {
    handleUpdateProduct();
    return;
  }
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
  // 2. đưa object vào trong mảng
  let products = JSON.parse(localStorage.getItem("products")) || [];
  const productsNew = [objectValue, ...products];

  // 3. Lưu dữ liệu vào local storage

  localStorage.setItem("products", JSON.stringify(productsNew));
  // 4. Hiển thị dữ liệu từ trong local
  showProductsInlocal();
  // 5. reset input về trạng thái ban đầu
  inputAll.forEach(function (element) {
    element.value = "";
  });
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
            <button data-id="${element.id}" class="btn_common btn_edit">
              Edit
            </button>
            <button data-id="${element.id}" class="btn_common btn_delete">
              Delete
            </button>
          </td>
      </tr>`;
  });
  tbodyProduct.innerHTML = htmlResult;
}

function handleProcessProduct(event) {
  const clicked = event.target;

  // Kiểm tra nếu click vào button delete mới xử lí xóa
  if (
    clicked.classList.contains("btn_delete") &&
    confirm("Bạn chắc chắn muốn xóa")
  ) {
    // 1. Lấy ra id của object cần xóa
    const idDelete = clicked.getAttribute("data-id");
    // 2. Xóa object có chứa idDelete
    const products = JSON.parse(localStorage.getItem("products")) || [];
    const productsFilter = products.filter(function (element) {
      return element.id !== idDelete;
    });
    // 3. lưu dữ liệu vào local storage "Lưu lại những product không phải idDelete"
    localStorage.setItem("products", JSON.stringify(productsFilter));
    // 4. Hiện thị dữ liệu lại ngay lập tức
    showProductsInlocal();
  }
  //Kiểm tra nếu click vào button edit mới xử lí edit
  else if (clicked.classList.contains("btn_edit")) {
    // 1. Lấy ra id edit
    const idEdit = clicked.getAttribute("data-id");
    // 2. Lấy ra object có chứa idEdit
    const products = JSON.parse(localStorage.getItem("products")) || [];
    const elementEditting = products.find(function (element) {
      return element.id === idEdit;
    });
    // 3. Đưa dữ liệu object edit lấy được vào trong form
    const inputAll = formProduct.querySelectorAll(".form-control-item");
    // 4. Đưa value vào input trừ radio
    inputAll.forEach(function (element) {
      const keyName =
        element.name === "category_wrapper_form" ? "category_id" : element.name;
      element.value = elementEditting[keyName];
    });
    // Đưa value vào radio box
    document.querySelector(
      `.type_product[value="${elementEditting.product_type}"]`
    ).checked = true;
    // 4. phân biệt trạnh thái create hay update
    btnSaveProduct.textContent = "Update";
    btnSaveProduct.classList.add("update");
    btnSaveProduct.setAttribute("data-id", idEdit);
  }
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
// Thêm sự kiện xóa và edit cho sản phẩm
tbodyProduct.addEventListener("click", handleProcessProduct);
