Sage.table = (function() {

  // ==================================================
  // Functions
  // ==================================================

  // column sort functions
  function sortEvents() {
    var sortableCols = Sage.util.nodelistToArray(document.querySelectorAll('.sage-table__sort'));

    // update sorted column
    sortableCols.forEach(function(column) {
      column.addEventListener('click', function(e) {
        if (e.target.classList.contains('sage-table__sort--selected')) {
          this.classList.toggle('sage-table__sort--ascending');
        } else {
          // NOTE: IE doesn't support multiple args with classList, so we have to run this twice
          removeActiveStyle(sortableCols, 'sage-table__sort--selected');
          removeActiveStyle(sortableCols, 'sage-table__sort--ascending');

          this.classList.add('sage-table__sort--selected');
        }
      });
    });
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
  }


  return {
    init: init
  };

})();
