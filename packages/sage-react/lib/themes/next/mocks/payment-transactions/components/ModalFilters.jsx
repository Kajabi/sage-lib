import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Frame,
  Modal,
  Panel,
  SageTokens,
} from '../../..';
import { filterFields } from '../data-helper';

export const ModalFilters = ({ active, onExit }) => {
  const [filterCount] = useState(null);
  const [activeCards] = useState(['visa', 'mastercard', 'amex', 'discover']);

  const onChangeActiveCards = (event) => {
    console.log('clicked choice', event);
  };

  return (
    <Modal onExit={onExit} active={active}>
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
        {filterFields({ activeCards, onChangeActiveCards, }).map(({ title, fields }) => (
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
