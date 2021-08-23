Sage.docs.buttonGroup = (function() {

  // ==================================================
  // Functions
  // ==================================================


  function init() {
    const buttonGroupWrapExample = document.getElementById('button-group-wrap-example');
    const buttonGroups = document.querySelectorAll("#preview .sage-btn-group");

    buttonGroupWrapExample.addEventListener('click', function(e) {
      buttonGroups.forEach((group) => {
        group.classList.toggle("sage-btn-group--wrap");
      });
    });
  }


  return {
    init: init
  };

})();
