import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Card,
  Frame,
  Icon,
  Modal,
  Panel,
  SageClassnames,
  SageTokens,
} from '../../..';
import {
  currencies,
  otherFilters,
  paymentCards,
  paymentTypes,
  renderToggleGroup,
  statuses,
  timeframes,
} from '../data-helper';

export const ModalFilters = ({ active, onExit }) => {
  const [filterCount] = useState(null);
  const [activeCards, setActiveCards] = useState([]);
  const [activeCurrencies, setActiveCurrencies] = useState([]);
  const [activeOthers, setActiveOthers] = useState([]);
  const [activePaymentTypes, setActivePaymentTypes] = useState([]);
  const [activeStatuses, setActiveStatuses] = useState([]);
  const [activeTimeframe, setActiveTimeframe] = useState([]);

  const toggleMultipleValues = (value, arr, setArr) => {
    if (arr.includes(value)) {
      setArr(arr.filter((o) => o !== value));
    } else {
      setArr([...arr, value]);
    }
  };

  const onChangeActiveCards = (payload) => toggleMultipleValues(
    payload,
    activeCards,
    setActiveCards
  );

  const onChangeActiveCurrencies = (payload) => toggleMultipleValues(
    payload,
    activeCurrencies,
    setActiveCurrencies,
  );

  const onChangeActiveOthers = (payload) => toggleMultipleValues(
    payload,
    activeOthers,
    setActiveOthers,
  );

  const onChangeActivePaymentTypes = (payload) => toggleMultipleValues(
    payload,
    activePaymentTypes,
    setActivePaymentTypes
  );

  const onChangeActiveStatuses = (payload) => toggleMultipleValues(
    payload,
    activeStatuses,
    setActiveStatuses,
  );

  const onChangeActiveTimeframe = (payload) => setActiveTimeframe(payload);

  const filterFields = [
    {
      title: 'Payment types',
      fields: renderToggleGroup({
        name: 'filter-by-payment-types',
        items: paymentTypes.map(({ id, label }) => ({
          checked: activePaymentTypes.includes(id),
          id: `payment-types-${id}`,
          label,
          onChange: onChangeActivePaymentTypes,
          value: id,
        })),
      }),
    },
    {
      title: 'Status',
      fields: renderToggleGroup({
        name: 'filter-by-status',
        items: statuses.map(({ id, label }) => ({
          checked: activeStatuses.includes(id),
          id: `status-${id}`,
          label,
          onChange: onChangeActiveStatuses,
          value: id,
        })),
      }),
    },
    {
      title: 'In the last...',
      fields: renderToggleGroup({
        name: 'filter-by-timeframe',
        items: timeframes.map(({ id, label }) => ({
          checked: activeTimeframe === id,
          id: `timeframe-${id}`,
          label,
          onChange: onChangeActiveTimeframe,
          value: id,
        })),
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
          {paymentCards.map(({ label, icon }) => (
            <Frame key={label} widthRatio="1" align={Frame.ALIGNMENTS.SPREAD_STRETCH}>
              <Card onClick={() => onChangeActiveCards(label)}>
                <Icon
                  icon={icon}
                  color={activeCards.includes(label)
                    ? Icon.COLORS.CHARCOAL_500
                    : Icon.COLORS.CHARCOAL_100}
                />
                <span className={SageClassnames.TYPE.BODY_MED}>
                  {label}
                </span>
              </Card>
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
          checked: activeCurrencies.includes(name),
          id: `currencies-${name.toLowerCase()}`,
          label: `${symbol} ${name}`,
          onChange: onChangeActiveCurrencies,
          value: name,
        })),
      }),
    },
    {
      title: 'Other filters',
      fields: renderToggleGroup({
        name: 'filter-by-timeframe',
        items: otherFilters.map(({ id, label }) => ({
          checked: activeOthers.includes(id),
          id: `other-filters-${id}`,
          label,
          onChange: onChangeActiveOthers,
          value: id,
        })),
      }),
    },
  ];

  return (
    <Modal
      active={active}
      allowScroll={true}
      onExit={onExit}
    >
      <Modal.Header
        title="Filters"
        aside={(
          <Button
            color={Button.COLORS.SECONDARY}
            iconOnly={true}
            icon={SageTokens.ICONS.REMOVE}
            onClick={onExit}
            subtle={true}
          >
            Close
          </Button>
        )}
      />
      <Modal.Body gap={Modal.Body.GAP_OPTIONS.LG}>
        {filterFields.map(({ title, fields }) => (
          <Frame key={title}>
            <h4>{title}</h4>
            {fields}
            <Panel.Divider />
          </Frame>
        ))}
      </Modal.Body>
      <Modal.Footer>
        <Modal.FooterAside>
          <Button
            color={Button.COLORS.SECONDARY}
            onClick={onExit}
            subtle={true}
          >
            Cancel
          </Button>
        </Modal.FooterAside>
        <Button
          color={Button.COLORS.PRIMARY}
          onClick={onExit}
        >
          Show {filterCount === null ? 'all' : filterCount} transactions
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

ModalFilters.defaultProps = {
  active: false,
  onExit: null,
};

ModalFilters.propTypes = {
  active: PropTypes.bool,
  onExit: PropTypes.func,
};
