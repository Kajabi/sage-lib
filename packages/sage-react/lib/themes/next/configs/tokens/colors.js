import { SageDictionary } from '../dictionary';

// TOKENS_COLORS.GREY --> `'grey'`
export const TOKENS_COLORS = {
  INHERIT: 'inherit',
};
Object.keys(SageDictionary.COLOR_CORE).forEach((colorName) => {
  TOKENS_COLORS[colorName] = colorName.toLowerCase();
});

// TOKENS_COLOR_PALETTE.GREY_500 --> `#b5bac0`
export const TOKENS_COLOR_PALETTE = {};
Object.keys(SageDictionary.COLOR).forEach((colorName) => {
  Object.keys(SageDictionary.COLOR[colorName]).forEach((index) => {
    switch (colorName) {
      case 'WHITE':
      case 'BLACK':
        TOKENS_COLOR_PALETTE[`${colorName}`] = SageDictionary.COLOR[colorName][index].HEX;
        break;
      default:
        TOKENS_COLOR_PALETTE[`${colorName}_${index}`] = SageDictionary.COLOR[colorName][index].HEX;
        break;
    }
  });
});

// TOKENS_COLOR_SLIDERS.GREY_500 --> `'grey-500'`
export const TOKENS_COLOR_SLIDERS = {
  INHERIT: 'inherit',
};
Object.keys(SageDictionary.COLOR).forEach((colorName) => {
  Object.keys(SageDictionary.COLOR[colorName]).forEach((index) => {
    if (index === '500') {
      TOKENS_COLOR_SLIDERS[`${colorName}`] = SageDictionary.COLOR[colorName][index].CODE;
    }
    TOKENS_COLOR_SLIDERS[`${colorName}_${index}`] = SageDictionary.COLOR[colorName][index].CODE;
  });
});
