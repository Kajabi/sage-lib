import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { DOT_COLORS } from './configs';

export const Dot = ({
  children,
  className,
  color,
  label,
  ...rest
}) => {
  const customColor = !Object.values(DOT_COLORS).includes(color);
  const classNames = classnames(
    'sage-dot',
    className,
    {
      'sage-dot--color-custom': customColor,
      [`sage-dot--color-${color}`]: !customColor && color,
    }
  );

  const style = {};

  if (customColor) {
    style['--sage-dot-color'] = color;
  }

  const attrs = {};

  if (label) {
    attrs['aria-label'] = label;
  } else {
    attrs['aria-hidden'] = true;
  }

  return (
    <span className={classNames} style={style} {...attrs} {...rest}>
      {children}
    </span>
  );
};

Dot.COLORS = DOT_COLORS;

Dot.defaultProps = {
  children: null,
  className: null,
  color: Dot.COLORS.DEFAULT,
  label: null,
};

Dot.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  color: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.oneOf(Object.values(Dot.COLORS))
  ]),
  label: PropTypes.string,
};
