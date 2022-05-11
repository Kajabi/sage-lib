export const SAGE_BREAKPOINT_VALUES = {
  XS_MAX: '544px',
  SM_MIN: '545px',
  SM_MAX: '767px',
  MD_MIN: '768px',
  MD_MAX: '991px',
  LG_MIN: '992px',
  LG_MAX: '1199px',
  XL_MIN: '1200px',
  XL_MAX: '1439px',
  XXL_MIN: '1440px',
};

export const SAGE_BREAKPOINT_QUERIES = {
  xs: `(max-width: ${SAGE_BREAKPOINT_VALUES.XS_MAX})`,
  sm: `(max-width: ${SAGE_BREAKPOINT_VALUES.SM_MAX})`,
  md: `(max-width: ${SAGE_BREAKPOINT_VALUES.MD_MAX})`,
  lg: `(max-width: ${SAGE_BREAKPOINT_VALUES.LG_MAX})`,
  xl: `(max-width: ${SAGE_BREAKPOINT_VALUES.XL_MAX})`,
};
