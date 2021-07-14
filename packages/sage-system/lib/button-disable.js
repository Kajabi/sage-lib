Sage.buttonDisable = (function () {
  // ==================================================
  // Variables
  // ==================================================

  const SELECTOR_BUTTON_DISABLED_WITH = "data-js-sage-disabled-with"
  const BUTTON_LOADING_SPINNER = "<svg class='sage-toast__spinner' viewBox='25 25 50 50' aria-hidden='true'><circle class='sage-toast__spinner-path' cx='50' cy='50' r='20' fill='none' stroke='0072EF' stroke-width='4'></circle></svg>"
  const ATTRIBUTE_ARIA_LABEL = 'aria-label';


  const disabledWithButton = document.querySelector(`[${SELECTOR_BUTTON_DISABLED_WITH}]`);

  // ==================================================
  // Functions
  // ==================================================

  function renderDisabledButtonSpinner(node) {
    console.log('node', node);
    const spinnerSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    const spinnerSvgIconPath = document.createElementNS(
      'http://www.w3.org/2000/svg',
      'path'
    );

    spinnerSvg.setAttribute('fill', 'none');
    spinnerSvg.setAttribute('viewBox', '25 25 50 50');
    spinnerSvg.setAttribute('aria-hidden', true);
    spinnerSvg.classList.add('sage-toast__spinner');

    const spinnerSvgCircle = document.createElementNS(spinnerSvg, 'circle');
    spinnerSvgCircle.setAttributeNS(null, 'cx', 50);
    spinnerSvgCircle.setAttributeNS(null, 'cy', 50);
    spinnerSvgCircle.setAttributeNS(null, 'r', 20);
    spinnerSvgCircle.setAttribute('fill', 'none');
    spinnerSvgCircle.setAttribute('stroke', '#ffffff');
    spinnerSvgCircle.setAttribute('stroke-width', '4');
    spinnerSvgCircle.classList.add('sage-toast__spinner-path');

    spinnerSvg.appendChild(spinnerSvgCircle);

    return node.appendChild(spinnerSvg);
  }



  renderDisabledButtonSpinner(disabledWithButton);


  // debugger;
  console.log('Im in here', disabledWithButton);

  // disabledWithButton.setAttribute(ATTRIBUTE_ARIA_LABEL, 'my label');
  // disabledWithButton.appendChild(BUTTON_LOADING_SPINNER);

  function init() {

  }

  return {
    init: init,
  };
})();
