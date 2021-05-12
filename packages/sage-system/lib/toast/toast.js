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
  function trigger(args) {
    const config = {
      id: generateId('toast'),
      ...DEFAULT_CONFIG,
      ...args,
    };

    _injectToast(config);
    _setToastTimer(config);
    return config.id;
  }

  function dismiss(toastId) {
    const elToast = document.getElementById(toastId);
    if (!elToast) return false;

    elToast.classList.add(CLASS_DISMISSED_STATE);
    _unbindEvents(elToast);
    return true;
  }

  function reset() {
    const elContainer = document.getElementById(ID_TOAST_CONTAINER);
    if (!elContainer) return false;

    _unbindEvents(elContainer);
    elContainer.remove();
    return true;
  }

  function _injectToast(config) {
    const elContainer = document.getElementById(ID_TOAST_CONTAINER);

    // If a toast container is present, inject toast template into
    //   the currently existing toast container;
    // If a toast container is not present, wrap toast template with the
    //   container template and use `document.body` as the injection point
    //   for the container with included toast child.
    const scope = elContainer || document.body;
    const content = elContainer ?
                      toastTemplate(config) :
                      containerTemplate({ content: toastTemplate(config) });

    const toastFragment = stringToHtmlFragment(content);
    _bindEvents(toastFragment);
    scope.appendChild(toastFragment);
  }

  function _setToastTimer(config) {
    if (config.timer) setTimeout(() => dismiss(config.id), config.timer);
  }

  function _bindEvents(el) {
    el.querySelector(`[${DATA_ATTR_CLOSE_BUTTON}]`).addEventListener('click', _handleCloseButtonClick);
  }

  function _unbindEvents(el) {
    el.querySelector(`[${DATA_ATTR_CLOSE_BUTTON}]`).removeEventListener('click', _handleCloseButtonClick);
  }

  function _handleCloseButtonClick(evt) {
    dismiss(evt.target.parentElement.id);
  }

  return {
    trigger: trigger,
    dismiss: dismiss,
    reset: reset
  };
})();
