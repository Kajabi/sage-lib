import { tns } from "tiny-slider/src/tiny-slider";

Sage.carousel = (function() {

  function init(el) {
    console.log('carousel!', tns);
    let mySlider = tns({
      autoWidth: true,
      container: '.my-slider',
      items: 3,
      loop: false,
      mouseDrag: true,
      swipeAngle: false,
      speed: 400
    });
  }

  // if (...) speed = data-js-carousel-speed

  return {
    init,
  };

})();
