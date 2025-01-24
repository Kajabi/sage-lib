import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export const Accordion = ({
  className,
  children,
  id,
  onlyOnePanelExpanded,
  kjbElementId,
  ...rest
}) => {
  const classNames = classnames(
    'sage-accordion',
    className,
    {
      'sage-accordion--one-panel-expanded': onlyOnePanelExpanded,
    }
  );

  return (
    <div className={classNames} {...rest} data-kjb-element={kjbElementId}>
      {children}
    </div>
  );
};

Accordion.defaultProps = {
  children: null,
  className: '',
  id: '',
  onlyOnePanelExpanded: false,
  kjbElementId: null,
};

Accordion.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  id: PropTypes.string,
  onlyOnePanelExpanded: PropTypes.bool,
  kjbElementId: PropTypes.string,
};
