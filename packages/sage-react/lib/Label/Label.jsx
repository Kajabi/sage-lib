import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Button from '../Button';
import { SageTokens } from '../configs';
import { LABEL_STYLES, LABEL_COLORS, LABEL_INTERACTIVE_TYPES } from './configs';

const Label = ({
  children,
  className,
  color,
  icon,
  isDropdown,
  interactiveType,
  isStatus,
  secondaryButton,
  style,
  value,
  ...rest
}) => {
  const TagName = interactiveType ? 'button' : 'span';

  const classNames = classnames(
    'sage-label',
    className,
    {
      [`sage-label--${color}`]: color,
      [`sage-label--${style}`]: style,
      'sage-label--interactive': interactiveType,
      [`sage-label--icon-${icon}`]: icon,
    }
  );

  return (
    <span className={classNames}>
      <TagName
        className="sage-label__value"
        type={interactiveType ? 'button' : null}
        {...rest}
      >
        {value}
      </TagName>
      {
        interactiveType === LABEL_INTERACTIVE_TYPES.SECONDARY_BUTTON
        && secondaryButton
      }
      {
        (interactiveType === LABEL_INTERACTIVE_TYPES.DROPDOWN)
        && <span className="sage-label__decor-icon sage-label__decor-icon--caret-down"></span>
      }
    </span>
  );
};

Label.COLORS = LABEL_COLORS;
Label.STYLES = LABEL_STYLES;
Label.INTERACTIVE_TYPES = LABEL_INTERACTIVE_TYPES;

Label.defaultProps = {
  className: null,
  color: LABEL_COLORS.DRAFT,
  icon: null,
  interactiveType: null,
  style: LABEL_STYLES.DEFAULT,
};

Label.propTypes = {
  className: PropTypes.string,
  color: PropTypes.oneOf(Object.values(LABEL_COLORS)),
  icon: PropTypes.oneOf(Object.values(SageTokens.ICONS)),
  isDropdown: PropTypes.bool,
  interactiveType: PropTypes.oneOf(Object.values(LABEL_INTERACTIVE_TYPES)),
  secondaryButton: PropTypes.oneOfType([
    PropTypes.shape({type: PropTypes.oneOf([Button])})
  ]),
  style: PropTypes.oneOf(Object.values(LABEL_STYLES)),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
};

export default Label;
