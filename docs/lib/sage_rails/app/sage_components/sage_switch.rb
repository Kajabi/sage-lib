class SageSwitch < SageComponent
  set_attribute_schema({
    checked: [:optional, TrueClass],
    disabled: [:optional, TrueClass],
    has_border: [:optional, TrueClass],
    has_error: [:optional, TrueClass],
    hide_text: [:optional, TrueClass],
    id: String,
    label_text: String,
    name: String,
    message: [:optional, String],
    required: [:optional, TrueClass],
    standalone: [:optional, TrueClass],
    toggle_position: [:optional, Set.new(["right"])],
    type: String,
    value: String,
  })
end
