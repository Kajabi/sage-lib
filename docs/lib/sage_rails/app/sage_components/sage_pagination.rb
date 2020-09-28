class SagePagination < SageComponent
  attr_accessor :items
  attr_accessor :window
  attr_accessor :pager_params

  def prev_text
    "Back".html_safe
  end

  def next_text
    "Next".html_safe
  end

  def page_count(collection)
    entry_name = collection.entry_name
    entry_name = entry_name.pluralize unless collection.total_count == 1

    if collection.total_pages < 2
      "<strong>#{collection.total_count}</strong> Records"
    else
      first = collection.offset_value + 1
      last = collection.last_page? ? collection.total_count : collection.offset_value + collection.limit_value
      "<strong>#{first}</strong> - <strong>#{last}</strong> of <strong>#{collection.total_count}</strong> Records" 
    end.html_safe
  end

end
