function Validate(options) {
  // khai báo biến có option
  const formGroupClass = options.formGroupClass || "form-group";
  const btnclassSubmit = options.btnclassSubmit || "btn-signup";
  const errorClass = options.errorClass || "error";
  const errorMessageClass = options.errorMessageClass || "error_message";
  const rules = options.rules;
  const messages = options.messages;

  // truy vấn DOM của thư viện
  const container = document.querySelector(options.container);
  const btnSignUpSelector = container.querySelector(`.${btnclassSubmit}`);

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
    inputSelector.classList.remove(errorClass);
    let divError = inputSelector
      .closest(`.${formGroupClass}`)
      .querySelector(`.${errorMessageClass}`);
    divError.textContent = "";
  }
  function showErrors() {
    errors.forEach(function (element) {
      let inputElement = element.elementError;
      let divError = inputElement
        .closest(`.${formGroupClass}`)
        .querySelector(`.${errorMessageClass}`);
      inputElement.classList.add(errorClass);
      divError.textContent = element.message;
    });
  }

  // add event listener + data init
  initEventAndData();
}
