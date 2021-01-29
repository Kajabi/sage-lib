class SageIndicator < SageComponent
  set_attribute_schema({
    current_item: [:optional, Integer],
    label: [:optional, String],
    num_items: [:optional, Integer],
  })
end
