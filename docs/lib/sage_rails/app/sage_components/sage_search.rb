class SageSearch < SageComponent
  set_attribute_schema({
    id: [:optional, String],
    value: [:optional, String, NilClass],
    placeholder: [:optional, String],
    contained: [:optional, TrueClass],
    label_text: [:optional, String],
  })
end
