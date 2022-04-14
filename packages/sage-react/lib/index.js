import * as SageLegacy from './themes/legacy';
import * as SageNext from './themes/next';

export const Sage = window.SAGE_THEME === 'sage_theme_next'
  ? { ...SageNext }
  : { ...SageLegacy };
