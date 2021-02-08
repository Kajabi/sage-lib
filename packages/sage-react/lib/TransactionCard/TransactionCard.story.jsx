import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, select } from '@storybook/addon-knobs';
import { TransactionCard } from './TransactionCard';

storiesOf('Sage/TransactionCard', module)
  .addDecorator(withKnobs)
  .add(
    'Default',
    () => (
      <TransactionCard
        labelColor={select('Label Color', TransactionCard.LABEL_COLORS)}
        labelText={text('Label Text', 'New')}
        name={text('Name', 'Lilly Jones')}
        amount={text('Amount', '+ $148.00')}
        amountColor={select('Amount Color', TransactionCard.AMOUNT_COLORS)}
        productName={text('Product Name', 'Total Product Blueprint')}
        transactionTime={text('Transaction Time', '10:32pm')}
        dropdownLink={text('Dropdown Link', '#')}
      />
    ),
    {}
  );
