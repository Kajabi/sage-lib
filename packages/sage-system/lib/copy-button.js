Sage.copyButton = (function() {

  // ==================================================
  // Variables
  // ==================================================

  function handleClick(ev) {
    const strToCopy = ev.currentTarget.dataset.jsCopyButton;


    if (navigator.clipboard) {
      navigator.permissions.query({name: 'clipboard-write'}).then(result => {
        if (result.state == 'granted' || result.state == 'prompt') {
          navigator.clipboard.writeText(strToCopy)
            .then(() => {
              Sage.toast.trigger({text:'Copied to clipboard'})
            })
            .catch(err => {
              Sage.toast.trigger({text:'Does not have access to clipboard'})
            });
        } else {
          // Permission not granted, ask the user to grant it
          navigator.permissions.request({name: 'clipboard-write'}).then(result => {
            if (result.state == 'granted') {
              navigator.clipboard.writeText(strToCopy)
                .then(() => {
                  Sage.toast.trigger({text:'Copied to clipboard'})
                })
                .catch(err => {
                  const errMsg = 'Error writing text to clipboard: ' + err;
                  Sage.toast.trigger({text: errMsg})
                });
              } else {
                Sage.toast.trigger({text: 'Permission to write to clipboard denied'});
              }
            }).catch(err => {
              const errMsg = 'Error requesting permission to write to clipboard: ' + err;
              Sage.toast.trigger({text: errMsg})
            });
          }
        }).catch(err => {
          const errMsg = 'Error querying permission to write to clipboard: ' + err;
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
