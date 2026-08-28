class SagePagination < SageComponent
  set_attribute_schema({
    align: [:optional, NilClass, Set.new(["center"])],
    items: -> (v) { SageSchemas.can_paginate?(v) },
    window: [:optional, NilClass, Integer],
    hide_pages: [:optional, NilClass, TrueClass],
    hide_counter: [:optional, NilClass, TrueClass],
    additional_params: [:optional, NilClass, Hash],
    count_key: [:optional, NilClass, String],
    collection_name: [:optional, NilClass, String],
    page_count_prefix: [:optional, NilClass, String],
    page_count_suffix: [:optional, NilClass, String],
  })

  def initialize(attributes = {})
    super
    self.additional_params ||= {}
  end

  # Reads one composed sentence from `count_key` and interpolates the page numbers
  # into it, so a locale owns the word order and the plural form of the noun.
  #
  # `collection_name` with `page_count_prefix`/`page_count_suffix` is the superseded
  # API: it assembles the sentence here and inflects the noun in English, which no
  # locale can reorder or pluralize. It stays for call sites that have not moved.
  def page_count(collection)
    (composed_page_count(collection) || fragment_page_count(collection)).html_safe
  end

  def pagination_text(text)
    %(<span class="sage-pagination__page-text">#{ERB::Util.html_escape(text)}</span>).html_safe
  end

  private

  def composed_page_count(collection)
    return if count_key.blank?

    total = collection.total_count
    last = collection.last_page? ? total : collection.offset_value + collection.limit_value

    I18n.t(
      "#{count_key}.#{collection.total_pages < 2 ? "single_page" : "multi_page"}",
      count: total,
      first: emphasized(collection.offset_value + 1),
      last: emphasized(last),
      total: emphasized(total),
      collection: ERB::Util.html_escape(collection_name),
      default: nil
    )
  end

  def fragment_page_count(collection)
    name = collection_name.presence || collection.entry_name || "Record"
    entry_name = name.titleize.pluralize(collection.total_count)

    if collection.total_pages < 2
      "<strong>#{collection.total_count}</strong> #{entry_name}"
    else
      first = collection.offset_value + 1
      last = collection.last_page? ? collection.total_count : collection.offset_value + collection.limit_value
      "<strong>#{first}</strong> - <strong>#{last}</strong> of <strong>#{collection.total_count}</strong> #{entry_name}"
    end
  end

  def emphasized(value)
    "<strong>#{ERB::Util.html_escape(value)}</strong>"
  end
end
