import { tns } from "tiny-slider/src/tiny-slider";

Sage.carousel = (function() {

  const containerClass = '.sage-carousel__carousel';
  const dotActiveClass = 'sage-indicator--current';
  const arrowDisabledClass = 'sage-carousel__arrow--disabled';

  let arrowPrev;
  let arrowNext;
  let mySlider;
  let mySliderInfo;
  let options;
  let slidesLength;
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

    arrowPrev = document.querySelector('.sage-carousel__arrow--prev');
    arrowPrev.addEventListener('click', handlePrevArrowClick);

    arrowNext = document.querySelector('.sage-carousel__arrow--next');
    arrowNext.addEventListener('click', handleNextArrowClick);

    if (!looping) {
      let dot;
      let dotNumber;
      let dotContainer = document.createElement('ul');
      let dots = document.querySelector('.sage-carousel__dots');
      dotContainer.classList.add('sage-indicator-list');
      dotContainer.setAttribute('aria-label', 'Showing 1 of ' + slidesLength);
      dots.appendChild(dotContainer);
      for (let i = 0; i < slidesLength; i++) {
        dot = document.createElement('li');
        dot.classList.add('sage-indicator');
        dotNumber = document.createElement('span');
        dotNumber.classList.add('visually-hidden');
        dotNumber.innerHTML = i + 1;
        dot.appendChild(dotNumber);
        document.querySelector('.sage-indicator-list').appendChild(dot);
      };
    }

    const indicators = document.querySelectorAll('.sage-indicator');
    indicators[0].classList.add(dotActiveClass);
    mySlider.events.on('indexChanged', () => {
      indicators.forEach((indicator) => {
        indicator.classList.remove(dotActiveClass);
      });
      indicators[mySlider.getInfo().index].classList.add(dotActiveClass);
    });

    goToSlide(0);
  }

  function goToSlide(num) {
    if (!looping) {
      if (num === 0) arrowPrev.classList.add(arrowDisabledClass);
      else arrowPrev.classList.remove(arrowDisabledClass);
      if (num === slidesLength - 1) arrowNext.classList.add(arrowDisabledClass);
      else arrowNext.classList.remove(arrowDisabledClass);
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
