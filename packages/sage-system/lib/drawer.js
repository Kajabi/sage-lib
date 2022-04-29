import { forEach } from "lodash";

Sage.drawerExpandCollapse = (() => {
  // ==================================================
  // Variables
  // ==================================================

  const DRAWER_ANIMATION_TIMEOUT = 500;
  const CLASSNAME_DRAWER_EXPANDED = "sage-drawer--expanded";
  const CLASSNAME_DRAWER_HIDDEN_CONTENT = "sage-drawer__hidden-content";
  const SELECTOR_COLLAPSED_CONTENT = "[data-js-drawer-collapsed-content]";
  const SELECTOR_EXPANDED_CONTENT = "[data-js-drawer-expanded-content]";

  // ==================================================
  // Functions
  // ==================================================

  // Select the modal targeted by an expand or contract trigger
  const getTargetModal = (modalTarget) => document.querySelector(`[data-js-modal="${modalTarget}"`);

  // After a timer expires reveal elements within a given modal
  const showContentAfterTimer = ($elModal, selector) => setTimeout(
    () => $elModal.querySelectorAll(selector).forEach(
      el => el.classList.remove(CLASSNAME_DRAWER_HIDDEN_CONTENT)
    ),
    DRAWER_ANIMATION_TIMEOUT
  );

  // Immediately hide elements with a given a given modal
  const hideContentImmediately = ($elModal, selector) => $elModal
    .querySelectorAll(selector)
    .forEach(
      el => el.classList.add(CLASSNAME_DRAWER_HIDDEN_CONTENT)
    );

  // Process click on a expand trigger
  const expandDrawer = (evt) => {
    // Retrieve the modal target from the trigger
    const $elModal = getTargetModal(evt.target.dataset.jsDrawerExpand);

    // Add expanded class to the modal
    $elModal.classList.add(CLASSNAME_DRAWER_EXPANDED);

    // Immediately hide collapsed-only content
    hideContentImmediately($elModal, SELECTOR_COLLAPSED_CONTENT);
    
    // After animation finishes, reveal expanded-only content
    showContentAfterTimer($elModal, SELECTOR_EXPANDED_CONTENT);
  };

  // Process click on a collapse trigger
  const collapseDrawer = (evt) => {
    // Retrieve the modal target from the trigger
    const $elModal = getTargetModal(evt.target.dataset.jsDrawerCollapse);

    // Remove expanded class from the modal
    $elModal.classList.remove(CLASSNAME_DRAWER_EXPANDED);

    // Immediately hide expanded-only content
    hideContentImmediately($elModal, SELECTOR_EXPANDED_CONTENT);
    
    // After animation finishes, reveal collapsed-only content
    showContentAfterTimer($elModal, SELECTOR_COLLAPSED_CONTENT);
  };

  // Hides all expanded-only content right away
  const initExpandCollapse = (el) => {
    el.classList.add(CLASSNAME_DRAWER_HIDDEN_CONTENT);
  };

  // Listens for clicks on expand triggers
  const initExpand = (el) => el.addEventListener("click", expandDrawer);

  // Removes listener for clicks on expand triggers
  const unbindExpand = (el) => el.removeEventListener("click", expandDrawer);

  // Listens for clicks on collapse triggers
  const initCollapse = (el) => el.addEventListener("click", collapseDrawer);

  // Removes listener for clicks on collapse triggers
  const unbindCollapse = (el) => el.removeEventListener("click", collapseDrawer);

  return {
    initExpandCollapse,
    initExpand,
    unbindExpand,
    initCollapse,
    unbindCollapse,
  };
})();
