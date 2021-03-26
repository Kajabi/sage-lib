class SageProperty < SageComponent
  set_attribute_schema({
    css_classes: [:optional, String],
    icon: [:optional, String],
    value: [:optional, String],
  })
end
