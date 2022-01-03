import { SageDictionary } from '../../dictionary';

// CLASSNAMES_GRID_TEMPLATES.ETE --> `sage-grid-template-ete`
export const CLASSNAMES_GRID_TEMPLATES = {};
Object.keys(SageDictionary.CONTENT_GRID_TEMPLATE).forEach((template) => {
  CLASSNAMES_GRID_TEMPLATES[template] = SageDictionary.CONTENT_GRID_TEMPLATE.CLASSNAME;
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
