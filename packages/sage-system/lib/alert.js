Sage.alert = (function () {
  // ==================================================
  // Variables
  // ==================================================

  const SELECTOR_ALERT = ".sage-alert";
  const SELECTOR_ALERT_CLOSE = ".sage-alert__close";

  var alertCloseBtns = document.querySelectorAll(SELECTOR_ALERT_CLOSE);

  // ==================================================
  // Functions
  // ==================================================

  alertCloseBtns.forEach(function (btn) {
    addCloseHandler(btn);
  });

  function init(el) {
    addCloseHandler(el);
  }

  function addCloseHandler(el) {
    var alert = el.closest(SELECTOR_ALERT);
    var closeBtn = alert.querySelector(SELECTOR_ALERT_CLOSE);
    closeBtn.addEventListener("click", function () {
      alert.style.display = "none";
    });
  }

  return {
    init: init,
  };
})();
