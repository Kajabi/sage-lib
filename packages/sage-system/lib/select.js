Sage.select = (function() {

  // ==================================================
  // Variables
  // ==================================================
  var elSelectClass = '.sage-select',
      classActive = 'sage-select--value-selected';

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

    disableSelectPromptOptions(elSelect);
    updateValueSelectedState(elSelect.value, el);
    bindEvents(elSelect, el);
  }

  return {
    init,
    unbind,
  };

})();
