import { tns } from "tiny-slider/src/tiny-slider";

Sage.carousel = (function() {

  const containerClass = '.sage-carousel__carousel';
  const arrowDisabledClass = 'sage-carousel__arrow--disabled';
  const indicatorActiveClass = 'sage-indicator--current';

  let arrowPrev;
  let arrowNext;
  let mySlider;
  let mySliderInfo;
  let options;
  let slidesLength;
  let looping;
  let startingSlide;
  let indicators;

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
    startingSlide = options.startIndex || 0;

    mySlider = tns({
      ...options,
      container: containerClass,
      controls: false,
      nav: false,
    });
    mySliderInfo = mySlider.getInfo();

    arrowPrev = document.querySelector('.sage-carousel__arrow--prev');
    arrowPrev.addEventListener('click', handlePrevArrowClick);

    arrowNext = document.querySelector('.sage-carousel__arrow--next');
    arrowNext.addEventListener('click', handleNextArrowClick);

    if (!looping) {
      let indicator;
      let indicatorNumber;
      let indicatorList = document.createElement('ul');
      let indicatorContainer = document.querySelector('.sage-carousel__indicator');
      indicatorList.classList.add('sage-indicator-list');
      indicatorList.setAttribute('aria-label', 'Showing 1 of ' + slidesLength);
      indicatorContainer.appendChild(indicatorList);
      for (let i = 0; i < slidesLength; i++) {
        indicator = document.createElement('li');
        indicator.classList.add('sage-indicator');
        indicatorNumber = document.createElement('span');
        indicatorNumber.classList.add('visually-hidden');
        indicatorNumber.innerHTML = i + 1;
        indicator.appendChild(indicatorNumber);
        document.querySelector('.sage-indicator-list').appendChild(indicator);
      };
    }

    indicators = document.querySelectorAll('.sage-indicator');

    goToSlide(startingSlide);
  }

  function goToSlide(num) {
    if (!looping) {
      if (num === 0) arrowPrev.classList.add(arrowDisabledClass);
      else arrowPrev.classList.remove(arrowDisabledClass);
      if (num === slidesLength - 1) arrowNext.classList.add(arrowDisabledClass);
      else arrowNext.classList.remove(arrowDisabledClass);
      indicators.forEach((indicator) => {
        indicator.classList.remove(indicatorActiveClass);
      });
      indicators[num].classList.add(indicatorActiveClass);
      mySlider.goTo(num);
    };
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

  return {
    init,
  };

})();
