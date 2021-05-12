export const TOKENS_COLORS = {
  PRIMARY: 'primary',
  GREY: 'grey',
  CHARCOAL: 'charcoal',
  PURPLE: 'purple',
  SAGE: 'sage',
  YELLOW: 'yellow',
  ORANGE: 'orange',
  RED: 'red',
  WHITE: 'white',
  BLACK: 'black',
  INHERIT: 'inherit',
};

export const TOKENS_COLOR_PALETTE = {
  PRIMARY_100: '#e6f4fe',
  PRIMARY_200: '#8ecafb',
  PRIMARY_300: '#0072ef',
  PRIMARY_400: '#054fb8',
  PRIMARY_500: '#07265f',
  SAGE_100: '#d0f6ea',
  SAGE_200: '#86d5bc',
  SAGE_300: '#23856d',
  SAGE_400: '#225d53',
  SAGE_500: '#183e3b',
  YELLOW_100: '#fcf8e8',
  YELLOW_200: '#fdf0b9',
  YELLOW_300: '#f0c024',
  YELLOW_400: '#8d5c2f',
  YELLOW_500: '#5c381e',
  RED_100: '#fff7f7',
  RED_200: '#f9c0b9',
  RED_300: '#cf3c32',
  RED_400: '#99221e',
  RED_500: '#5e0d0d',
  ORANGE_100: '#fbefe4',
  ORANGE_200: '#f7bd8b',
  ORANGE_300: '#f89035',
  ORANGE_400: '#a2411a',
  ORANGE_500: '#5a260c',
  PURPLE_100: '#f5effa',
  PURPLE_200: '#d9c2ef',
  PURPLE_300: '#8e5ad8',
  PURPLE_400: '#50348a',
  PURPLE_500: '#381c5e',
  GREY_100: '#f8fafb',
  GREY_200: '#f4f8fa',
  GREY_300: '#e0e7f1',
  GREY_400: '#bbcad8',
  GREY_500: '#94a6b8',
  CHARCOAL_100: '#65778b',
  CHARCOAL_200: '#526275',
  CHARCOAL_300: '#465462',
  CHARCOAL_400: '#304050',
  CHARCOAL_500: '#263240',
  WHITE: '#fff',
  BLACK: '#000',
};

// Generates colors sliders from color tokens values such as:
// SAGE_COLORS_SLIDER.GREY_400 ---> `grey-400`
export const TOKENS_COLOR_SLIDERS = {};
Object.keys(TOKENS_COLORS).forEach((colorToken) => {
  if (colorToken === 'INHERIT') {
    TOKENS_COLOR_SLIDERS[`${colorToken}`] = TOKENS_COLORS[colorToken];
    return;
  }

  TOKENS_COLOR_SLIDERS[`${colorToken}`] = `${TOKENS_COLORS[colorToken]}-300`;

  for (let i = 1; i <= 5; i += 1) {
    TOKENS_COLOR_SLIDERS[`${colorToken}_${i}00`] = `${TOKENS_COLORS[colorToken]}-${i}00`;
  }
});
