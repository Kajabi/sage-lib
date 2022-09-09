class SageSearch < SageComponent
  set_attribute_schema({
    contained: [:optional, NilClass, TrueClass],
    disabled: [:optional, NilClass, TrueClass],
    hide_label: [:optional, NilClass, TrueClass],
    id: [:optional, NilClass, String],
    label_text: [:optional, NilClass, String],
    placeholder: [:optional, NilClass, String],
    value: [:optional, NilClass, String],
  })
end
