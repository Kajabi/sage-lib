Sage.disableClick = (function() {
  // ==================================================
  // Variables
  // ==================================================

  const CLASS_DISABLED = 'sage-btn--disabled';
  const ATTRIBUTE_ARIA_DISABLED = 'aria-disabled';

  // ==================================================
  // Functions
  // ==================================================

  function init(el) {
    el.addEventListener('click', handleClick);
    el.addEventListener('keydown', handleKeydown);
  }

  function unbind(el) {
    el.removeEventListener('click', handleClick);
    el.removeEventListener('keydown', handleKeydown);
  }

  function handleClick(evt) {
    evt.stopImmediatePropagation();
    evt.preventDefault();
  }

  function handleKeydown(evt) {
    evt.stopImmediatePropagation();
    evt.preventDefault();
  }

  return {
    init: init,
    unbind: unbind,
  }

})();
