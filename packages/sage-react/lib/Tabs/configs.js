import PropTypes from 'prop-types';
import { SageTokens } from '../configs';

export const CHOICE_TYPES = {
  ARROW: 'arrow',
  GRAPHIC: 'graphic',
  ICON: 'icon',
  RADIO: 'radio',
};

export const CHOICE_ICON_ALIGNMENTS = {
  DEFAULT: null,
  START: 'start',
};

export const TAB_LAYOUTS = {
  DEFAULT: 'default',
  STACKED: 'stacked',
};

export const TAB_STYLES = {
  CHOICE: 'choice',
  PROGRESSBAR: 'progressbar',
  TAB: 'tab',
};

export const tabsItemsPropTypes = PropTypes.shape({
  id: PropTypes.string.isRequired,
  content: PropTypes.node,
  disabled: PropTypes.bool,
  label: PropTypes.string.isRequired,
  subtext: PropTypes.string,
  tabChoiceCustomClass: PropTypes.string,
  tabChoiceIcon: PropTypes.oneOf(Object.values(SageTokens.ICONS)),
  tabChoicIconAlignment: PropTypes.oneOf(Object.values(CHOICE_ICON_ALIGNMENTS)),
  tabChoiceType: PropTypes.oneOf(Object.values(CHOICE_TYPES)),
});
