import { SageTokens } from '..';

export const CARD_FOOTER_ALIGNMENTS = {
  DEFAULT: null,
  SPREAD: 'spread',
};

export const CARD_FIGURE_BLEED_OPTIONS = {
  NONE: null,
  TOP: 'bleed-top',
  SIDES: 'bleed-sides',
  BOTTOM: 'bleed-bottom',
};

export const CARD_ROW_ALIGNMENT_OPTIONS = {
  DEFAULT: null,
  START: 'start',
  TOP: 'start',
};

export const CARD_ROW_GAP_OPTIONS = {
  DEFAULT: null,
  XS: 'xs',
  SM: 'sm',
  MD: 'md',
  LG: 'lg',
};

export const CARD_LIST_GAP_OPTIONS = CARD_ROW_GAP_OPTIONS;

export const CARD_HIGHLIGHT_COLORS = {
  GREY: SageTokens.COLORS.GREY,
  ORANGE: SageTokens.COLORS.ORANGE,
  PRIMARY: SageTokens.COLORS.PRIMARY,
  PURPLE: SageTokens.COLORS.PURPLE,
  RED: SageTokens.COLORS.RED,
  SAGE: SageTokens.COLORS.SAGE,
  YELLOW: SageTokens.COLORS.YELLOW,
};

export const CARD_HIGHLIGHT_POSITIONS = {
  TOP: 'top',
  RIGHT: 'right',
  BOTTOM: 'bottom',
  LEFT: 'left',
};

export const CARD_LIST_BLOCK_SPACING = {
  DEFAULT: false,
  SM: 'sm',
};
