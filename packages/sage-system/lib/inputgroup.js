Sage.inputgroup = (function() {

  // ==================================================
  // Functions
  // ==================================================
  const inputPaddingOffset = 16;

  function togglePasswordDisplay(evt) {
    const parentEle = evt.target.parentElement,
       field = parentEle.querySelector(".sage-input__field"),
       activeClassName = "sage-input-group--visible";

    if (field.type === "password") {
      field.type = "text";
      parentEle.classList.add(activeClassName);
    } else {
      field.type = "password";
      parentEle.classList.remove(activeClassName);
    }

    field.focus();
  }


  function addButtonPadding() {
    const inputGroupBtns = Sage.util.nodelistToArray(document.querySelectorAll(".sage-input-group__button"));

    inputGroupBtns.forEach(function(btn) {
      const parentGroup = btn.closest(".sage-input-group");
      const field = parentGroup.querySelector(".sage-input__field");

      field.style.paddingRight = `${btn.offsetWidth + inputPaddingOffset }px`;

      console.info("field", field.style.paddingRight);
    });
  }


  function bindPWEvents() {
    const pwShowBtn = Sage.util.nodelistToArray(document.querySelectorAll("[data-js-mask='password']"));

    // show/hide password text; assumes multiple password fields
    pwShowBtn.forEach(function(btn) {
      btn.addEventListener("click", function(e) {
        togglePasswordDisplay(e);
      });
    });
  }


  function init() {
    if (document.querySelector(".sage-input-group__button").length !== null) {
      addButtonPadding();
    }

    if (document.querySelector(".sage-input-group__toggle").length !== null) {
      bindPWEvents();
    }
  }


  return {
    init: init
  };

})();
