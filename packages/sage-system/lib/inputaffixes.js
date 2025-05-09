Sage.inputaffixes = (() => {

  // ==================================================
  // Variables
  // ==================================================
  const affixClass = "sage-input__affix";
  const affixRootClass = "sage-input--affixed";
  const prefixRootClass = "sage-input--prefixed";
  const suffixRootClass = "sage-input--suffixed";
  const fieldClass = "sage-input__field";
  const valueClass = "sage-input__affix-value";
  const valueElement = "span";
  const inputPaddingOffset = 16;
  const observers = []; // To store IntersectionObserver instances for cleanup


  // ==================================================
  // Functions
  // ==================================================

  // Make the sage-label that will display the affix content
  const makeLabel = (content, type) => {
    const elLabel = document.createElement(valueElement);
    const elLabelValue = document.createElement(valueElement);
    elLabel.appendChild(elLabelValue);
    elLabelValue.appendChild(document.createTextNode(content));
    elLabel.setAttribute("aria-label", `${type}ed with ${content}`);
    elLabel.classList.add(
      affixClass,
      `${affixClass}--${type}`
    );
    elLabelValue.classList.add(
      valueClass
    );

    return elLabel;
  };

  // Updates the padding on the input field based on visible affix widths
  const updateInputPadding = (elRoot, elInput) => {
    if (!elInput) return;

    // Reset padding for recalculation using logical properties
    elInput.style.paddingInlineStart = '';
    elInput.style.paddingInlineEnd = '';

    const prefixEl = elRoot.querySelector(`.${affixClass}--prefix`);
    if (prefixEl && prefixEl.offsetWidth > 0) { // Check offsetWidth to ensure visibility
      elInput.style.paddingInlineStart = `${prefixEl.offsetWidth + inputPaddingOffset}px`;
    }

    const suffixEl = elRoot.querySelector(`.${affixClass}--suffix`);
    if (suffixEl && suffixEl.offsetWidth > 0) { // Check offsetWidth to ensure visibility
      elInput.style.paddingInlineEnd = `${suffixEl.offsetWidth + inputPaddingOffset}px`;
    }
  };

  // Sets up the DOM structure for affixes (labels) and manages root classes.
  // This function is designed to be idempotent for DOM creation.
  const setupAffixesDOMAndClasses = (elRoot) => {
    const elInput = elRoot.querySelector(`.${fieldClass}`);
    if (!elInput) return; // Should not happen if elRoot is a valid affix container

    let hasActiveAffixes = false;

    // Handle Prefix
    if (elRoot.dataset.jsInputPrefix) {
      // Add prefix label only if it doesn't exist
      if (!elRoot.querySelector(`.${affixClass}--prefix`)) {
        const elLabel = makeLabel(elRoot.dataset.jsInputPrefix, 'prefix');
        elRoot.appendChild(elLabel);
      }
      elRoot.classList.add(prefixRootClass);
      hasActiveAffixes = true;
    } else {
      // If no data-prefix attribute, remove any existing prefix DOM and class
      const existingPrefix = elRoot.querySelector(`.${affixClass}--prefix`);
      if (existingPrefix) existingPrefix.remove();
      elRoot.classList.remove(prefixRootClass);
    }

    // Handle Suffix
    if (elRoot.dataset.jsInputSuffix) {
      // Add suffix label only if it doesn't exist
      if (!elRoot.querySelector(`.${affixClass}--suffix`)) {
        const elLabel = makeLabel(elRoot.dataset.jsInputSuffix, 'suffix');
        elRoot.appendChild(elLabel);
      }
      elRoot.classList.add(suffixRootClass);
      hasActiveAffixes = true;
    } else {
      // If no data-suffix attribute, remove any existing suffix DOM and class
      const existingSuffix = elRoot.querySelector(`.${affixClass}--suffix`);
      if (existingSuffix) existingSuffix.remove();
      elRoot.classList.remove(suffixRootClass);
    }

    // Manage the main affixRootClass based on whether any affixes are active
    if (hasActiveAffixes) {
      elRoot.classList.add(affixRootClass); // Ensure it's present
    } else {
      // If no affixes are active (e.g. data attributes removed), remove the root class
      elRoot.classList.remove(affixRootClass);
    }
  };


  const handleAffixClick = (ev) => {
    if (ev.target.classList.contains(valueClass)) {
      // Find neighboring input and focus on it
      const affixContainer = ev.target.closest(`.${affixRootClass}`);
      const inputField = affixContainer ? affixContainer.querySelector(`.${fieldClass}`) : null;
      if (inputField) {
        inputField.focus();
      }
    }
  };

  const unbind = () => {
    document.removeEventListener("click", handleAffixClick);
    observers.forEach(observer => observer.disconnect());
    observers.length = 0; // Clear the array of observers
  };

  const init = () => {
    unbind(); // Clear any previous observers and listeners

    // Select elements that are designated affix roots or have data attributes for affixes
    const elementsToProcess = Sage.util.nodelistToArray(
      document.querySelectorAll(`.${affixRootClass}, [data-js-input-prefix], [data-js-input-suffix]`)
    );

    if (elementsToProcess.length > 0) {
      elementsToProcess.forEach((elRoot) => {
        const elInput = elRoot.querySelector(`.${fieldClass}`);
        if (!elInput) {
          // Only warn if it was explicitly an affixRootClass but structure is wrong
          if (elRoot.classList.contains(affixRootClass)) {
            console.warn('Sage.inputaffixes: Affix root is missing its field element.', elRoot);
          }
          return; // Skip elements without an input field
        }

        setupAffixesDOMAndClasses(elRoot); // Ensure DOM and classes are correctly set up

        // If after setup, the element no longer qualifies for affixes, skip observer
        if (!elRoot.classList.contains(affixRootClass) && !elRoot.dataset.jsInputPrefix && !elRoot.dataset.jsInputSuffix) {
            return;
        }

        // Create an IntersectionObserver for this element
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              // Element is now visible, update its padding
              updateInputPadding(entry.target, entry.target.querySelector(`.${fieldClass}`));
            }
          });
        }, { threshold: 0.01 }); // Trigger when at least 1% of the element is visible

        observer.observe(elRoot);
        observers.push(observer); // Store for cleanup in unbind
      });

      document.addEventListener("click", handleAffixClick);
    }
  };


  return {
    init,
    unbind
  };

})();
