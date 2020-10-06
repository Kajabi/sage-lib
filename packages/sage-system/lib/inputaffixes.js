Sage.inputaffixes = (function() {

  // ==================================================
  // Variables
  // ==================================================
  const affixClass = "sage-input__affix";
  const affixRootClass = "sage-input--affixed";
  const fieldClass = "sage-input__field";
  const labelClass = "sage-label";
  const labelColorModifier = "draft";
  const labelElement = "span";
  const inputPaddingOffset = 16;


  // ==================================================
  // Functions
  // ==================================================

  // Adds affix content to an element
  function addAffixes(el) {
    const $root = el;
    const $input = el.querySelector(`.${fieldClass}`);

    // Toggle off the affixed class
    $root.classList.remove(affixRootClass);
    
    if ($root.dataset.inputPrefix) {
      const $label = makeLabel($root.dataset.inputPrefix, 'prefix');
      $root.appendChild($label);
      $root.classList.add("sage-input--prefixed");
      $input.style.paddingLeft = `${$label.offsetWidth + inputPaddingOffset}px`;
    }
    
    if ($root.dataset.inputSuffix) {
      const $label = makeLabel($root.dataset.inputSuffix, 'suffix');
      $root.appendChild($label);
      $root.classList.add("sage-input--suffixed");
      $input.style.paddingRight = `${$label.offsetWidth + inputPaddingOffset}px`;
    }
  }

  // Make the sage-label that will display the affix content
  function makeLabel(content, type) {
    const $label = document.createElement(labelElement);
    $label.appendChild(document.createTextNode(content));
    $label.setAttribute("aria-label", `${type}ed with ${content}`);
    $label.classList.add(
      labelClass,
      affixClass,
      `${labelClass}--${labelColorModifier}`,
      `${affixClass}--${type}`
    );


    return $label;
  }

  function handleAffixClick(e) {
    if (e.target.classList.contains(affixClass)) {
      // Find neighboring input and focus on it
      e.target.parentNode.querySelector(`.${fieldClass}`).focus();
    }
  }

  function init() {
    if (document.querySelector(`.${affixRootClass}`) !== null) {
      var affixElements = Sage.util.nodelistToArray(document.querySelectorAll(`.${affixRootClass}`));
      affixElements.forEach(function(el) {
        addAffixes(el);
      });

      document.addEventListener("click", handleAffixClick);
    } else {
      document.removeEventListener("click", handleAffixClick);
    }
  }


  return {
    init: init
  };

})();
