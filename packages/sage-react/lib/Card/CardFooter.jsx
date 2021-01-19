import React from 'react';
import PropTypes from 'prop-types';
import { CARD_FOOTER_ALIGNMENTS } from './configs';

export const CardFooter = ({ align, children, ...rest }) => (
  <div
    className={`sage-card__footer ${align ? `sage-card__footer--align-${align}` : ''}`}
    {...rest}
  >
    {children}
  </div>
);

CardFooter.ALIGNMENTS = CARD_FOOTER_ALIGNMENTS;

CardFooter.defaultProps = {
  align: null,
  children: null,
};

CardFooter.propTypes = {
  align: PropTypes.oneOf(Object.values(CARD_FOOTER_ALIGNMENTS)),
  children: PropTypes.node,
};
