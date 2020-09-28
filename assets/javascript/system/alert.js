Sage.alert = (function () {
  // ==================================================
  // Variables
  // ==================================================

  var alertCloseBtns = document.querySelectorAll(".sage-alert__close");

  // ==================================================
  // Functions
  // ==================================================

  alertCloseBtns.forEach(function (btn) {
    var alert = btn.closest(".sage-alert");
    btn.addEventListener("click", function () {
      alert.style.display = "none";
    });
  });

  function init() {}

  return {
    init: init,
  };
})();
