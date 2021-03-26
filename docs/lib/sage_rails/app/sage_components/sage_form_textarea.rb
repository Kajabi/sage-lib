class SageFormTextarea < SageComponent
  set_attribute_schema({
    content: [:optional, String],
    css_classes: [:optional, String],
    disabled: [:optional, TrueClass],
    has_error: [:optional, TrueClass],
    id: String,
    label_text: [:optional, String],
    message_text: [:optional, String],
    name: [:optional, String],
    placeholder: [:optional, String],
  })
end
