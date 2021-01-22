class SageFormTextarea < SageComponent
  set_attribute_schema({
    content: [:optional, String],
    disabled: [:optional, TrueClass],
    has_error: [:optional, TrueClass],
    id: String,
    label_text: [:optional, String],
    message_text: [:optional, String],
    placeholder: [:optional, String],
  })
end
