Sage.tabs = (function() {
  // ==================================================
  // Variables
  // ==================================================

  const ACTIVE_CLASS_ATTRIBUTE = 'data-sage-active-class';
  const SELECTOR_TABS = 'data-js-tabs';
  const SELECTOR_TAB_ITEM = 'data-js-tabs-target';
  const SELECTOR_TAB_PANE = 'data-js-tabs-pane';
  const CLASS_TAB_PANE_ACTIVE = 'sage-tabs-pane--active';
  const EVENT_SELECT = 'sage.tabs.change';
  const ATTRIBUTE_ARIA_SELECTED = 'aria-selected';


  // ==================================================
  // Functions
  // ==================================================

  function init(el) {
    el.addEventListener('click', tabClickHandler);
    el.addEventListener('keydown', tabKeydownHandler);

    let elTabInitialActive = el.firstElementChild && el.firstElementChild.hasAttribute(ACTIVE_CLASS_ATTRIBUTE) ? el.querySelector(`.${el.firstElementChild.getAttribute(ACTIVE_CLASS_ATTRIBUTE)}`) : null;
    if (elTabInitialActive) {
      // If a Tab has `.sage-tabs-pane--active` on init, click it to trigger the Pane change
      elTabInitialActive.click();
    } else {
      // If a tab isn't pre-selected on init, click the first one to make it active
      el.querySelector(`[${SELECTOR_TAB_ITEM}]`).click();
    }
  }

  function unbind(el) {
    el.removeEventListener('click', tabClickHandler);
    el.removeEventListener('keydown', tabKeydownHandler);
  }

  function tabClickHandler(evt) {
    let target = evt.target.getAttribute(SELECTOR_TAB_ITEM);

    if (target) {
      dispatchChange(this.getAttribute(SELECTOR_TABS), evt.target.getAttribute(SELECTOR_TAB_ITEM));
    }
  }

  function tabKeydownHandler(evt) {
    let target = evt.target.getAttribute(SELECTOR_TAB_ITEM);

    if (target) {
      let selectedTarget

      switch(evt.keyCode) {
        case 37: // Left arrow key
          selectedTarget = evt.target.previousElementSibling || evt.target.parentElement.lastElementChild
        break
        case 39: // Right arrow key
          selectedTarget = evt.target.nextElementSibling || evt.target.parentElement.firstElementChild
        break
      }

      if (selectedTarget) {
        dispatchChange(this.getAttribute(SELECTOR_TABS), selectedTarget.getAttribute(SELECTOR_TAB_ITEM));
      }
    }
  }

  function eventHandlerChange(evt) {
    let { tabsId, paneId } = evt.detail;

    let elTabsParent = document.querySelector(`[${SELECTOR_TABS}="${tabsId}"]`);
    let elTab = elTabsParent.querySelector(`[${SELECTOR_TAB_ITEM}="${paneId}"]`);
    let tabsArray = Sage.util.nodelistToArray( elTabsParent.querySelectorAll(`[${SELECTOR_TAB_ITEM}]`) );

    tabsArray.forEach((el) => {
      el.classList.remove(el.getAttribute(ACTIVE_CLASS_ATTRIBUTE));
      el.removeAttribute(ATTRIBUTE_ARIA_SELECTED);
    });

    elTab.classList.add(elTab.getAttribute(ACTIVE_CLASS_ATTRIBUTE));
    elTab.setAttribute(ATTRIBUTE_ARIA_SELECTED, true);

    let elPane = document.querySelector(`[${SELECTOR_TAB_PANE}="${paneId}"]`);
    let panesArray = Sage.util.nodelistToArray( elPane.parentElement.querySelectorAll(`[${SELECTOR_TAB_PANE}]`) );

    panesArray.forEach((el) => el.classList.remove(CLASS_TAB_PANE_ACTIVE));
    elPane.classList.add(CLASS_TAB_PANE_ACTIVE);
  }

  function dispatchChange(tabsId, paneId) {
    let eventDetail = { tabsId: tabsId, paneId: paneId };
    document.dispatchEvent(new CustomEvent(EVENT_SELECT, { detail: eventDetail }));
  }

  return {
    init: init,
    unbind: unbind,
    eventHandlerChange: eventHandlerChange
  }

})();
