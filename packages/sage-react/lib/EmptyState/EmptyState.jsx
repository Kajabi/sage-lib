import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Icon from '../Icon';

const EmptyState = ({
  children,
  compact,
  graphic,
  icon,
  text,
  title,
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
      {graphic && (
        <div className="sage-empty-state__graphic">
          {graphic}
        </div>
      )}
      {icon && (<Icon icon={icon} size={Icon.SIZES.XXXL} className="sage-empty-state__icon" />)}
      {title && (
        <h2 className="sage-empty-state__title">
          {title}
        </h2>
      )}
      {text && (
        <p className="sage-empty-state__text">
          {text}
        </p>
      )}
      {children}
    </section>
  );
};

EmptyState.defaultProps = {
  children: null,
  compact: false,
  graphic: null,
  icon: null,
  title: null,
  text: null,
};

EmptyState.propTypes = {
  children: PropTypes.node,
  compact: PropTypes.bool,
  graphic: PropTypes.node,
  icon: PropTypes.string,
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
};

export default EmptyState;
