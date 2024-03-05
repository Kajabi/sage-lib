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
  className,
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
  const classNames = classnames(
    'sage-hero',
    className,
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
      className={classNames}
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
  borderless: false,
  ctaAttributes: null,
  children: null,
  contained: false,
  className: null,
  customBackgroundColor: null,
  description: null,
  footerActions: null,
  image: {
    alt: null,
    src: null
  },
  imageStart: false,
  heroSize: Hero.Sizes.LARGE,
  title: null,
  titleTag: 'h2',
};

Hero.propTypes = {
  /**
   * If true, will remove the border.
   */
  borderless: PropTypes.bool,
  /**
   * The attributes for the CTA link.
   */
  ctaAttributes: PropTypes.shape({
    href: PropTypes.string
  }),
  /**
   * The content to be rendered within the Hero.
   */
  children: PropTypes.node,
  /**
   * If true, the image will not fill the space.
   */
  contained: PropTypes.bool,
  /**
   * Allows a custom class name to apply to the component.
   */
  className: PropTypes.string,
  /**
   * The background color to be applied to the Hero.
   */
  customBackgroundColor: PropTypes.string,
  /**
   * The description to be rendered within the Hero.
   */
  description: PropTypes.string,
  /**
   * The actions to be rendered within the Hero's footer.
   */
  footerActions: PropTypes.node,
  /**
   * The image to be rendered within the Hero.
   */
  image: PropTypes.shape({
    alt: PropTypes.string,
    src: PropTypes.string
  }),
  /**
   * If true, the image will be rendered before the content.
   */
  imageStart: PropTypes.bool,
  /**
   * Sets the size of the Hero's width.
   */
  heroSize: PropTypes.oneOf(Hero.Sizes),
  /**
   * The title to be rendered within the Hero.
   */
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  /**
   * The HTML tag to be applied to the title.
   */
  titleTag: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6'])
};
