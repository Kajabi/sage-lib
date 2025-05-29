import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Property } from '../Property';
import { Link } from '../Link';
import { Badge } from '../Badge';
import { AMOUNT_COLORS, LABEL_COLORS, STATE_COLORS } from './configs';
import { SageTokens } from '../configs';
import { Button } from '../Button';

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
  ...rest
}) => {
  const NameTag = nameTag;
  const amountClassNames = classnames(
    'sage-transaction-card__amount',
    {
      [`sage-transaction-card__amount--${amountColor}`]: amountColor,
    }
  );
  const stateClassNames = classnames(
    'sage-transaction-card__state',
    {
      [`sage-transaction-card__state--${transactionStateColor}`]: transactionStateColor,
    }
  );
  return (
    <article className="sage-transaction-card" {...rest}>
      <div className="sage-transaction-card__header">
        <Badge className="sage-transaction-card__label" value={labelText} color={labelColor} />
        <div className={stateClassNames}>
          {transactionState || 'Awesome'}
        </div>
      </div>
      <div className="sage-transaction-card__body">
        <div className="sage-transaction-card__body-group">
          <NameTag className="sage-transaction-card__name">
            {nameHref ? (
              <Link
                href={nameHref}
                className="sage-link sage-transaction-card__name-link"
                suppressDefaultClass={true}
                truncate={true}
              >
                {name}
              </Link>
            ) : name}
          </NameTag>
          {amount && (
            <div className={amountClassNames}>
              {amount}
            </div>
          )}
        </div>
        <div className="sage-transaction-card__body-group">
          {relatedPropertyHref ? (
            <Button
              className="sage-transaction-card__product"
              color={Button.COLORS.SECONDARY}
              href={relatedPropertyHref}
              icon={SageTokens.ICONS.TAG}
              small={true}
              subtle={true}
            >
              {relatedProperty}
            </Button>
          ) : (
            <Property className="sage-transaction-card__product" icon={SageTokens.ICONS.TAG}>{relatedProperty}</Property>
          )}
          <Property className="sage-transaction-card__time">{transactionTime}</Property>
        </div>
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
