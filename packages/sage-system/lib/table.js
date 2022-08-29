Sage.table = (function() {
  // ==================================================
  // Variables
  // ==================================================

  // const SELECTOR_TABLE = "[data-js-table]";
  const SELECTOR_TABLE = ".sage-table";

  // ==================================================
  // Functions
  // ==================================================

  // column sort functions
  function sortEvents() {
    var sortableCols = Sage.util.nodelistToArray(document.querySelectorAll('.sage-table__sort-link'));

    // update sorted column
    sortableCols.forEach(function(column) {
      column.addEventListener('click', function(e) {
        if (e.target.classList.contains('sage-table__sort-link--selected')) {
          this.classList.toggle('sage-table__sort-link--ascending');
        } else {
          // NOTE: IE doesn't support multiple args with classList, so we have to run this twice
          removeActiveStyle(sortableCols, 'sage-table__sort-link--selected');
          removeActiveStyle(sortableCols, 'sage-table__sort-link--ascending');

          this.classList.add('sage-table__sort-link--selected');
        }
      });
    });
  }

  function ResponsiveCellHeaders(elem) {
    var THarray = [];
    var table = document.querySelector(SELECTOR_TABLE);
    var ths = table.getElementsByTagName("th");
    for (var i = 0; i < ths.length; i++) {
      var headingText = ths[i].innerHTML;
      THarray.push(headingText);
    }
    var styleElm = document.createElement("style"),
      styleSheet;
    document.head.appendChild(styleElm);
    styleSheet = styleElm.sheet;
    for (var i = 0; i < THarray.length; i++) {
      styleSheet.insertRule(
        "" +
          elem +
          " td:nth-child(" +
          (i + 1) +
          ')::before {content:"' +
          THarray[i] +
          ': ";}',
        styleSheet.cssRules.length
      );
    }
  }


  // reset classes on elements
  function removeActiveStyle(arr, className) {
    arr.forEach(function(ele) {
      ele.classList.remove(className);
    });
  }


  function init() {
    if (document.querySelector('.sage-table--sortable') !== null) {
      sortEvents();
    }
    if (document.querySelector('.sage-table--sortable') !== null) {
      // ResponsiveCellHeaders(SELECTOR_TABLE);
    }
  }


  return {
    init: init
  };

})();
