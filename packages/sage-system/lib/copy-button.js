Sage.copyButton = (function() {

  // ==================================================
  // Variables
  // ==================================================

  function handleClick(ev) {
    const strToCopy = ev.currentTarget.dataset.jsCopyButton;


    if (navigator.clipboard) {
      navigator.clipboard.writeText(strToCopy)
        .then(() => {
          Sage.toast.trigger({text:'Copied to clipboard'})
        })
        .catch(err => {
          const errMsg = 'Error writing text to clipboard: ' + err;
          Sage.toast.trigger({text: errMsg})
        });
    } else {
      // Fallback for Safari
      const el = document.createElement('textarea');
      el.value = strToCopy;
      el.setAttribute('readonly', '');
      el.setAttribute('class', 'visually-hidden');
      document.body.appendChild(el);
      el.select();

      document.execCommand("copy");
      document.body.removeChild(el);
      Sage.toast.trigger({text:'Copied to clipboard'})
    }

    ev.currentTarget.focus();
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
