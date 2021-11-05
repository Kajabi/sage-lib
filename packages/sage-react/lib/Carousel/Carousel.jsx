import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { tns } from 'tiny-slider/dist/tiny-slider';
import { Icon } from '../Icon';
import { Indicator } from '../Indicator';

export const Carousel = ({
  children,
  options,
}) => {
  const baseClass = 'sage-carousel';
  const classNames = classnames(
    baseClass
  );
  const containerClass = '.sage-carousel__carousel';

  const [slidesIndex, setSlidesIndex] = useState(0);
  const [slidesLength, setSlidesLength] = useState(0);
  const [mySlider, setMySlider] = useState(null);

  function handleKeyDown() {}

  function handlePrevArrowClick() {
    if (slidesIndex !== 0) setSlidesIndex(slidesIndex - 1);
  }

  function handleNextArrowClick() {
    if (slidesIndex !== slidesLength - 1) setSlidesIndex(slidesIndex + 1);
  }

  useEffect(() => {
    function init() {
      const slider = document.querySelector(containerClass);
      const slides = [...slider.children];
      let slideContainer;
      setSlidesLength(slides.length);
      slides.forEach((slide, index) => {
        slideContainer = document.createElement('div');
        slideContainer.classList.add('slide');
        slideContainer.setAttribute('aria-roledescription', 'slide');
        slideContainer.setAttribute('role', 'group');
        slideContainer.setAttribute('aria-label', `${index + 1} of ${slidesLength}`);
        slideContainer.appendChild(slide);
        slider.appendChild(slideContainer);
      });

      const basicSlider = tns({
        ...options,
        container: containerClass,
        controls: false,
        nav: false,
      });
      setMySlider(basicSlider);
    }
    init();
  }, [options, slidesLength]);

  useEffect(() => {
    if (mySlider !== null) mySlider.goTo(slidesIndex);
  }, [mySlider, slidesIndex]);

  return (
    <div className={classNames} aria-roledescription="carousel">
      <div className="sage-carousel__container">
        <div
          className="sage-carousel__arrow sage-carousel__arrow--prev"
          onClick={handlePrevArrowClick}
          onKeyDown={handleKeyDown}
          role="button"
          tabIndex={-1}
        >
          <Icon icon="caret-left" size="lg" />
        </div>
        <div className="sage-carousel__sizer">
          <div className="sage-carousel__carousel">
            {children}
          </div>
        </div>
        <div
          className="sage-carousel__arrow sage-carousel__arrow--next"
          onClick={handleNextArrowClick}
          onKeyDown={handleKeyDown}
          role="button"
          tabIndex={-1}
        >
          <Icon icon="caret-right" size="lg" />
        </div>
      </div>
      <div className="sage-carousel__dots">
        <Indicator
          numItems={slidesLength}
          currentItem={slidesIndex + 1}
        />
      </div>
    </div>
  );
};

Carousel.defaultProps = {
  children: null,
  options: null,
};

Carousel.propTypes = {
  children: PropTypes.node,
  options: PropTypes.shape({
    loop: PropTypes.bool,
  }),
};
