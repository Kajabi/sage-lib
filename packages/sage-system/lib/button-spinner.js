Sage.buttonSpinner = (function () {
  // ==================================================
  // Variables
  // ==================================================

  const SELECTOR_BUTTON_SPINNER_ON_SUBMIT = "data-js-sage-spinner-on-submit"
  const BUTTON_LOADING_SPINNER = `<svg class="sage-loader__spinner sage-loader__spinner--loading-button" viewBox="0 0 200 200" fill="none">
      <defs>
        <linearGradient id="sage-loader__spinner-secondHalf">
          <stop offset="0%" stop-opacity="0" stop-color="currentColor" />
          <stop offset="100%" stop-opacity="0.5" stop-color="currentColor" />
        </linearGradient>
        <linearGradient id="sage-loader__spinner-firstHalf">
          <stop offset="0%" stop-opacity="1" stop-color="currentColor" />
          <stop offset="100%" stop-opacity="0.5" stop-color="currentColor" />
        </linearGradient>
      </defs>
      <g>
        <path class="sage-loader__spinner-path sage-loader__spinner-secondHalf" d="M 4 100 A 96 96 0 0 1 196 100" />
        <path class="sage-loader__spinner-path sage-loader__spinner-firstHalf" d="M 196 100 A 96 96 0 0 1 4 100" />
        <path class="sage-loader__spinner-path sage-loader__spinner-highlight" d="M 4 100 A 96 96 0 0 1 4 98" />
      </g>
    </svg>`;

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
    element.classList.add('sage-loader');
    element.classList.add('sage-loader--spinner');
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
