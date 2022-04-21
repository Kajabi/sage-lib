import { isNextTheme } from "../utils";

export const ID_TOAST_CONTAINER = 'SageToastContainer';
export const DATA_ATTR = 'data-js-toast';
export const DATA_ATTR_CLOSE_BUTTON = 'data-js-toast-close';
export const CLASS_DISMISSED_STATE = 'sage-toast--dismissed';
export const EVENT_OPEN = "sage.toast.open";
export const EVENT_CLOSE = "sage.toast.close";
export const EVENT_DISMISS = "sage.toast.dismiss";

export const DEFAULT_CONFIG = {
  icon: isNextTheme() ? 'check-circle-filled' : 'check',
  type: 'notice',
  timer: 4500,
};
