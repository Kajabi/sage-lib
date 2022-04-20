import parse from 'html-react-parser';

/**
 *
 * @param {string} targetString      the string value to display
 * @param {string} searchString      the substrings to highlight with `targetString`
 */

export const renderSubstringHighlight = (targetString, searchString) => parse(targetString.replace(
  new RegExp(searchString, 'gi'),
  (match) => `<mark>${match}</mark>`
));
