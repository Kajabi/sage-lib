import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { tns } from 'tiny-slider/dist/tiny-slider';
import { CarouselArrow } from './CarouselArrow';
import { CarouselSlide } from './CarouselSlide';
import { Indicator } from '../Indicator';

export const Carousel = ({
  children,
  options,
  ...rest
}) => {
  const [slidesIndex, setSlidesIndex] = useState(0);
  const [slidesLength, setSlidesLength] = useState(0);
  const [slides, setSlides] = useState(null);
  const [mySlider, setMySlider] = useState(null);
  const [looping, setLooping] = useState(false);
  const [arrowPrevDisabled, setArrowPrevDisabled] = useState(false);
  const [arrowNextDisabled, setArrowNextDisabled] = useState(false);

  const handlePrevArrowClick = () => {
    if (!looping) {
      if (slidesIndex !== 0) setSlidesIndex(slidesIndex - 1);
    } else {
      mySlider.goTo('prev');
    }
  };

  const handleNextArrowClick = () => {
    if (!looping) {
      if (slidesIndex !== slidesLength - 1) setSlidesIndex(slidesIndex + 1);
    } else {
      mySlider.goTo('next');
    }
  };

  useEffect(() => {
    const childrenArray = children.props.children;
    const childrenLength = childrenArray.length;
    setSlides(childrenArray.map((item, index) => (
      <CarouselSlide
        content={item}
        index={index}
        length={childrenLength}
      />
    )));
    setSlidesLength(childrenLength);
  }, [children]);

  useEffect(() => {
    setMySlider(tns({
      ...options,
      container: '.sage-carousel__carousel',
      controls: false,
      nav: false,
    }));
    setLooping(!(options.loop !== undefined && !options.loop));
    setSlidesIndex(options.startIndex !== undefined ? options.startIndex : 0);
  }, [options, slides]);

  useEffect(() => {
    if (mySlider) {
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
    if (mySlider) {
      mySlider.events.on('dragEnd', () => {
        setSlidesIndex(mySlider.getInfo().index);
      });
    }
  }, [mySlider]);

  return (
    <div className="sage-carousel" aria-roledescription="carousel" {...rest}>
      <div className="sage-carousel__container">
        <CarouselArrow
          disabled={arrowPrevDisabled}
          icon="caret-left"
          id="prev"
          onClickCallback={handlePrevArrowClick}
        />
        <div className="sage-carousel__sizer">
          <div className="sage-carousel__carousel">
            {slides}
          </div>
        </div>
        <CarouselArrow
          disabled={arrowNextDisabled}
          icon="caret-right"
          id="next"
          onClickCallback={handleNextArrowClick}
        />
      </div>
      {!looping && (
        <Indicator
          className="sage-carousel__indicator"
          currentItem={slidesIndex + 1}
          numItems={slidesLength}
        />
      )}
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
