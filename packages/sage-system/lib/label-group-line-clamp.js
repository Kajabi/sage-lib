import { debounce } from './utils';

Sage.labelGroupLineClamp = (function () {
  // ==================================================
  // Variables
  // ==================================================

  const DATA_ATTR_KEY = 'jsSageLabelGroupLineClamp';
  const DATA_ATTR_SELECTOR = 'data-js-sage-label-group-line-clamp';
  const CLASSNAME_LINE_CLAMP_INIT_DONE = 'sage-label-group--line-clamp-init-done';
  const CLASSNAME_LINE_CLAMP_ITEM = 'sage-label-group__line-clamp-item';
  const CLASSNAME_LINE_CLAMP_ITEM_HIDDEN = 'sage-label-group__line-clamp-item--hidden';
  const CLASSNAME_LINE_CLAMP_OVERFLOW_ACTION = 'sage-label-group__overflow-action';

  let elRoot = null;
  let elOverflowActions = null
  let clamp = null;

  // ==================================================
  // Functions
  // ==================================================

  const showItemsWithinClampedLines = () => {
    // Get root's current left offset
    const { left: elRootLeft } = elRoot.getBoundingClientRect();

    // Turn each item on one at a time and test the left offset against
    let currentChildIndex = 0,
      lines = 0,
      lineMaxReached = false;

    const clampItems = elRoot.querySelectorAll(`.${CLASSNAME_LINE_CLAMP_ITEM}`)

    while (currentChildIndex < clampItems.length) {
      const child = clampItems[currentChildIndex];
      child.classList.remove(CLASSNAME_LINE_CLAMP_ITEM_HIDDEN);
      
      // If this child's left offset matches the root's left
      // then we've bumped to a new line.
      if (!lineMaxReached && child.getBoundingClientRect().left === elRootLeft) {
        lines += 1;
        console.log('lines', lines);
      }
      
      // If this item caused line clamp to go too far, then hide it
      // and exit this loop
      if (lines > clamp) {
        child.classList.add(CLASSNAME_LINE_CLAMP_ITEM_HIDDEN);
        lineMaxReached = true;
      }

      currentChildIndex += 1;
    }

    // Now we also need to ensure that the overflow actions
    // is within the line count.
    // Previous logic should always leave it either on a line
    // to itself or with previous lines.
    // So if it is same as root left we should start hiding
    // children from the end of the list until its no longer
    // on its own line anymore.
    while (elOverflowActions.getBoundingClientRect().left === elRootLeft) {
      currentChildIndex -= 1;
      elRoot.children[currentChildIndex].classList.add(CLASSNAME_LINE_CLAMP_ITEM_HIDDEN);
    }
  };

  const setupLineClamp = () => {
    // Initially the component will hide children 
    // when the line clamp variable is present.
    // So first we should prep each element by adding a contextual class
    // and an additional one to hide them up front.
    for (let i = 0; i < elRoot.children.length; i++) {
      const child = elRoot.children[i];
      if (child.classList.contains(CLASSNAME_LINE_CLAMP_OVERFLOW_ACTION)) {
        elOverflowActions = child;
        continue;
      }
      child.classList.add(CLASSNAME_LINE_CLAMP_ITEM);
      child.classList.add(CLASSNAME_LINE_CLAMP_ITEM_HIDDEN);
    }
    
    // We can indicate that the component has been prepped.
    elRoot.classList.add(CLASSNAME_LINE_CLAMP_INIT_DONE);

    // Now we need to dynamically show/hide until we reach maximum line size
    // at this initial screen size
    showItemsWithinClampedLines();

    // Also add a debounced resize listener to reprocess as well.
    window.addEventListener("resize",debounce(function(e){
      // Ensure all items are hidden
      document.querySelectorAll(CLASSNAME_LINE_CLAMP_ITEM).forEach(
        child => child.classList.add(CLASSNAME_LINE_CLAMP_ITEM_HIDDEN)
      );
      showItemsWithinClampedLines();
    }));
  };

  const init = (el) => {
    elRoot = el;
    clamp = Number(el.dataset[DATA_ATTR_KEY]);
    // console.log('found label group line clamp', clamp, el.children);

    setupLineClamp();
  };

  const unbind = (el) => {
    // el.removeEventListener("click", renderDisabledButtonSpinner);
  };

  return {
    init: init,
    unbind: unbind
  };
})();
