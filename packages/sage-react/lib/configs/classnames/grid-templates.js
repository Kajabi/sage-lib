import { SageTokens } from '../tokens';

// Generates grid template classnames from grid template tokens such as:
// CLASSNAMES_GRID_TEMPLATES.ETE ---> `sage-grid-template-ete`
export const CLASSNAMES_GRID_TEMPLATES = {};
Object.keys(SageTokens.GRID_TEMPLATES).forEach((gridTemplateToken) => {
  CLASSNAMES_GRID_TEMPLATES[gridTemplateToken] = `sage-grid-template-${SageTokens.GRID_TEMPLATES[gridTemplateToken]}`;
});

export const lookupGridTemplateClassname = (gridTemplate) => {
  let matchingClassname = null;
  Object.keys(SageTokens.GRID_TEMPLATES).forEach((gridTemplateToken) => {
    if (SageTokens.GRID_TEMPLATES[gridTemplateToken] === gridTemplate) {
      matchingClassname = CLASSNAMES_GRID_TEMPLATES[gridTemplateToken];
    }
  });

  return matchingClassname;
};
