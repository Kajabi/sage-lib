import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Modal } from './Modal';
import { Grid } from '../Grid';

export const ModalScrollableCols = ({
  active,
  className,
  headerActions,
  headerImage,
  form,
  isClosing,
  onExit,
  preview,
  title,
  ...rest
}) => {
  const classNames = classnames(
    'modal-scrollable-cols__modal',
    className,
  );

  return (
    <Modal
      active={active}
      className={classNames}
      size={Modal.SIZES.LG}
      {...rest}
    >
      <Modal.Header
        image={headerImage}
        title={title}
        aside={headerActions}
      />
      <Modal.Body>
        <Grid.Row className="modal-scrollable-cols__container">
          <Grid.Col className="modal-scrollable-cols__sidebar modal-scrollable-cols__fixed-column">
            {form && (
              <div className="modal-scrollable-cols__fixed-column-scroll">
                { form }
              </div>
            )}
          </Grid.Col>
          <Grid.Col className="modal-scrollable-cols__preview modal-scrollable-cols__fixed-column">
            {preview && (
              <div className="modal-scrollable-cols__fixed-column-scroll">
                { preview }
              </div>
            )}
          </Grid.Col>
        </Grid.Row>
      </Modal.Body>
    </Modal>
  );
};

ModalScrollableCols.defaultProps = {
  active: false,
  className: '',
  headerActions: null,
  headerImage: null,
  form: null,
  isClosing: PropTypes.bool,
  onExit: (val) => val,
  preview: null,
  title: '',
};

ModalScrollableCols.propTypes = {
  active: PropTypes.bool,
  className: PropTypes.string,
  headerActions: PropTypes.node,
  headerImage: PropTypes.string,
  form: PropTypes.node,
  isClosing: PropTypes.bool,
  onExit: PropTypes.func,
  preview: PropTypes.node,
  title: PropTypes.string,
};
