Sage.inputgroup = (function() {

  // ==================================================
  // Functions
  // ==================================================
  const inputPaddingOffset = 16;
  const inputBoxShadowWidth = 1;

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
      const parentDir = parentGroup.getAttribute('dir');

      if (parentDir === 'rtl') {
        field.style.paddingLeft = `${btn.offsetWidth + inputPaddingOffset}px`;
      } else {
        field.style.paddingRight = `${btn.offsetWidth + inputPaddingOffset}px`;
      }
    });
  }

  function positionButtonOnError() {

    if (document.querySelector(".sage-form-field--error") !== null) {
      const inputGroupsWithErrors = Sage.util.nodelistToArray(
        document.querySelectorAll(".sage-form-field--error")
      );

      inputGroupsWithErrors.forEach(function (group) {
        const parentGroup = group.closest(".sage-input-group");
        const label = parentGroup.querySelector(".sage-input__label");
        const btn = parentGroup.querySelector(".sage-input-group__button");
        const labelStyles = window.getComputedStyle(label);
        btn.style.top = `${parseInt(labelStyles.lineHeight) + parseInt(labelStyles.marginBottom) + inputBoxShadowWidth}px`;
      });
    }
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

    if (document.querySelector(".sage-input-group__button") !== null) {
      window.addEventListener("load", function(){
        addButtonPadding();
        positionButtonOnError();
      });
    };

    if (document.querySelector(".sage-input-group__toggle") !== null) {
      bindPWEvents();
    }
  }

  return {
    init: init
  };

})();
