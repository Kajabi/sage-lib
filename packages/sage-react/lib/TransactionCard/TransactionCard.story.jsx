import React from 'react';
import { selectArgs } from '../story-support/helpers';
import { TransactionCard } from './TransactionCard';

export default {
  title: 'Sage/TransactionCard',
  component: TransactionCard,
  argTypes: {
    ...selectArgs({
      amountColor: TransactionCard.AMOUNT_COLORS,
      labelColor: TransactionCard.LABEL_COLORS,
      stateColor: TransactionCard.STATE_COLORS,
    }),
  },
  args: {
    amount: '+ $148.00',
    amountColor: TransactionCard.AMOUNT_COLORS.DEFAULT,
    labelColor: TransactionCard.LABEL_COLORS.PUBLISHED,
    labelText: 'Multi-Payment',
    stateColor: TransactionCard.STATE_COLORS.INFO,
    stateText: 'New',
    name: 'Lilly Jones',
    href: 'https://kajabi.com',
    productName: 'Total Product Blueprint',
    transactionTime: '10:32pm'
  }
};
const Template = (args) => <TransactionCard {...args} />;

export const Default = Template.bind({});
