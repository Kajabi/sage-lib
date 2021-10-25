import { tns } from "tiny-slider/src/tiny-slider";

Sage.carousel = (function() {

  const containerClass = '.sage-carousel__container';

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
    let mySlider = tns(
      {
        ...options,
        container: containerClass,
      }
    );
  }

  return {
    init,
  };

})();
