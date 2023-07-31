import { generateId } from './utils/index';

Sage.accordion = (function () {
  // ==================================================
  // Variables
  // ==================================================

  const JS_ACCORDION_ROOT = 'data-js-accordion';
  const JS_ACCORDION_BODY = 'body';
  const JS_ACCORDION_ID_BODY_PREFIX = 'accordion-body';
  const JS_ACCORDION_ID_HEADER_PREFIX = 'accordion-header';

  const SELECTOR_ACCORDION = '.sage-accordion';
  const SELECTOR_ACCORDION_EXPANDABLE_CARD = '.sage-expandable-card';
  const SELECTOR_ACCORDION_HEADER = '[data-js-accordion="header"]';
  const CLASS_ACCORDION_ONE_PANEL_EXPANDED = 'sage-accordion--one-panel-expanded';
  const ATTRIBUTE_ARIA_SELECTED = 'aria-selected';

  const relevantKeys = {
    enter: 13,
    space: 32,
  };


  // ==================================================
  // Functions
  // ==================================================

  function handleAccordionClick(ev) {

    const el = ev.currentTarget;

    // Ensure relevant events before proceding
    const isClick = ev.type === 'click';
    const isRelevantKeypress = ev.type === 'keypress' && Object.values(relevantKeys).indexOf(ev.which) >= 0;
    if (!isClick && !isRelevantKeypress) {
      return false;
    }

    // if accordion has prop for only one open at a times, reset
    const accordion = el.closest(SELECTOR_ACCORDION);
    if (accordion != null) {
      if (accordion.classList.contains(CLASS_ACCORDION_ONE_PANEL_EXPANDED)) {
        resetAccordion(el);
      }
    }

    // Toggle target
    const toggle = el.getAttribute('aria-expanded') === 'true';
    el.setAttribute('aria-expanded', !toggle);
    el.closest('.sage-expandable-card').classList.toggle('sage-expandable-card--expanded')
  }

  // In a single panel accordion, this closes all panels that are not the current target
  function resetAccordion(el){
    let accordion = el.closest(SELECTOR_ACCORDION);
    let accordionItems = accordion.querySelectorAll(SELECTOR_ACCORDION_EXPANDABLE_CARD);

    accordionItems.forEach((item) => {
      if (item !== el.parentElement) {
        item.querySelector(SELECTOR_ACCORDION_HEADER).setAttribute('aria-expanded', false);
        item.classList.remove('sage-expandable-card--expanded');
      }
    });
  }

  function init(el) {
    const header = el;
    const body = el.closest('.sage-expandable-card').querySelector(`[${JS_ACCORDION_ROOT}="${JS_ACCORDION_BODY}"]`);

    // Ensure there's a corresponding body
    if (!body) {
      return false;
    }

    // Ensure header has an id for a11y
    let headerId = header.getAttribute('id');
    if (!headerId) {
      headerId = generateId(JS_ACCORDION_ID_HEADER_PREFIX);
      header.setAttribute('id', headerId);
    }

    // Ensure body has an id for a11y
    let bodyId = body.getAttribute('id');
    if (!bodyId) {
      bodyId = generateId(JS_ACCORDION_ID_BODY_PREFIX);
      body.setAttribute('id', bodyId);
    }

    // Add a11y attributes
    header.setAttribute('aria-controls', bodyId);
    header.setAttribute('role', 'button');
    header.setAttribute('tabindex', 0);

    // Add listeners
    header.addEventListener('click', handleAccordionClick);
    header.addEventListener('keydown', handleAccordionClick);
  }

  function unbind(el) {
    el.removeEventListener('click', handleAccordionClick);
    el.removeEventListener('keydown', handleAccordionClick);
  }

  return {
    init,
    unbind,
  };
})();
