import { tns } from "tiny-slider/src/tiny-slider";

Sage.carousel = (function() {

  const containerClass = '.sage-carousel__carousel';
  const dotActiveClass = 'sage-carousel__dot--active';
  let slidesLength;
  let mySlider;
  let mySliderInfo;

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

    const options = JSON.parse(document
      .querySelector('.sage-carousel')
      .getAttribute('data-js-carousel-options')
    );
    mySlider = tns({
      ...options,
      container: containerClass,
      controls: false,
      nav: false,
    });
    mySliderInfo = mySlider.getInfo();

    document
      .querySelector('.sage-carousel__arrow--prev')
      .addEventListener('click', handlePrevArrowClick);
    document
      .querySelector('.sage-carousel__arrow--next')
      .addEventListener('click', handleNextArrowClick);

    let dots = document.querySelector('.sage-carousel__dots');
    let dot;
    for (let i = 0; i < slidesLength; i++) {
      dot = document.createElement('div');
      dot.classList.add('sage-carousel__dot');
      dot.setAttribute('index', i);
      dot.addEventListener('click', handleDotClick);
      dots.appendChild(dot);
    };

    goToSlide(0);
  }

  let dots;
  function goToSlide(num) {
    dots = [...document.getElementsByClassName('sage-carousel__dot')];
    dots.forEach((dot) => {
      dot.classList.remove(dotActiveClass);
    });
    dots[num].classList.add(dotActiveClass);
    mySlider.goTo(num);
  }

  function handleDotClick(evt) {
    goToSlide(evt.target.getAttribute('index'));
  }

  function handlePrevArrowClick() {
    mySliderInfo = mySlider.getInfo();
    if (mySliderInfo.index !== 0) goToSlide(mySliderInfo.index - 1);
  }

  function handleNextArrowClick() {
    mySliderInfo = mySlider.getInfo();
    if (mySliderInfo.index !== slidesLength - 1) goToSlide(mySliderInfo.index + 1);
  }

  return {
    init,
  };

})();
