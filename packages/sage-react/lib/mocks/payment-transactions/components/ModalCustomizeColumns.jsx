import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Frame,
  List,
  Modal,
  SageClassnames,
  SageTokens,
  Switch,
  Toggle,
} from '../../..';
import { columns as tableColumns } from '../data-helper';

export const ModalCustomizeColumns = ({ active, onExit }) => {
  const [columns, setColumns] = useState(tableColumns);

  const handleResetToDefault = () => {
    // TODO: Dev: Add logic to restore default column configs
  };

  useEffect(() => {
    // TODO: Dev: Wire to ensure column configs can affect table as desired.
  }, [columns]);

  return (
    <Modal onExit={onExit} active={active}>
      {/*
        TODO: DSS: Add container sizes as Modal size options.
          Width shown in mocks is smaller than possible with modal rn.
          Per discussion with Design, need to add ability set modal size
          in sync with system container sizes.
          https://kajabi.atlassian.net/browse/SAGE-753
          DESIGN: Spec needed?
      */}
      <Modal.Header
        title="Custom columns"
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
      >
        <p className={[SageClassnames.TYPE.BODY, SageClassnames.TYPE_COLORS.CHARCOAL_400]}>
          Add, remove or reorder columns to customize your table’s layout.
        </p>
      </Modal.Header>
      <Modal.Body gap={Modal.Body.GAP_OPTIONS.LG}>
        {/*
          TODO: DSS: List is outputting some scheme errors that should be cleaned up.
          https://kajabi.atlassian.net/browse/SAGE-749
        */}
        <List
          sortableConfigs={{ setList: setColumns }}
          itemRenderer={({ id, name, excludable = true }) => (
            <Frame direction={Frame.DIRECTIONS.HORIZONTAL} align={Frame.ALIGNMENTS.START_SPREAD}>
              <p>{name}</p>
              {excludable && (
                <Switch
                  checked={false}
                  label="Switch label"
                  name="customize-column-toggles"
                  hideText={true}
                  type={Toggle.TYPES.CHECKBOX}
                  id={`${id}-toggle`}
                  value="Demo"
                />
              )}
            </Frame>
          )}
          items={columns}
        />
      </Modal.Body>
      <Modal.Footer>
        <Modal.FooterAside>
          {/*
            TODO: DSS: Need to ensure link/button style and tags all work as expected.
              Here, we probably want the Link styling but need to render a `button`.
              DESIGN spec needed?
          */}
          <Button
            color={Button.COLORS.SECONDARY}
            onClick={handleResetToDefault}
            subtle={true}
          >
            Reset to default
          </Button>
        </Modal.FooterAside>
        <Button
          color={Button.COLORS.PRIMARY}
          onClick={onExit}
        >
          Apply
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

ModalCustomizeColumns.defaultProps = {
  active: false,
  onExit: null,
};

ModalCustomizeColumns.propTypes = {
  active: PropTypes.bool,
  onExit: PropTypes.func,
};