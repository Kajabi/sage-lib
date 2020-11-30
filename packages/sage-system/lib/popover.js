Sage.popover = (function() {
  // ==================================================
  // Variables
  // ==================================================

  const SELECTOR_PARENT = 'data-js-popover';
  const SELECTOR_OVERLAY = 'data-js-popover--overlay';
  const SELECTOR_TRIGGER = 'data-js-popover--trigger';
  const SELECTOR_POSITION = 'data-js-popover--position';

  const CLASS_ACTIVE = 'sage-popover--is-expanded';
  const ATTRIBUTE_ARIA_EXPANDED = 'aria-expanded';
  const SELECTOR_FOCUSABLE_ELEMENTS = '.sage-popover__panel a[href]:not([disabled]), .sage-popover__panel button:not([disabled]), .sage-popover__panel textarea:not([disabled]), .sage-popover__panel input[type="text"]:not([disabled]), .sage-popover__panel input[type="radio"]:not([disabled]), .sage-popover__panel input[type="checkbox"]:not([disabled]), .sage-popover__panel input[type="search"]:not([disabled]), .sage-popover__panel select:not([disabled])';
  let SELECTOR_LAST_FOCUSED;

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
    const elChild = elParent.children[0];
    const popoverPanel = elChild.parentNode.querySelector(".sage-popover__panel");
    const options = {
      triggerWidth: elChild.offsetWidth,
      triggerHeight: elChild.offsetHeight,
      popoverPanelHeight: popoverPanel.offsetHeight,
      popoverPanelWidth: popoverPanel.offsetWidth,
      position: elChild.parentNode.getAttribute(SELECTOR_POSITION)
    };

    if (evt.target.hasAttribute(SELECTOR_TRIGGER) || evt.target.parentNode.hasAttribute(SELECTOR_TRIGGER)) {
      if (isExpanded(elParent) || isExpanded(elChild.parentNode)) {
        closePopoverPanel(elParent);
      } else {
        openPopoverPanel(elParent);
        positionPopoverPanel(popoverPanel, options)
      }
    }
    // if the clicked element is the overlay, close the previously opened popover
    if (evt.target.hasAttribute(SELECTOR_OVERLAY)) {
      closePopoverPanel(elParent);
    }
  }

  function positionPopoverPanel(popoverPanel, options) {

    let dist = 8,
        top,
        left;

    switch (options.position) {
      case "left":
        top = 0;
        left = -options.popoverPanelWidth - (dist * 2);
      break;
      case "top":
        top = -options.popoverPanelHeight - dist;
        left = 0;
      break;
      case "bottom":
        top = options.triggerHeight + dist;
        left = 0;
        break;
      default:
      case "right":
        top = 0;
        left = options.triggerWidth + (dist * 2);
    }
    popoverPanel.style.left = left + "px";
    popoverPanel.style.top = top + "px";
  }

  function handleKeydown(evt) {
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
    let focusableEls = elParent.querySelectorAll(SELECTOR_FOCUSABLE_ELEMENTS);
    SELECTOR_LAST_FOCUSED = document.activeElement;
    elParent.addEventListener('keydown', focusTrap.bind(focusableEls));
  }

  function closePopoverPanel(elParent) {
    elParent.querySelector(`[${SELECTOR_TRIGGER}]`).setAttribute(ATTRIBUTE_ARIA_EXPANDED, 'false');
    elParent.classList.remove(CLASS_ACTIVE);
    elParent.removeEventListener('keydown', focusTrap);
    SELECTOR_LAST_FOCUSED.focus();
  }

  function focusTrap(evt) {
    let firstFocusableEl = this[0];
    let lastFocusableEl = this[this.length - 1];
    let KEYCODE_TAB = 9;
    var isTabPressed = (evt.key === 'Tab' || evt.keyCode === KEYCODE_TAB);

    if (!isTabPressed) { 
      return; 
    }

    if ( evt.shiftKey ) /* shift + tab */ {
      if (document.activeElement === firstFocusableEl) {
        lastFocusableEl.focus();
        evt.preventDefault();
      }
    } else /* tab */ {
      if (document.activeElement === lastFocusableEl) {
        firstFocusableEl.focus();
        evt.preventDefault();
      }
    }
  }

  return {
    init: init,
    unbind: unbind,
  }

})();
