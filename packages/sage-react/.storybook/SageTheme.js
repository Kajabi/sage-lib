import { create } from '@storybook/theming';

export default create({
  base: 'light',

  colorPrimary: 'white',
  colorSecondary: '#040506',

  // UI
  appBg: '#f9fafa',
  appContentBg: 'white',
  appBorderColor: '#eceeef',
  appBorderRadius: 6,

  // Text colors
  textColor: 'black',
  textInverseColor: 'rgba(255,255,255,0.9)',

  // Toolbar default and active colors
  barTextColor: 'black',
  barSelectedColor: 'black',
  barBg: 'white',

  // Form colors
  inputBg: 'white',
  inputBorder: '#4B9611',
  inputTextColor: 'black',
  inputBorderRadius: 6,

  brandTitle: 'Sage Design System',
  brandUrl: 'https://sage.kajabi.com/pages/index',
  brandImage: 'sage-logo.png',
  brandTarget: '_self',
});
