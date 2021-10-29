import { tns } from "tiny-slider/src/tiny-slider";

Sage.carousel = (function() {

  const containerClass = '.sage-carousel__carousel';
  const dotActiveClass = 'sage-carousel__dot--active';
  const arrowDisabledClass = 'sage-carousel__arrow--disabled';

  let arrowPrev;
  let arrowNext;
  let mySlider;
  let mySliderInfo;
  let options;
  let slidesLength;
  let dots;
  let looping;

  function init() {
    const slider = document.querySelector(containerClass);
    const slides = [...slider.children];
    let slideContainer;
    slidesLength = slides.length;
    slides.forEach((slide, index) => {
      slideContainer = document.createElement('div');
      slideContainer.classList.add('slide');
      slideContainer.setAttribute('aria-roledescription', 'slide');
      slideContainer.setAttribute('role', 'group');
      slideContainer.setAttribute('aria-label', `${index + 1} of ${slidesLength}`);
      slideContainer.appendChild(slide);
      slider.appendChild(slideContainer);
    });

    options = JSON.parse(document
      .querySelector('.sage-carousel')
      .getAttribute('data-js-carousel-options')
    );

    looping = !(options.loop !== undefined && !options.loop);

    mySlider = tns({
      ...options,
      container: containerClass,
      controls: false,
      nav: false,
    });
    mySliderInfo = mySlider.getInfo();
    mySlider.events.on('dragEnd', handleDragEnd);

    arrowPrev = document.querySelector('.sage-carousel__arrow--prev');
    arrowPrev.addEventListener('click', handlePrevArrowClick);

    arrowNext = document.querySelector('.sage-carousel__arrow--next');
    arrowNext.addEventListener('click', handleNextArrowClick);

    if (!looping) {
      let dot;
      for (let i = 0; i < slidesLength; i++) {
        dot = document.createElement('div');
        dot.classList.add('sage-carousel__dot');
        dot.setAttribute('index', i);
        dot.addEventListener('click', handleDotClick);
        document.querySelector('.sage-carousel__dots').appendChild(dot);
      };
    }

    goToSlide(0);
  }

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
    };
  }

  function handleDotClick(evt) {
    goToSlide(parseInt(evt.target.getAttribute('index')));
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

  return {
    init,
  };

})();
