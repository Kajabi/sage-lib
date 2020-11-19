Sage.inputaffixes = (() => {

  // ==================================================
  // Variables
  // ==================================================
  const affixClass = "sage-input__affix";
  const affixRootClass = "sage-input--affixed";
  const prefixRootClass = "sage-input--prefixed";
  const suffixRootClass = "sage-input--suffixed";
  const fieldClass = "sage-input__field";
  const labelClass = "sage-label";
  const labelColorModifier = "draft";
  const labelElement = "span";
  const inputPaddingOffset = 16;


  // ==================================================
  // Functions
  // ==================================================

  // Adds affix content to an element
  const addAffixes = (el) => {
    const elRoot = el;
    const elInput = el.querySelector(`.${fieldClass}`);

    // Toggle off the affixed class
    elRoot.classList.remove(affixRootClass);
    
    if (elRoot.dataset.jsInputPrefix) {
      const elLabel = makeLabel(elRoot.dataset.jsInputPrefix, 'prefix');
      elRoot.appendChild(elLabel);
      elRoot.classList.add(prefixRootClass);
      elInput.style.paddingLeft = `${elLabel.offsetWidth + inputPaddingOffset}px`;
    }
    
    if (elRoot.dataset.jsInputSuffix) {
      const elLabel = makeLabel(elRoot.dataset.jsInputSuffix, 'suffix');
      elRoot.appendChild(elLabel);
      elRoot.classList.add(suffixRootClass);
      elInput.style.paddingRight = `${elLabel.offsetWidth + inputPaddingOffset}px`;
    }
  };

  // Make the sage-label that will display the affix content
  const makeLabel = (content, type) => {
    const elLabel = document.createElement(labelElement);
    elLabel.appendChild(document.createTextNode(content));
    elLabel.setAttribute("aria-label", `${type}ed with ${content}`);
    elLabel.classList.add(
      labelClass,
      affixClass,
      `${labelClass}--${labelColorModifier}`,
      `${affixClass}--${type}`
    );

    return elLabel;
  };

  const handleAffixClick = (ev) => {
    if (ev.target.classList.contains(affixClass)) {
      // Find neighboring input and focus on it
      ev.target.parentNode.querySelector(`.${fieldClass}`).focus();
    }
  };

  const unbind = () => {
    document.removeEventListener("click", handleAffixClick);
  };

  const init = () => {
    if (document.querySelector(`.${affixRootClass}`) !== null) {
      const affixElements = Sage.util.nodelistToArray(document.querySelectorAll(`.${affixRootClass}`));
      affixElements.forEach((el) => {
        addAffixes(el);
      });

      document.addEventListener("click", handleAffixClick);
    }
  };


  return {
    init,
    unbind
  };

})();
