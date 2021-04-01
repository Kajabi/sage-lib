Sage.search = (function() {
  // ==================================================
  // Variables
  // ==================================================

  const SELECTOR_CLEAR_BUTTON = 'data-js-search-clear';
  const CLASS_HAS_TEXT = 'sage-search--has-text';
  const DISABLE_SEARCH_ON_CLEAR = 'sage-search--disable_search_on_clear'


  // ==================================================
  // Functions
  // ==================================================

  function getInput(el) {
    return el.querySelector('input');
  }

  function init(el) {
    el.addEventListener('submit', onSubmit);
    el.querySelector(`[${SELECTOR_CLEAR_BUTTON}]`).addEventListener('click', onClearButtonClick);
    getInput(el).addEventListener('keyup', onInputKeyup);

    hasTextCssClassController(el);
  }

  function unbind(el) {
    el.removeEventListener('submit', onSubmit);
    el.querySelector(`[${SELECTOR_CLEAR_BUTTON}]`).removeEventListener('click', onClearButtonClick);
    getInput(el).removeEventListener('keyup', onInputKeyup);
  }

  function onSubmit(evt) {
    evt.preventDefault();
    search(getInput(evt.target).value)
  }

  function onClearButtonClick(evt) {
    let el = evt.target.parentNode,
        elInput = getInput(el);
    elInput.value = '';
    if (!elInput.classList.contains(DISABLE_SEARCH_ON_CLEAR)){
      search(elInput.value);
    }
    hasTextCssClassController(el);
  }

  function onInputKeyup(evt) {
    hasTextCssClassController(evt.target.parentNode);
  }

  function search(value) {
    const searchParams = new URLSearchParams(window.location.search);
    const currentSearchValue = searchParams.get('search') || '';

    if (value === currentSearchValue) {
      return; // no-op
    } else if (value.length === 0) {
      searchParams.delete('search');
    } else {
      searchParams.set('search', value);
    }

    window.location.search = searchParams.toString();
  }

  function hasTextCssClassController(el) {
    if (getInput(el).value.length === 0) {
      el.classList.remove(CLASS_HAS_TEXT);
    } else {
      el.classList.add(CLASS_HAS_TEXT);
    }
  }

  return {
    init: init,
    unbind: unbind
  }

})();
