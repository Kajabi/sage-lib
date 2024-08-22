import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { SageTokens } from '../configs';

export const Divider = ({
  color,
  vertical,
  offset,
  ...rest
}) => {
  const classNames = classnames(
    'sage-divider',
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
  color: SageTokens.COLOR_PALETTE.GREY_200,
  vertical: null,
  offset: null,
};

Divider.propTypes = {
  color: PropTypes.string,
  vertical: PropTypes.bool,
  offset: PropTypes.oneOf(Object.values(SageTokens.SPACERS)),
};
