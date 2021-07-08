import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Property } from '../Property';
import { Icon } from '../Icon';
import { Button } from '../Button';
import { Link } from '../Link';
import { Label } from '../Label';
import { SageTokens } from '../configs';
import { AMOUNT_COLORS, LABEL_COLORS, STATE_COLORS } from './configs';

export const TransactionCard = ({
  amount,
  amountColor,
  labelColor,
  labelText,
  name,
  nameHref,
  nameTag,
  relatedProperty,
  relatedPropertyHref,
  transactionState,
  transactionStateColor,
  transactionTime,
}) => {
  const NameTag = nameTag;

  const stateClassNames = classnames(
    'sage-transaction-card__state',
    {
      [`sage-transaction-card__state--${transactionStateColor}`]: transactionStateColor,
    }
  );

  return (
    <article className="sage-transaction-card">
      <div className="sage-transaction-card__header">
        <Label className="sage-transaction-card__label" value={labelText} color={labelColor} />
        <div className={stateClassNames}>
          {transactionState || 'Awesome'}
        </div>
      </div>
      <div className="sage-transaction-card__body">
        <div className="sage-transaction-card__body-group">
          <NameTag className="sage-transaction-card__name">
            {nameHref ? (
              <Link href={nameHref} className="sage-link sage-transaction-card__name-link">
                <span className="t-sage--truncate">{name}</span>
              </Link>
            ) : name}
          </NameTag>
          {amount && (
            <div className={`sage-transaction-card__amount${amountColor ? ` sage-transaction-card__amount--${amountColor}` : ''}`}>
              {amount}
            </div>
          )}
        </div>
      </div>
      <div className="sage-transaction-card__footer">
        {relatedPropertyHref ? (
          <Button
            color={Button.COLORS.SECONDARY}
            href={relatedPropertyHref}
            icon={SageTokens.ICONS.TAG}
            iconPosition={Button.ICON_POSITIONS.LEFT}
            small={true}
            subtle={true}
          >
            {relatedProperty}
          </Button>
        ) : <Property icon={Icon.ICONS.TAG}>{relatedProperty}</Property>}
        <Property>{transactionTime}</Property>
      </div>
    </article>
  );
};

TransactionCard.LABEL_COLORS = LABEL_COLORS;
TransactionCard.AMOUNT_COLORS = AMOUNT_COLORS;
TransactionCard.STATE_COLORS = STATE_COLORS;

TransactionCard.defaultProps = {
  amount: '0.00',
  amountColor: null,
  labelColor: LABEL_COLORS.PUBLISHED,
  labelText: '--',
  name: '--',
  nameHref: null,
  nameTag: 'h4',
  relatedProperty: '--',
  relatedPropertyHref: null,
  transactionState: null,
  transactionStateColor: null,
  transactionTime: '--',
};

TransactionCard.propTypes = {
  amount: PropTypes.string,
  amountColor: PropTypes.oneOf(Object.values(TransactionCard.AMOUNT_COLORS)),
  labelColor: PropTypes.oneOf(Object.values(TransactionCard.LABEL_COLORS)),
  labelText: PropTypes.string,
  name: PropTypes.string,
  nameHref: PropTypes.string,
  nameTag: PropTypes.string,
  relatedProperty: PropTypes.string,
  relatedPropertyHref: PropTypes.string,
  transactionState: PropTypes.string,
  transactionStateColor: PropTypes.oneOf(Object.values(TransactionCard.STATE_COLORS)),
  transactionTime: PropTypes.string,
};
