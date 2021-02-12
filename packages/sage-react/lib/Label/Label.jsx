import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { SageTokens } from '../configs';
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
    }
  );

  return (
    <span className={classNames} ref={ref}>
      <TagName
        className="sage-label__value"
        type={interactiveType ? 'button' : null}
        {...rest}
      >
        <span className="sage-label__value-text">
          {value}
        </span>
      </TagName>
      {interactiveType === LABEL_INTERACTIVE_TYPES.SECONDARY_BUTTON && secondaryButton}
      {(interactiveType === LABEL_INTERACTIVE_TYPES.DROPDOWN) && (
        <span className="sage-label__decor-icon sage-label__decor-icon--down-small" />
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
  icon: null,
  interactiveType: null,
  isDropdown: false,
  isStatus: false,
  secondaryButton: null,
  style: LABEL_STYLES.DEFAULT,
};

Label.propTypes = {
  className: PropTypes.string,
  color: PropTypes.oneOf(Object.values(LABEL_COLORS)),
  icon: PropTypes.oneOf(Object.values(SageTokens.ICONS)),
  interactiveType: PropTypes.oneOf(Object.values(LABEL_INTERACTIVE_TYPES)),
  isDropdown: PropTypes.bool,
  isStatus: PropTypes.bool,
  secondaryButton: PropTypes.node,
  style: PropTypes.oneOf(Object.values(LABEL_STYLES)),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
};
