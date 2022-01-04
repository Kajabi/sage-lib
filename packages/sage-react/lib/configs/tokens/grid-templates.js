import { SageDictionary } from '../dictionary';

export const TOKENS_GRID_TEMPLATES = {};
Object.keys(SageDictionary.CONTENT_GRID_TEMPLATE).forEach((template) => {
  TOKENS_GRID_TEMPLATES[template] = SageDictionary.CONTENT_GRID_TEMPLATE.SYMBOL;
});
