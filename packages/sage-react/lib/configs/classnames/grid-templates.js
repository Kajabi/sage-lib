import TOKENS from '../tokens';

// Generates grid template classnames from grid template tokens such as:
// CLASSNAMES_GRID_TEMPLATES.ETE ---> `sage-grid-template-ete`
export const CLASSNAMES_GRID_TEMPLATES = {};
Object.keys(TOKENS.GRID_TEMPLATES).forEach((gridTemplateToken) => {
  CLASSNAMES_GRID_TEMPLATES[gridTemplateToken] = `sage-grid-template-${TOKENS.GRID_TEMPLATES[gridTemplateToken]}`;
});

export const lookupGridTemplateClassname = (gridTemplate) => {
  let matchingClassname = null;
  Object.keys(TOKENS.GRID_TEMPLATES).forEach((gridTemplateToken) => {
    if (TOKENS.GRID_TEMPLATES[gridTemplateToken] === gridTemplate) {
      matchingClassname = CLASSNAMES_GRID_TEMPLATES[gridTemplateToken];
    }
  });

  return matchingClassname;
};
