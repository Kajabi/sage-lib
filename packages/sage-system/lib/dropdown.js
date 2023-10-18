Sage.dropdown = (function () {
  // ==================================================
  // Variables
  // ==================================================

  // The class to toggle on the menu when values are selected in selection mode
  const dropdownValueSelectedClass = "sage-dropdown--value-selected";

  // The class to toggle on the menu when the menu is disabled
  const dropdownDisabledClass = "sage-dropdown--disabled";

  // Selector for a menu item
  const dropdownItemClass = "sage-dropdown__item-control";
  const dropdownItemControlCustomClass = "sage-dropdown__item-control--custom";

  // The class to toggle on the menu when the menu is disabled
  const dropdownDisabledItemClass = "sage-dropdown__item--disabled";

  // Selector for seach item in menu
  const dropdownSearchItemClass = "sage-search__input";

  // The selected value needs some content in order to have height
  const defaultSelectedValue = "&nbsp;";

  // In order to reset the label in seleciton mode, provide a standard prefix for the reset trigger item
  const triggerRestPrefix = "--";

  // Several variations exist for triggers in selection mode; this is a grouped selector to grab any of them
  const triggerSelectClasses = ".sage-dropdown__trigger--select-labeled, .sage-dropdown__trigger--select";

  // The element in which to show the selected value when dropdown is in selection mode
  const triggerSelectedValueClass = ".sage-dropdown__trigger-selected-value .sage-btn__truncate-text";

  const SELECTOR_FOCUSABLE_ELEMENTS = '.sage-dropdown__panel a, .sage-dropdown__panel button, .sage-dropdown__panel textarea, .sage-dropdown__panel input[type="text"], .sage-dropdown__panel input[type="radio"], .sage-dropdown__panel input[type="checkbox"], .sage-dropdown__panel input[type="search"], .sage-dropdown__panel select';
  let SELECTOR_LAST_FOCUSED;

  const dropdownItemAriaSelectedClass = '.sage-dropdown__panel .sage-dropdown__item[aria-selected="true"]';
  const dropdownItemControlClass = ".sage-dropdown__item-control";
  const dropdownClass = ".sage-dropdown";
  const dropdownTriggerLabelClass = ".sage-dropdown__trigger-label";
  const dropdownAllowMultipleClass = "sage-dropdown--allow-multiple";

  // ==================================================
  // Functions
  // ==================================================

  function init(el) {
    buildA11y(el);
    checkSelected(el);
    el.addEventListener("click", handleClick);
    el.addEventListener("keyup", handleKeyAction);
  }

  function unbind(el) {
    el.removeEventListener("click", handleClick);
    el.removeEventListener("keyup", handleKeyAction);
  }

  function handleClick(evt) {
    const el = evt.target;
    const elDropdown = evt.currentTarget;

    // Stop if the element issuing the event is a search field
    if (el.classList.contains(dropdownSearchItemClass)) {
      return;
    }

    // Stop if the dropdown is disabled
    if (elDropdown.classList.contains(dropdownDisabledClass)) {
      return;
    }

    // Stop if the dropdown item clicked is disabled
    if (el.classList.contains(dropdownDisabledItemClass)) {
      return;
    }

    // Stop if the dropdown item clicked and parent is disabled
    if (el.parentNode.classList.contains(dropdownDisabledItemClass)) {
      evt.preventDefault();
      return;
    }

    // Click may have occurred within a trigger
    // but we only care if it happened on something within the trigger,
    // not the trigger container itself
    const didClickOnTrigger = el.closest(".sage-dropdown__trigger") && !el.classList.contains("sage-dropdown__trigger");

    // Click may have occurred within a menu (such as on item-control elements of various sorts)
    const didClickOnMenu = !!el.closest(".sage-dropdown__menu");

    // Click may have occurred on the screen element
    const didClickOnScreen = !!el.closest(".sage-dropdown__screen");

    // Elements with data-sage-dropdown-exit can be used to togglePanel.
    const elHasExitAttr = el.hasAttribute("data-sage-dropdown-exit")

    // Proceed with toggling the panel if any one of the click conditions is true
    // (excludes clicks within custom panels)
    if (didClickOnTrigger || didClickOnMenu || didClickOnScreen || elHasExitAttr) {
      togglePanel(evt);
    }
  }

  function togglePanel(evt) {
    let val = null;
    const el = evt.target;
    const elDropdown = evt.currentTarget;

    // If the dropdown is in select mode, display the selected content
    const elTrigger = elDropdown.querySelector(triggerSelectClasses);
    const eventIsOnDropdownItem = el.classList.contains(dropdownItemClass);
    const closestDropdownItemControl = el.closest(dropdownItemControlClass);
    const eventIsWithinCustomItemControl = closestDropdownItemControl && closestDropdownItemControl.classList.contains(dropdownItemControlCustomClass);
    const isMultiselect = elDropdown.classList.contains(dropdownAllowMultipleClass);

    if (eventIsWithinCustomItemControl && elTrigger) {
      val = closestDropdownItemControl.innerHTML;
    } else if (eventIsOnDropdownItem && elTrigger) {
      val = (el.value || el.textContent).trim();
    }

    if (val !== null && !isMultiselect) {
      updateTriggerLabel(val, elTrigger);
      updateStateClass(val, elDropdown);
    }


    // Keep open if multiselect is enabled
    const didClickOnScreen = !!el.closest(".sage-dropdown__screen");
    if(isMultiselect && isExpanded(elDropdown) && !didClickOnScreen) return;

    isExpanded(elDropdown) ? close(elDropdown) : open(elDropdown);
  }

  function updateStateClass(val, elDropdown) {
    const hasSelectValueClass = elDropdown.classList.contains(
      dropdownValueSelectedClass
    );
    if (val.startsWith(triggerRestPrefix)) {
      if (hasSelectValueClass) {
        elDropdown.classList.remove(dropdownValueSelectedClass);
      }
    } else {
      if (!hasSelectValueClass) {
        elDropdown.classList.add(dropdownValueSelectedClass);
      }
    }
  }

  function updateTriggerLabel(val, elTrigger) {
    const triggerSelectedValue = elTrigger.querySelector(
      triggerSelectedValueClass
    );

    if (!triggerSelectedValue) {
      return;
    }

    if (val.startsWith(triggerRestPrefix)) {
      triggerSelectedValue.innerHTML = defaultSelectedValue;
    } else {
      triggerSelectedValue.innerHTML = val;
    }
  }

  function handleKeyAction(evt) {
    const el = evt.currentTarget;

    if (evt.keyCode === 13 && !isExpanded(el)) {
      open(el);
    } else if (evt.keyCode === 27) {
      close(el);
    }
  }


  // NOTE: getHeight and positionElement must be kept in alignment
  // with packages/sage-react/lib/Dropdown/Dropdown.jsx since we don't
  // currently have unified location for Rails and React
  function getHeight(el) {
    const styles = window.getComputedStyle(el);
    const height = el.offsetHeight;
    const borderTopWidth = parseFloat(styles.borderTopWidth);
    const borderBottomWidth = parseFloat(styles.borderBottomWidth);
    const paddingTop = parseFloat(styles.paddingTop);
    const paddingBottom = parseFloat(styles.paddingBottom);

    return height - borderBottomWidth - borderTopWidth - paddingTop - paddingBottom;
  }

  function positionElement(el) {
    let direction = null;
  
    // Elements
    const button = el;
    const panel = el.lastElementChild;
    const win = panel.ownerDocument.defaultView;
    const docEl = window.document.documentElement;
  
    panel.style.top = ''; // resets the style
    panel.style.left = ''; // resets the style
  
    // Dimensions
    const buttonDimensions = button.getBoundingClientRect();
    const panelDimensions = panel.getBoundingClientRect();
  
    const panelNewLoc = {
      top: (buttonDimensions.height / 2) + panelDimensions.height,
      left: (buttonDimensions.width / 2) + panelDimensions.width,
    };
  
    const viewport = {
      top: docEl.scrollTop,
      bottom: window.pageYOffset + docEl.clientHeight,
      left: docEl.scrollLeft,
      right: window.pageXOffset + docEl.clientWidth,
    };
  
    const offset = {
      top: panelDimensions.top + win.pageYOffset,
      left: panelDimensions.left + win.pageXOffset,
      bottom: (panelDimensions.top + win.pageYOffset),
      right: (panelDimensions.left + win.pageXOffset),
    };
  
    const panelHeight = getHeight(panel);
    const panelWidth = panelDimensions.width;
    const enoughSpaceAbove = viewport.top < (offset.top + panelHeight);
    const enoughSpaceBelow = viewport.bottom > (offset.bottom + panelHeight);
    const enoughSpaceLeft = viewport.left < (offset.left + panelWidth);
    const enoughSpaceRight = viewport.right > (offset.right + panelWidth);
  
    if (!enoughSpaceBelow && enoughSpaceAbove) {
      direction = 'above';
    } else if (!enoughSpaceAbove && enoughSpaceBelow) {
      direction = 'below';
    } else if (!enoughSpaceRight && enoughSpaceLeft) {
      direction = 'left';
    } else if (!enoughSpaceLeft && enoughSpaceRight) {
      direction = 'right';
    }

    console.log('direction: ', direction);
  
    if (direction === 'above') {
      panel.style.top = `-${panelNewLoc.top}px`;
    } else if (direction === 'below') {
      // panel.style.top = 'inherit';
      // panel.style.bottom = 0;
    } else if (direction === 'left') {
      // panel.style.left = `-${panelNewLoc.left}px`;
      panel.style.left = 'inherit';
      panel.style.right = 0;
    } else if (direction === 'right') {
      panel.style.left = 0;
      panel.style.right = 'inherit';
    }
  }
  
  function open(el) {
    el.setAttribute("aria-expanded", "true");
    positionElement(el);
    let focusableEls = el.querySelectorAll(SELECTOR_FOCUSABLE_ELEMENTS);
    SELECTOR_LAST_FOCUSED = document.activeElement;
    el.addEventListener("keydown", focusTrap.bind(focusableEls));
  }

  function close(el) {
    el.setAttribute("aria-expanded", "false");
    el.removeEventListener("keydown", focusTrap);
    SELECTOR_LAST_FOCUSED.focus();
  }

  function isExpanded(el) {
    return el.getAttribute("aria-expanded") === "true";
  }

  function buildA11y(el) {
    el.setAttribute("aria-haspopup", true);
    el.setAttribute("aria-expanded", false);
  }

  function checkSelected(el) {
    let selectedItem = el.querySelector(dropdownItemAriaSelectedClass);

    if (selectedItem != null) {
      let selectedItemValue = selectedItem.querySelector(
        dropdownItemControlClass
      ).innerHTML;
      let selectedParent = selectedItem.closest(dropdownClass);
      selectedParent.querySelector(
        dropdownTriggerLabelClass
      ).innerHTML = selectedItemValue;
    }
  }

  function focusTrap(evt) {
    let firstFocusableEl = this[0];
    let lastFocusableEl = this[this.length - 1];
    let KEYCODE_TAB = 9;
    var isTabPressed = evt.key === "Tab" || evt.keyCode === KEYCODE_TAB;

    if (!isTabPressed) {
      return;
    }

    if (evt.shiftKey) {
      /* shift + tab */ if (document.activeElement === firstFocusableEl) {
        lastFocusableEl.focus();
        evt.preventDefault();
      }
    } /* tab */ else {
      if (document.activeElement === lastFocusableEl) {
        firstFocusableEl.focus();
        evt.preventDefault();
      }
    }
  }

  return {
    init: init,
    unbind: unbind,
  };
})();
