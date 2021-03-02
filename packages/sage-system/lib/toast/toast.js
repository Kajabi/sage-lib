import {
  generateId,
  stringToHtmlFragment,
} from '../util';

import {
  APP_TOAST_CONTAINER_ID,
  DEFAULT_CONFIG,
  DATA_ATTR,
  TOAST_CLASS_DISMISSED_STATE,
  DATA_ATTR_CLOSE_BUTTON,
} from './toast.config.js';

import {
  template,
} from './toast.template.js';

Sage.toast = (function () {

  // ==================================================
  // Functions
  // ==================================================

  function init(el) {
    el.querySelector(`[${DATA_ATTR_CLOSE_BUTTON}]`).addEventListener('click', handleCloseToast, { once: true });
  }

  function unbind(el) {
    el.querySelector(`[${DATA_ATTR_CLOSE_BUTTON}]`).removeEventListener('click', handleCloseToast);
  }

  function trigger(args) {
    const config = {
      id: generateId(),
      ...DEFAULT_CONFIG,
      ...args,
    };

    const elToast = stringToHtmlFragment(template(config));
    getAppToastContainer().appendChild(elToast);
    setToastTimer(config);

    return config.id;
  }

  function dismiss(toastId) {
    const elToast = document.querySelector(`[${DATA_ATTR}='${toastId}']`);
    if (!elToast) return false;

    window.requestAnimationFrame(() => {
      elToast.classList.add(TOAST_CLASS_DISMISSED_STATE);
    });

    // Remove DOM node on CSS close transition completion
    elToast.addEventListener('transitionend', elToast.remove, { once: true });

    return true;
  }

  // Get global app container OR create if not present
  function getAppToastContainer() {
    let elAppToastContainer = document.getElementById(APP_TOAST_CONTAINER_ID);

    if (!elAppToastContainer) {
      elAppToastContainer = document.createElement('div');
      elAppToastContainer.setAttribute('id', APP_TOAST_CONTAINER_ID);
      document.body.appendChild(elAppToastContainer);
    }

    return elAppToastContainer;
  }

  function reset() {
    document.getElementById(APP_TOAST_CONTAINER_ID).remove();
  }

  function setToastTimer(config) {
    if (!config.timer) return;
    setTimeout(() => dismiss(config.id), config.timer);
  }

  function handleCloseToast(evt) {
    dismiss(evt.target.parentElement.getAttribute(DATA_ATTR));
  }

  return {
    trigger: trigger,
    dismiss: dismiss,
    reset: reset,
    init: init,
    unbind: unbind,
  };
})();
