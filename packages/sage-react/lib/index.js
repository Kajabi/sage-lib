import * as SageLegacy from './themes/legacy';
import * as SageNext from './themes/next';

// export const Sage = { ...SageLegacy };
export const Sage = window.SAGE_THEME === 'sage-theme-next'
  ? { ...SageNext }
  : { ...SageLegacy };
