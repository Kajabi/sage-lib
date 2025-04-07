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
  const SELECTOR_MODAL_STACKED = "data-js-modal-stacked";
  const SELECTOR_MODALTRIGGER = "data-js-modaltrigger";
  const SELECTOR_PAGE_HAS_OPEN_MODAL = "sage-page--has-open-modal";
  const SELECTOR_FOCUSABLE_ELEMENTS = "a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type='text']:not([disabled]), input[type='radio']:not([disabled]), input[type='checkbox']:not([disabled]), select:not([disabled])";
  const MODAL_ACTIVE_CLASS = "sage-modal--active";
  const EVENT_CLOSEALL = "sage.modal.closeAll";
  const EVENT_ACTIVE = "sage.modal.active";
  const EVENT_OPENING = "sage.modal.opening";
  const EVENT_OPEN = "sage.modal.open";
  const EVENT_CLOSE = "sage.modal.close";
  let selectorLastFocused;
  let containerInitialContent;
  let mouseDownSrc;

  // ==================================================
  // Functions
  // ==================================================

  function init(el) {
    // If a modal has 'data-js-modal-disable-close' return early and don't init any handlers
    if (el.hasAttribute(SELECTOR_MODAL_DISABLE_CLOSE)) return;

    // In order to prevent accidentally closing modals
    // after dragging within the modal to the outside
    // we store the target of a mousedown
    el.addEventListener("mousedown", (evt) => mouseDownSrc = evt.target);

    el.addEventListener("mouseup", (evt) => {
      let target = evt.target;

      // A JS Event is dispatched to call closeModal,
      // this allows Products to hook into that call
      // and perform cleanup actions like removing the modal's content.

      // Modal Container has been clicked and its not a drag event from within the modal
      if (target.hasAttribute(SELECTOR_MODAL) && target === mouseDownSrc) {
        // Close only this modal when clicking on the backdrop
        dispatchClose(el);
      }
    });

    // Add a separate click event listener for close buttons
    el.addEventListener("click", (evt) => {
      let target = evt.target;

      // Check if the clicked element or any of its parents has the close attribute
      let closeButton = findElementWithAttribute(target, SELECTOR_MODAL_CLOSE);

      if (closeButton) {
        // If stacked attribute exists, close only current modal, otherwise close all
        if (closeButton.hasAttribute(SELECTOR_MODAL_STACKED)) {
          dispatchClose(el);
        } else {
          dispatchCloseAll();
        }
        evt.stopPropagation(); // Prevent event bubbling
      }
    });
  }

  // Helper function to find an element with a specific attribute
  function findElementWithAttribute(el, attribute) {
    let currentEl = el;

    while (currentEl) {
      if (currentEl.hasAttribute(attribute)) {
        return currentEl;
      }
      currentEl = currentEl.parentElement;
    }

    return null;
  }

  // Helper function to find the parent modal element
  function findParentModal(el) {
    return findElementWithAttribute(el, SELECTOR_MODAL);
  }

  function initTrigger(el) {
    el.addEventListener("click", function(evt) {
      let modalId = evt.target.getAttribute(SELECTOR_MODALTRIGGER) ||
                   (evt.target.parentElement ? evt.target.parentElement.getAttribute(SELECTOR_MODALTRIGGER) : null);

      if (modalId) {
        openModal(modalId, el);
        evt.preventDefault();
      }
    });
  }

  function onModalKeypress(evt) {
    const keyNum = "which" in evt ? evt.which : evt.keyCode;
    if (keyNum === 27) {
      // Find the topmost active modal and close only that one
      const activeModals = document.querySelectorAll(`.${MODAL_ACTIVE_CLASS}`);
      if (activeModals.length > 0) {
        // Get the last (topmost) modal in the stack
        const topmostModal = activeModals[activeModals.length - 1];
        dispatchClose(topmostModal);
      } else {
        // Fallback to closing all if no active modals found
        dispatchCloseAll();
      }
    }
  }

  function openModal(modalId, trigger) {
    let modal = document.querySelector(`[${SELECTOR_MODAL}="${modalId}"]`);
    if (!modal) {
      console.error(`Modal with ID "${modalId}" not found`);
      return;
    }

    let focusableEls = modal.querySelectorAll(SELECTOR_FOCUSABLE_ELEMENTS);

    dispatchOpenEvents(modal);

    if(trigger && trigger.hasAttribute(SELECTOR_MODAL_REMOTE_URL)) {
      fetchModalContent(modal, trigger.dataset.jsRemoteUrl);
    } else if (modal.hasAttribute(SELECTOR_MODAL_REMOTE_URL)) {
      fetchModalContent(modal);
    }

    const bodyEl = document.querySelector("body");

    selectorLastFocused = document.activeElement;
    bodyEl.classList.add(SELECTOR_PAGE_HAS_OPEN_MODAL);
    modal.classList.add(MODAL_ACTIVE_CLASS);
    modal.setAttribute("open", "");
    document.addEventListener("keyup", onModalKeypress);

    if (focusableEls.length > 0) {
      modal.addEventListener("keydown", focusTrap.bind(focusableEls));
    }
  }

  function focusTrap(evt) {
    if (this.length === 0) return;

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

  function dispatchClose(modalEl) {
    if (!modalEl) return;

    // Check if the close button has the stacked attribute
    const closeButton = findElementWithAttribute(modalEl, SELECTOR_MODAL_CLOSE);
    const isStacked = closeButton && closeButton.hasAttribute(SELECTOR_MODAL_STACKED);

    if (isStacked) {
      dispatchCloseAll();
    } else {
      closeModal(modalEl);
    }

    // Only remove the keyup listener if there are no more active modals
    const activeModals = document.querySelectorAll(`.${MODAL_ACTIVE_CLASS}`);
    if (activeModals.length === 0) {
      document.removeEventListener("keyup", onModalKeypress);
    }
  }

  function dispatchOpenEvents(el) {
    document.dispatchEvent(new Event(EVENT_ACTIVE));
    el.dispatchEvent(new Event(EVENT_OPENING));

    if (el.dataset.sageAnimate !== undefined) {
      const modalContainer = el.querySelector(".sage-modal__container");
      if (modalContainer) {
        modalContainer.ontransitionend = (e) => {
          if ((e.propertyName === "transform") && el.classList.contains(MODAL_ACTIVE_CLASS)) {
            el.dispatchEvent(new Event(EVENT_OPEN));
          }
        };
      } else {
        el.dispatchEvent(new Event(EVENT_OPEN));
      }
    } else {
      el.dispatchEvent(new Event(EVENT_OPEN));
    }
  }

  function closeModal(el) {
    if (!el) return;

    const bodyEl = document.querySelector("body");

    el.classList.remove(MODAL_ACTIVE_CLASS);

    // Only remove the body class if there are no more active modals
    const activeModals = document.querySelectorAll(`.${MODAL_ACTIVE_CLASS}`);
    if (activeModals.length === 0) {
      bodyEl.classList.remove(SELECTOR_PAGE_HAS_OPEN_MODAL);
    }

    el.removeAttribute("open");
    el.removeEventListener("keydown", focusTrap);

    // Only restore focus if there are no more active modals
    if (activeModals.length === 0 && selectorLastFocused) {
      selectorLastFocused.focus();
    }

    removeModalContents(el);
  }

  function fetchModalContent(el, url) {
    if (!url) {
      url = el.getAttribute(SELECTOR_MODAL_REMOTE_URL);
    }

    let elContainer = el.querySelector(`[${SELECTOR_MODAL_CONTAINER}]`);
    if (!elContainer) return;

    if (elContainer.innerHTML) {
      containerInitialContent = elContainer.innerHTML;
    }

    const xhr = new XMLHttpRequest();

    xhr.addEventListener("load", (evt) => {
      if (evt.currentTarget.status >= 200 && evt.currentTarget.status < 300) {
        elContainer.innerHTML = evt.currentTarget.response;
      } else {
        console.error(`Failed to load modal content: ${evt.currentTarget.status}`);
      }
    }, { once: true });

    xhr.open("GET", url, true);
    xhr.send();
  }

  function removeModalContents(el) {
    if (el && el.hasAttribute(SELECTOR_MODAL_REMOVE_CONTENTS_ON_CLOSE)) {
      let elContainer = el.querySelector(`[${SELECTOR_MODAL_CONTAINER}]`);
      if (elContainer) {
        elContainer.innerHTML = containerInitialContent || "";
      }
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
    closeModal: closeModal,
    dispatchClose: dispatchClose
  }

})();
