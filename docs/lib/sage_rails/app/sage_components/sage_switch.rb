class SageSwitch < SageComponent
  set_attribute_schema({
    css_classes: [:optional, String],
    checked: [:optional, TrueClass],
    disabled: [:optional, TrueClass],
    has_error: [:optional, TrueClass],
    hide_text: [:optional, TrueClass],
    id: String,
    label_text: String,
    name: String,
    message: [:optional, String],
    required: [:optional, TrueClass],
    type: String,
    value: String,
  })
end
