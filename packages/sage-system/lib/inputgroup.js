Sage.inputgroup = (function() {

  // ==================================================
  // Functions
  // ==================================================
  const inputPaddingOffset = 16;
  const inputGroupBtns = Sage.util.nodelistToArray(document.querySelectorAll(".sage-input-group__button"));
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
    inputGroupBtns.forEach(function(btn) {
      const parentGroup = btn.closest(".sage-input-group");
      const field = parentGroup.querySelector(".sage-input__field");
      field.style.paddingRight = `${btn.offsetWidth + inputPaddingOffset }px`;
    });
  }

  function positionGroupButton() {
    inputGroupBtns.forEach(function(btn) {
      const parentGroup = btn.closest(".sage-input-group");
      const label = parentGroup.querySelector(".sage-input__label");
      const labelStyles = window.getComputedStyle(label);
      btn.style.top = `${label.offsetHeight + parseInt(labelStyles.marginBottom) + inputBoxShadowWidth }px`;
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

  window.addEventListener("load", function(){
    if (document.querySelector(".sage-input-group__button").length !== null) {
      addButtonPadding();
      positionGroupButton();
    }
  });

  function init() {
    if (document.querySelector(".sage-input-group__toggle").length !== null) {
      bindPWEvents();
    }
  }

  return {
    init: init
  };

})();
