Sage.buttonDisable = (function () {
  // ==================================================
  // Variables
  // ==================================================

  const SELECTOR_BUTTON_DISABLED_WITH = "data-js-sage-disabled-with"
  const BUTTON_LOADING_SPINNER = `<svg class='sage-loader__spinner sage-loader__spinner--loading-button' viewBox='25 25 50 50' aria-hidden='true'><circle class='sage-loader__spinner-path sage-loader__spinner-path--loading-button' cx='50' cy='50' r='20' fill='none' stroke='0072EF' stroke-width='4'></circle></svg>`;
  const ATTRIBUTE_ARIA_LABEL = 'aria-label';

  // ==================================================
  // Functions
  // ==================================================

  const disabledWithButton = document.querySelector(`[${SELECTOR_BUTTON_DISABLED_WITH}]`);

  renderDisabledButtonSpinner(disabledWithButton);

  function renderDisabledButtonSpinner(node) {
    if (disabledWithButton == null) return false;

    let spinnerLabel = node.getAttribute(SELECTOR_BUTTON_DISABLED_WITH);

    node.classList.add('sage-btn--is-loading');
    node.setAttribute(ATTRIBUTE_ARIA_LABEL, spinnerLabel)

    return node.innerHTML = BUTTON_LOADING_SPINNER;
  }

  function init() {}

  return {
    init: init,
  };
})();
