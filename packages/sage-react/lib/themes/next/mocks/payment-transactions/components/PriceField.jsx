import React from 'react';
import PropTypes from 'prop-types';
import {
  Badge,
  Icon,
  Frame,
  SageClassnames,
  SageTokens,
} from '../../..';
import { paymentTypes, currencies } from '../data-helper';

export const PriceField = ({
  cardType,
  price,
  usedCoupon,
  currency,
  status,
}) => {
  let cardIcon,
    badgeConfigs,
    coupon,
    currencyData;

  const paymentType = paymentTypes.filter(({ label }) => label.toLowerCase() === cardType);
  if (paymentType[0]) {
    cardIcon = paymentType[0].icon;
  } else {
    cardIcon = Icon.ICONS.CARD_GENERIC;
  }

  currencyData = currencies.filter(({ name }) => name === currency);
  if (currencyData[0]) {
    [currencyData] = currencyData;
  } else {
    [currencyData] = currencies; // NOTE: Gets USD by default
  }

  const { 
    name: currencyCode,
    symbol: currencySymbol,
  } = currencyData;

  switch (status) {
    case 'refund':
      badgeConfigs = {
        value: 'Refunded',
        color: Badge.COLORS.DRAFT,
      };
      break;
    case 'fail':
      badgeConfigs = {
        value: 'Failed',
        color: Badge.COLORS.DANGER,
      };
      break;
    default:
      badgeConfigs = {
        value: 'Sucessful',
        color: Badge.COLORS.SUCCESS,
      };
      break;
  }

  if (usedCoupon) {
    coupon = (
      <Icon
        label="Used a coupon"
        icon={Icon.ICONS.COUPON}
        size={Icon.SIZES.MD}
        color={Icon.COLORS.CHARCOAL_100}
      />
    );
  } else {
    coupon = (
      <Icon
        label="Did not use a coupon"
        // TODO: DSS: Consider adding a `null` icon that can be used for placeholders like here
        icon={Icon.ICONS.BAN}
        size={Icon.SIZES.MD}
        color={Icon.COLORS.WHITE}
      />
    );
  }

  return (
    <Frame
      align={Frame.ALIGNMENTS.CENTER_LEFT}
      direction={Frame.DIRECTIONS.HORIZONTAL}
      gap={Frame.GAPS.XS}
      width={Frame.WIDTHS.FILL}
      maxWidth="250px"
    >
      <Icon
        icon={cardIcon}
        size={Icon.SIZES.XL}
        color={SageTokens.COLOR_SLIDERS.CHARCOAL_500}
      />
      <Frame
        direction={Frame.DIRECTIONS.HORIZONTAL}
        gap={Frame.GAPS['2XS']}
        tag="span"
        width={Frame.WIDTHS.FLEX}
      >
        <span
          className={[
            SageClassnames.TYPE_ALIGN_RIGHT,
            SageClassnames.TYPE_COLORS.CHARCOAL_400
          ].join(' ')}
          style={{ flex: 1 }}
        >
          {currencySymbol}
          {price}
        </span>
        <span className={SageClassnames.TYPE_COLORS.CHARCOAL_100}>
          {currencyCode}
        </span>
      </Frame>
      {coupon}
      <Frame width="85px">
        <Badge {...badgeConfigs} />
      </Frame>
    </Frame>
  );
};

PriceField.defaultProps = {
  cardType: null,
  price: '--',
  usedCoupon: false,
  currency: 'USD',
  status: 'success',
};

PriceField.propTypes = {
  cardType: null,
  price: PropTypes.string,
  usedCoupon: PropTypes.bool,
  currency: PropTypes.string, // TODO: Dev: map acceptable currency types here
  status: PropTypes.oneOf(['success', 'refund', 'fail']),
};
