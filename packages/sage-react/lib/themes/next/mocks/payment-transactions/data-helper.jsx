import React from 'react';
import {
  Checkbox,
  Frame,
  Icon,
  Radio,
  Table,
} from '../..';

export const columns = [
  {
    id: 'transactions-column-price',
    name: 'Price',
    excludable: false,
  },
  {
    id: 'transactions-column-type',
    name: 'Transaction type',
  },
  {
    id: 'transactions-column-name',
    name: 'Name',
  },
  {
    id: 'transactions-column-email',
    name: 'Email address',
    excludable: false,
  },
  {
    id: 'transactions-column-offer-name',
    name: 'Offer name',
  },
  {
    id: 'transactions-column-date',
    name: 'Date',
  },
];

export const currencies = [
  {
    name: 'USD',
    symbol: '$',
  },
  {
    name: 'GBP',
    symbol: '£',
  },
  {
    name: 'KRW',
    symbol: '₩',
  },
  {
    name: 'EUR',
    symbol: '€',
  },
  {
    name: 'CAD',
    symbol: '$',
  },
  {
    name: 'JPY',
    symbol: '¥',
  },
];

export const otherFilters = [
  {
    id: 'used',
    label: 'Coupon used',
  }
];

export const paymentCards = [
  {
    label: 'Visa',
    icon: Icon.ICONS.CARD_VISA,
  },
  {
    label: 'Mastercard',
    icon: Icon.ICONS.CARD_MASTERCARD,
  },
  {
    label: 'AMEX',
    icon: Icon.ICONS.CARD_AMEX,
  },
  {
    label: 'Discover',
    icon: Icon.ICONS.CARD_DISCOVER,
  },
];

export const paymentTypes = [
  {
    id: 'single',
    label: 'One-time payment',
  },
  {
    id: 'subscription',
    label: 'Subscription',
  },
  {
    id: 'multi',
    label: 'Multi-payment',
  },
];

export const renderToggleGroup = ({
  items,
  name,
  useTwoColumns = true,
  type = 'checkbox',
}) => {
  let styles = {};
  if (useTwoColumns) {
    const halfItems = Math.ceil(items.length / 2);
    styles = {
      flexWrap: 'wrap',
      height: `${halfItems * 24 + (halfItems - 1) * 16}px`
    };
  }

  return (
    <Frame
      gap={Frame.GAPS.SM}
      padding={Frame.PADDINGS.NONE}
      tag="ul"
      style={styles}
    >
      {items.map((configs) => (type === 'checkbox'
        ? (
          <Checkbox
            name={name}
            itemInList={true}
            key={configs.id}
            {...configs}
          />
        ) : (
          <Radio
            name={name}
            itemInList={true}
            key={configs.id}
            {...configs}
          />
        )
      ))}
    </Frame>
  );
};

export const statuses = [
  {
    id: 'success',
    label: 'Successful',
  },
  {
    id: 'refund',
    label: 'Refunded',
  },
  {
    id: 'fail',
    label: 'Failed',
  },
];

export const timeframes = [
  {
    id: 'month',
    label: '30 days',
  },
  {
    id: '3-month',
    label: '3 months',
  },
  {
    id: '6-month',
    label: '6 months',
  },
  {
    id: 'year',
    label: '1 year',
  },
  {
    id: 'custom',
    label: 'Custom range',
  }
];

export const transactionsTableData = [
  {
    id: 1,
    price: {
      cardType: 'visa',
      price: '9.95',
      usedCoupon: true,
      currency: 'USD',
    },
    type: 'One-time',
    name: 'Tom Scott',
    email: 'tomscott@gmail.com',
    offerName: 'How Good is Your Pro...',
    date: '12 minutes ago',
  },
  {
    id: 2,
    price: {
      cardType: 'mastercard',
      price: '12.95',
      status: 'refund',
      currency: 'EUR',
    },
    type: 'Multi-pay',
    name: 'Annette Black',
    email: 'gleason.yazmin@boyer.com',
    offerName: 'What is Leadership',
    date: 'Yesterday',
  },
  {
    id: 3,
    price: {
      cardType: 'amex',
      price: '99.99',
      status: 'fail',
      currency: 'JPY',
    },
    type: 'Subscription',
    name: 'Tom Scott',
    email: 'tomscott@gmail.com',
    offerName: 'How Good is Your Pro...',
    date: 'Last month',
  }
];

export const transactionsTableSchema = {
  price: {
    label: 'Price',
    dataType: Table.DATA_TYPES.HTML,
  },
  type: {
    label: 'Type',
  },
  name: {
    label: 'Name',
  },
  email: {
    label: 'Email',
  },
  offerName: {
    label: 'Offer name',
  },
  date: {
    label: 'Date',
    dataType: Table.DATA_TYPES.DATE,
  },
  options: {
    label: '',
    dataType: Table.DATA_TYPES.HTML,
  }
};
