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
  TOP_SPREAD: 'top-spread',
  CENTER_SPREAD: 'center-spread',
  BOTTOM_SPREAD: 'bottom-spread',
  STRETCH_LEFT: 'stretch-left',
  STRETCH_CENTER: 'stretch-center',
  STRETCH_RIGHT: 'stretch-right',
  STRETCH_SPREAD: 'stretch-spread',
  SPREAD_STRETCH: 'spread-stretch',
};

// Keep in sync with `packages/sage-assets/lib/stylesheets/components/_frame.scss`
export const FRAME_BORDERS = {
  NONE: 'none',
  REGULAR: 'regular',
};

// Keep in sync with `packages/sage-assets/lib/stylesheets/components/_frame.scss`
export const FRAME_BORDER_RADII = {
  NONE: 'none',
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
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
};

// Keep in sync with `packages/sage-assets/lib/stylesheets/components/_frame.scss`
export const FRAME_PRESETS = {
  BLOCK: 'block',
  BLOCK_HUG: 'block-hug',
  CARD_SM: 'card-sm',
  CARD: 'card',
  CARD_MD: 'card-md',
  CARD_LG: 'card-lg',
  ROW: 'row',
  ROW_HUG: 'row-hug',
  ROW_SPREAD: 'row-spread',
  STACK: 'stack',
};
