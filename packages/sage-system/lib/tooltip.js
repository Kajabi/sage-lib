Sage.tooltip = (function() {

  // ==================================================
  // Variables
  // ==================================================
  const DATA_ATTR = "data-js-tooltip";
  const SELECTOR = `[${DATA_ATTR}]`;
  const TOOLTIP_CLASS = "sage-tooltip";


  // ==================================================
  // Functions
  // ==================================================

  // TODO: Reverting tooltip reveal on focus/blur until further investigation of persistent focus
  // can resolve it lingering when it shouldn't.

  function init(el) {
    el.addEventListener("mouseenter", buildToolTip);
    // el.addEventListener("focus", buildToolTip);
    el.addEventListener("mouseleave", removeTooltip);
    // el.addEventListener("blur", removeTooltip);
  }

  function unbind(el) {
    el.removeEventListener("mouseenter", buildToolTip);
    // el.removeEventListener("focus", buildToolTip);
    el.removeEventListener("mouseleave", removeTooltip);
    // el.removeEventListener("blur", removeTooltip);
  }

  // tooltip template
  function buildToolTip(evt) {
    if (!evt.target.hasAttribute(DATA_ATTR)) return;

    var pos = evt.target.getAttribute(`${DATA_ATTR}-position`) || "center";
    var tooltip = document.createElement("div");
    tooltip.className = TOOLTIP_CLASS;
    tooltip.innerHTML = evt.target.getAttribute(DATA_ATTR);
    tooltip.position = evt.target.getAttribute(`${DATA_ATTR}-position`);
    tooltip.dataItems = [`${DATA_ATTR}-size`];

    if (!tooltip.innerHTML.length > 0) return;
    generateClasses(tooltip, evt);

    document.body.appendChild(tooltip);
    positionTooltip(evt.target, tooltip, pos);
  }


  // Removes tooltip from DOM
  function removeTooltip(evt) {
    if (!evt.target.hasAttribute(DATA_ATTR) || !document.querySelector(SELECTOR)) return;

    window.requestAnimationFrame(function() {
      document.body.removeChild(document.querySelector(`.${TOOLTIP_CLASS}`));
    });
  }


  // Builds list of modifier classes from array of data-attributes
  function generateClasses(ele, evt) {
    ele.dataItems.forEach(function(item) {
      var tgt = evt.target;
      if (tgt.hasAttribute(item)) {
        ele.classList.add(`${TOOLTIP_CLASS}--${tgt.getAttribute(item)}`);
      }
    });
  }


  function positionTooltip(parent, tooltip, position) {
    var parentCoords = parent.getBoundingClientRect(),
      dist = 8,
      left,
      top,
      minWidth = 60,
      pointerLeft,
      pointerRight;

    console.log(parentCoords);

    top = parseInt(parentCoords.top) - tooltip.offsetHeight - dist;
    left = parseInt(parentCoords.left) + (parent.offsetWidth - tooltip.offsetWidth) / 2;

    pointerLeft = (parent.offsetWidth - tooltip.offsetWidth) / 2 + "px";
    pointerRight = ((tooltip.offsetWidth / 2) - (parent.offsetWidth / 2)) + "px";

    if (tooltip.offsetWidth < minWidth) {
      pointerLeft = "-50%";
      pointerRight = "50%";
    }

    console.log("pointer position: ", pointerLeft);

    tooltip.style.left = left + "px";
    tooltip.style.top = top + pageYOffset + "px";
    tooltip.classList.add(`${TOOLTIP_CLASS}--${position}`);
    tooltip.style.setProperty("--pointer-left", pointerLeft);
    tooltip.style.setProperty("--pointer-right", pointerRight);
  }

  return {
    init: init,
    unbind: unbind
  }
})();
