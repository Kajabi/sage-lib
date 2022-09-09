class SageSwitch < SageComponent
  set_attribute_schema({
    checked: [:optional, NilClass, TrueClass],
    disabled: [:optional, NilClass, TrueClass],
    has_border: [:optional, NilClass, TrueClass],
    has_error: [:optional, NilClass, TrueClass],
    hide_text: [:optional, NilClass, TrueClass],
    id: String,
    in_list: [:optional, NilClass, TrueClass],
    label_text: String,
    message: [:optional, NilClass, String],
    name: String,
    required: [:optional, NilClass, TrueClass],
    standalone: [:optional, NilClass, TrueClass],
    toggle_position: [:optional, NilClass, Set.new(["right"])],
    type: String,
    value: [:optional, NilClass, String],
  })
end
