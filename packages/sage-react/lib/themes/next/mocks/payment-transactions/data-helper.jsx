import React from 'react';
import {
  Choice,
  Checkbox,
  Frame,
  Icon,
  Radio,
  Table,
} from '../..';

export const paymentTypes = [
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

// TODO: Fill these in correctly
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

const sortableItemConfigs = {
  sortable: true,
};

export const columns = [
  {
    id: 'transactions-column-price',
    name: 'Price',
    excludable: false,
    ...sortableItemConfigs
  },
  {
    id: 'transactions-column-type',
    name: 'Transaction type',
    ...sortableItemConfigs
  },
  {
    id: 'transactions-column-name',
    name: 'Name',
    ...sortableItemConfigs
  },
  {
    id: 'transactions-column-email',
    name: 'Email address',
    excludable: false,
    ...sortableItemConfigs
  },
  {
    id: 'transactions-column-offer-name',
    name: 'Offer name',
    ...sortableItemConfigs
  },
  {
    id: 'transactions-column-date',
    name: 'Date',
    ...sortableItemConfigs
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

export const filterFields = ({ activeCards, onChangeActiveCards }) => [
  {
    title: 'Payment types',
    fields: renderToggleGroup({
      name: 'filter-by-payment-types',
      items: [
        {
          id: 'payment-types-single',
          label: 'One-time payment',
          value: 'single',
          checked: false,
        },
        {
          id: 'payment-types-subscription',
          label: 'Subscription',
          value: 'subscription',
          checked: false,
        },
        {
          id: 'payment-types-multi',
          label: 'Multi-payment',
          value: 'multi',
          checked: false,
        },
      ],
    }),
  },
  {
    title: 'Status',
    fields: renderToggleGroup({
      name: 'filter-by-status',
      items: [
        {
          id: 'status-success',
          label: 'Successful',
          value: 'Success',
          checked: false,
        },
        {
          id: 'status-refund',
          label: 'Refunded',
          value: 'refund',
          checked: false,
        },
        {
          id: 'status-fail',
          label: 'Failed',
          value: 'fail',
          checked: false,
        },
      ],
    }),
  },
  {
    title: 'In the last...',
    fields: renderToggleGroup({
      name: 'filter-by-timeframe',
      items: [
        {
          id: 'timeframe-1-month',
          label: '30 days',
          value: 'month',
          checked: false,
        },
        {
          id: 'timeframe-3-month',
          label: '3 months',
          value: '3-month',
          checked: false,
        },
        {
          id: 'timeframe-6-month',
          label: '6 months',
          value: '6-month',
          checked: false,
        },
        {
          id: 'timeframe-1-year',
          label: '1 year',
          value: 'year',
          checked: false,
        },
        {
          id: 'timeframe-custom',
          label: 'Custom range',
          value: 'custom',
          checked: false,
        },
      ],
      type: 'radio',
      useTwoColumns: false,
    }),
  },
  {
    title: 'Payment method',
    fields: (
      <Frame
        direction={Frame.DIRECTIONS.HORIZONTAL}
        gap={Frame.GAPS.SM}
        align={Frame.ALIGNMENTS.CENTER_SPREAD}
      >
        {paymentTypes.map(({ label, icon }) => (
          <Frame key={label} widthRatio="1" align={Frame.ALIGNMENTS.SPREAD_STRETCH}>
            <Choice
              isActive={activeCards.includes(label.toLowerCase())}
              radioConfigs={{
                id: `transaction-filters-card-${label.toLowerCase()}`,
                name: 'transaction-filters-card',
                onChange: onChangeActiveCards,
                value: label,
                type: 'checkbox'
              }}
            >
              <Icon icon={icon} />
              {label}
            </Choice>
          </Frame>
        ))}
      </Frame>
    ),
  },
  {
    title: 'Currency type',
    fields: renderToggleGroup({
      name: 'filter-by-timeframe',
      items: currencies.map(({ name, symbol }) => ({
        id: `currencies-${name.toLowerCase()}`,
        label: `${symbol} ${name}`,
        value: name,
        checked: false,
      })),
    }),
  },
  {
    title: 'Other filters',
    fields: renderToggleGroup({
      name: 'filter-by-timeframe',
      items: [
        {
          id: 'other-coupon-used',
          label: 'Coupon used',
          value: 'coupon-used',
          checked: false,
        },
      ],
    }),
  },
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
    date: 'Yesterday',
  }
];
