Sage.docs.liveOptionMenu = (function() {
  // ==================================================
  // Variables
  // ==================================================
  var sageLiveOptionMenu = document.querySelectorAll('.sage-live-option-menu-anchor');


  // ==================================================
  // Functions
  // ==================================================

  function init() {

    // Simulate contextual menu
    sageLiveOptionMenu.forEach(function(anchor) {
      anchor.addEventListener('click', function(e) {
        var target = e.currentTarget;
        if (!target) return;
        var isExpanded = target.getAttribute('aria-expanded') == 'true';
        target.setAttribute('aria-expanded', !isExpanded);
      });
    });
  }


  return {
    init: init
  }

})();
