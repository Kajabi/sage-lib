import React from 'react';
import PropTypes from 'prop-types';
import { Modal } from '../Modal';
import { Grid } from '../Grid';
import { Button } from '../Button';
import { Indicator } from '../Indicator';
import { SageTokens } from '../configs';

export const CreationWizard = ({
  active,
  body,
  bodyActions,
  feature,
  className,
  id,
  indicator,
  onExit,
  showClose,
  title,
}) => (
  <Modal
    active={active}
    className={`sage-creation-wizard ${className || ''}`}
    fullScreen={true}
    id={id}
  >
    <Modal.Header
      title={title}
      aside={showClose && (
        <Button
          className="sage-drawer__close"
          color={Button.COLORS.SECONDARY}
          iconOnly={true}
          icon={SageTokens.ICONS.REMOVE}
          onClick={onExit}
          subtle={true}
        >
          Close Drawer
        </Button>
      )}
    >
      {/* sure up this conditional, very weak at the moment;
      it should be if any indicator value is present or if the
      shape is met */}
      {indicator.currentItem !== null && (
        <>
          <Indicator
            currentItem={indicator.currentItem}
            label={indicator.label}
            numItems={indicator.numItems}
            showText={true}
          />
        </>
      )}
    </Modal.Header>
    <Modal.Body className="sage-creation-wizard__modal-content">
      {body && (
        <Grid.Col size="5" className="sage-creation-wizard__form">
          <div className="sage-creation-wizard__form-content">
            {body}
          </div>

          {bodyActions && (
            <Button.Group
              gap={Button.Group.GAP_OPTIONS.MD}
              className="sage-creation-wizard__form-actions"
            >
              {bodyActions}
            </Button.Group>
          )}
        </Grid.Col>
      )}

      {feature && (
        <Grid.Col size="7" className="sage-creation-wizard__live-preview">
          {feature}
        </Grid.Col>
      )}
    </Modal.Body>
  </Modal>
);

CreationWizard.defaultProps = {
  active: false,
  body: null,
  bodyActions: null,
  className: null,
  feature: null,
  indicator: {
    currentItem: null,
    label: null,
    numItems: null
  },
  onExit: (val) => val,
  showClose: true,
  title: null,
};

CreationWizard.propTypes = {
  active: PropTypes.bool,
  body: PropTypes.arrayOf(PropTypes.node),
  bodyActions: PropTypes.arrayOf(PropTypes.node),
  className: PropTypes.string,
  feature: PropTypes.arrayOf(PropTypes.node),
  id: PropTypes.string.isRequired,
  indicator: PropTypes.shape({
    currentItem: PropTypes.number,
    label: PropTypes.string,
    numItems: PropTypes.number
  }),
  onExit: PropTypes.func,
  showClose: PropTypes.bool,
  title: PropTypes.string,
};
