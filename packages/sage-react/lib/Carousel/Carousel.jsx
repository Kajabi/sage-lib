import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { tns } from 'tiny-slider/dist/tiny-slider';
import { CarouselArrow } from './CarouselArrow';
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
  const arrowDisabledClass = 'sage-carousel__arrow--disabled';

  const [slidesIndex, setSlidesIndex] = useState(options.startIndex || 0);
  const [slidesLength, setSlidesLength] = useState(0);
  const [mySlider, setMySlider] = useState(null);
  const [looping, setLooping] = useState(false);
  const [arrowPrev, setArrowPrev] = useState(null);
  const [arrowNext, setArrowNext] = useState(null);

  function handlePrevArrowClick() {
    if (slidesIndex !== 0) setSlidesIndex(slidesIndex - 1);
  }

  function handleNextArrowClick() {
    if (slidesIndex !== slidesLength - 1) setSlidesIndex(slidesIndex + 1);
  }

  useEffect(() => {
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

    setMySlider(tns({
      ...options,
      container: containerClass,
      controls: false,
      nav: false,
    }));

    setLooping(!(options.loop !== undefined && !options.loop));

    setArrowPrev(document.querySelector('.sage-carousel__arrow--prev'));
    setArrowNext(document.querySelector('.sage-carousel__arrow--next'));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [options]);

  useEffect(() => {
    if (mySlider !== null) {
      if (!looping) {
        if (slidesIndex === 0) arrowPrev.classList.add(arrowDisabledClass);
        else arrowPrev.classList.remove(arrowDisabledClass);
        if (slidesIndex === slidesLength - 1) arrowNext.classList.add(arrowDisabledClass);
        else arrowNext.classList.remove(arrowDisabledClass);
      }
      mySlider.goTo(slidesIndex);
      mySlider.events.on('indexChanged', () => {
        setSlidesIndex(mySlider.getInfo().index);
      });
    }
  });

  return (
    <div className={classNames} aria-roledescription="carousel">
      <div className="sage-carousel__container">
        <CarouselArrow
          icon="caret-left"
          id="prev"
          onClickCallback={handlePrevArrowClick}
        />
        <div className="sage-carousel__sizer">
          <div className="sage-carousel__carousel">
            {children}
          </div>
        </div>
        <CarouselArrow
          icon="caret-right"
          id="next"
          onClickCallback={handleNextArrowClick}
        />
      </div>
      <div className="sage-carousel__indicator">
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
    startIndex: PropTypes.number,
  }),
};
