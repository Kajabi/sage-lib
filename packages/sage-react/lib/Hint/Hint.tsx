import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Icon } from '../Icon';
import { SageTokens } from '../configs';

interface Props {
  className: any,
  content: any,
  icon: any,
}

export const Hint: React.FC<Props> = ({
  className,
  content,
  icon,
  ...rest
}) => {
  const classNames = classnames(
    'sage-hint',
    className,
  );
  return (
    <div className={classNames} {...rest}>
      {icon && (
        <Icon
          className="sage-hint__icon"
          icon={icon}
          adjacentType={undefined}
          cardColor={undefined}
          circular={undefined}
          color={undefined}
          label={undefined}
          size={undefined}
        />
      )}
      <span className="sage-hint__content">{content}</span>
    </div>
  );
};

Hint.defaultProps = {
  className: '',
  icon: null,
};

Hint.propTypes = {
  className: PropTypes.string,
  content: PropTypes.string.isRequired,
  icon: PropTypes.oneOf(Object.values(SageTokens.ICONS)),
};
