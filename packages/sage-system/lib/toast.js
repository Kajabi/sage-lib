Sage.toast = (function () {
  // ==================================================
  // Variables
  // ==================================================
  const DATA_ATTR = "data-js-toast";
  const TOAST_CLASS = "sage-toast";
  const TOAST_TIMER = "data-js-toast-timer";

  // ==================================================
  // Functions
  // ==================================================

  function init(el) {
    el.addEventListener("click", buildToast);
  }

  function unbind(el) {
    el.removeEventListener("click", removeToast);
  }

  // toast template
  function buildToast(evt) {

    let toast = document.createElement("dialog");
    let toastValue = '<p class="sage-toast__value">' + evt.target.getAttribute(DATA_ATTR) + "</p>";
    let toastCloseBtn ='<button type="button" class="sage-btn sage-btn--subtle sage-btn--secondary sage-btn--icon-only-remove"><span class="visually-hidden">Close</span></button>';
    toast.className = TOAST_CLASS;
    toast.innerHTML = toastValue + toastCloseBtn;
    toast.dataItems = [`${DATA_ATTR}-theme`,];

    generateClasses(toast, evt);

    if (evt.target.getAttribute(TOAST_TIMER)) {
      setTimeout(() => {
        removeToast(toast);
      }, evt.target.getAttribute(TOAST_TIMER));
    } else {
      setTimeout(() => {
        removeToast(toast);
      }, 3000);
    }

    document.body.appendChild(toast);
  }

  // Removes toast from DOM
  function removeToast(toast) {
    window.requestAnimationFrame(function () {
      document.body.removeChild(document.querySelector(`.${TOAST_CLASS}`));
    });
  }

  // Builds list of modifier classes from array of data-attributes
  function generateClasses(ele, evt) {
    ele.dataItems.forEach(function (item) {
      var tgt = evt.target;
      if (tgt.hasAttribute(item)) {
        ele.classList.add(`${TOAST_CLASS}--style-${tgt.getAttribute(item)}`);
      }
    });
  }

  return {
    init: init,
    unbind: unbind,
  };
})();
