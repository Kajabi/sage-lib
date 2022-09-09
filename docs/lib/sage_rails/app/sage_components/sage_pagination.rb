class SagePagination < SageComponent
  set_attribute_schema({
    align: [:optional, NilClass, Set.new(["center"])],
    items: -> (v) { SageSchemas.can_paginate?(v) },
    window: [:optional, NilClass, Integer],
    hide_pages: [:optional, NilClass, TrueClass],
    hide_counter: [:optional, NilClass, TrueClass],
    additional_params: [:optional, NilClass, Hash],
    collection_name: [:optional, NilClass, String],
    page_count_prefix: [:optional, NilClass, String],
    page_count_suffix: [:optional, NilClass, String],
  })

  def initialize(attributes = {})
    super
    self.additional_params ||= {}
  end

  def page_count(collection)

    name = collection_name.presence || collection.entry_name || "Record"
    entry_name = name.titleize.pluralize(collection.total_count)

    if collection.total_pages < 2
      "<strong>#{collection.total_count}</strong> #{entry_name}"
    else
      first = collection.offset_value + 1
      last = collection.last_page? ? collection.total_count : collection.offset_value + collection.limit_value
      "<strong>#{first}</strong> - <strong>#{last}</strong> of <strong>#{collection.total_count}</strong> #{entry_name}"
    end.html_safe
  end

  def pagination_text(text)
    %(<span class="sage-pagination__page-text">#{text}</span>).html_safe
  end
end
