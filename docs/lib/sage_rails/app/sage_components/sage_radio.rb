class SageRadio < SageComponent
  set_attribute_schema({
    attributes: [:optional, Hash],
    caption: [:optional, String],
    checked: [:optional, TrueClass],
    css_classes: [:optional, String],
    disabled: [:optional, TrueClass],
    has_border: [:optional, TrueClass],
    has_error: [:optional, TrueClass],
    id: String,
    label_text: String,
    name: String,
    required: [:optional, TrueClass],
    standalone: [:optional, TrueClass],
    toggle_position: [:optional, String],
    value: String,
  })
end
