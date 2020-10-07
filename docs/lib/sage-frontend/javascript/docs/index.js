require('../define')

require('./live-option-menu')
require('./banner')
require('./example')
require('./meter')
require('./inputhelper')
require('./example')

// Conditional routing
// NOTE: modules must be imported above to be initialized below
if (document.querySelector('.sage-docs') !== null) {

  if (document.querySelector('.sage-live-option-menu-anchor') !== null) {
    Sage.docs.liveOptionMenu.init();
  }

  if (document.getElementById('pw-meter-example') !== null) {
    Sage.docs.meter.init();
  }

  if (document.querySelector('.sage-banner--active') !== null && document.querySelector('.example__preview--page') !== null) {
    Sage.docs.banner.init();
  }

  if (document.querySelector('.example__code') !== null && document.querySelector('.example__expand-btn') !== null) {
    Sage.docs.example.init();
  }

  if (document.querySelector('.sage-input-helper') !== null && document.querySelector('[data-js-example="input-helper"]') !== null) {
    Sage.docs.inputhelper.init();
  }

}
