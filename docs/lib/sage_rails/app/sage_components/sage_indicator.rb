class SageIndicator < SageComponent
  set_attribute_schema({
    current_item: [:optional, NilClass, Integer],
    label: [:optional, NilClass, String],
    num_items: [:optional, NilClass, Integer],
    preposition: [:optional, NilClass, String],
    show_text: [:optional, NilClass, TrueClass],
  })
end
