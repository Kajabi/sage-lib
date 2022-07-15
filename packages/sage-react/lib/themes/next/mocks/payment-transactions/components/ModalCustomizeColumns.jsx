import React, { useState } from 'react';
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

  return (
    <Modal onExit={onExit} active={active}>
      {/* TODO: DSS: Width shown in mocks is smaller than possible with modal rn */}
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
          */}
          <Button
            color={Button.COLORS.SECONDARY}
            onClick={onExit}
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
