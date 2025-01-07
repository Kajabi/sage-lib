import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Icon } from '../Icon';
import { SageTokens } from '../configs';

export const Hint = ({
  className,
  content,
  icon,
  testId,
  ...rest
}) => {
  const classNames = classnames(
    'sage-hint',
    className,
  );
  return (
    <div className={classNames} {...rest} data-kjb-element={testId}>
      {icon && (
        <Icon
          className="sage-hint__icon"
          icon={icon}
        />
      )}
      <span className="sage-hint__content">{content}</span>
    </div>
  );
};

Hint.defaultProps = {
  className: '',
  icon: null,
  testId: null,
};

Hint.propTypes = {
  className: PropTypes.string,
  content: PropTypes.string.isRequired,
  icon: PropTypes.oneOf(Object.values(SageTokens.ICONS)),
  testId: PropTypes.string,
};
