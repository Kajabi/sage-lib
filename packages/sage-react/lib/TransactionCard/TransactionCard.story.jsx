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
      transactionStateColor: TransactionCard.STATE_COLORS,
    }),
  },
  args: {
    amount: '+ $148.00',
    amountColor: TransactionCard.AMOUNT_COLORS.DEFAULT,
    labelColor: TransactionCard.LABEL_COLORS.PUBLISHED,
    labelText: 'Multi-Payment',
    transactionStateColor: TransactionCard.STATE_COLORS.SAGE,
    transactionState: 'New',
    name: 'Lilly Jones',
    nameHref: 'https://kajabi.com',
    nameTag: 'h3',
    relatedProperty: 'Total Product Blueprint',
    relatedPropertyHref: 'https://kajabi.com',
    transactionTime: '10:32pm'
  }
};
const Template = (args) => <TransactionCard {...args} />;

export const Default = Template.bind({});
