import Sortable from 'sortablejs/modular/sortable.core.esm.js';

Sage.sortable = (function() {
  // ==================================================
  // Variables
  // ==================================================

  const SELECTOR_CONTAINER = 'data-js-sortable';
  const SELECTOR_ITEM_UPDATE_URL = 'data-js-sortable-update-url';
  const SETTINGS = {
    ghostClass: 'sage-sortable__item--ghost',
    chosenClass: 'sage-sortable__item--active'
  };


  // ==================================================
  // Functions
  // ==================================================

  function init(el) {
    let resourceName = el.getAttribute(SELECTOR_CONTAINER);
    if (!resourceName) return console.error(`Sage Sortable requires a resource name \n\n EXAMPLE: \n [${SELECTOR_CONTAINER}="resourceName}"]`);

    Sortable.create(el, {
      ...SETTINGS,
      onEnd: function (evt) {
        let updateUrl = evt.item.getAttribute(SELECTOR_ITEM_UPDATE_URL)

        // Check if the sorted Item:
        // - Has a [data-js-sortable-update-url="url-here"] attr
        // - Didn't have the same index as its new index
        if (!updateUrl || evt.oldIndex == evt.newIndex) return;

        var params = new URLSearchParams();
        params.append('_method', 'PUT');
        params.append(`${resourceName}[sort_position]`, evt.newIndex);

        Sage.util.ajaxRequestWithJsInjection('POST', updateUrl, params)
      }
    });
  }

  function unbind(el) {
    let sortableInstance = Sortable.get(el);
    sortableInstance.destroy();
  }

  return {
    init: init,
    unbind: unbind
  }

})();
