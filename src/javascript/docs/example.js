Sage.docs.example = (function() {

  var expandedText = "Collapse this code snippet";
  var collapsedText = "Expand this code snippet";


  // ==================================================
  // Functions
  // ==================================================


  // Note: assumes we won't have multiple code snippets per page
  function showHideCodeSample() {
    var codeBtn = document.querySelector('.example__expand-btn'),
      codeSnippet = codeBtn.closest('.sage-code-snippet');

    codeBtn.addEventListener('click', function(e) {
      updateButtonState(e.target, this);
      e.target.parentElement.classList.toggle('example__code--expanded');
      e.target.nextElementSibling.focus();
    });
  }


  // toggle code example button state
  function updateButtonState(evt) {
    if (evt.getAttribute('aria-expanded') === 'false') {
      evt.setAttribute('aria-expanded', 'true');
      evt.innerText = expandedText;
    } else {
      evt.setAttribute('aria-expanded', 'false');
      evt.innerText = collapsedText;
    }
  }


  function init() {
    showHideCodeSample();
  }


  return {
    init: init
  };

})();
