const formCategory = document.querySelector("#category_form_add");
function deleteData() {
  console.log("delete Data");
}
function showDataCateFromLocal() {
  // 1. Lấy toàn bộ danh mục trong localStorage
  const categories = JSON.parse(localStorage.getItem("categories"));
  // 2. Xây dựng cấu trúc html cho danh mục
  let htmlResult = "";
  categories.forEach(function (element) {
    htmlResult =
      htmlResult +
      `<tr>
      <td>${element.name}</td>
      <td>
        <button class="btn_common btn_edit">Edit</button>
        <button class="btn_common btn_delete">
          Delete
        </button>
      </td>
      </tr>`;
  });
  // 3. Đưa kết quả toàn bộ danh mục vào tbody của table
  document.querySelector(".category_table").innerHTML = htmlResult;
  // Đưa sự kiện delete
  // Thêm sự kiện delete dữ liệu
  document.querySelectorAll(".btn_delete").forEach(function (element) {
    element.addEventListener("click", deleteData);
  });
}
function validateSuccess() {
  // 1. Lấy ra thông tin của danh mục
  const nameCategory = formCategory.querySelector(".category_name").value;
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
