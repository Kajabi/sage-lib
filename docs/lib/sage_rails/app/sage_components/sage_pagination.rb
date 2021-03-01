class SagePagination < SageComponent
  set_attribute_schema({
    items: -> (v) { SageSchemaHelper.can_paginate?(v) },
    window: [:optional, Integer],
    hide_pages: [:optional, TrueClass],
    hide_counter: [:optional, TrueClass],
    additional_params: [:optional, Hash],
    collection_name: [:optional, String]
  })

  def initialize(attributes = {})
    super
    self.additional_params ||= {}
  end

  def prev_text
    "Back".html_safe
  end

  def next_text
    "Next".html_safe
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
end
