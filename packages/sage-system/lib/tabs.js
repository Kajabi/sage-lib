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
  const EVENT_INITIAL_SELECT = 'sage.tabs.initial';
  const ATTRIBUTE_ARIA_SELECTED = 'aria-selected';


  // ==================================================
  // Functions
  // ==================================================

  function init(el) {
    el.addEventListener('click', tabClickHandler);
    el.addEventListener('keydown', tabKeydownHandler);

    // If a Tab has `.sage-tabs-pane--active` on init, click it to trigger the Pane change
    // Otherwise, no option is initially selected.
    const classOfActiveItem = el.firstElementChild && el.firstElementChild.hasAttribute(ACTIVE_CLASS_ATTRIBUTE)
      ? el.firstElementChild.getAttribute(ACTIVE_CLASS_ATTRIBUTE)
      : null;
    let elInitialActiveItem = null;
    if (classOfActiveItem) {
      elInitialActiveItem = el.querySelector(`.${classOfActiveItem}`);
    }

    if (elInitialActiveItem) {
      dispatchChange(el.getAttribute(SELECTOR_TABS), elInitialActiveItem.getAttribute(SELECTOR_TAB_ITEM), EVENT_INITIAL_SELECT);
    }
  }

  function unbind(el) {
    el.removeEventListener('click', tabClickHandler);
    el.removeEventListener('keydown', tabKeydownHandler);
  }

  function tabClickHandler(evt) {
    const target = evt.target.getAttribute(SELECTOR_TAB_ITEM);

    if (target) {
      dispatchChange(this.getAttribute(SELECTOR_TABS), target);
    }
  }

  function tabKeydownHandler(evt) {
    const target = evt.target.getAttribute(SELECTOR_TAB_ITEM);
    let selectedTarget

    if (target) {
      switch(evt.keyCode) {
        case 37: // Left arrow key
          selectedTarget = evt.target.previousElementSibling || evt.target.parentElement.lastElementChild
        break
        case 39: // Right arrow key
          selectedTarget = evt.target.nextElementSibling || evt.target.parentElement.firstElementChild
        break
      }
    }

    if (selectedTarget) {
      dispatchChange(this.getAttribute(SELECTOR_TABS), selectedTarget.getAttribute(SELECTOR_TAB_ITEM));
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

    // Set focus if user-initiated event
    if (evt.type === EVENT_SELECT) {
      elTab.focus();
    }

    let elPane = document.querySelector(`[${SELECTOR_TAB_PANE}="${paneId}"]`);
    let panesArray = Sage.util.nodelistToArray( elPane.parentElement.querySelectorAll(`[${SELECTOR_TAB_PANE}]`) );

    panesArray.forEach((el) => el.classList.remove(CLASS_TAB_PANE_ACTIVE));
    elPane.classList.add(CLASS_TAB_PANE_ACTIVE);
  }

  function dispatchChange(tabsId, paneId, evType) {
    let eventDetail = { tabsId, paneId };
    evType = evType || EVENT_SELECT;
    document.dispatchEvent(new CustomEvent(evType, { detail: eventDetail }));
  }

  return {
    init: init,
    unbind: unbind,
    eventHandlerChange: eventHandlerChange
  }

})();
