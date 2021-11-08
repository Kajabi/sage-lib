Sage.docs.scrollToActiveNavItem = (function() {

  // ==================================================
  // Functions
  // ==================================================

  function init() {
    const activeNavItemClass = ".sage-nav__list--sub .sage-nav__link--active";
    const activeNavItem = document.querySelector(activeNavItemClass);

    if (activeNavItem) {
      activeNavItem.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }

  return {
    init: init
  };

})();
