Sage.table = (function() {
  // ==================================================
  // Variables
  // ==================================================

  const RESPONSIVE_TABLE = ".sage-table--stack";
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

  // create alternative table headings for responsive "stacked" tables
  function ResponsiveCellHeaders(elem) {
    const tables = document.querySelectorAll(RESPONSIVE_TABLE);

    const cellHeaderTemplate = (textLabel) => {
      const cellHeader = document.createElement('span');

      cellHeader.classList.add('sage-table-cell__heading--responsive');
      cellHeader.innerText = textLabel.trim(); // trim whitespace just in case

      // content must be hidden from screen readers since it duplicates table headers
      cellHeader.setAttribute('aria-hidden', true);

      return cellHeader;
    };

    tables.forEach(table => {
      const headers = table.querySelectorAll('.sage-table__header');
      const rows = table.querySelectorAll('tbody tr');
      const tableWrapper = table.parentElement;
      const tableHeadings = [];

      tableWrapper.classList.add("sage-table-wrapper__overflow--stack");

      // populate an array with each table's headers
      headers.forEach(header => {
        const label = header.textContent.trim();
        tableHeadings.push(label);
      })

      rows.forEach(row => {
        if (!row.hasChildNodes()) return; // skip empty rows

        const cells = Array.from(row.children);

        // add header text to each cell
        const updatedCells = cells.map((cell, i) => {
          if (!tableHeadings[i].length) return; // skip empty headers

          const newHeader = cellHeaderTemplate(tableHeadings[i]);
          cell.prepend(newHeader);
        });

        // find cells with special cases (positioned content, multiple children)
        cells.forEach((cell) => {
          const checkboxes = cell.querySelectorAll(".sage-checkbox");
          const badges = cell.querySelectorAll(".sage-badge");
          const containers = cell.querySelectorAll("div");

          if (checkboxes.length) {
            cell.classList.add('sage-table-cell--checkbox');
          }

          if (badges.length || containers.length) {
            cell.classList.add('sage-table-cell--group');
          }
        })
      })
    })
  }

  function setAriaRole(args) {
    // expects an object of the form { items: "<selector(s)>", role: "<role to represent>" }
    // based on:
    // https://adrianroselli.com/2018/02/tables-css-display-properties-and-aria.html
    // https://adrianroselli.com/2018/05/functions-to-add-aria-to-tables-and-lists.html
    const group = document.querySelectorAll(args.items);

    group.forEach(el => {
      el.setAttribute('role', args.role);
    });
  }

  function addTableAria() {
    const tableItems = [
      { items: 'thead th', role: 'columnheader' },
      { items: 'tbody', role: 'rowgroup' },
      { items: 'tbody tr', role: 'row' },
      { items: 'tbody td', role: 'cell' },
    ];

    tableItems.map((item) => setAriaRole(item));
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
    if (document.querySelector(RESPONSIVE_TABLE) !== null && window.innerWidth <= MOBILE_TABLE_MAX_WIDTH) {
      addTableAria();
      ResponsiveCellHeaders(RESPONSIVE_TABLE);
    }
  }


  return {
    init: init
  };

})();
