import { SageTokens } from '../configs';

// Keep in sync with `packages/sage-assets/lib/stylesheets/components/_frame.scss`
export const FRAME_ALIGNMENTS = {
  TOP_LEFT: 'top-left',
  TOP_CENTER: 'top-center',
  TOP_RIGHT: 'top-right',
  CENTER_LEFT: 'center-left',
  CENTER_CENTER: 'center',
  CENTER_RIGHT: 'center-right',
  BASELINE_LEFT: 'baseline-left',
  BASELINE_CENTER: 'baseline-center',
  BASELINE_RIGHT: 'baseline-right',
  BOTTOM_LEFT: 'bottom-left',
  BOTTOM_CENTER: 'bottom-center',
  BOTTOM_RIGHT: 'bottom-right',
  START_SPREAD: 'start-spread',
  CENTER_SPREAD: 'center-spread',
  END_SPREAD: 'end-spread',
  STRETCH_LEFT: 'stretch-left',
  STRETCH_CENTER: 'stretch-center',
  STRETCH_RIGHT: 'stretch-right',
  STRETCH_SPREAD: 'stretch-spread',
  SPREAD_STRETCH: 'spread-stretch',
};

// Keep in sync with `packages/sage-assets/lib/stylesheets/components/_frame.scss`
export const FRAME_BORDERS = {
  NONE: 'none',
  DEFAULT: 'default',
};

// Keep in sync with `packages/sage-assets/lib/stylesheets/components/_frame.scss`
export const FRAME_BOX_SHADOWS = {
  NONE: 'none',
  SM: 'sm',
  MD: 'md',
  LG: 'lg',
  MODAL: 'modal',
  '050': '050',
  100: '100',
  200: '200',
  300: '300',
  400: '400',
  500: '500',
};

// Keep in sync with `packages/sage-assets/lib/stylesheets/components/_frame.scss`
export const FRAME_BORDER_RADII = {
  NONE: 'none',
  SM: 'sm',
  MD: 'md',
  LG: 'lg',
};

// Keep in sync with `packages/sage-assets/lib/stylesheets/components/_frame.scss`
export const FRAME_DIRECTIONS = {
  VERTICAL: 'vertical',
  HORIZONTAL: 'horizontal',
};

// Keep in sync with `packages/sage-assets/lib/stylesheets/components/_frame.scss`
export const FRAME_SPACINGS = Object.assign(SageTokens.SPACERS, {
  NONE: 'none',
});

// Keep in sync with `packages/sage-assets/lib/stylesheets/components/_frame.scss`
export const FRAME_WIDTHS = {
  HUG: 'hug',
  FILL: 'fill',
  FLEX: 'flex',
  INITIAL: 'initial',
};

// Keep in sync with `packages/sage-assets/lib/stylesheets/components/_frame.scss`
export const FRAME_WRAPS = {
  NONE: 'nowrap',
  WRAP: 'wrap',
};
