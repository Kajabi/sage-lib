import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Icon } from '../Icon';
import { SageTokens } from '../configs';

export const Hint = ({
  className,
  content,
  ...rest
}) => {
  const classNames = classnames(
    'sage-hint',
    className,
  );
  return (
    <div className={classNames} {...rest}>
      <Icon
        className="sage-hint__icon"
        icon={SageTokens.ICONS.INFO_CIRCLE}
      />
      <span className="sage-hint__content">{content}</span>
    </div>
  );
};

Hint.defaultProps = {
  className: ''
};

Hint.propTypes = {
  className: PropTypes.string,
  content: PropTypes.string.isRequired,
};
