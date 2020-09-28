Sage.inputgroup = (function() {

  // ==================================================
  // Functions
  // ==================================================

  function togglePasswordDisplay(evt) {
    var parentEle = evt.target.parentElement,
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


  function bindPWEvents() {
    var pwShowBtn = Sage.util.nodelistToArray(document.querySelectorAll("[data-js-mask='password']"));

    // show/hide password text; assumes multiple password fields
    pwShowBtn.forEach(function(btn) {
      btn.addEventListener("click", function(e) {
        togglePasswordDisplay(e);
      });
    });
  }


  function init() {
    if (document.querySelector(".sage-input-group__toggle").length !== null) {
      bindPWEvents();
    }
  }


  return {
    init: init
  };

})();
