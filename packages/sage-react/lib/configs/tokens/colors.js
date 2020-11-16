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
