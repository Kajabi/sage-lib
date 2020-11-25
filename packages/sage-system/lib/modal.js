Sage.modal = (function() {

  // ==================================================
  // Variables
  // ==================================================

  const SELECTOR_MODAL = 'data-js-modal';
  const SELECTOR_MODAL_DISABLE_CLOSE = 'data-js-modal-disable-close';
  const SELECTOR_MODAL_CLOSE = 'data-js-modal-close';
  const SELECTOR_MODALTRIGGER = 'data-js-modaltrigger';
  const SELECTOR_FOCUSABLE_ELEMENTS = 'a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled])';
  const EVENT_CLOSEALL = 'sage.modal.closeAll';
  let SELECTOR_LAST_FOCUSED;

  // ==================================================
  // Functions
  // ==================================================

  function init(el) {
    // If a modal has 'data-js-modal-disable-close' return early and don't init any handlers
    if (el.hasAttribute(SELECTOR_MODAL_DISABLE_CLOSE)) return;

    el.addEventListener('click', function(evt){
      let el = evt.target;

      // A JS Event is dispatched to call closeModal,
      // this allows Products to hook into that call
      // and perform cleanup actions like removing the modal's content.

      // Modal Container has been clicked
      if ( el.hasAttribute(SELECTOR_MODAL) ) {
        dispatchCloseAll();

      // Modal Close Button has been clicked
      } else if ( el.hasAttribute(SELECTOR_MODAL_CLOSE) || evt.target.parentElement.hasAttribute(SELECTOR_MODAL_CLOSE) ) {
        dispatchCloseAll();
      }
    });
  }

  function initTrigger(el) {
    el.addEventListener('click', function(evt){
      let modalId = evt.target.getAttribute(SELECTOR_MODALTRIGGER) || evt.target.parentElement.getAttribute(SELECTOR_MODALTRIGGER);
      openModal(modalId);
    });
  }

  function onModalKeypress(evt) {
    const keyNum = "which" in evt ? evt.which : evt.keyCode;
    if (keyNum === 27) dispatchCloseAll();
  }

  function openModal(modalId) {
    let modal = document.querySelector(`[${SELECTOR_MODAL}="${modalId}"]`);
    let focusableEls = modal.querySelectorAll(SELECTOR_FOCUSABLE_ELEMENTS);

    SELECTOR_LAST_FOCUSED = document.activeElement;
    modal.classList.add('sage-modal--active');
    modal.setAttribute("open", "");
    document.addEventListener('keyup', onModalKeypress);
    modal.addEventListener('keydown', focusTrap.bind(focusableEls));
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

  function dispatchCloseAll() {
    document.dispatchEvent(new Event(EVENT_CLOSEALL));
    document.removeEventListener('keyup', onModalKeypress);
  }

  function closeModal(el) {
    el.classList.remove('sage-modal--active');
    el.removeAttribute("open");
    el.removeEventListener('keydown', focusTrap);
    SELECTOR_LAST_FOCUSED.focus();
  }

  function eventHandlerCloseAll() {
    let modals = Sage.util.nodelistToArray(document.querySelectorAll(`[${SELECTOR_MODAL}]`));
    modals.forEach(el => closeModal(el));
  }

  return {
    init: init,
    initTrigger: initTrigger,
    eventHandlerCloseAll: eventHandlerCloseAll
  }

})();
