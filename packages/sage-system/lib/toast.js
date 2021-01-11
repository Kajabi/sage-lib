Sage.toast = (function () {
  // ==================================================
  // Variables
  // ==================================================
  const DATA_ATTR = "data-js-toast";
  const TOAST_CLASS = "sage-toast";
  const SELECTOR_TOAST_CLOSE = "[data-js-toast-close]";


  // ==================================================
  // Functions
  // ==================================================

  function init(el) {
    el.querySelector(SELECTOR_TOAST_CLOSE).addEventListener("click", handleCloseToast);
  }

  function unbind(el) {
    el.querySelector(SELECTOR_TOAST_CLOSE).removeEventListener("click", handleCloseToast);
  }

  function trigger(config) {
    let toast = document.createElement("dialog");
    let toastMessage = `<p class="sage-toast__value">${config.message}</p>`;
    let toastCloseBtn = '<button type="button" data-js-toast-close class="sage-btn sage-btn--subtle sage-btn--secondary sage-btn--icon-only-remove"><span class="visually-hidden">Close</span></button>';

    toast.setAttribute(DATA_ATTR, "");
    toast.className = TOAST_CLASS;
    toast.classList.add('sage-toast--style-'+ config.type);
    toast.innerHTML = toastMessage + toastCloseBtn;

    document.body.appendChild(toast);
    setToastTimer(toast, config)
  }

  // sets default or customer timer
  function setToastTimer(toast, config) {
    if (config.timer) {
      setTimeout(() => {
        removeToast(toast);
      }, config.timer);
    } else {
      setTimeout(() => {
        removeToast(toast)
      }, 4000);
    }
  }

  // Remove toast when times up
  function removeToast(toast) {
    window.requestAnimationFrame(function () {
      document.body.removeChild(document.querySelector(`.${TOAST_CLASS}`));
    });
  }

  // Handles click on toast close btn
  function handleCloseToast(evt) {
    window.requestAnimationFrame(function () {
      document.body.removeChild(evt.target.parentElement);
    });
  }

  return {
    trigger: trigger,
    init: init,
    unbind: unbind,
  };
})();
