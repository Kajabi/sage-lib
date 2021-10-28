import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { tns } from 'tiny-slider/dist/tiny-slider';
import { Icon } from '../Icon';

export const Carousel = ({
  children,
  options,
}) => {
  const baseClass = 'sage-carousel';
  const classNames = classnames(
    baseClass
  );

  const containerClass = '.sage-carousel__carousel';
  const dotActiveClass = 'sage-carousel__dot--active';
  const arrowDisabledClass = 'sage-carousel__arrow--disabled';

  let arrowPrev;
  let arrowNext;
  let mySlider;
  let mySliderInfo;
  let slidesLength;
  let dots;
  let looping;

  function goToSlide(num) {
    if (!looping) {
      if (num === 0) arrowPrev.classList.add(arrowDisabledClass);
      else arrowPrev.classList.remove(arrowDisabledClass);
      if (num === slidesLength - 1) arrowNext.classList.add(arrowDisabledClass);
      else arrowNext.classList.remove(arrowDisabledClass);
      dots = [...document.getElementsByClassName('sage-carousel__dot')];
      dots.forEach((dot) => {
        dot.classList.remove(dotActiveClass);
      });
      dots[num].classList.add(dotActiveClass);
      mySlider.goTo(num);
    }
  }

  function handleDotClick(evt) {
    goToSlide(parseInt(evt.target.getAttribute('index'), 10));
  }

  function handlePrevArrowClick() {
    mySliderInfo = mySlider.getInfo();
    if (!looping) {
      if (mySliderInfo.index !== 0) goToSlide(mySliderInfo.index - 1);
    } else {
      mySlider.goTo('prev');
    }
  }

  function handleNextArrowClick() {
    mySliderInfo = mySlider.getInfo();
    if (!looping) {
      if (mySliderInfo.index !== slidesLength - 1) goToSlide(mySliderInfo.index + 1);
    } else {
      mySlider.goTo('next');
    }
  }

  function handleDragEnd() {
    mySliderInfo = mySlider.getInfo();
    goToSlide(mySliderInfo.index);
  }

  function handleKeyDown(evt) {
    if (evt.keyCode === 37) handlePrevArrowClick();
    else if (evt.keyCode === 39) handleNextArrowClick();
  }

  function init() {
    const slider = document.querySelector(containerClass);
    const slides = [...slider.children];
    let slideContainer;
    slidesLength = slides.length;
    slides.forEach((slide) => {
      slideContainer = document.createElement('div');
      slideContainer.classList.add('slide');
      slideContainer.appendChild(slide);
      slider.appendChild(slideContainer);
    });

    mySlider = tns({
      ...options,
      container: containerClass,
      controls: false,
      nav: false,
    });
    mySliderInfo = mySlider.getInfo();
    mySlider.events.on('dragEnd', handleDragEnd);

    looping = !(options.loop !== undefined && !options.loop);

    arrowPrev = document.querySelector('.sage-carousel__arrow--prev');
    arrowNext = document.querySelector('.sage-carousel__arrow--next');

    if (!looping) {
      let dot;
      for (let i = 0; i < slidesLength; i += 1) {
        dot = document.createElement('div');
        dot.classList.add('sage-carousel__dot');
        dot.setAttribute('index', i);
        dot.addEventListener('click', handleDotClick);
        document.querySelector('.sage-carousel__dots').appendChild(dot);
      }
    }

    goToSlide(0);
  }

  useEffect(() => {
    init();
  });

  return (
    <div className={classNames}>
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
      <div className="sage-carousel__dots" />
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
