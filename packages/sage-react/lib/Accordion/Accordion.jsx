import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { ExpandableCard } from '../ExpandableCard';

export const Accordion = ({
  className,
  children,
  id,
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

  const onChildClick = (args) => {
    // i now have the name and index
    // identify which child was expanded based on args
    // args = name + index
    // idx for example will be ExpandableCard-1
    // iterate and be sure the others setexpanded is set to false
  };

  return (
    <div className={classNames} {...rest}>
      {children.props.children.map((child, idx) => {
        console.log ('Type: ', child.type, ' Props: ', child.props);
        return <child.type name={`${child.type.name}-${idx}`} {...child.props} onClick={onChildClick} />;
      })}
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
