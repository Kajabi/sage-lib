import React from 'react';
import PropTypes from 'prop-types';
import { SageTokens } from '../configs';
import classnames from 'classnames';


export const Divider = ({
  className,
  color,
  vertical,
  offset,

  ...rest
}) => {
  const classNames = classnames(
    'sage-divider',
    className,
    {
      'sage-divider--vertical': vertical,
      [`sage-divider-offset--${offset}`]: offset,
    }
  );

  const style = {};

  if (color) {
    style['--sage-divider-background-color'] = color;
  }

  return (
    <hr className={classNames} style={style} {...rest} />
  );
};

Divider.defaultProps = {
  color: SageTokens.COLOR_PALETTE.GREY_300,
  vertical: null,
  offset: null,
};

Divider.propTypes = {
  color: PropTypes.string,
  vertical: PropTypes.bool,
  offset: PropTypes.oneOf(Object.values(SageTokens.SPACERS)),
};
