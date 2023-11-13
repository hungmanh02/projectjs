const selectCate = document.querySelector(".category_wrapper_form");
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
