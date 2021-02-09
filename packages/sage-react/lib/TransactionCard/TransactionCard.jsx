import React from 'react';
import PropTypes from 'prop-types';
import { Property } from '../Property';
import { SageTokens } from '../configs';
import { Icon } from '../Icon';
import { Label } from '../Label';
import { OptionsDropdown } from '../Dropdown/OptionsDropdown';
import { AMOUNT_COLORS, LABEL_COLORS, DROPDOWN_ITEMS } from './configs';

export const TransactionCard = ({
  labelColor,
  labelText,
  name,
  amount,
  amountColor,
  productName,
  transactionTime,
  dropdownLink
}) => (
  <div className="sage-transaction-card">
    <div className="sage-transaction-card__header">
      <Label value={labelText} color={labelColor} />
      <OptionsDropdown
        align="right"
        options={DROPDOWN_ITEMS}
      />
    </div>
    <div className="sage-transaction-card__body">
      <h4 className="sage-transaction-card__name">{name}</h4>
      {amount && (
        <div className={`sage-transaction-card__amount${amountColor ? ` sage-transaction-card__amount--${amountColor}` : ''}`}>
          {amount}
        </div>
      )}
    </div>
    <div className="sage-transaction-card__footer">
      <Property icon={Icon.ICONS.TAG}>{productName}</Property>
      <Property>{transactionTime}</Property>
    </div>
  </div>
);

TransactionCard.LABEL_COLORS = LABEL_COLORS;
TransactionCard.AMOUNT_COLORS = AMOUNT_COLORS;
TransactionCard.DROPDOWN_ITMES = DROPDOWN_ITEMS;

TransactionCard.defaultProps = {
  labelText: '--',
  labelColor: LABEL_COLORS.PUBLISHED,
  name: '--',
  amount: '0.00',
  amountColor: null,
  productName: '--',
  transactionTime: '--',
  dropdownLink: '#',
};

TransactionCard.propTypes = {
  labelText: PropTypes.string,
  labelColor: PropTypes.oneOf(Object.values(TransactionCard.LABEL_COLORS)),
  name: PropTypes.string,
  amount: PropTypes.string,
  amountColor: PropTypes.oneOf(Object.values(TransactionCard.AMOUNT_COLORS)),
  productName: PropTypes.string,
  transactionTime: PropTypes.string,
  dropdownLink: PropTypes.string,
};
