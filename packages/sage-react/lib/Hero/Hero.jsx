import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Button } from '../Button';
import { HERO_SIZES } from './configs';

export const Hero = ({
  altText,
  children,
  ctaAttributes,
  description,
  branding,
  footerActions,
  image,
  heroSize,
  title,
  titleTag,
  ...rest
}) => {
  const className = classnames(
    'sage-hero',
    {
      [`sage-hero--${heroSize}`]: heroSize,
    },
  );

  const TitleTag = titleTag || 'h2';

  return (
    <article
      className={className}
      {...rest}
    >
      <div className="sage-hero__container">
        <div className="sage-hero__header">
          {branding && (
            <div className="sage-hero__branding">
              {branding}
            </div>
          )}
          {title && (
            <TitleTag className="sage-hero__title">
              {title}
            </TitleTag>
          )}
        </div>
        <div className="sage-hero__body">
          {description && (
            <div className="sage-hero__description">
              {description}
            </div>
          )}
          {footerActions && (
            <div className="sage-hero__footer-actions">
              <Button.Group gap="xs">
                {footerActions}
              </Button.Group>
            </div>
          )}
        </div>
      </div>
      {/* TODO - hook up ctaAttributes */}
      <a href="#" className="sage-hero__artwork">
        <span className="sage-hero__artwork-image-container">
          <img className="sage-hero__artwork-image" src={image.src} alt={image.alt} />
        </span>
      </a>
      {children}
    </article>
  );
};

Hero.Sizes = HERO_SIZES;

Hero.defaultProps = {
  altText: null,
  branding: null,
  ctaAttributes: null,
  children: null,
  description: null,
  footerActions: null,
  image: {
    alt: null,
    src: null
  },
  heroSize: Hero.Sizes.LARGE,
  title: null,
  titleTag: 'h2',
};

Hero.propTypes = {
  altText: PropTypes.string,
  branding: PropTypes.node,
  ctaAttributes: PropTypes.node,
  children: PropTypes.node,
  description: PropTypes.string,
  footerActions: PropTypes.node,
  image: PropTypes.shape({
    alt: PropTypes.string,
    src: PropTypes.string
  }),
  heroSize: PropTypes.oneOf(Hero.Sizes),
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  titleTag: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6'])
};
