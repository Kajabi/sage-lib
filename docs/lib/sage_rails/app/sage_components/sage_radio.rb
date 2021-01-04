class SageRadio < SageComponent
  set_attribute_schema({
    checked: [:optional, TrueClass],
    css_classes: [:optional, String],
    disabled: [:optional, TrueClass],
    has_error: [:optional, TrueClass],
    id: String,
    label_text: String,
    name: String,
    required: [:optional, TrueClass],
    standalone: [:optional, TrueClass],
    value: String,
  })
end
