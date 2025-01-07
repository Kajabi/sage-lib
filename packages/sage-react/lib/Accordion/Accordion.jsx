import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export const Accordion = ({
  className,
  children,
  id,
  onlyOnePanelExpanded,
  testId,
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
    <div className={classNames} {...rest} data-kjb-element={testId}>
      {children}
    </div>
  );
};

Accordion.defaultProps = {
  children: null,
  className: '',
  id: '',
  onlyOnePanelExpanded: false,
  testId: null,
};

Accordion.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  id: PropTypes.string,
  onlyOnePanelExpanded: PropTypes.bool,
  testId: PropTypes.string,
};
