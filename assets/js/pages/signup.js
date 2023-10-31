// 1. Chọn element

const btnSignUpSelector = document.querySelector(".btn-signup");
const inputAllSelector = document.querySelectorAll(".form-group input");
const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

// validate cho từng field một ( từng ô input một)
// Trong từng ô input check sẽ đính kèm các rule (quy tắc validate) của nó

// input
const rules = {
  name: { required: true },
  email: { required: true, minlenght: 3, email: true },
  password: { required: true, minlenght: 8 },
  confirm_password: { required: true, minlenght: 8, equal_to: "password" },
};

// 2. function xử lí sự kiện  + chạy lần đầu khi load

const methodsRule = {
  required: function (valueInput, paramsInput) {
    console.log("required running");
    return valueInput ? true : false;
  },
  minlenght: function (valueInput, paramsInput) {
    console.log("minlenght runing");
    // return valueInput.lenght >= paramsInput; bằng nhau
    return valueInput.lenght >= paramsInput ? true : false;
  },
  email: function (valueInput, paramsInput) {
    console.log("email running");
    return regexEmail.test(valueInput);
    // return regexEmail.test(valueInput) ? true : false; bằng nhau
  },
  equal_to: function (valueInput, paramsInput) {
    console.log("equal to runing");
    let passSelector = document.querySelector("." + paramsInput);
    let valuePass = passSelector.value;
    return valuePass === valueInput; // trả về kết quả true false
  },
};

// ===== start Listener function =====

function handleSignUpClick(e) {
  e.preventDefault();
  // loop qua từng phần tử input validate
  for (const keyNameInput in rules) {
    let ruleAllForInput = rules[keyNameInput];
    let inputElement = document.querySelector("." + keyNameInput);
    let valueInput = inputElement.value;
    console.log(inputElement);
    // loop qua từng rule validate của input đấy
    for (const ruleItemKey in ruleAllForInput) {
      let paramsInput = ruleAllForInput[ruleItemKey];
      let result = methodsRule[ruleItemKey](valueInput, paramsInput);
      console.log(result);
    }
  }
}
// ===== end Listener function =====

// 3. Thêm sự kiện cho phần tử

btnSignUpSelector.addEventListener("click", handleSignUpClick);
