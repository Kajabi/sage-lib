import React from 'react';
import PropTypes from 'prop-types';
import { SageClassnames } from '../../..';

export const PriceCell = ({ price, currency }) => (
  <>
    <span className={`${SageClassnames.TYPE.BODY_SMALL_SEMI} ${SageClassnames.TYPE_COLORS.CHARCOAL_400}`}>
      {price}
    </span>
    {' '}
    <span className={`${SageClassnames.TYPE.BODY_SMALL} ${SageClassnames.TYPE_COLORS.GREY_500}`}>
      {currency}
    </span>
  </>
);

PriceCell.defaultProps = {
  price: 0,
  currency: 'USD',
};

PriceCell.propTypes = {
  price: PropTypes.oneOf([
    PropTypes.string,
    PropTypes.number,
  ]),
  currency: PropTypes.string,
};
