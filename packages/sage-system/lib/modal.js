Sage.modal = (function() {

  // ==================================================
  // Variables
  // ==================================================

  const SELECTOR_MODAL = "data-js-modal";
  const SELECTOR_MODAL_CONTAINER = "data-js-modal-container";
  const SELECTOR_MODAL_DISABLE_CLOSE = "data-js-modal-disable-close";
  const SELECTOR_MODAL_REMOTE_URL = "data-js-remote-url";
  const SELECTOR_MODAL_REMOVE_CONTENTS_ON_CLOSE = "data-js-modal-remove-content-on-close";
  const SELECTOR_MODAL_CLOSE = "data-js-modal-close";
  const SELECTOR_MODALTRIGGER = "data-js-modaltrigger";
  const SELECTOR_FOCUSABLE_ELEMENTS = "a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type='text']:not([disabled]), input[type='radio']:not([disabled]), input[type='checkbox']:not([disabled]), select:not([disabled])";
  const MODAL_ACTIVE_CLASS = "sage-modal--active";
  const EVENT_CLOSEALL = "sage.modal.closeAll";
  const EVENT_ACTIVE = "sage.modal.active";
  const EVENT_OPENING = "sage.modal.opening";
  const EVENT_OPEN = "sage.modal.open";
  let selectorLastFocused;
  let containerInitialContent;

  // ==================================================
  // Functions
  // ==================================================

  function init(el) {
    // If a modal has 'data-js-modal-disable-close' return early and don't init any handlers
    if (el.hasAttribute(SELECTOR_MODAL_DISABLE_CLOSE)) return;

    el.addEventListener("click", function(evt) {
      let el = evt.target;

      // A JS Event is dispatched to call closeModal,
      // this allows Products to hook into that call
      // and perform cleanup actions like removing the modal's content.

      // Modal Container has been clicked
      if (el.hasAttribute(SELECTOR_MODAL)) {
        dispatchCloseAll();

      // Modal Close Button has been clicked
      } else if (el.hasAttribute(SELECTOR_MODAL_CLOSE) || evt.target.parentElement.hasAttribute(SELECTOR_MODAL_CLOSE)) {
        dispatchCloseAll();
      }
    });
  }

  function initTrigger(el) {
    el.addEventListener("click", function(evt) {
      let modalId = evt.target.getAttribute(SELECTOR_MODALTRIGGER) || evt.target.parentElement.getAttribute(SELECTOR_MODALTRIGGER);
      openModal(modalId, el);
    });
  }

  function onModalKeypress(evt) {
    const keyNum = "which" in evt ? evt.which : evt.keyCode;
    if (keyNum === 27) dispatchCloseAll();
  }

  function openModal(modalId, trigger) {
    let modal = document.querySelector(`[${SELECTOR_MODAL}="${modalId}"]`);
    let focusableEls = modal.querySelectorAll(SELECTOR_FOCUSABLE_ELEMENTS);

    dispatchOpenEvents(modal);

    if(trigger.hasAttribute(SELECTOR_MODAL_REMOTE_URL)) {
      fetchModalContent(modal, trigger.dataset.jsRemoteUrl);
    } else if (modal.hasAttribute(SELECTOR_MODAL_REMOTE_URL)) {
      fetchModalContent(modal);
    }

    selectorLastFocused = document.activeElement;
    modal.classList.add(MODAL_ACTIVE_CLASS);
    modal.setAttribute("open", "");
    document.addEventListener("keyup", onModalKeypress);
    modal.addEventListener("keydown", focusTrap.bind(focusableEls));
  }

  function focusTrap(evt) {
    let firstFocusableEl = this[0];
    let lastFocusableEl = this[this.length - 1];
    let KEYCODE_TAB = 9;
    var isTabPressed = (evt.key === "Tab" || evt.keyCode === KEYCODE_TAB);

    if (!isTabPressed) {
      return;
    }

    if (evt.shiftKey) /* shift + tab */ {
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
    document.removeEventListener("keyup", onModalKeypress);
  }

  function dispatchOpenEvents(el) {
    document.dispatchEvent(new Event(EVENT_ACTIVE));
    el.dispatchEvent(new Event(EVENT_OPENING));

    if (el.dataset.sageAnimate !== undefined) {
      const modalContainer = el.querySelector(".sage-modal__container");
      modalContainer.ontransitionend = (e) => {
        if ((e.propertyName === "transform") && el.classList.contains(MODAL_ACTIVE_CLASS)) {
          el.dispatchEvent(new Event(EVENT_OPEN));
        }
      };
    } else {
      el.dispatchEvent(new Event(EVENT_OPEN));
    }
  }

  function closeModal(el) {
    el.classList.remove(MODAL_ACTIVE_CLASS);
    el.removeAttribute("open");
    el.removeEventListener("keydown", focusTrap);
    selectorLastFocused && selectorLastFocused.focus();
    removeModalContents(el);
  }

  function fetchModalContent(el, url) {
    if (!url) {
      url = el.getAttribute(SELECTOR_MODAL_REMOTE_URL);
    }

    let elContainer = el.querySelector(`[${SELECTOR_MODAL_CONTAINER}]`);
    if (elContainer.innerHTML) {
      containerInitialContent = elContainer.innerHTML;
    }

    const xhr = new XMLHttpRequest();

    xhr.addEventListener("load", (evt) => {
      elContainer.innerHTML = evt.currentTarget.response;
    }, { once: true });

    xhr.open("GET", url, true);
    xhr.send();
  }

  function removeModalContents(el) {
    if ( el.hasAttribute(SELECTOR_MODAL_REMOVE_CONTENTS_ON_CLOSE) ) {
      let elContainer = el.querySelector(`[${SELECTOR_MODAL_CONTAINER}]`);
      elContainer.innerHTML = containerInitialContent || "";
    }
  }

  function eventHandlerCloseAll() {
    let modals = Sage.util.nodelistToArray(document.querySelectorAll(`[${SELECTOR_MODAL}]`));
    modals.forEach(el => closeModal(el));
  }

  return {
    init: init,
    initTrigger: initTrigger,
    eventHandlerCloseAll: eventHandlerCloseAll,
    openModal: openModal,
    closeModal: closeModal
  }

})();
