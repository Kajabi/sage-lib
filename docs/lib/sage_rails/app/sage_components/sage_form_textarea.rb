class SageFormTextarea < SageComponent
  set_attribute_schema({
    content: [:optional, NilClass, String],
    disabled: [:optional, NilClass, TrueClass],
    has_error: [:optional, NilClass, TrueClass],
    id: String,
    label_text: [:optional, NilClass, String],
    message_text: [:optional, NilClass, String],
    name: [:optional, NilClass, String],
    placeholder: [:optional, NilClass, String],
  })
end
