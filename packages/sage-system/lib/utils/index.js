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
