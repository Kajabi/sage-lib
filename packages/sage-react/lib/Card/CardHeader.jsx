import React from 'react';
import PropTypes, { oneOfType } from 'prop-types';
import { SageTokens } from '../configs';

export const CardHeader = ({ background, children, ...rest }) => {
  const { style } = rest;
  const styles = style || {};

  const hasCustomBackground = background
    && !Object.values(SageTokens.COLOR_SLIDERS).includes(background);

  if (hasCustomBackground) {
    styles['--sage-card-background'] = background;
  }

  return (
    <div
      className={
        [
          'sage-card__header-layout',
          hasCustomBackground ? 'sage-card--background-custom' : '',
          background && !hasCustomBackground ? `sage-card--background-${background}` : ''
        ].filter((x) => x).join(' ')
      }
      {...rest}
      style={styles}
    >
      {children}
    </div>
  );
};

CardHeader.defaultProps = {
  background: SageTokens.COLOR_SLIDERS.GREY_200,
  children: null,
};

CardHeader.propTypes = {
  background: oneOfType([
    PropTypes.string,
    PropTypes.oneOf(Object.values(SageTokens.COLOR_SLIDERS)),
  ]),
  children: PropTypes.node,
};
