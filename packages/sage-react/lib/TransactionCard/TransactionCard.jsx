import React from 'react';
import PropTypes from 'prop-types';
import { SageTokens } from '../configs';
import { Property } from '../Property';
import { Icon } from '../Icon';
import { Label } from '../Label';
import { Dropdown } from '../Dropdown';
import { AMOUNT_COLORS, LABEL_COLORS } from './configs';

export const TransactionCard = ({
  labelColor,
  labelText,
  name,
  amount,
  amountColor,
  productName,
  transactionTime,
}) => (

  <div className="sage-transaction-card">
    <div className="sage-transaction-card__header">
      <Label value={labelText} color={labelColor} />
      <Dropdown
        label="Feature"
        icon={SageTokens.ICONS.DOT_MENU_HORIZONTAL}
        isDisabled={false}
        isLabelVisible={false}
        triggerButtonSubtle={true}
      >
        <Dropdown.ItemList items={
          [{
            id: 1,
            label: 'View Contact Profile',
            icon: SageTokens.ICONS.USER_CIRCLE,
          }]
        }
        />
      </Dropdown>
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

TransactionCard.defaultProps = {
  labelText: '--',
  labelColor: LABEL_COLORS.PUBLISHED,
  name: '--',
  amount: '0.00',
  amountColor: null,
  productName: '--',
  transactionTime: '--'
};

TransactionCard.propTypes = {
  labelText: PropTypes.string,
  labelColor: PropTypes.oneOf(Object.values(TransactionCard.LABEL_COLORS)),
  name: PropTypes.string,
  amount: PropTypes.string,
  amountColor: PropTypes.oneOf(Object.values(TransactionCard.AMOUNT_COLORS)),
  productName: PropTypes.string,
  transactionTime: PropTypes.string,
};
