// NOTE: Uses SortableJS
// https://github.com/SortableJS/Sortable
import Sortable from 'sortablejs/modular/sortable.core.esm.js';

Sage.sortableList = (function() {
  // ==================================================
  // Variables
  // ==================================================

  const DRAGGING_CLASSNAME = 'sage-list--sortable-dragging';
  const SELECTOR_CONTAINER = 'data-js-list-sortable';
  const SELECTOR_DRAGGABLE_BY_ROW = 'sage-list--draggable-by-row';
  const SELECTOR_ITEM_UPDATE_URL = 'data-js-list-sortable-update-url';


  // ==================================================
  // Functions
  // ==================================================

  const init = (el) => {
    let resourceName = el.getAttribute(SELECTOR_CONTAINER);
    if (!resourceName) return console.error(`Sage Sortable requires a resource name \n\n EXAMPLE: \n [${SELECTOR_CONTAINER}="resourceName"]`);

    Sortable.create(el, {
      chosenClass: 'sage-list__item--sortable-active',
      dragClass: 'sage-list__item--sortable-drag',
      forceFallback: true, // NOTE: This is added because Safari 13+ has a draggable api bug https://github.com/SortableJS/Sortable/issues/1571
      ghostClass: 'sage-list__item--sortable-ghost',
      handle: el.classList.contains(SELECTOR_DRAGGABLE_BY_ROW) ? false : '.sage-list__item-sortable-handle',
      onStart: function(evt) {
        evt.srcElement.classList.add(DRAGGING_CLASSNAME);
      },
      onEnd: function (evt) {
        evt.srcElement.classList.remove(DRAGGING_CLASSNAME);

        let updateUrl = evt.item.getAttribute(SELECTOR_ITEM_UPDATE_URL)

        // Check if the sorted Item:
        // - Has a [data-js-sortable-update-url="url-here"] attr
        // - Didn't have the same index as its new index
        if (!updateUrl || evt.oldIndex == evt.newIndex) return;

        var params = new URLSearchParams();
        params.append('_method', 'PUT');
        params.append(`${resourceName}[sort_position]`, evt.newIndex);

        Sage.util.ajaxRequestWithJsInjection('POST', updateUrl, params);
      },
    });
  };

  const unbind = (el) => {
    let sortableInstance = Sortable.get(el);
    sortableInstance.destroy();
  };

  return {
    init,
    unbind,
  };
})();
