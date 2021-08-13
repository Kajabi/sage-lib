Sage.dynamicSelect = (function() {
  function init(el) {
    this.data = $(el);
    this.opts = {
      // Sets the url for the dynamic dropdown
      url: data.data('url'),
      // Enable pagination, the dropdown will infinitely scroll until the result
      // set returns 0 results.
      paginate: data.data('paginate'),
      // Enables typeahead search for the resource, passing a "search" param in
      // the requested url
      search: data.data('search'),
      // Adds a clear button so selection can be cleared/set back to the blank state
      clear: data.data('clear'),
      // Sets the placeholder for the dynamic dropdown
      placeholder: data.data('placeholder'),
      // Sets the theme to default to bootstrap/sage
      theme: data.data('theme'),
      // Sets the width of the dynamic dropdown
      width: "100%",
      // Chooses which attribute to use for setting the value of the given select
      // box, by default this will be the "id", but sometimes is is useful to set
      // it to some other attribute
      valueAttribute: "id",
    };

    this.select2 = data.select2({
      minimumResultsForSearch: this.opts.search ? 0 : Infinity,
      theme: this.opts.theme,
      width: this.opts.width,
      placeholder: this.opts.placeholder,
      allowClear: this.opts.clear,
      ajax: {
        delay: 500,
        url: function () {
          return $(data).data("url");
        },
        cache: true,
        data: function (params) {
          return {
            search: params.term,
            page: params.page
          };
        },
        processResults: function (data, params) {
          var results = data.results ? data.results : data;
          formattedData = $.map(results, function (obj) {
            obj.id = obj[this.opts.valueAttribute];
            return obj;
          }.bind(this));

          params.page = params.page || 1;
          $(data).select2.data = formattedData;
          var showMore = data.totalCount ? (params.page * 25) < data.totalCount : true;

          return {
            results: formattedData,
            pagination: { more: this.opts.paginate && results.length !== 0 && showMore }
          };
        }.bind(this)
      }
    });

    this.$container = this.data.next();

    const { $container, select2 } = this

    if (data.data('theme') === 'sage') {
      // add sage class
      $(select2).data('select2').$selection.addClass("sage-select__field");
      // add arrow icon
      const iconTemplate =  '<i class="sage-select__arrow" aria-hidden="true"></i>';
      $container.append(iconTemplate);
    }

    // set a default option for the input
    const defaultValue = data.data('defaultValue');
    const defaultText = data.data('defaultText');
    const newOption = new Option(defaultText, defaultValue, false, false);
    $(select2).append(newOption).trigger('change');

    // add event listeners
    $(select2).on('select2:open', function (e) {
      // callback for when select box is opened
    });
    $(select2).on('select2:close', function (e) {
      // callback for when select box is closed
    });

    // function for updating input on change //
    const updateInput = function() {
      const selectedValue = $(this.data).val();
      const classActive = 'sage-select--value-selected';
      const selectWrapper = $($container).parent();
      const selectLabel = $($container).parent().find('.sage-select__label');

      Sage.util.isEmptyString(selectedValue) ? selectWrapper.removeClass(classActive) : selectWrapper.addClass(classActive)
      Sage.util.isEmptyString(selectedValue) ? selectLabel.hide() : selectLabel.fadeIn(500);
    }.bind(this);

    // input change event listener
    $(this.data).on('change', function(){ updateInput() });

    updateInput();
  }

  return {
    init,
  }
})();