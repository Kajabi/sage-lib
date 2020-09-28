Sage.meter = (function() {

  // ==================================================
  // Functions
  // ==================================================

  // builds an object from meter data
  function getMeterValues(ele) {
    var meter = document.querySelector(ele);

    return {
      current: meter.value,
      optimum: attributeValue(meter, "optimum"),
      min: attributeValue(meter, "min"),
      max: attributeValue(meter, "max")
    };
  }


  // appends classes to meter for styling of current state
  function updateMeter(ele) {
    var meter = document.querySelector(ele),
        values = getMeterValues(ele),
        optimumThreshold = 0.5;

    // reset any meter classes
    meter.className = "sage-meter__bar";

    // assign new class based on current value
    if (values.current === values.max) {
      meter.classList.add('sage-meter__bar--max');
    } else if ((values.optimum !== 0) && values.current >= values.optimum) {
      meter.classList.add('sage-meter__bar--optimum');
    } else if ((values.optimum !== 0) && ((values.current / values.optimum) > optimumThreshold)) {
      meter.classList.add('sage-meter__bar--med');
    } else if (values.current <= values.max)  {
      meter.classList.add('sage-meter__bar--low');
    }
  }


  // retrieve attribute value or default to 0
  function attributeValue(ele, attributeName) {
    return ele.hasAttribute(attributeName) ? parseInt(ele.getAttribute(attributeName)) : 0;
  }


  function init() {
    if (document.querySelector('[js-meter-type="password"]') !== null) {
      updateMeter('[js-meter-type="password"]');
    }
  }


  return {
    init: init,
    getMeterValues: getMeterValues,
    updateMeter: updateMeter
  };

})();
