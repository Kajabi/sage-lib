import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const TabsPane = ({
  card,
  cardSpacing,
  children,
  className,
  id,
  isActive,
  panelSpacing,
  ...rest
}) => {
  const classNames = classnames(
    'sage-tabs-pane',
    className,
    {
      'sage-tabs-pane--card': card,
      'sage-tabs-pane--card-spacing': cardSpacing,
      'sage-tabs-pane--active': isActive,
      'sage-tabs-pane--panel-spacing': panelSpacing,
    }
  );

  return (
    <div
      className={classNames}
      id={id}
      role="tabpanel"
      {...rest}
    >
      {isActive && children /* Optimization: Don't init/render child components unless active */}
    </div>
  );
};

TabsPane.defaultProps = {
  card: false,
  cardSpacing: false,
  className: null,
  isActive: false,
  panelSpacing: false,
};

TabsPane.propTypes = {
  card: PropTypes.bool,
  cardSpacing: PropTypes.bool,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  id: PropTypes.string.isRequired,
  isActive: PropTypes.bool,
  panelSpacing: PropTypes.bool,
};

export default TabsPane;
