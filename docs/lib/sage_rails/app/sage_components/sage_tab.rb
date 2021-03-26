class SageTab < SageComponent
  set_attribute_schema({
    active: [:optional, NilClass, TrueClass],
    attributes: [:optional, NilClass, Hash],
    css_classes: [:optional, String],
    disabled: [:optional, NilClass, TrueClass],
    target: [:optional, NilClass, String],
    text: String,
  })
end
