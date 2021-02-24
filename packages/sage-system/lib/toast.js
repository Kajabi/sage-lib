Sage.toast = (function () {

  // ==================================================
  // Variables
  // ==================================================

  const APP_TOAST_CONTAINER_ID = 'SageToastContainer';
  const DEFAULT_CONFIG = {
    icon: 'check',
    type: 'notice',
    timer: 4000,
  };

  const DATA_ATTR = 'data-js-toast';
  const DATA_ATTR_CLOSE_BUTTON = 'data-js-toast-close';
  const TOAST_CLASS = 'sage-toast';
  const TOAST_CLASS_REMOVE = 'sage-toast--animate-out';

  // ==================================================
  // Template
  // ==================================================

  const toastTemplate = ({id, type, icon, message}) => (`
    <dialog
      class="${TOAST_CLASS} sage-toast--style-${type}"
      ${DATA_ATTR}="${id}"
    >
      <i class="sage-toast__icon sage-icon-${icon}"></i>
      <output
        class="sage-toast__value"
        aria-live="assertive"
        aria-atomic="true"
      >
        ${message}
      </output>
      <button
        class="sage-toast__close sage-btn sage-btn--subtle sage-btn--secondary sage-btn--icon-only-remove"
        type="button"
        ${DATA_ATTR_CLOSE_BUTTON}
      >
        <span class="visually-hidden">Close</span>
      </button
    </dialog>
  `);

  // ==================================================
  // Functions
  // ==================================================

  function init(el) {
    el.querySelector(`[${DATA_ATTR_CLOSE_BUTTON}]`).addEventListener('click', handleCloseToast);
  }

  function unbind(el) {
    el.querySelector(`[${DATA_ATTR_CLOSE_BUTTON}]`).removeEventListener('click', handleCloseToast);
  }

  function trigger(args) {
    const config = {
      id: Sage.util.generateId(),
      ...DEFAULT_CONFIG,
      ...args,
    };

    const elToast = Sage.util.stringToHtmlFragment(toastTemplate(config));
    getAppToastContainer().appendChild(elToast);
    setToastTimer(config)

    return config.id;
  }

  function dismiss(toastId) {
    const elToast = document.querySelector(`[${DATA_ATTR}='${toastId}']`);
    if (!elToast) return false;

    window.requestAnimationFrame(() => {
      elToast.classList.add(TOAST_CLASS_REMOVE);
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
    init: init,
    unbind: unbind,
  };
})();
