import React from 'react';
import PropTypes from 'prop-types';
import {
  Badge,
  Icon,
  Link,
  Frame,
  SageClassnames,
  SageTokens,
  Tooltip,
} from '../../..';
import {
  currencies,
  paymentCards,
  statuses,
} from '../data-helper';

export const PriceField = ({
  cardType,
  price,
  coupon,
  currency,
  status,
}) => {
  const { icon: cardIcon } = (
    paymentCards.find(({ label }) => label.toLowerCase() === cardType)
    || { icon: Icon.ICONS.CARD_GENERIC }
  );

  const currencyData = (
    currencies.find(({ name }) => name === currency)
    || currencies[0]
  );

  const {
    name: currencyCode,
    symbol: currencySymbol,
  } = currencyData;

  const badgeConfigs = (
    statuses.find(({ id }) => id === status)
    || statuses[0]
  );

  const couponIcon = coupon ? (
    <Tooltip content={`Coupon: ${coupon.value}`}>
      <Icon
        color={Icon.COLORS.CHARCOAL_100}
        icon={Icon.ICONS.COUPON}
        label="Used a coupon"
        size={Icon.SIZES.MD}
      />
    </Tooltip>
  ) : (
    <Icon
      color={Icon.COLORS.WHITE}
      icon={Icon.ICONS.BAN}
      label="Did not use a coupon"
      // TODO: DSS: Consider adding a `null` icon that can be used for placeholders like here
      size={Icon.SIZES.MD}
    />
  );

  return (
    <Frame
      align={Frame.ALIGNMENTS.CENTER_LEFT}
      direction={Frame.DIRECTIONS.HORIZONTAL}
      gap={Frame.GAPS.XS}
      width={Frame.WIDTHS.FILL}
    >
      <Icon
        color={SageTokens.COLOR_SLIDERS.CHARCOAL_500}
        icon={cardIcon}
        size={Icon.SIZES.XL}
      />
      <Frame
        align={Frame.ALIGNMENTS.CENTER_RIGHT}
        direction={Frame.DIRECTIONS.HORIZONTAL}
        gap={Frame.GAPS['2XS']}
        tag="span"
        width={Frame.WIDTHS.FLEX}
      >
        <Link
          // TODO: Dev: The following class can be used
          //   in order to enact the correct hover effect on the row
          //   once this PR is merged: https://github.com/Kajabi/sage-lib/pull/1499
          // className={SageClassnames.LINK.TABLE_CELL_PRIMARY}
          href="#TODO-dev-url-transaction-details"
          removeUnderline={true}
          // TODO: DSS: This property collides with `style` for providing CSS
          style={Link.COLORS.SECONDARY}
        >
          {currencySymbol}
          {price}
        </Link>
        <span className={SageClassnames.TYPE_COLORS.CHARCOAL_100}>
          {currencyCode}
        </span>
      </Frame>
      {couponIcon}
      <Frame width="85px">
        <Badge
          color={badgeConfigs.badgeColor}
          value={badgeConfigs.label}
        />
      </Frame>
    </Frame>
  );
};

PriceField.defaultProps = {
  cardType: null,
  price: '--',
  coupon: null,
  currency: 'USD',
  status: 'success',
};

PriceField.propTypes = {
  cardType: PropTypes.oneOf(paymentCards.map(({ label }) => label.toLowerCase())),
  price: PropTypes.string,
  coupon: PropTypes.shape({
    value: PropTypes.string,
  }),
  currency: PropTypes.oneOf(currencies.map(({ name }) => name)),
  status: PropTypes.oneOf(statuses.map(({ id }) => id)),
};
