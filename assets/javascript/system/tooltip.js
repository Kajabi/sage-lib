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

  function init(el) {
    el.addEventListener("mouseover", buildToolTip);
    el.addEventListener("mouseout", removeTooltip);
  }

  function unbind(el) {
    el.removeEventListener("mouseover", buildToolTip);
    el.removeEventListener("mouseout", removeTooltip);
  }

  // tooltip template
  function buildToolTip(evt) {
    if (!evt.target.hasAttribute(DATA_ATTR)) return;

    var pos = evt.target.getAttribute(`${DATA_ATTR}-position`) || "top";
    var tooltip = document.createElement("div");
    tooltip.className = TOOLTIP_CLASS;
    tooltip.innerHTML = evt.target.getAttribute(DATA_ATTR);
    tooltip.position = evt.target.getAttribute(`${DATA_ATTR}-position`);
    tooltip.dataItems = [`${DATA_ATTR}-theme`, `${DATA_ATTR}-size`];

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
      top;

    switch (position) {
      case "left":
        top = (parseInt(parentCoords.top) + parseInt(parentCoords.bottom)) / 2 - tooltip.offsetHeight / 2;
        left = parseInt(parentCoords.left) - dist - tooltip.offsetWidth;
        if (parseInt(parentCoords.left) - tooltip.offsetWidth < 0) {
          left = dist;
        }
        break;
      case "right":
        top = (parseInt(parentCoords.top) + parseInt(parentCoords.bottom)) / 2 - tooltip.offsetHeight / 2;
        left = parentCoords.right + dist;
        if (parseInt(parentCoords.right) + tooltip.offsetWidth > document.documentElement.clientWidth) {
          left =  document.documentElement.clientWidth - tooltip.offsetWidth - dist;
        }
        break;
      case "bottom":
        top = parseInt(parentCoords.bottom) + dist;
        left = parseInt(parentCoords.left) + (parent.offsetWidth - tooltip.offsetWidth) / 2;
        break;
      default:
      case "top":
        top = parseInt(parentCoords.top) - tooltip.offsetHeight - dist;
        left = parseInt(parentCoords.left) + (parent.offsetWidth - tooltip.offsetWidth) / 2;
    }

    tooltip.style.left = left + "px";
    tooltip.style.top = top + pageYOffset + "px";
    tooltip.classList.add(`${TOOLTIP_CLASS}--${position}`);
  }

  return {
    init: init,
    unbind: unbind
  }
})();
