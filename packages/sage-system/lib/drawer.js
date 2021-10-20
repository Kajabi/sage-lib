Sage.drawer = (function() {

  // ==================================================
  // Variables
  // ==================================================

  const SELECTOR_DRAWER = "data-js-drawer";
  const SELECTOR_DRAWER_CONTAINER = "data-js-drawer-container";
  const SELECTOR_DRAWER_DISABLE_CLOSE = "data-js-drawer-disable-close";
  const SELECTOR_DRAWER_REMOTE_URL = "data-js-remote-url";
  const SELECTOR_DRAWER_REMOVE_CONTENTS_ON_CLOSE = "data-js-drawer-remove-content-on-close";
  const SELECTOR_DRAWER_CLOSE = "data-js-drawer-close";
  const SELECTOR_DRAWERTRIGGER = "data-js-drawertrigger";
  const SELECTOR_FOCUSABLE_ELEMENTS = "a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type='text']:not([disabled]), input[type='radio']:not([disabled]), input[type='checkbox']:not([disabled]), select:not([disabled])";
  const DRAWER_ACTIVE_CLASS = "sage-drawer--active";
  const EVENT_CLOSEALL = "sage.drawer.closeAll";
  const EVENT_ACTIVE = "sage.drawer.active";
  const EVENT_OPENING = "sage.drawer.opening";
  const EVENT_OPEN = "sage.drawer.open";
  let selectorLastFocused;
  let containerInitialContent;

  // ==================================================
  // Functions
  // ==================================================

  function init(el) {
    // If a drawer has 'data-js-drawer-disable-close' return early and don't init any handlers
    if (el.hasAttribute(SELECTOR_DRAWER_DISABLE_CLOSE)) return;

    el.addEventListener("click", function(evt) {
      let el = evt.target;

      // A JS Event is dispatched to call closeDrawer,
      // this allows Products to hook into that call
      // and perform cleanup actions like removing the drawer's content.

      // Drawer Container has been clicked
      if (el.hasAttribute(SELECTOR_DRAWER)) {
        dispatchCloseAll();

      // Drawer Close Button has been clicked
      } else if (el.hasAttribute(SELECTOR_DRAWER_CLOSE) || evt.target.parentElement.hasAttribute(SELECTOR_DRAWER_CLOSE)) {
        dispatchCloseAll();
      }
    });
  }

  function initTrigger(el) {
    el.addEventListener("click", function(evt) {
      let drawerId = evt.target.getAttribute(SELECTOR_DRAWERTRIGGER) || evt.target.parentElement.getAttribute(SELECTOR_DRAWERTRIGGER);
      openDrawer(drawerId, el);
    });
  }

  function onDrawerKeypress(evt) {
    const keyNum = "which" in evt ? evt.which : evt.keyCode;
    if (keyNum === 27) dispatchCloseAll();
  }

  function openDrawer(drawerId, trigger) {
    let drawer = document.querySelector(`[${SELECTOR_DRAWER}="${drawerId}"]`);
    let focusableEls = drawer.querySelectorAll(SELECTOR_FOCUSABLE_ELEMENTS);

    dispatchOpenEvents(drawer);

    if(trigger && trigger.hasAttribute(SELECTOR_DRAWER_REMOTE_URL)) {
      fetchDrawerContent(drawer, trigger.dataset.jsRemoteUrl);
    } else if (drawer.hasAttribute(SELECTOR_DRAWER_REMOTE_URL)) {
      fetchDrawerContent(drawer);
    }

    selectorLastFocused = document.activeElement;
    drawer.classList.add(DRAWER_ACTIVE_CLASS);
    drawer.setAttribute("open", "");
    document.addEventListener("keyup", onDrawerKeypress);
    drawer.addEventListener("keydown", focusTrap.bind(focusableEls));
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
    document.removeEventListener("keyup", onDrawerKeypress);
  }

  function dispatchOpenEvents(el) {
    document.dispatchEvent(new Event(EVENT_ACTIVE));
    el.dispatchEvent(new Event(EVENT_OPENING));

    if (el.dataset.sageAnimate !== undefined) {
      const drawerContainer = el.querySelector(".sage-drawer__container");
      drawerContainer.ontransitionend = (e) => {
        if ((e.propertyName === "transform") && el.classList.contains(DRAWER_ACTIVE_CLASS)) {
          el.dispatchEvent(new Event(EVENT_OPEN));
        }
      };
    } else {
      el.dispatchEvent(new Event(EVENT_OPEN));
    }
  }

  function closeDrawer(el) {
    el.classList.remove(DRAWER_ACTIVE_CLASS);
    el.removeAttribute("open");
    el.removeEventListener("keydown", focusTrap);
    selectorLastFocused && selectorLastFocused.focus();
    removeDrawerContents(el);
  }

  function fetchDrawerContent(el, url) {
    if (!url) {
      url = el.getAttribute(SELECTOR_DRAWER_REMOTE_URL);
    }

    let elContainer = el.querySelector(`[${SELECTOR_DRAWER_CONTAINER}]`);
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

  function removeDrawerContents(el) {
    if ( el.hasAttribute(SELECTOR_DRAWER_REMOVE_CONTENTS_ON_CLOSE) ) {
      let elContainer = el.querySelector(`[${SELECTOR_DRAWER_CONTAINER}]`);
      elContainer.innerHTML = containerInitialContent || "";
    }
  }

  function eventHandlerCloseAll() {
    let drawers = Sage.util.nodelistToArray(document.querySelectorAll(`[${SELECTOR_DRAWER}]`));
    drawers.forEach(el => closeDrawer(el));
  }

  return {
    init: init,
    initTrigger: initTrigger,
    eventHandlerCloseAll: eventHandlerCloseAll,
    openDrawer: openDrawer,
    closeDrawer: closeDrawer
  }

})();
