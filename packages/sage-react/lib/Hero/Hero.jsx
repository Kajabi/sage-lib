import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const Hero = ({
  altText,
  button,
  ctaAttributes,
  description,
  image,
  title,
  titleTag,
  ...rest
}) => {
  const TagName = titleTag ? titleTag : 'h2';

  const classNames = classnames(
    'sage-hero',
  );

  const imageAttributes = {};
  if (altText === '' || altText === null) {
    imageAttributes['aria-hidden'] = true;
  }

  return (
    <article className={classNames} {...rest}>
      <TagName className="sage-hero__title">
        {title}
      </TagName>
      <div class="sage-hero__body">
        <p>{description}</p>
        {button}
      </div>
      <a href="#" className="sage-hero__artwork">
        <img className="sage-hero__artwork-image" src={image} {...imageAttributes} />
      </a>
    </article>
  );
};

Hero.defaultProps = {
  altText: '',
  button: '',
  ctaAttributes: '',
  description: 'This is the Hero description',
  image: '',
  title: 'My Title',
  titleTag: 'h2',
};

Hero.propTypes = {
  altText: PropTypes.string,
  button: PropTypes.object,
  ctaAttributes: PropTypes.object,
  description: PropTypes.string,
  image: PropTypes.string,
  title: PropTypes.string,
  titleTag: PropTypes.string,
};

export default Hero;
