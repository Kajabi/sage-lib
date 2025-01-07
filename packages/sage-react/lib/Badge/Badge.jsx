import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {
  BADGE_COLORS,
} from './configs';

export const Badge = React.forwardRef(({
  className,
  color,
  containerAttributes,
  dot,
  isDropdown,
  isInteractive,
  isStatus,
  large,
  kjbElementId,
  value,
  ...rest
}, ref) => {
  const TagName = isInteractive ? 'button' : 'span';

  const classNames = classnames(
    'sage-badge',
    className,
    {
      [`sage-badge--${color}`]: color,
      'sage-badge--interactive': isInteractive,
      'sage-badge--large': large,
    }
  );

  return (
    <span
      className={classNames}
      data-kjb-element={kjbElementId}
      ref={ref}
      {...containerAttributes}
    >
      {dot && (
        <>
          {dot}
        </>
      )}
      <TagName
        className="sage-badge__value"
        type={isInteractive ? 'button' : null}
        {...rest}
      >
        <span className="sage-badge__value-text">
          {value}
        </span>
        {isInteractive && (
          <pds-icon name="down-small" size="12px" class="sage-badge__decor-icon sage-badge__decor-icon--down-small" />
        )}
      </TagName>
    </span>
  );
});

Badge.COLORS = BADGE_COLORS;

Badge.defaultProps = {
  className: null,
  color: BADGE_COLORS.DRAFT,
  containerAttributes: null,
  dot: null,
  isInteractive: null,
  isDropdown: false,
  isStatus: false,
  large: false,
  kjbElementId: null,
};

Badge.propTypes = {
  className: PropTypes.string,
  color: PropTypes.oneOf(Object.values(BADGE_COLORS)),
  containerAttributes: PropTypes.shape({}),
  dot: PropTypes.node,
  isInteractive: PropTypes.bool,
  isDropdown: PropTypes.bool,
  isStatus: PropTypes.bool,
  large: PropTypes.bool,
  kjbElementId: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
};
