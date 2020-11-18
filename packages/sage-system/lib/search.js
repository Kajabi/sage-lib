Sage.search = (function() {
  // ==================================================
  // Variables
  // ==================================================

  const SELECTOR_SEARCH = 'data-js-search';
  const SELECTOR_SEARCH_INPUT = '.sage-search__input';
  const SELECTOR_SEARCH_BUTTON = '.sage-search__reset-button';
  const CLASS_VISIBLE = 'sage-search--has-text';


  // ==================================================
  // Functions
  // ==================================================

  function init(el) {
    const elInput = el.querySelector(SELECTOR_SEARCH_INPUT);

    // check the input for a value on load
    hasValue(elInput) ? addVisibleButtonState(el) : removeVisibleButtonState(el);
    el.addEventListener('keyup', searchOnInputHandler);
  }

  function unbind(el) {
    el.removeEventListener('keyup', searchOnInputHandler);
  }

  function searchOnInputHandler(evt) {
    const elParent = evt.currentTarget;
    const elInput = elParent.querySelector(SELECTOR_SEARCH_INPUT);

    hasValue(elInput) ? addVisibleButtonState(elParent) : removeVisibleButtonState(elParent);
  }

  // check if the search value has text or not
  function hasValue(el) {
    return el.value.length > 0
  }

  function addVisibleButtonState(elParent) {
    elParent.classList.add(CLASS_VISIBLE);
  }

  function removeVisibleButtonState(elParent) {
    elParent.classList.remove(CLASS_VISIBLE);
  }

  return {
    init: init,
    unbind: unbind
  }

})();
