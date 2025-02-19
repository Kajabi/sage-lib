import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Breadcrumbs } from '../Breadcrumbs';
import { KjbElementIds } from '../configs';

export const PageHeading = ({
  actions,
  breadcrumbs,
  className,
  children,
  help,
  image,
  introText,
  toolbar,
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
    data-kjb-element={KjbElementIds.pageHeadingHeading}
    {...rest}
  >
    {breadcrumbs && (
      <div className="sage-page-heading__crumbs">
        <Breadcrumbs items={breadcrumbs} className="sage-page-heading__back" kjbElementId={KjbElementIds.pageHeadingBreadcrumbs} />
      </div>
    )}
    {introText && (
      <div className="sage-page-heading__intro">
        <p>{introText}</p>
      </div>
    )}
    <div className="sage-page-heading__title-wrapper">
      <h1 className="sage-page-heading__title" data-kjb-element={KjbElementIds.pageHeadingTitle}>
        {children}
      </h1>
      {help && (
        <>
          {help}
        </>
      )}
    </div>
    {image.src && (
      <div className="sage-page-heading__image" data-kjb-element={KjbElementIds.pageHeadingImage}>
        <img alt={image.alt || ''} src={image.src} />
      </div>
    )}
    {toolbar && (
      <div className="sage-page-heading__toolbar">
        {toolbar}
      </div>
    )}
    {actions && (
      <div className="sage-page-heading__actions">
        <div className="sage-page-heading__actions-inner">
          {actions}
        </div>
      </div>
    )}
    {secondaryText && (
      <div className="sage-page-heading__secondary" data-kjb-element={KjbElementIds.pageHeadingSubTitle}>
        {secondaryText}
      </div>
    )}
  </div>
);

PageHeading.defaultProps = {
  actions: null,
  breadcrumbs: null,
  className: '',
  help: null,
  image: {},
  introText: null,
  toolbar: null,
  secondaryText: null,
};

PageHeading.propTypes = {
  actions: PropTypes.node,
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
  toolbar: PropTypes.node,
};
