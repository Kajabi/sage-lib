class SageSearch < SageComponent
  set_attribute_schema({
    contained: [:optional, TrueClass],
    css_classes: [:optional, String],
    id: [:optional, String],
    label_text: [:optional, String],
    placeholder: [:optional, String],
    value: [:optional, String, NilClass],
  })
end
