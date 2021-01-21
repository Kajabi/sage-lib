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

  function trigger(args) {

    const defaultConfig = {
      icon: "check",
      type: "notice",
    }

    const config = Object.assign(defaultConfig, args)

    let toast = document.createElement("dialog");

    toast.setAttribute(DATA_ATTR, "");
    toast.className = TOAST_CLASS;
    toast.classList.add('sage-toast--style-'+ config.type);
    toast.innerHTML = `
    <i class="sage-toast__icon sage-icon-${config.icon}"></i>
    <output aria-live="assertive" aria-atomic="true"><p class="sage-toast__value">${config.message}</p></output>
    <button type="button" data-js-toast-close class="sage-toast__close sage-btn sage-btn--subtle sage-btn--secondary sage-btn--icon-only-remove"><span class="visually-hidden">Close</span></button>`;

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

  // removes toast when timer is up
  function removeToast(toast) {
    window.requestAnimationFrame(function () {
      toast.remove();
      clearTimeout(toast);
    });
  }

  // handles click on toast close btn
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
