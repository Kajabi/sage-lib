import { generateId } from './utils/index';

Sage.accordion = (function () {
  // ==================================================
  // Variables
  // ==================================================

  const JS_ACCORDION_ROOT = 'data-js-accordion';
  const JS_ACCORDION_BODY = 'body';
  const JS_ACCORDION_ID_BODY_PREFIX = 'accordion-body';
  const JS_ACCORDION_ID_HEADER_PREFIX = 'accordion-header';

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

    // Toggle target
    const toggle = el.getAttribute('aria-expanded') === 'true';
    el.setAttribute('aria-expanded', !toggle);
    el.parentNode.classList.toggle('sage-expandable-card--expanded');
  }

  function init(el) {
    const header = el;
    const body = el.parentNode.querySelector(`[${JS_ACCORDION_ROOT}="${JS_ACCORDION_BODY}"]`);

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
