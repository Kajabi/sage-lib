import {
  objectToHtmlAttributes,
} from '../util';

import {
  DATA_ATTR,
  DATA_ATTR_CLOSE_BUTTON,
} from './toast.config.js';

export const template = ({id, type, icon, text, link}) => (`
  <dialog
    class="sage-toast sage-toast--style-${type}"
    ${DATA_ATTR}="${id}"
  >
    <i class="sage-toast__icon sage-icon-${icon}"></i>
    <output
      class="sage-toast__value"
      aria-live="assertive"
      aria-atomic="true"
    >
      ${text}
    </output>
      ${linkTemplate(link)}
    <button
      class="sage-toast__button sage-toast__button--close"
      type="button"
      ${DATA_ATTR_CLOSE_BUTTON}
    >
      <span class="visually-hidden">Close</span>
    </button>
  </dialog>
`);

const linkTemplate = (link) => {
  if (!link) return '';
  const {text, ...linkAttributes} = link;

  return(`
    <a
      ${objectToHtmlAttributes(linkAttributes)}
      class="sage-toast__button sage-toast__button--underline"
    >
      ${text}
    </a>
  `);
};
