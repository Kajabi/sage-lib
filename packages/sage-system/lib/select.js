import { isNextTheme } from './utils';

Sage.select = (function() {

  // ==================================================
  // Variables
  // ==================================================
  var elSelectClass = '.sage-select',
      elSelectWrapperClass = '.sage-select__field-wrapper',
      classActive = 'sage-select--value-selected',
      htmlArrow = '<i class="sage-select__arrow" aria-hidden="true"></i>';

  // ==================================================
  // Functions
  // ==================================================

  function handleChange(evt) {
    const elSelectParent = evt.target.closest(elSelectClass);
    updateValueSelectedState(evt.target.value, elSelectParent);
  }

  function updateValueSelectedState(value, elSelectParent) {
    var cL = elSelectParent.classList;
    Sage.util.isEmptyString(value) ? cL.remove(classActive) : cL.add(classActive);
  }

  function disableSelectPromptOptions(elSelect) {
    [].forEach.call(elSelect.options, function(elOption) {
      if (elOption.text.startsWith('--')) elOption.setAttribute('disabled', true);
    });
  }

  function bindEvents(elSelect) {
    elSelect.addEventListener('change', handleChange);
  }

  function unbind(elSelect) {
    elSelect.removeEventListener('change', handleChange);
  }

  function init(el) {
    var elSelect = el.querySelector('select');

    if (isNextTheme()) {
      var elWrapper = el.querySelector(elSelectWrapperClass);
      elWrapper.insertAdjacentHTML('beforeEnd', htmlArrow);
    } else {
      el.insertAdjacentHTML('beforeEnd', htmlArrow);
    }

    disableSelectPromptOptions(elSelect);
    updateValueSelectedState(elSelect.value, el);

    bindEvents(elSelect, el);
  }

  return {
    init,
    unbind,
  };

})();
