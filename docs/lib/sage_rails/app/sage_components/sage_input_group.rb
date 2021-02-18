class SageInputGroup < SageComponent
  set_attribute_schema({
    group_id: [:optional, String],
    has_button: [:optional, TrueClass],
    has_hint: [:optional, TrueClass],
    group_button_type: [:optional, String],
    group_button_icon: [:optional, String],
    group_button_text: [:optional, String],
    group_button_text_hidden: [:optional, TrueClass],
    group_button_tooltip: [:optional, TrueClass],
    group_button_tooltip_text: [:optional, String],
    group_button_tooltip_position: [:optional, String, Set.new(["top", "right", "bottom", "left"])],
    group_button_tooltip_size: [:optional, String, Set.new(["small", "large"])],
  })
end
