import {
  objectToHtmlAttributes,
} from '../utils/index';

import {
  ID_TOAST_CONTAINER,
  DATA_ATTR,
  DATA_ATTR_CLOSE_BUTTON,
} from './toast.config.js';

export const toastTemplate = ({id, type, icon, text, link}) => (`
  <dialog
    class="sage-toast sage-toast--style-${type}"
    id="${id}"
    ${DATA_ATTR}
  > 
    <div class="sage-loader sage-loader--spinner" aria-hidden="true"> 
      <svg class="sage-loader__spinner" viewBox="25 25 50 50">
        <circle class="sage-loader__spinner-path" cx="50" cy="50" r="20" fill="none" stroke="0072EF" stroke-width="4"></circle>
      </svg>
    </div>
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

export const containerTemplate = ({content}) => (`
  <div
    id="${ID_TOAST_CONTAINER}"
    class="sage-toast-container"
  >
    ${content}
  </div>
`);

const linkTemplate = (link) => {
  if (!link || !link.text) return '';
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
