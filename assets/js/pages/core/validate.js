function Validate(options) {
  // 1. Lấy ra container bao đống form
  const container = document.querySelector(options.container);
  // 2. Tất cả các elements khác query dựa vào container
  const btnSignUpSelector = container.querySelector(".btn-signup");
  const rules = options.rules;
  const messages = options.messages;
  let errors;

  const ruleMethod = {
    required: function (valueInput, valueRule) {
      return valueInput !== "";
    },
    minlength: function (valueInput, valueRule) {
      return valueInput.length >= valueRule;
    },
    regex: function (valueInput, valueRule) {
      return valueRule.test(valueInput);
    },
    equal_to: function (valueInput, valueRule) {
      let passSelector = container.querySelector(`.${valueRule}`);
      let valuePass = passSelector.value;
      return valuePass === valueInput;
    },
  };

  function initEventAndData() {
    btnSignUpSelector.addEventListener("click", handleSignUpClick);
  }
  function handleSignUpClick(e) {
    e.preventDefault();
    errors = [];
    for (const keyInputName in rules) {
      const inputSelector = container.querySelector(`.${keyInputName}`);
      const valueInput = inputSelector.value;
      const ruleAllForInput = rules[keyInputName];
      // reset all errors
      resetErrors(inputSelector);
      for (const ruleItemKey in ruleAllForInput) {
        const valueRule = ruleAllForInput[ruleItemKey];
        const result = ruleMethod[ruleItemKey](valueInput, valueRule);
        const keyMessage = keyInputName + "_" + ruleItemKey;
        if (!result) {
          // đẩy lỗi vào biến đang lưu trữ
          errors.push({
            elementError: inputSelector,
            message: messages[keyMessage]
              ? messages[keyMessage]
              : keyInputName + "not valid",
          });
          break;
        }
      }
    }

    // Hiện thị lỗi
    if (errors.length) {
      showErrors();
    }
  }
  function resetErrors(inputSelector) {
    inputSelector.classList.remove("error");
    inputSelector.nextElementSibling.textContent = "";
  }
  function showErrors() {
    errors.forEach(function (element) {
      let inputElement = element.elementError;
      let divError = inputElement.nextElementSibling;
      inputElement.classList.add("error");
      divError.textContent = element.message;
    });
  }

  // add event listener + data init
  initEventAndData();
}
