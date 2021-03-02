export function generateId() {
  return Math.floor(Math.random() * 10000);
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
