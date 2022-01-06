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
  header,
  headerIndicator,
  children,
  className,
  id,
  image,
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
    />
    <Modal.Body className="sage-creation-wizard__modal-content">
      {headerIndicator && (
        <>
          <Indicator
            currentItem={indicator.currentItem}
            label={indicator.label}
            numItems={indicator.numItems}
          />
        </>
      )}

      {body && (
        <Grid.Col size="5" className="sage-creation-wizard__form">
          <div className="sage-creation-wizard__form-content">
            {body}
          </div>

          {bodyActions && (
            <div className="sage-creation-wizard__form-actions">
              {bodyActions}
            </div>
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
  children: null,
  className: null,
  feature: null,
  header: null,
  headerIndicator: null,
  id: null,
  image: null,
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
  children: PropTypes.node,
  className: PropTypes.string,
  feature: PropTypes.arrayOf(PropTypes.node),
  header: PropTypes.arrayOf(PropTypes.node),
  headerIndicator: PropTypes.arrayOf(PropTypes.node),
  id: PropTypes.string.isRequired,
  image: PropTypes.shape({
    alt: PropTypes.string,
    src: PropTypes.string
  }),
  indicator: PropTypes.shape({
    currentItem: PropTypes.number,
    label: PropTypes.string,
    numItems: PropTypes.number
  }),
  onExit: PropTypes.func,
  showClose: PropTypes.bool,
  title: PropTypes.string,
};
