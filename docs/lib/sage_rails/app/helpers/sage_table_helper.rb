module SageTableHelper

  class SageColumn
    attr_reader :template, :attribute, :block, :title, :label, :opts
    delegate :sage_table_sortable_header_link, to: :template

    def initialize(template, attribute, block, opts={})
      @attribute = attribute.to_sym
      @block = block || Proc.new { |r| r.send(attribute).to_s }
      @template = template
      @opts = opts
      @label = opts[:label] || attribute.to_s.titleize

      if template.try(:sortable?, attribute)
        @title = sortable_title
      else
        @title = label
      end
    end

    def align
      opts[:align]
    end

    def class_name
      opts[:class]
    end

    def data_type
      opts[:data_type]
    end

    def header_class
      opts[:header_class]
    end

    def hide
      opts[:hide]
    end

    def hide_classes
      hide_classes_base = ""
      hide_classes_base << " sage-col--sm-hide" if hide[:sm]
      hide_classes_base << " sage-col--md-hide" if hide[:md]
      hide_classes_base << " sage-col--lg-hide" if hide[:lg]

      hide_classes_base
    end

    def strong
      opts[:strong]
    end

    def style
      opts[:style]
    end

    def truncate
      opts[:truncate]
    end

    def value_for(record)
      block.call record
    end

    protected

    def asc?
      template.sort_direction == "asc"
    end

    def current?
      attribute.to_s == template.sort_column
    end

    def sortable_title
      sage_table_sortable_header_link label, attribute
    end

  end

  class SageTableFor
    attr_reader :caption, :columns, :condensed, :template, :id, :class_name, :collection, :row_proc, :sortable, :responsive, :striped, :reset_above, :reset_below
    delegate :content_tag, :tag, to: :template

    def initialize(template, collection, opts={})
      @template = template
      @caption = opts[:caption]
      @class_name = opts[:class]
      @condensed = opts[:condensed]
      @collection = collection
      @reset_above = opts[:reset_above]
      @reset_below = opts[:reset_below]
      @responsive = opts[:responsive]
      @sortable = opts[:sortable]
      @striped = opts[:striped]
      @id = opts[:id]
      @columns = []
    end

    def row_options(&block)
      @row_proc = block
    end

    def column(attr, opts={})
      block = Proc.new if block_given?
      columns << SageColumn.new(template, attr, block, opts)
    end

    def contents
      wrapper_classes = "sage-table-wrapper"
      wrapper_classes << " sage-table-wrapper--reset-above" if reset_above
      wrapper_classes << " sage-table-wrapper--reset-below" if reset_below
      wrapper_classes << " sage-table-wrapper--scroll" if responsive
      
      content_tag "div", class: wrapper_classes do
        if responsive
          content_tag "div", class: "sage-table-wrapper__overflow" do
            table_contents
          end
        else
          table_contents
        end
      end
    end

    protected

    def table_contents
      table_classes = "sage-table"
      table_classes << " sage-table--condensed" if condensed
      table_classes << " sage-table--sortable" if sortable
      table_classes << " sage-table--striped" if striped
      table_classes << " #{class_name}" if striped

      content_tag "table", id: id, class: table_classes do
        caption + head + body
      end
    end

    def caption
      content_tag "caption" do
        @caption
      end
    end

    def head
      content_tag "thead" do
        content_tag "tr" do
          columns.map { |c| column_header(c) }.join.html_safe
        end
      end
    end

    def body
      content_tag "tbody" do
        collection.map { |r| row(r) }.join.html_safe
      end
    end

    def column_header(c)
      col_class = "sage-table__header sage-table-cell"
      col_class << " sage-table-cell--align-#{c.align}" if c.align
      col_class << " sage-table-cell--#{c.data_type}" if c.data_type
      col_class << " #{c.header_class}" if c.header_class
      col_class << c.hide_classes if c.hide
      col_class << " sage-table-cell--truncate" if c.truncate

      content_tag "th", style: c.style, class: col_class do
        c.title
      end
    end

    def row(record)
      content_tag "tr", row_proc.call(record) do
        columns.map do |c|
          col_class = "sage-table-cell"
          col_class << " sage-table-cell--align-#{c.align}" if c.align
          col_class << " #{c.class_name}" if c.class_name
          col_class << " sage-table-cell--#{c.data_type}" if c.data_type
          col_class << c.hide_classes if c.hide
          col_class << " sage-table-cell--strong" if c.strong
          col_class << " sage-table-cell--truncate" if c.truncate

          content_tag "td", style: c.style, class: col_class do
            c.value_for(record)
          end
        end.join.html_safe
      end
    end

    def row_proc
      @row_proc ||= Proc.new do |record|
        {}
      end
    end
  end

  def sage_table_for(collection, opts={})
    table = SageTableFor.new self, collection, opts
    yield table if block_given?

    table.contents
  end

  def sage_table_sortable_header_link(label, attribute)
    current = attribute.to_s == sort_column
    asc = sort_direction == "asc"
    next_direction = asc ? "desc" : "asc"

    css_class = "sage-table__sort-link"
    css_class << " sage-table__sort-link--selected" if current
    css_class << " sage-table__sort-link--ascending" if asc

    link_to label, unsafe_params.merge({ sort: attribute, direction: next_direction }), class: css_class
  end
end
