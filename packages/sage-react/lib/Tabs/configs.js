import PropTypes from 'prop-types';
import { SageTokens } from '../configs';

export const CHOICE_TYPES = {
  ARROW: 'arrow',
  ICON: 'icon',
  RADIO: 'radio',
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
  tabChoiceIcon: PropTypes.oneOf(Object.values(SageTokens.ICONS)),
  tabChoiceType: PropTypes.oneOf(Object.values(CHOICE_TYPES)),
});
