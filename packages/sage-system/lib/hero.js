Sage.hero = (function() {

  // ==================================================
  // Variablesp
  // ==================================================

  const SELECTOR_DISMISS_TRIGGER = 'data-js-hero--dismiss';

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
    dismissHero(evt);
  }

  function handleKeydown(evt) {
    const KEY_SPACE = 32;
    const KEY_ENTER = 13;

    if (evt.keyCode === KEY_SPACE || evt.keyCode === KEY_ENTER) {
      dismissHero(evt);
    }
  }

  function dismissHero(evt) {
    const elParent = evt.currentTarget;
    const el = evt.target;

    if (el.hasAttribute(SELECTOR_DISMISS_TRIGGER)) {
      elParent.remove();
    }
  }

  return {
    init: init,
    unbind: unbind,
  }

})();
