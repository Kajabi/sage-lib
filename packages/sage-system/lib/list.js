// NOTE: Uses SortableJS
// https://github.com/SortableJS/Sortable
import Sortable from 'sortablejs/modular/sortable.core.esm.js';

Sage.sortableList = (function() {
  // ==================================================
  // Variables
  // ==================================================

  const DRAGGING_CLASSNAME = 'sage-list--sortable-dragging';
  const HANDLE_CLASSNAME = 'sage-list__item-sortable-handle';
  const SELECTOR_CONFIGS = 'data-js-list-sortable-configs';
  const SELECTOR_CONTAINER = 'data-js-list-sortable';
  const SELECTOR_ITEM_UPDATE_URL = 'data-js-list-sortable-update-url';
  const DEFAULT_CONFIGS = {
    dragClass: 'sage-list__item--sortable-drag',
    ghostClass: 'sage-list__item--sortable-ghost',
    chosenClass: 'sage-list__item--sortable-active',
    handle: `.${HANDLE_CLASSNAME}`,
  };


  // ==================================================
  // Functions
  // ==================================================

  function init(el) {
    let resourceName = el.getAttribute(SELECTOR_CONTAINER);
    if (!resourceName) return console.error(`Sage Sortable requires a resource name \n\n EXAMPLE: \n [${SELECTOR_CONTAINER}="resourceName"]`);

    let sortableConfigs = JSON.parse(el.getAttribute(SELECTOR_CONFIGS));
    if (sortableConfigs) {
      sortableConfigs = {
        ...DEFAULT_CONFIGS,
        ...sortableConfigs,
      };
    } else {
      sortableConfigs = { ...DEFAULT_CONFIGS };
    }

    console.log('final configs', resourceName, sortableConfigs);

    Sortable.create(el, {
      ...sortableConfigs,
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
