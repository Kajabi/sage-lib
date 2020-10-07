Sage.docs.meter = (function() {

  // ==================================================
  // Functions
  // ==================================================


  function init() {
    var meterUpdate = document.getElementById('pw-meter-example'),
        meterBar = document.getElementById('pw-hint-meter');

    meterUpdate.addEventListener('input', function(e) {
      meterBar.value = e.target.value;
      Sage.meter.updateMeter('[js-meter-type="password"]');
    });
  }


  return {
    init: init
  };

})();
