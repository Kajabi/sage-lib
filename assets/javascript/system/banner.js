Sage.banner = (function() {

  // ==================================================
  // Variables
  // ==================================================

  var activeBanner, bannerCloseBtn;

  var bodyClass = "banner-active";
  var bannerClass = ".sage-banner--active";


  // ==================================================
  // Functions
  // ==================================================

  // check to see if an active banner exists
  function bannerIsEnabled() {
    return document.querySelector(bannerClass) !== null;
  }

  function bindEvents() {
    bannerCloseBtn.addEventListener('click', function(e) {
      e.target.parentElement.classList.toggle('sage-banner--active');
      document.querySelector('body').classList.toggle(bodyClass);
    });
  }


  function init() {
    if (bannerIsEnabled()) {
      document.body.classList.add(bodyClass);
      activeBanner = document.querySelector(bannerClass);
      bannerCloseBtn = activeBanner.querySelector('.sage-banner__close');

      bindEvents();
    }
  }


  return {
    init: init,
    bannerIsEnabled: bannerIsEnabled
  };

})();
