Sage.popover = (function() {
  // ==================================================
  // Variables
  // ==================================================

  const SELECTOR_PARENT = 'data-js-popover';
  const SELECTOR_OVERLAY = 'data-js-popover--overlay';
  const SELECTOR_TRIGGER = 'data-js-popover--trigger';

  const CLASS_ACTIVE = 'sage-popover--is-expanded';
  const ATTRIBUTE_ARIA_EXPANDED = 'aria-expanded';

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
    const elParent = evt.currentTarget;

    if (evt.target.hasAttribute(SELECTOR_TRIGGER)) {
      if (isExpanded(elParent)) {
        closePopoverPanel(elParent);
      } else {
        openPopoverPanel(elParent);
      }
    }
    
    // if the clicked element is the overlay, close the previously opened popover
    if (evt.target.hasAttribute(SELECTOR_OVERLAY)) {
      closePopoverPanel(elParent);
    }
  }

  function handleKeydown(evt) {
    // prevent a click from bubbling up when ENTER is keydown
    evt.preventDefault();
    const elParent = evt.target.closest(`[${SELECTOR_PARENT}]`);

    // Enter key
    if (evt.keyCode === 13 && !isExpanded(elParent)) {
      openPopoverPanel(elParent);

     // ESC key
    } else if (evt.keyCode === 27) {
      closePopoverPanel(elParent);
    }
  }

  function isExpanded(elParent) {
    return elParent.classList.contains(CLASS_ACTIVE);
  }

  function openPopoverPanel(elParent) {
    elParent.querySelector(`[${SELECTOR_TRIGGER}]`).setAttribute(ATTRIBUTE_ARIA_EXPANDED, 'true');
    elParent.classList.add(CLASS_ACTIVE);
  }

  function closePopoverPanel(elParent) {
    elParent.querySelector(`[${SELECTOR_TRIGGER}]`).setAttribute(ATTRIBUTE_ARIA_EXPANDED, 'false');
    elParent.classList.remove(CLASS_ACTIVE);
  }

  return {
    init: init,
    unbind: unbind,
  }

})();
