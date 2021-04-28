class SageIndicator < SageComponent
  set_attribute_schema({
    css_classes: [:optional, String],
    current_item: [:optional, Integer],
    label: [:optional, String],
    num_items: [:optional, Integer],
  })
end
