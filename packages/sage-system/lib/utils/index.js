export function generateId(prefix) {
  const hash = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  return `${prefix}-${hash}`;
};

export function stringToHtmlFragment(string) {
  return document.createRange().createContextualFragment(string);
};

export function objectToHtmlAttributes(object) {
  return Object.entries(object).map(attribute => {
    const [key, value] = attribute;
    return `${key}="${value}"`;
  }).join(' ');
};

export const isNextTheme = () => {
  return window.SAGE_THEME === 'sage_theme_next';
};

export const debounce = (func) => {
  var timer;
  return (event) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(func, 100, event);
  };
};
