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
    ${type === "loading" ? loadingTemplate() : iconTemplate(icon)}
    <output
      class="sage-toast__value"
      aria-busy="true"
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

const loadingTemplate = () => (
  `<svg class="sage-loader__spinner sage-loader__spinner--loading-button" viewBox="25 25 50 50" aria-hidden="true">
    <circle class="sage-loader__spinner-path sage-loader__spinner-path--loading-button" cx="50" cy="50" r="20" fill="none" stroke="0072EF" stroke-width="4"></circle>
  </svg>`
);

const iconTemplate = (icon) => (
  `<i class="sage-toast__icon sage-icon-${icon}"></i>`
);
