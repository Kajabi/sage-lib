Sage.docs.inputhelper = (function() {

  // ==================================================
  // Functions
  // ==================================================

  function init() {
    var helperFieldset = document.querySelector('[data-js-example="input-helper"]');
    var helperExample = helperFieldset.querySelector('.sage-input-helper');

    helperExample.classList.add('sage-input-helper--visible');
    helperExample.style.position = 'relative';
  }


  return {
    init: init
  };

})();
