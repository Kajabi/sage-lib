import { tns } from "tiny-slider/src/tiny-slider";

Sage.carousel = (function() {

  const containerClass = '.sage-carousel__carousel';
  const dotActiveClass = 'sage-carousel__dot--active';
  let mySlider;

  function init(el) {
    const slider = document.querySelector(containerClass);
    const slides = [...slider.children];
    slides.forEach((slide) => {
      let slideContainer = document.createElement('div');
      slideContainer.classList.add('slide');
      slideContainer.appendChild(slide);
      slider.appendChild(slideContainer);
    });

    const options = JSON.parse(document.querySelector('.sage-carousel').getAttribute('data-js-carousel-options'));
    console.log('options:', options);
    mySlider = tns(
      {
        ...options,
        container: containerClass,
        controls: false,
        nav: false,
      }
    );

    let arrowPrev = document.querySelector('.sage-carousel__arrow--prev');
    arrowPrev.addEventListener('click', () => {
      mySlider.goTo('prev');
    });

    let arrowNext = document.querySelector('.sage-carousel__arrow--next');
    arrowNext.addEventListener('click', () => {
      mySlider.goTo('next');
    });

    let dots = document.querySelector('.sage-carousel__dots');
    for (let i = 0; i < slides.length; i++) {
      let dot = document.createElement('div');
      dot.classList.add('sage-carousel__dot');
      dot.setAttribute('index', i);
      dot.addEventListener('click', handleDotClick);
      if (i === 0) dot.classList.add(dotActiveClass);
      dots.appendChild(dot);
    };
  }

  function handleDotClick(evt) {
    console.log('handleDotClick:', evt);
    let dots = [...document.getElementsByClassName('sage-carousel__dot')];
    dots.forEach((dot) => {
      dot.classList.remove(dotActiveClass);
    });
    evt.target.classList.add(dotActiveClass);
    mySlider.goTo(evt.target.getAttribute('index'));
  }

  return {
    init,
  };

})();
