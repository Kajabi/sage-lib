import React from 'react';
import PropTypes from 'prop-types';
import { Label } from '../Label';
import { Frame } from '../Frame';

export const Badge = React.forwardRef(({
  className,
  color,
  containerAttributes,
  dot,
  isInteractive,
  isDropdown,
  isStatus,
  value,
  ...rest
}, ref) => (
  <Label
    className={className}
    color={color}
    containerAttributes={containerAttributes}
    interactiveType={(isDropdown || isStatus)
      ? Label.INTERACTIVE_TYPES.DROPDOWN
      : isInteractive}
    isDropdown={isDropdown}
    isStatus={isStatus}
    ref={ref}
    secondaryButton={null}
    value={dot
      ? (
        <Frame
          align={Frame.ALIGNMENTS.CENTER_LEFT}
          direction={Frame.DIRECTIONS.HORIZONTAL}
          gap={Frame.GAPS.XXS}
        >
          {dot}
          {value}
        </Frame>
      ) : value}
    {...rest}
  />
));

Badge.COLORS = Label.COLORS;

Badge.defaultProps = {
  className: null,
  color: Badge.COLORS.DRAFT,
  containerAttributes: null,
  dot: null,
  isInteractive: null,
  isDropdown: false,
  isStatus: false,
};

Badge.propTypes = {
  className: PropTypes.string,
  color: PropTypes.oneOf(Object.values(Badge.COLORS)),
  containerAttributes: PropTypes.shape({}),
  dot: PropTypes.node,
  isInteractive: PropTypes.bool,
  isDropdown: PropTypes.bool,
  isStatus: PropTypes.bool,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
};
