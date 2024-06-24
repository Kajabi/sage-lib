import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { SageTokens, SageClassnames } from '../configs';
import {
  LABEL_COLORS,
  LABEL_STYLES,
  LABEL_INTERACTIVE_TYPES,
} from './configs';
import { LabelSecondaryButton } from './LabelSecondaryButton';
import { LabelGroup } from './LabelGroup';

export const Label = React.forwardRef(({
  className,
  color,
  customIconColor,
  containerAttributes,
  icon,
  interactiveType,
  isDropdown,
  isStatus,
  secondaryButton,
  style,
  value,
  ...rest
}, ref) => {
  const TagName = interactiveType ? 'button' : 'span';

  const classNames = classnames(
    'sage-label',
    className,
    {
      [`sage-label--${color}`]: color,
      [`sage-label--${style}`]: style,
      'sage-label--interactive': interactiveType,
      'sage-label--interactive-right-cta-affordance': interactiveType && interactiveType !== LABEL_INTERACTIVE_TYPES.DEFAULT,
      [`sage-label--icon-${icon}`]: icon,
      'sage-label--icon--custom-color': customIconColor,
    }
  );

  const setCustomIconColor = () => {
    const props = {};

    if (customIconColor) {
      props['--sage-label-custom-icon-color'] = customIconColor;
    }

    return props;
  };

  return (
    <span
      className={classNames}
      ref={ref}
      style={setCustomIconColor()}
      {...containerAttributes}
    >
      <TagName
        className="sage-label__value"
        type={interactiveType ? 'button' : null}
        {...rest}
      >
        {icon && (
          <pds-icon
            name={icon}
            class={`${SageClassnames.SPACERS.XS_RIGHT} ${icon && customIconColor ? 'sage-label--icon--custom-color' : ''}`}
          />
        )}
        <span className="sage-label__value-text">
          {value}
        </span>
      </TagName>
      {interactiveType === LABEL_INTERACTIVE_TYPES.SECONDARY_BUTTON && secondaryButton}
      {(interactiveType === LABEL_INTERACTIVE_TYPES.DROPDOWN) && (
        <pds-icon class="sage-label__decor-icon" name="down-small" />
      )}
    </span>
  );
});

Label.COLORS = LABEL_COLORS;
Label.STYLES = LABEL_STYLES;
Label.INTERACTIVE_TYPES = LABEL_INTERACTIVE_TYPES;
Label.SecondaryButton = LabelSecondaryButton;
Label.Group = LabelGroup;

Label.defaultProps = {
  className: null,
  color: LABEL_COLORS.DRAFT,
  customIconColor: null,
  icon: null,
  interactiveType: null,
  isDropdown: false,
  isStatus: false,
  containerAttributes: null,
  secondaryButton: null,
  style: LABEL_STYLES.DEFAULT,
};

Label.propTypes = {
  className: PropTypes.string,
  color: PropTypes.oneOf(Object.values(LABEL_COLORS)),
  customIconColor: PropTypes.string,
  icon: PropTypes.oneOf(Object.values(SageTokens.ICONS)),
  interactiveType: PropTypes.oneOf(Object.values(LABEL_INTERACTIVE_TYPES)),
  isDropdown: PropTypes.bool,
  isStatus: PropTypes.bool,
  containerAttributes: PropTypes.shape({}),
  secondaryButton: PropTypes.node,
  style: PropTypes.oneOf(Object.values(LABEL_STYLES)),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
};
