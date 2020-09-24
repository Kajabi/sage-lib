Sage.inputhelper = (function() {

  // ==================================================
  // Variables
  // ==================================================
  var zxcvbn = require('zxcvbn');
  var spcValues = /(?=.*[~`!@#$%^&*|(){}/=:;.,<>+-])/g;
  var numValues = /(?=[0-9])/g;
  var minLengthPW = 8;

  var visibleHintClass = "sage-input-helper--visible";
  var passingClass = "sage-hint__list-item--success";
  var inputErrorClass = "sage-input--error";
  var sageMeterBar = ".sage-meter__bar";
  var sageMeterBarDesc = document.querySelector(".sage-meter__description");

  var meterLevels = {
    low: 0.25,
    med: 0.5,
    high: 0.75,
    max: 0.9
  };


  // ==================================================
  // Functions
  // ==================================================

  // update strength level of password
  function updateStrengthMeter(inputValue, meter, reqsMet) {
    var trueScore, revisedScore;

    if (typeof zxcvbn !== "undefined") {
      trueScore = zxcvbn(inputValue).score;
      // artificially reduce score if requirements are not met
      revisedScore = (reqsMet === true ? trueScore : limitScore(trueScore));
      // update meter value
      meter.value = revisedScore;
      // append corresponding classes and text
      Sage.meter.updateMeter(sageMeterBar);
      updateStrengthText(sageMeterBarDesc, revisedScore);
    } else {
      // hides meter if zxcvbn library is not loaded
      meter.closest(".sage-meter").style.display = "none";
    }
  }

  function limitScore(num) {
    return num > 1 ? num - 1 : num;
  }

  // update strength level text description
  function updateStrengthText(ele, score) {
    var constraints = Sage.meter.getMeterValues(sageMeterBar);
    var meterText = getMeterTextLabels(ele);
    var meterPct = score / constraints.max;

    if (meterPct >= meterLevels.max) {
      ele.innerText = meterText.max;
    } else if (meterPct >= meterLevels.high) {
      ele.innerText = meterText.high;
    } else if (meterPct >= meterLevels.med) {
      ele.innerText = meterText.med;
    } else if (meterPct >= meterLevels.low) {
      ele.innerText = meterText.low;
    } else {
      ele.innerText = "";
    }
  }

  // retrieve data attributes to use as text labels
  function getMeterTextLabels(ele) {
    return {
      low: ele.getAttribute("data-low-text"),
      med: ele.getAttribute("data-med-text"),
      high: ele.getAttribute("data-high-text"),
      max: ele.getAttribute("data-max-text")
    }
  }

  // test value against regex string
  function regexTest(str, testMatch) {
    return testMatch.test(str);
  }

  // check for password length
  function pwLength(str) {
    return str.length >= minLengthPW;
  }

  function checkRequirements(ele, reqs, meter) {
    var val = ele.value;
    var metChar = false,
        metSym = false,
        metNum = false,
        metAllReqs = false;

    reqs.forEach(function(item) {
      if (item.type === "characters") {
        metChar = updateCriteria(pwLength(val), item.id);
      } else if (item.type === "symbols") {
        metSym = updateCriteria(regexTest(val, spcValues), item.id);
      } else if (item.type === "numbers") {
        metNum = updateCriteria(regexTest(val, numValues), item.id);
      }
    });

    // all requirements are met
    if (metChar && metSym && metNum) {
      metAllReqs = true;
      ele.parentElement.classList.remove(inputErrorClass);
    }

    updateStrengthMeter(val, meter, metAllReqs);
  }

  // toggles item criteria
  function updateCriteria(bool, itemID) {
    var criteria = document.getElementById(itemID);

    if (bool === true ) {
      criteria.classList.add(passingClass);
    } else {
      criteria.classList.remove(passingClass);
    }
    return bool;
  }


  // toggles visibility of helper window
  function toggleHintIE(ele, className) {
    if (ele.classList.contains(className)) {
      ele.classList.remove(className);
    } else {
      ele.classList.add(className);
    }
  }


  // trigger classes for active state in IE
  function focusBlurIE(field) {
    field.addEventListener("focus", function(e) {
      toggleHintIE(helper, visibleHintClass);
    });
    field.addEventListener("blur", function(e) {
      toggleHintIE(helper, visibleHintClass);
    });
  }


  // bind events related to each input helper for passwords
  function bindPWEvents(helper) {
    var fieldID = helper.getAttribute("data-js-helper-target"),
        field = document.getElementById(fieldID),
        meter = helper.querySelector(".sage-meter__bar");

    var helperList = Sage.util.nodelistToArray(helper.querySelectorAll(".sage-hint__list-item")),
        helperReqItems = helperList.map(function(ele) {
          return {
            id: ele.id,
            type: ele.getAttribute("data-js-hint-type") || null
          }
        });

    if (Sage.util.isIE()) {
      focusBlurIE(field);
    }

    field.addEventListener("input", function(e) {
      var targetField = e.target,
          fieldParent = e.target.parentElement;

      // add error state
      fieldParent.classList.add(inputErrorClass);
      checkRequirements(targetField, helperReqItems, meter);
    });
  }


  function init() {
    if (document.querySelector("[data-js-helper-target]") !== null) {
      var helperTargets = Sage.util.nodelistToArray(document.querySelectorAll("[data-js-helper-target]"));

      helperTargets.forEach(function(helper) {
        bindPWEvents(helper);
      });
    }
  }


  return {
    init: init,
    updateStrengthMeter: updateStrengthMeter
  };

})();
