import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Button } from '../Button';
import { HERO_SIZES } from './configs';
import { SageClassnames } from '../configs';

export const Hero = ({
  borderless,
  children,
  ctaAttributes,
  customBackgroundColor,
  description,
  contained,
  footerActions,
  image,
  imageStart,
  heroSize,
  title,
  titleTag,
  ...rest
}) => {
  const className = classnames(
    'sage-hero',
    {
      [`sage-hero--${heroSize}`]: heroSize,
      'sage-hero--borderless': borderless,
      'sage-hero--contained': contained,
      'sage-hero--image-start': imageStart,
      'sage-hero--custom-background-color': customBackgroundColor,
    },
  );

  const TitleTag = titleTag || 'h2';

  const renderArtwork = (
    <span className="sage-hero__artwork-image-container">
      <img className="sage-hero__artwork-image" src={image.src} alt={image.alt || ''} />
    </span>
  );

  return (
    <article
      className={className}
      style={{ '--custom-background-color': customBackgroundColor || '' }}
      {...rest}
    >
      {title && (
        <TitleTag className="sage-hero__title">
          {title}
        </TitleTag>
      )}
      <div className="sage-hero__body">
        {description && (
          <div className={`${SageClassnames.SPACERS.MD_BOTTOM} sage-hero__description`}>
            {description}
          </div>
        )}
        {footerActions && (
          <div className="sage-hero__footer-actions">
            <Button.Group gap="md">
              {footerActions}
            </Button.Group>
          </div>
        )}
      </div>
      {ctaAttributes ? (
        <a className="sage-hero__artwork sage-hero__artwork--cta" {...ctaAttributes}>
          {renderArtwork}
        </a>
      ) : (
        <div className="sage-hero__artwork">
          {renderArtwork}
        </div>
      )}
      {children}
    </article>
  );
};

Hero.Sizes = HERO_SIZES;

Hero.defaultProps = {
  borderless: null,
  ctaAttributes: null,
  children: null,
  contained: null,
  customBackgroundColor: null,
  description: null,
  footerActions: null,
  image: {
    alt: null,
    src: null
  },
  imageStart: null,
  heroSize: Hero.Sizes.LARGE,
  title: null,
  titleTag: 'h2',
};

Hero.propTypes = {
  borderless: PropTypes.bool,
  ctaAttributes: PropTypes.node,
  children: PropTypes.node,
  contained: PropTypes.bool,
  customBackgroundColor: PropTypes.string,
  description: PropTypes.string,
  footerActions: PropTypes.node,
  image: PropTypes.shape({
    alt: PropTypes.string,
    src: PropTypes.string
  }),
  imageStart: PropTypes.bool,
  heroSize: PropTypes.oneOf(Hero.Sizes),
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  titleTag: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6'])
};
