require('../define')

require('./live-option-menu')
require('./example')
require('./meter')
require('./inputhelper')
require('./button-group')
require('./example')
require('./scroll-to-active-nav-item')

require('./mocks')

// Conditional routing
// NOTE: modules must be imported above to be initialized below
if (document.querySelector('.sage-docs') !== null) {

  if (document.querySelector('.sage-live-option-menu-anchor') !== null) {
    Sage.docs.liveOptionMenu.init();
  }

  if (document.getElementById('pw-meter-example') !== null) {
    Sage.docs.meter.init();
  }

  if (document.getElementById('button-group-wrap-example') !== null) {
    Sage.docs.buttonGroup.init();
  }

  if (document.querySelector('.example__code') !== null && document.querySelector('.example__expand-btn') !== null) {
    Sage.docs.example.init();
  }

  if (document.querySelector('.sage-input-helper') !== null && document.querySelector('[data-js-example="input-helper"]') !== null) {
    Sage.docs.inputhelper.init();
  }

  window.addEventListener("load", Sage.docs.scrollToActiveNavItem.init);
}
