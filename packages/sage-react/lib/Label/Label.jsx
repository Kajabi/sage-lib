import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Button from '../Button';
import { SageTokens } from '../configs';
import { LABEL_TYPES, LABEL_COLORS } from './configs';

const Label = ({
  children,
  className,
  color,
  isInteractive,
  isStatus,
  isDropdown,
  icon,
  type,
  value,
  secondaryButton,
  ...rest
}) => {
  const TagName = isInteractive ? 'button' : 'span';

  const classNames = classnames(
    'sage-label',
    className,
    {
      [`sage-label--${color}`]: color,
      [`sage-label--${type}`]: type,
      'sage-label--interactive': isInteractive,
      [`sage-label--icon-${icon}`]: icon,
    }
  );

  return (
    <span className={classNames}>
      <TagName
        type={isInteractive ? 'button' : null}
        {...rest}
      >
        {value}
      </TagName>
      {secondaryButton}
      {isDropdown && <span class="sage-label__decor-icon sage-label__decor-icon--caret-down"></span>}
    </span>
  );
};

Label.COLORS = LABEL_COLORS;
Label.TYPES = LABEL_TYPES;

Label.defaultProps = {
  className: null,
  isInteractive: false,
  color: LABEL_COLORS.DRAFT,
  icon: null,
  type: LABEL_TYPES.DEFAULT,
};

Label.propTypes = {
  className: PropTypes.string,
  isInteractive: PropTypes.bool,
  isDropdown: PropTypes.bool,
  color: PropTypes.oneOf(Object.values(LABEL_COLORS)),
  icon: PropTypes.oneOf(Object.values(SageTokens.ICONS)),
  type: PropTypes.oneOf(Object.values(LABEL_TYPES)),
  secondaryButton: PropTypes.instanceOf(Button),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
};

export default Label;
