class SageCardBlock < SageComponent
  set_attribute_schema({
    css_classes: [:optional, String],
    color: [:optional, String],
    type_block: [:optional, TrueClass],
  })
end
