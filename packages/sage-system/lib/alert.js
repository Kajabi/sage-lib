Sage.alert = (() => {
  // ==================================================
  // Variables
  // ==================================================

  const CLASSNAME_ALERT = "sage-alert";
  const CLASSNAME_ALERT_CLOSE = "sage-alert__close";
  const EVENT_DISMISS_CLICK = "sage.alert.dismiss";

  // ==================================================
  // Functions
  // ==================================================

  const init = (el) => {
    if (!el) return;

    el.addEventListener("click", handleClicks);
  };

  const unbind = (el) => {
    el.removeEventListener("click", handleClicks);
  };

  const handleClicks = (event) => {
    const { target } = event;
    
    if (target.closest(`.${CLASSNAME_ALERT_CLOSE}`)) {
      const alert = target.closest(`.${CLASSNAME_ALERT}`);
      alert.style.display = "none";
      alert.dispatchEvent(new CustomEvent(EVENT_DISMISS_CLICK, { bubbles: true, detail: { alert, event }}));
    }
  };

  return {
    init,
    unbind,
  };
})();
