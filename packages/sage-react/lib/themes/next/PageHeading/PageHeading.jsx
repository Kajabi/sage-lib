import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'react-uuid';
import classnames from 'classnames';
import { Breadcrumbs } from '../Breadcrumbs';

export const PageHeading = ({
  actionItems,
  breadcrumbs,
  className,
  children,
  help,
  image,
  introText,
  toolbarItems,
  secondaryText,
  ...rest
}) => (
  <div
    className={classnames(
      'sage-page-heading',
      className,
      {
        'sage-page-heading--no-secondary-text': !secondaryText,
        'sage-page-heading--has-image': image.src,
      }
    )}
    {...rest}
  >
    {breadcrumbs && (
      <div className="sage-page-heading__crumbs">
        <Breadcrumbs items={breadcrumbs} className="sage-page-heading__back" />
      </div>
    )}
    {introText && (
      <div className="sage-page-heading__intro">
        <p>{introText}</p>
      </div>
    )}
    <div className="sage-page-heading__title-wrapper">
      <h1 className="sage-page-heading__title">
        {children}
      </h1>
      {help && (
        <>
          {help}
        </>
      )}
    </div>
    {image.src && (
      <div className="sage-page-heading__image">
        <img alt={image.alt || ''} src={image.src} />
      </div>
    )}
    {toolbarItems && (
      <div className="sage-page-heading__toolbar">
        {toolbarItems.map((tool) => <React.Fragment key={uuid()}>{tool}</React.Fragment>)}
      </div>
    )}
    {actionItems && (
      <div className="sage-page-heading__actions">
        {actionItems.map((action) => <React.Fragment key={uuid()}>{action}</React.Fragment>)}
      </div>
    )}
    {secondaryText && (
      <div className="sage-page-heading__secondary">
        {secondaryText}
      </div>
    )}
  </div>
);

PageHeading.defaultProps = {
  actionItems: null,
  breadcrumbs: null,
  className: '',
  help: null,
  image: {},
  introText: null,
  toolbarItems: null,
  secondaryText: null,
};

PageHeading.propTypes = {
  actionItems: PropTypes.arrayOf(PropTypes.node),
  breadcrumbs: PropTypes.arrayOf(Breadcrumbs.itemPropTypes),
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  help: PropTypes.node,
  image: PropTypes.shape({
    alt: PropTypes.string,
    src: PropTypes.string,
  }),
  introText: PropTypes.string,
  secondaryText: PropTypes.string,
  toolbarItems: PropTypes.arrayOf(PropTypes.node),
};
