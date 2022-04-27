import React from 'react';
import {
  Alert,
  Label,
  Link,
  SageTokens,
} from '../..';
import { PriceCell } from './components/PriceCell';

export const paymentStats = [
  {
    change: {
      value: '27%',
      icon: SageTokens.ICONS.UP_SMALL,
      color: Label.COLORS.PUBLISHED,
    },
    subtext: 'Sales this month',
    title: 'Transactions',
    tooltip: 'Members who pay for offers monthly up to 12 months lipsum.',
    value: 842,
  },
  {
    change: {
      value: '27%',
      icon: SageTokens.ICONS.UP_SMALL,
      color: Label.COLORS.PUBLISHED,
    },
    subtext: 'Active subscribers',
    title: 'Subscriptions',
    tooltip: 'Members who pay for offers monthly up to 12 months lipsum.',
    value: 144,
  },
  {
    change: {
      value: '2%',
      icon: SageTokens.ICONS.UP_SMALL,
      color: Label.COLORS.PUBLISHED,
    },
    subtext: 'Active multi-payments',
    title: 'Multi-payments',
    tooltip: 'Members who pay for offers monthly up to 12 months lipsum.',
    value: 73,
  }
];

export const rangeDropdownItems = [
  {
    isActive: true,
    label: 'Month over month',
    id: 'set-range-month',
  },
  {
    label: 'Week over week',
    id: 'set-range-week',
  },
  {
    label: 'Day over day',
    id: 'set-range-day',
  },
  {
    label: 'Year over year',
    id: 'set-range-year',
  },
];

export const chartOptions = [
  {
    label: 'Successful transactions',
    id: 'set-chart-successful-transactions',
    description: '',
    dataSet: [] // TODO: Dev to wire this to a service returning data?
  },
  {
    label: 'Refunds',
    id: 'set-chart-refunds',
    description: 'See all your refunds for all payment types',
    dataSet: [] // TODO: Dev to wire this to a service returning data?
  },
  {
    label: 'Failed payments',
    id: 'set-chart-failed-payments',
    description: '',
    dataSet: [] // TODO: Dev to wire this to a service returning data?
  },
];

export const chartDateRangeOptions = [
  {
    label: 'Last 30 days',
    id: 'set-date-range-30-days',
  },
  {
    label: 'Other ranges...',
    id: 'set-date-range-other',
  }
];

export const paymentAlerts = [
  {
    description: '2 recent refunds',
    color: Alert.COLORS.WARNING,
    small: true,
    actions: (<Link href="#TODO-dev-view-url">View</Link>)
  },
  {
    description: '2 recent refunds',
    color: Alert.COLORS.WARNING,
    small: true,
    actions: (<Link href="#TODO-dev-view-url">View</Link>)
  }
];

export const sampleTransactions = [
  {
    price: (<PriceCell price="$49.95" />),
    name: 'How To Build Your Personal Resilience',
    when: '17 min ago',
  },
  {
    price: (<PriceCell price="$8.95" />),
    name: 'What Is Leadership',
    when: '44 min ago',
  },
  {
    price: (<PriceCell price="$16.95" />),
    name: 'Planning for a Crisis',
    when: '2 hours ago',
  },
  {
    price: (<PriceCell price="$4.95" />),
    name: 'Vulnerable Leadership: The Power of Opening Up',
    when: '5 hours ago',
  },
  {
    price: (<PriceCell price="$99.95" />),
    name: 'Team Management Skills',
    when: '17 hours ago',
  },
  {
    price: (<PriceCell price="$2,349.95" />),
    name: 'How Good Is Your Problem Solving?',
    when: '12 hours ago',
  },
  {
    price: (<PriceCell price="$10.95" />),
    name: 'Analysing Potential Problems',
    when: 'Yesterday',
  },
  {
    price: (<PriceCell price="$2.95" />),
    name: 'The Core Skills Needed to Manage Your Team',
    when: 'Yesterday',
  },
  {
    price: (<PriceCell price="$5.95" />),
    name: 'Vulnerable Leadership: The Power of Opening Up',
    when: 'Mar 14, 2022',
  },
  {
    price: (<PriceCell price="$47.95" />),
    name: 'What Is Leadership',
    when: 'Mar 14, 2022',
  },
];
