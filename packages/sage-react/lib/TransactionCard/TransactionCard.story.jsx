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
    }),
  },
  args: {
    amount: '+ $148.00',
    amountColor: TransactionCard.AMOUNT_COLORS.DEFAULT,
    dropdownOptions: [
      {
        id: 1,
        label: 'View contact profile',
        icon: 'user-circle',
        href: '#',
      },
    ],
    labelColor: TransactionCard.LABEL_COLORS.INFO,
    labelText: 'New',
    name: 'Lilly Jones',
    productName: 'Total Product Blueprint',
    transactionTime: '10:32pm'
  }
};
const Template = (args) => <TransactionCard {...args} />;

export const Default = Template.bind({});
