import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'react-uuid';
import Breadcrumbs from '../Breadcrumbs';

const PageHeading = ({
  className,
  children,
  breadcrumbs,
  actionItems,
  toolbarItems,
  ...rest
}) => (
  <div className={`sage-page-heading ${className}`} {...rest}>
    {breadcrumbs
      && (
      <div className="sage-page-heading__crumbs">
        <Breadcrumbs items={breadcrumbs} className="sage-page-heading__back" />
      </div>
      )
    }
    <h1 className="sage-page-heading__title">
      {children}
    </h1>
    {toolbarItems
      && (
      <div className="sage-page-heading__toolbar">
        {toolbarItems.map(tool => <React.Fragment key={uuid()}>{tool}</React.Fragment>)}
      </div>
      )
    }
    {actionItems
      && (
        <div className="sage-page-heading__actions">
          {actionItems.map(action => <React.Fragment key={uuid()}>{action}</React.Fragment>)}
        </div>
      )
    }
  </div>
);

PageHeading.defaultProps = {
  className: '',
  actionItems: null,
  toolbarItems: null,
  breadcrumbs: null,
};

PageHeading.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  actionItems: PropTypes.arrayOf(PropTypes.node),
  toolbarItems: PropTypes.arrayOf(PropTypes.node),
  breadcrumbs: PropTypes.arrayOf(Breadcrumbs.itemPropTypes),
};

export default PageHeading;
