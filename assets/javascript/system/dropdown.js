Sage.dropdown = (function() {
  // ==================================================
  // Variables
  // ==================================================

  // The class to toggle on the menu when values are selected in selection mode
  const dropdownValueSelectedClass = 'sage-dropdown--value-selected';

  // The class to toggle on the menu when the menu is disabled
  const dropdownDisabledClass = 'sage-dropdown--disabled';

  // Selector for a menu item
  const dropdownItemClass = 'sage-dropdown__item-control';

  // The class to toggle on the menu when the menu is disabled
  const dropdownDisabledItemClass = 'sage-dropdown__item--disabled';

  // Selector for seach item in menu
  const dropdownSearchItemClass = 'sage-search__input';

  // The selected value needs some content in order to have height
  const defaultSelectedValue = '&nbsp;';

  // In order to reset the label in seleciton mode, provide a standard prefix for the reset trigger item
  const triggerRestPrefix = '--';

  // Several variations exist for triggers in selection mode; this is a grouped selector to grab any of them
  const triggerSelectClasses = '.sage-dropdown__trigger--select-labeled, .sage-dropdown__trigger--select';

  // The element in which to show the selected value when dropdown is in selection mode
  const triggerSelectedValueClass = '.sage-dropdown__trigger-selected-value .sage-btn__truncate-text';

  // ==================================================
  // Functions
  // ==================================================

  function init(el) {
    buildA11y(el);
    el.addEventListener('click', handleClick);
    el.addEventListener('keyup', handleKeyAction);
  }

  function unbind(el) {
    el.removeEventListener('click', handleClick);
    el.removeEventListener('keyup', handleKeyAction);
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

    // If the dropdown is in select mode, display the selected content
    const elTrigger = elDropdown.querySelector(triggerSelectClasses);
    const eventIsOnDropdownItem = el.classList.contains(dropdownItemClass);
    if (eventIsOnDropdownItem && elTrigger) {
      const val = (el.value || el.textContent).trim();
      updateTriggerLabel(val, elTrigger);
      updateStateClass(val, elDropdown);
    }

    isExpanded(elDropdown) ? close(elDropdown) : open(elDropdown);
  }

  function updateStateClass(val, elDropdown) {
    const hasSelectValueClass = elDropdown.classList.contains(dropdownValueSelectedClass);
    if (val.startsWith(triggerRestPrefix)) {
      if (hasSelectValueClass) {
        elDropdown.classList.remove(dropdownValueSelectedClass)
      }
    } else {
      if (!hasSelectValueClass) {
        elDropdown.classList.add(dropdownValueSelectedClass)
      }
    }
  }

  function updateTriggerLabel(val, elTrigger) {
    const triggerSelectedValue = elTrigger.querySelector(triggerSelectedValueClass);
    
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

  function open(el) {
    el.setAttribute('aria-expanded', 'true');
  }

  function close(el) {
    el.setAttribute('aria-expanded', 'false');
  }

  function isExpanded(el) {
    return el.getAttribute('aria-expanded') === 'true';
  }

  function buildA11y(el) {
    el.setAttribute('aria-haspopup', true);
    el.setAttribute('aria-expanded', false);
  }

  return {
    init: init,
    unbind: unbind,
  }

})();
