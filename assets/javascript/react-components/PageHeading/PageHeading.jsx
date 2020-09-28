import React from 'react';
import PropTypes from 'prop-types';
import Breadcrumbs from '../Breadcrumbs';

const PageHeading = ({
  breadcrumbs,
  children,
  className,
}) => (
  <div className={`sage-page-heading ${className}`}>
    <h1 className="sage-page-heading__title">{children}</h1>
    {breadcrumbs && (
      <Breadcrumbs items={breadcrumbs} />
    )}
  </div>
);

PageHeading.defaultProps = {
  breadcrumbs: null,
  className: '',
};

PageHeading.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  breadcrumbs: PropTypes.arrayOf({
    label: PropTypes.string,
    url: PropTypes.string,
    onClick: PropTypes.func,
  }),
};

export default PageHeading;
