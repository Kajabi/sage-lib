Sage.overlay = (function() {

  // ==================================================
  // Variables
  // ==================================================
  var sageNavOverlay = document.querySelector('.sage-overlay');
  var bodyClassName = 'sage-overlay--open';


  // ==================================================
  // Functions
  // ==================================================

  // open or close overlay
  function toggleOverlay(open) {
    return open === 'open' ? sageNavOverlay.classList.add(bodyClassName) : sageNavOverlay.classList.remove(bodyClassName)
  }


  function init() {
    // Close overlay and sidebar menu on click
    sageNavOverlay.addEventListener('click', function(e) {
      if (document.querySelector('.sage-overlay--open') !== null) {
        toggleOverlay('close');
        Sage.sidebar.resetSideNav();
      }
    });

  }





  return {
    init: init,
    toggleOverlay: toggleOverlay
  };

})();
