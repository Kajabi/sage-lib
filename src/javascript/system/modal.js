Sage.modal = (function() {

  // ==================================================
  // Variables
  // ==================================================

  const SELECTOR_MODAL = 'data-js-modal';
  const SELECTOR_MODAL_DISABLE_CLOSE = 'data-js-modal-disable-close';
  const SELECTOR_MODAL_CLOSE = 'data-js-modal-close';
  const SELECTOR_MODALTRIGGER = 'data-js-modaltrigger';
  const EVENT_CLOSEALL = 'sage.modal.closeAll';

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
      } else if ( evt.target.parentElement.hasAttribute(SELECTOR_MODAL_CLOSE) || el.hasAttribute(SELECTOR_MODAL_CLOSE) ) {
        dispatchCloseAll();
      }
    });
  }

  function initTrigger(el) {
    el.addEventListener('click', function(evt){
      let modalId = evt.target.getAttribute(SELECTOR_MODALTRIGGER);
      openModal(modalId);
    });
  }

  function openModal(modalId) {
    let modal = document.querySelector(`[${SELECTOR_MODAL}="${modalId}"]`);
    modal.classList.add('sage-modal--active');
    modal.setAttribute("open", "");
  }

  function dispatchCloseAll() {
    document.dispatchEvent(new Event(EVENT_CLOSEALL));
  }

  function closeModal(el) {
    el.classList.remove('sage-modal--active');
    el.removeAttribute("open");
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
