Sage.table = (function() {
  // ==================================================
  // Variables
  // ==================================================

  // const SELECTOR_TABLE = "[data-js-table]";
  const SELECTOR_TABLE = ".sage-table";
  const MOBILE_TABLE_MAX_WIDTH = "767"; // SM_MAX

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

  function applyAriaRoles(args) {
    // expects an object of the form { items: "<selector(s)>", role: "<role to represent>" }
    // based on:
    // https://adrianroselli.com/2018/02/tables-css-display-properties-and-aria.html
    // https://adrianroselli.com/2018/05/functions-to-add-aria-to-tables-and-lists.html
    const group = document.querySelectorAll(args.items);

    group.forEach(el => {
      el.setAttribute('role', args.role);
    })
  }

  function addTableAria() {
    const tableItems = [
      { items: 'table', role: 'table' },
      { items: 'thead, tbody, tfoot', role: 'rowgroup' },
      { items: 'tr', role: 'row' },
      { items: 'td', role: 'cell' },
      { items: 'th', role: 'columnheader' },
      { items: 'th[scope=row]', role: 'rowheader' },
    ];

    tableItems.map((item) => applyAriaRoles(item));
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
    if (document.querySelector(SELECTOR_TABLE) !== null && window.innerWidth <= MOBILE_TABLE_MAX_WIDTH) {
      addTableAria();
      ResponsiveCellHeaders(SELECTOR_TABLE);
    }
  }


  return {
    init: init
  };

})();
