import { tns } from "tiny-slider/src/tiny-slider";

Sage.carousel = (function() {

  const containerClass = '.my-slider';

  function init(el) {
    const slider = document.querySelector(containerClass);
    const slides = slider.children;

    const slidesArray = [...slides];

    console.log('slider:', slider);
    console.log('slides:', slides);
    console.log('slidesArray:', slidesArray);
    slidesArray.forEach((slide) => {
      console.log('slide:', slide);
      let slideContainer = document.createElement('div');
      slideContainer.classList.add('slide');
      slideContainer.appendChild(slide);
      slider.appendChild(slideContainer);
    });

    const options = JSON.parse(document.querySelector('.sage-carousel').getAttribute('data-js-carousel-options'));
    // let mySlider = tns(
    //   {
    //     ...options,
    //     container: containerClass,
    //   }
    // );
  }

  return {
    init,
  };

})();
