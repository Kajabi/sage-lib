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

  const [slidesIndex, setSlidesIndex] = useState(0);
  const [slidesLength, setSlidesLength] = useState(0);
  const [mySlider, setMySlider] = useState(null);
  const [looping, setLooping] = useState(false);
  const [arrowPrevDisabled, setArrowPrevDisabled] = useState(false);
  const [arrowNextDisabled, setArrowNextDisabled] = useState(false);

  function handlePrevArrowClick() {
    if (!looping) {
      if (slidesIndex !== 0) setSlidesIndex(slidesIndex - 1);
    } else {
      mySlider.goTo('prev');
    }
  }

  function handleNextArrowClick() {
    if (!looping) {
      if (slidesIndex !== slidesLength - 1) setSlidesIndex(slidesIndex + 1);
    } else {
      mySlider.goTo('next');
    }
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
    setSlidesIndex(options.startIndex !== undefined ? options.startIndex : 0);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (mySlider !== null) {
      if (!looping) {
        if (slidesIndex === 0) setArrowPrevDisabled(true);
        else setArrowPrevDisabled(false);
        if (slidesIndex === slidesLength - 1) setArrowNextDisabled(true);
        else setArrowNextDisabled(false);
      }
      mySlider.goTo(slidesIndex);
    }
  }, [mySlider, looping, slidesIndex, slidesLength]);

  useEffect(() => {
    if (mySlider !== null) {
      mySlider.events.on('dragEnd', () => {
        setSlidesIndex(mySlider.getInfo().index);
      });
    }
  }, [mySlider]);

  return (
    <div className={classNames} aria-roledescription="carousel">
      <div className="sage-carousel__container">
        <CarouselArrow
          disabled={arrowPrevDisabled}
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
          disabled={arrowNextDisabled}
          icon="caret-right"
          id="next"
          onClickCallback={handleNextArrowClick}
        />
      </div>
      <div className="sage-carousel__indicator">
        {!looping && (
          <Indicator
            numItems={slidesLength}
            currentItem={slidesIndex + 1}
          />
        )}
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
