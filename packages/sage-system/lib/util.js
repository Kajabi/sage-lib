Sage.util = (function(Sage) {

  // retrieve button target from aria-controls or data attribute
  function getBtnTarget(e) {
    return e.target.getAttribute('aria-controls') ? e.target.getAttribute('aria-controls') : e.target.getAttribute('data-js-menu');
  }

  // convert nodelist to array for iteration
  function nodelistToArray(selection) {
    return Array.prototype.slice.apply(selection);
  }

  function isEmptyString(str) {
    return (!str || 0 === str.length);
  }

  function isIE() {
    return document.documentMode ? true : false;
  }

  function ajaxRequestWithJsInjection(method, urlTarget, urlParams) {
    const xhr = new XMLHttpRequest();
    xhr.open(method, urlTarget);
    xhr.setRequestHeader('Accept', 'text/javascript, application/javascript');
    xhr.setRequestHeader('X-CSRF-Token', document.querySelector('meta[name="csrf-token"]').content);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');

    xhr.addEventListener('load', (evt) => {
      const elScript = document.createElement('script');
      elScript.setAttribute('type', 'text/javascript');
      elScript.innerHTML = evt.currentTarget.response;
      document.body.appendChild(elScript);
    }, { once: true });

    xhr.send(urlParams);
  };

  function generateId() {
    return Math.floor(Math.random() * 10000);
  }

  function stringToHtmlFragment(string) {
    return document.createRange().createContextualFragment(string);
  }

  return {
    getBtnTarget: getBtnTarget,
    nodelistToArray: nodelistToArray,
    isEmptyString: isEmptyString,
    isIE: isIE,
    ajaxRequestWithJsInjection: ajaxRequestWithJsInjection,
    generateId: generateId,
    stringToHtmlFragment: stringToHtmlFragment,
  };

})(Sage);
