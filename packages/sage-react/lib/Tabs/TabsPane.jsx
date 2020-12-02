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

  return isActive && children ? (
    <div
      className={classNames}
      id={id}
      role="tabpanel"
      {...rest}
    >
      {children}
    </div>
  ) : null;
};

TabsPane.defaultProps = {
  card: false,
  cardSpacing: false,
  children: null,
  className: null,
  isActive: false,
  panelSpacing: false,
};

TabsPane.propTypes = {
  card: PropTypes.bool,
  cardSpacing: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  id: PropTypes.string.isRequired,
  isActive: PropTypes.bool,
  panelSpacing: PropTypes.bool,
};

export default TabsPane;
