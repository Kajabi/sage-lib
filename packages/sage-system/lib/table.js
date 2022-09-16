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

  // TODO: Q: do this for each table
  function ResponsiveCellHeaders(elem) {
    var THarray = [];
    var tables = document.querySelectorAll(SELECTOR_TABLE);
    tables.forEach(table => {
      // var table = document.querySelector(SELECTOR_TABLE);
      var ths = table.getElementsByTagName("th");
      for (var i = 0; i < ths.length; i++) {
        var headingText = ths[i].innerHTML.trim();
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
            ')::before { content:"' + THarray[i] + ': ";}',
          styleSheet.cssRules.length
        );
      }
    })
  }

  // https://adrianroselli.com/2018/02/tables-css-display-properties-and-aria.html
  // https://adrianroselli.com/2018/05/functions-to-add-aria-to-tables-and-lists.html
  function AddTableARIA() {
    try {
      var allTables = document.querySelectorAll('table');
      for (var i = 0; i < allTables.length; i++) {
        allTables[i].setAttribute('role','table');
      }
      var allRowGroups = document.querySelectorAll('thead, tbody, tfoot');
      for (var i = 0; i < allRowGroups.length; i++) {
        allRowGroups[i].setAttribute('role','rowgroup');
      }
      var allRows = document.querySelectorAll('tr');
      for (var i = 0; i < allRows.length; i++) {
        allRows[i].setAttribute('role','row');
      }
      var allCells = document.querySelectorAll('td');
      for (var i = 0; i < allCells.length; i++) {
        allCells[i].setAttribute('role','cell');
      }
      var allHeaders = document.querySelectorAll('th');
      for (var i = 0; i < allHeaders.length; i++) {
        allHeaders[i].setAttribute('role','columnheader');
      }
      // this accounts for scoped row headers
      var allRowHeaders = document.querySelectorAll('th[scope=row]');
      for (var i = 0; i < allRowHeaders.length; i++) {
        allRowHeaders[i].setAttribute('role','rowheader');
      }
      // caption role not needed as it is not a real role and
      // browsers do not dump their own role with display block
    } catch (e) {
      console.log("AddTableARIA(): " + e);
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
      ResponsiveCellHeaders(SELECTOR_TABLE);
    }

    AddTableARIA();
  }


  return {
    init: init
  };

})();
