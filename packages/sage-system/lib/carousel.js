import { tns } from "tiny-slider/src/tiny-slider";

Sage.carousel = (function() {

  function init(el) {
    const options = JSON.parse(document.querySelector('.sage-carousel').getAttribute('data-js-carousel-options'));
    let mySlider = tns(
      {
        ...options,
        container: '.my-slider',
      }
    );
  }

  return {
    init,
  };

})();
