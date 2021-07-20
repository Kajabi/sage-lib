import * as arrive from 'arrive/src/arrive.js';

Sage.init = function(elementNamesToInitLegacy) {

  // ==================================================
  // Initers
  // ==================================================

  const initDocumentPresenceListener = function(elParentSelector, initFunc, unbindFunc) {
    // Arrive.js: https://github.com/uzairfarooq/arrive
    const ARRIVE_SETTINGS = {
      fireOnAttributesModification: false,
      existing: true,
      onceOnly: false
    }

    document.arrive(elParentSelector, ARRIVE_SETTINGS, function() {
      initFunc(this);
    });

    if (unbindFunc) {
      document.leave(elParentSelector, ARRIVE_SETTINGS, function(el) {
        // Confirm the element has been removed before unbinding, DOM re-ordering of a parent can trigger a 'leave' event.
        if (!document.body.contains(el)) unbindFunc(this);
      });
    }
  }

  const initDocumentEventListener = function(eventName, handlerFunc) {
    document.addEventListener(eventName, handlerFunc);
  }

  // ==================================================
  // Presence Initialization
  // ==================================================

  initDocumentPresenceListener('[data-js-modal]',                                Sage.modal.init,         false);
  initDocumentPresenceListener('[data-js-modaltrigger]',                         Sage.modal.initTrigger,  false);
  initDocumentPresenceListener('[data-js-tooltip]',                              Sage.tooltip.init,       Sage.tooltip.unbind);
  initDocumentPresenceListener('[data-js-dropdown]',                             Sage.dropdown.init,      Sage.dropdown.unbind);
  initDocumentPresenceListener('[data-js-sortable]',                             Sage.sortable.init,      Sage.sortable.unbind);
  initDocumentPresenceListener('[data-js-tabs]',                                 Sage.tabs.init,          Sage.tabs.unbind);
  initDocumentPresenceListener('[data-js-copy-button]',                          Sage.copyButton.init,    Sage.copyButton.unbind);
  initDocumentPresenceListener('[data-js-accordion="header"]',                   Sage.accordion.init,     Sage.accordion.unbind);
  initDocumentPresenceListener('[data-js-hero]',                                 Sage.hero.init,          Sage.hero.unbind);
  initDocumentPresenceListener('[data-js-search]',                               Sage.search.init,        Sage.search.unbind);
  initDocumentPresenceListener('[data-js-select]',                               Sage.select.init,        Sage.select.unbind);
  initDocumentPresenceListener('[data-js-panel-controls]',                       Sage.panelControls.init, Sage.panelControls.unbind);
  initDocumentPresenceListener('[data-js-sage-disable-on-submit]',               Sage.buttonDisable.init, Sage.buttonDisable.unbind);
  initDocumentPresenceListener('[data-js-popover]',                              Sage.popover.init,       Sage.popover.unbind);
  initDocumentPresenceListener('[data-js-banner], [data-js-toggle-banner]',      Sage.banner.init,        Sage.banner.unbind);
  initDocumentPresenceListener('[data-js-input-suffix], [data-js-input-prefix]', Sage.inputaffixes.init,  Sage.inputaffixes.unbind);

  // ==================================================
  // Event Listeners
  // ==================================================

  // Event Detail Format: not supported
  initDocumentEventListener('sage.modal.closeAll', Sage.modal.eventHandlerCloseAll);

  // Event Detail Format: { tabsId: "", paneId: "" }
  initDocumentEventListener('sage.tabs.initial',         Sage.tabs.eventHandlerChange);
  initDocumentEventListener('sage.tabs.change',          Sage.tabs.eventHandlerChange);
  initDocumentEventListener('sage.panelControls.change', Sage.panelControls.eventHandleChange);

  // ==================================================
  // LEGACY
  // ==================================================

  let shouldInitLegacy = function(elementName, selector) {
    return elementNamesToInitLegacy.includes(elementName) && document.querySelector(selector) !== null;
  };

  let inDocumentationContext = function() {
    return !!document.querySelector('.sage-docs');
  }

  // Initialize Table
  if ( shouldInitLegacy('table', '.sage-table') ) {
    Sage.table.init();
  }

  // Initialize Sidebar
  if ( shouldInitLegacy('sidebar', '.sage-sidebar') ) {
    Sage.sidebar.init();
  }

  // Initialize Overlay
  if ( shouldInitLegacy('overlay', '.sage-overlay') ) {
    Sage.overlay.init();
  }

  // Initialize Alert
  if ( shouldInitLegacy('alert', '.sage-alert') ) {
    Sage.alert.init();
  }

  // Initialize Input groups
  if ( shouldInitLegacy('inputgroup', '.sage-input-group') ) {
    Sage.inputgroup.init();
  }

  // Initialize Input groups
  if ( shouldInitLegacy('inputhelper', '.sage-input-helper') ) {
    Sage.inputhelper.init();
  }

  // Initialize Meter
  if ( shouldInitLegacy('meter', '.sage-meter') ) {
    Sage.meter.init();
  }
}
