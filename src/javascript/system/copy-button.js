Sage.copyButton = (function() {

  // ==================================================
  // Variables
  // ==================================================

  function handleClick(ev) {
    const str = ev.currentTarget.dataset.jsCopyButton;
    const el = document.createElement('textarea');
    el.value = str;
    el.setAttribute('readonly', '');
    el.setAttribute('class', 'visually-hidden');
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
  };


  // ==================================================
  // Functions
  // ==================================================

  function init(el) {
    el.addEventListener('click', handleClick);
  }

  function unbind(el) {
    el.removeEventListener('click', handleClick);
  }


  return {
    init,
    unbind,
  };

})();
