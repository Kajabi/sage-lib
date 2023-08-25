window.STORYBOOK_GA_ID = "UA-238598709-4"
window.STORYBOOK_REACT_GA_OPTIONS = {}

import { addons } from '@storybook/addons';
import SageTheme from './SageTheme';

addons.setConfig({
  theme: SageTheme
});
