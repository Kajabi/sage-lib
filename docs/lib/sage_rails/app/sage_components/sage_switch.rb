class SageSwitch < SageComponent
  set_attribute_schema({
    checked: [:optional, TrueClass],
    disabled: [:optional, TrueClass],
    has_border: [:optional, TrueClass],
    has_error: [:optional, TrueClass],
    hide_text: [:optional, TrueClass],
    id: String,
    in_list: [:optional, TrueClass],
    label_text: String,
    message: [:optional, String],
    name: String,
    required: [:optional, TrueClass],
    standalone: [:optional, TrueClass],
    toggle_position: [:optional, Set.new(["right"])],
    type: String,
    value: [:optional, String],
  })
end
