Sage.popover = (function() {
  // ==================================================
  // Variables
  // ==================================================

  const SELECTOR_PARENT = 'data-js-toast';
  const CLASS_ACTIVE = 'sage-toast--is-open';
  const SETTING_TIMER = 3000;

  // ==================================================
  // Functions
  // ==================================================

  function init(el) {
    el.addEventListener('click', handleClick);
    el.addEventListener('keydown', handleKeydown);

    let elems = document.querySelectorAll(`[${SELECTOR_PARENT}]`);

    // close any toasts present on load
    if (elems) {
      // closeAllToasts(elems);
    } 
  }

  function unbind(el) {
    el.removeEventListener('click', handleClick);
    el.removeEventListener('keydown', handleKeydown);
  }

  function handleClick(evt) {
    const elParent = evt.currentTarget;

    const toggleToastTarget = elTargetTrigger.dataset.jsToggleToast;
    if (!toggleToastTarget) {
      return;
    }

    let elTargetToast;
    if (toggleToastTarget === selfTargetAttr) {
      // elTargetToast = elTarget.closest(`.${bannerClass}`);
    } else {
      console.log(toggleToastTarget);
      elTargetToast = document.getElementById(toggleToastTarget);
    }


    elTargetToast = document.getElementById()

    closeToast(elParent);
  }

  // May not need since the interaction lasts 3 seconds
  function handleKeydown(evt) {
  }

  function closeToast(el) {
    el.classList.remove(CLASS_ACTIVE);
  }

  function closeAllToasts(elems) {
    setTimeout(function() {
      elems.forEach(function(el) {
        el.classList.remove(CLASS_ACTIVE);
      });
    }, SETTING_TIMER)
  }

  return {
    init: init,
    unbind: unbind,
  }

})();
