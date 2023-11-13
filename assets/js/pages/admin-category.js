const formCategory = document.querySelector("#category_form_add");
const tbodyCate = document.querySelector(".category_table");
const categoryInputName = document.querySelector(".category_name");
const buttonSave = document.querySelector(".btn_category_save");
function deleteData() {
  console.log("delete Data");
}
function showDataCateFromLocal() {
  // 1. Lấy toàn bộ danh mục trong localStorage
  const categories = JSON.parse(localStorage.getItem("categories")) || [];
  // 2. Xây dựng cấu trúc html cho danh mục
  let htmlResult = "";
  categories.forEach(function (element) {
    htmlResult =
      htmlResult +
      `<tr>
      <td>${element.name}</td>
      <td>
        <button data-id="${element.id}" class="btn_common btn_edit">Edit</button>
        <button data-id="${element.id}" class="btn_common btn_delete">
          Delete
        </button>
      </td>
      </tr>`;
  });
  // 3. Đưa kết quả toàn bộ danh mục vào tbody của table
  tbodyCate.innerHTML = htmlResult;
  // // Đưa sự kiện delete
  // // Thêm sự kiện delete dữ liệu
  // document.querySelectorAll(".btn_delete").forEach(function (element) {
  //   element.addEventListener("click", deleteData);
  // });
}
function validateSuccess() {
  // 1. Lấy ra thông tin của danh mục
  const nameCategory = categoryInputName.value;
  // 2. Tạo ra object chứa thông tin danh mục
  const newCate = {
    id: crypto.randomUUID(),
    name: nameCategory,
  };
  // 3. Đưa object vào trong mảng category
  const categories = JSON.parse(localStorage.getItem("categories")) || [];
  const categoriesUpdate = [newCate, ...categories];
  // 4. Lưu vào trong local
  localStorage.setItem("categories", JSON.stringify(categoriesUpdate));
  // 5. Hiện thị dữ liệu ngay lập tức khi thêm thành công
  showDataCateFromLocal();
}
function handleProcessData(event) {
  const clicked = event.target;
  // lấy ra tất cả danh mục trong local
  const categories = JSON.parse(localStorage.getItem("categories")) || [];
  // khi người dùng click vào button delete
  if (
    clicked.classList.contains("btn_delete") &&
    confirm("Bạn chắc chắn muốn delete")
  ) {
    // mảng lọc ra phần tử cần delete
    const idDelete = clicked.getAttribute("data-id");
    const categoriesFilter = categories.filter(function (element) {
      return element.id !== idDelete;
    });
    // lưu vào  localStorage --  những categories không phải idDelete
    localStorage.setItem("categories", JSON.stringify(categoriesFilter));
    // Hiện thị dữ liệu ngay trong lập tức khi xóa thành công ---- Rerende app
    showDataCateFromLocal();
  }
  // khi người dùng click vào  button edit
  else if (clicked.classList.contains("btn_edit")) {
    // 1. Lấy ra id của element edit
    const idEdit = clicked.getAttribute("data-id");
    // 2. Lấy ra object element theo id edit

    const elementEditting = categories.find(function (element) {
      return element.id === idEdit;
    });
    // 3. Đưa name lên ô input đang chỉnh sửa
    categoryInputName.value = elementEditting.name;
    // 4. Chỉnh sửa để người dùng nhận biết hiện tại đang edit form
    // 4.1 Thay đổi text button để update
    buttonSave.textContent = "Update";
    // 4.2 Thêm class để biết là update
    buttonSave.classList.add("update");
    // 4.3 Thêm id để biết update cho object nào
    buttonSave.setAttribute("data-id", idEdit);
  }
}
// Hiện thị dữ liệu category từ local
showDataCateFromLocal();
let validateCategory = new Validate({
  container: "#category_form_add",
  btnClassSubmit: "btn_category_save",
  rules: {
    category_name: {
      required: true,
    },
  },
  messages: {
    category_name_required: "Danh mục không được để trống",
  },
  success: validateSuccess,
});

tbodyCate.addEventListener("click", handleProcessData);
