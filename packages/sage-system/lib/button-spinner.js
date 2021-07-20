Sage.buttonSpinner = (function () {
  // ==================================================
  // Variables
  // ==================================================

  const SELECTOR_BUTTON_SPINNER_ON_SUBMIT = "data-js-sage-spinner-on-submit"
  const BUTTON_LOADING_SPINNER = `<svg class='sage-loader__spinner sage-loader__spinner--loading-button' viewBox='25 25 50 50' aria-hidden='true'><circle class='sage-loader__spinner-path sage-loader__spinner-path--loading-button' cx='50' cy='50' r='20' fill='none' stroke='0072EF' stroke-width='4'></circle></svg>`;

  const ATTRIBUTE_ARIA_LABEL = 'aria-label';
  const ATTRIBUTE_ARIA_BUSY = 'aria-busy';
  const ATTRIBUTE_ARIA_LIVE = 'aria-live';

  // ==================================================
  // Functions
  // ==================================================

  function renderDisabledButtonSpinner(evt) {
    let currentTarget = evt.currentTarget;
    let spinnerLabel = currentTarget.getAttribute(SELECTOR_BUTTON_SPINNER_ON_SUBMIT);

    currentTarget.classList.add('sage-btn--is-loading');
    currentTarget.setAttribute(ATTRIBUTE_ARIA_LABEL, spinnerLabel)
    currentTarget.setAttribute(ATTRIBUTE_ARIA_BUSY, true);
    currentTarget.setAttribute(ATTRIBUTE_ARIA_LIVE, 'polite');

    let element = document.createElement('span');
    element.innerHTML = BUTTON_LOADING_SPINNER;

    currentTarget.appendChild(element)
    return
  }

  function init(el) {
    el.addEventListener("click", renderDisabledButtonSpinner);
  }

  function unbind(el) {
    el.removeEventListener("click", renderDisabledButtonSpinner);
  }

  return {
    init: init,
    unbind: unbind
  };
})();
