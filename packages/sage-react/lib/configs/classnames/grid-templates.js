import { SageDictionary } from '../dictionary';

// CLASSNAMES_GRID_TEMPLATES.ETE --> `sage-grid-template-ete`
export const CLASSNAMES_GRID_TEMPLATES = {};
Object.keys(SageDictionary.CONTENT_GRID_TEMPLATE).forEach((template) => {
  CLASSNAMES_GRID_TEMPLATES[template] = SageDictionary.CONTENT_GRID_TEMPLATE[template].CLASSNAME;
});

export const lookupGridTemplateClassname = (gridTemplate) => {
  let matchingClassname = null;
  Object.keys(SageDictionary.CONTENT_GRID_TEMPLATE).forEach((gridTemplateToken) => {
    if (SageDictionary.CONTENT_GRID_TEMPLATE[gridTemplateToken].SYMBOL === gridTemplate) {
      matchingClassname = CLASSNAMES_GRID_TEMPLATES[gridTemplateToken];
    }
  });

  return matchingClassname;
};
