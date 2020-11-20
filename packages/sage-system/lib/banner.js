Sage.banner = (() => {

  // ==================================================
  // Variables
  // ==================================================

  const bannerClass = 'sage-banner';
  const bannerActiveClass = `${bannerClass}--active`;

  const selfTargetAttr = 'SELF';


  // ==================================================
  // Functions
  // ==================================================

  // check to see if an active banner exists
  const bannerIsEnabled = () => {
    return document.querySelector(`.${bannerActiveClass}`) !== null;
  };

  const handleBannerToggleClick = (ev) => {
    const elTarget = ev.target;

    // Ensure we're working with a button or hyperlink
    const elTargetTrigger = elTarget.closest('a, button');
    if (!elTargetTrigger) {
      return;
    }


    // Only respond to clicks on banner toggle elements
    const toggleBannerTarget = elTargetTrigger.dataset.jsToggleBanner;
    if (!toggleBannerTarget) {
      return;
    }

    // Determine the intended target to toggle
    let elTargetBanner;
    if (toggleBannerTarget === selfTargetAttr) {
      elTargetBanner = elTarget.closest(`.${bannerClass}`);
    } else {
      elTargetBanner = document.getElementById(toggleBannerTarget);
    }

    if (elTargetBanner) {
      toggleBanner(elTargetBanner);
    }
  }

  const toggleBanner = (elTargetBanner) => {
    if (elTargetBanner.classList.contains(bannerActiveClass)) {
      elTargetBanner.classList.remove(bannerActiveClass);
    } else {
      document.querySelectorAll(bannerActiveClass).forEach(elBanner => elBanner.classList.remove(bannerActiveClass));
      elTargetBanner.classList.add(bannerActiveClass);
    }
  };

  const unbind = () => {
    document.removeEventListener('click', handleBannerToggleClick);
  }


  const init = () => {
    // Regardless, look for any toggle buttons and add listeners
    document.addEventListener('click', handleBannerToggleClick);
  };


  return {
    init,
    bannerIsEnabled,
    unbind
  };

})();
