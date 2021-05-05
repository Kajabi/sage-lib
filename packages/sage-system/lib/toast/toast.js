import {
  generateId,
  stringToHtmlFragment,
} from '../utils/index';

import {
  ID_TOAST_CONTAINER,
  DEFAULT_CONFIG,
  CLASS_DISMISSED_STATE,
  DATA_ATTR_CLOSE_BUTTON,
} from './toast.config.js';

import {
  toastTemplate,
  containerTemplate,
} from './toast.template.js';

Sage.toast = (function () {
  function init(el) {
    el.querySelector(`[${DATA_ATTR_CLOSE_BUTTON}]`).addEventListener('click', handleCloseToast);
  }

  function unbind(el) {
    el.querySelector(`[${DATA_ATTR_CLOSE_BUTTON}]`).removeEventListener('click', handleCloseToast);
  }

  function trigger(args) {
    const config = {
      id: generateId('toast'),
      ...DEFAULT_CONFIG,
      ...args,
    };
    injectToast(config);
    setToastTimer(config);
    return config.id;
  }

  function dismiss(toastId) {
    const elToast = document.getElementById(toastId);
    if (!elToast) return false;
    elToast.classList.add(CLASS_DISMISSED_STATE);
    return true;
  }

  function reset() {
    const elContainer = document.getElementById(ID_TOAST_CONTAINER);
    if (elContainer) elContainer.remove();
  }

  function injectToast(config) {
    const elContainer = document.getElementById(ID_TOAST_CONTAINER);

    // Append toast into the container
    if (elContainer) {
      elContainer.appendChild(
        stringToHtmlFragment(
          toastTemplate(config)
        )
      );

    // Append toast & container into the body with 1 injection
    } else {
      document.body.appendChild(
        stringToHtmlFragment(
          containerTemplate({
            content: toastTemplate(config)
          })
        )
      );
    }
  }

  function setToastTimer(config) {
    if (config.timer) setTimeout(() => dismiss(config.id), config.timer);
  }

  function handleCloseToast(evt) {
    dismiss(evt.target.parentElement.id);
  }

  return {
    trigger: trigger,
    dismiss: dismiss,
    reset: reset,
    init: init,
    unbind: unbind,
  };
})();
