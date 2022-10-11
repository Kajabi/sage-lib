import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { ExpandableCard } from '../ExpandableCard';
import { tabsItemsPropTypes } from '../Tabs/configs';

export const Accordion = ({
  className,
  children,
  id,
  // onExpand,
  onlyOnePanelExpanded,
  ...rest
}) => {
  const classNames = classnames(
    'sage-accordion',
    className,
    {
      'sage-accordion--one-panel-expanded': onlyOnePanelExpanded,
    }
  );

  // const [activePanel, setActivePanel] = useState('ExpandableCard-0');

  // const handleChange = useCallback((event) => {
  //   setActivePanel(activePanel);
  //   if (onExpand) {
  //     onExpand(event, activePanel);
  //   }
  // }, [activePanel, setActivePanel, onExpand]);

  return (
    <div className={classNames} {...rest}>
      {children}
    </div>
  );
};

Accordion.defaultProps = {
  children: null,
  className: '',
  id: '',
  onlyOnePanelExpanded: false,
};

Accordion.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  id: PropTypes.string,
  onlyOnePanelExpanded: PropTypes.bool,
};
