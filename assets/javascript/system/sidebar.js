Sage.sidebar = (function() {

  // ==================================================
  // Variables
  // ==================================================
  var sageToggleBtns = Sage.util.nodelistToArray(document.querySelectorAll('[data-js-target-type="sidebar"]'));


  // ==================================================
  // Functions
  // ==================================================

  // open or close sidenav
  function toggleSidebar(ele, evt) {
    var buttonTarget = document.getElementById(Sage.util.getBtnTarget(evt));

    buttonTarget.classList.toggle('sage-sidebar--open');

    if (buttonTarget.classList.contains('sage-sidebar--open')) {
      ele.setAttribute('aria-expanded', true);
      Sage.overlay.toggleOverlay('open');
    } else {
      ele.setAttribute('aria-expanded', false);
      Sage.overlay.toggleOverlay('closed');
    }
  }


  // reset sidenav state to closed/default
  function resetSideNav() {
    if (document.querySelector('.sage-sidebar--open') !== null) {
      var openSidebar = document.querySelector('.sage-sidebar--open');

      openSidebar.classList.remove('sage-sidebar--open');
      sageToggleBtns.forEach(function(btn) {
        btn.setAttribute('aria-expanded', false);
      });
      Sage.overlay.toggleOverlay('close');
    }
  }


  // ==================================================
  // Event handlers
  // ==================================================

  function init() {

    // Toggle sidebar on menu button click
    sageToggleBtns.forEach(function(btn) {
      if (btn.dataset.jsBtnTarget.includes('example-')) {
        return;
      }

      btn.addEventListener('click', function(e) {
        toggleSidebar(this, e);
      });
    });

    // Close overlay and menu on esc keypress
    document.addEventListener('keyup', function(e) {
      var keyNum = 'which' in e ? e.which : e.keyCode;

      if (keyNum === 27 && document.querySelector('.sage-sidebar--open') !== null) {  // esc key
        resetSideNav();
      }
    });
  }


  return {
    init: init,
    resetSideNav: resetSideNav
  };

})();
