import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Icon from '../Icon';

const EmptyState = ({
  compact,
  icon,
  title,
  text,
  children,
  ...rest
}) => {
  const className = classnames(
    'sage-empty-state',
    {
      'sage-empty-state--compact': compact
    },
  );

  return (
    <section
      className={className}
      {...rest}
    >
      {icon && (<Icon icon={icon} size={Icon.SIZES.XXXL} className="sage-empty-state__icon" />)}
      {title && (<h2 className="sage-empty-state__title">{title}</h2>)}
      {text && (<p className="sage-empty-state__text">{text}</p>)}
      {children}
    </section>
  );
};

EmptyState.defaultProps = {
  compact: false,
  icon: null,
  title: null,
  text: null,
  children: null,
};

EmptyState.propTypes = {
  compact: PropTypes.bool,
  icon: PropTypes.string,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  children: PropTypes.node,
};

export default EmptyState;
