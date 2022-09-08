class SageInputGroup < SageComponent
  set_attribute_schema({
    disabled: [:optional, NilClass, TrueClass],
    group_buttons: [:optional, [[NilClass, {
      display_on_focus: [:optional, NilClass, TrueClass],
      icon: [:optional, NilClass, String],
      text: [:optional, NilClass, String],
      text_hidden: [:optional, NilClass, TrueClass],
      tooltip: [:optional, NilClass, TrueClass],
      tooltip_position: [:optional, NilClass, String, Set.new(["top", "right", "bottom", "left"])],
      tooltip_size: [:optional, NilClass, String, Set.new(["small", "large"])],
      tooltip_text: [:optional, NilClass, String],
    }]]],
    group_id: [:optional, NilClass, String],
    has_button: [:optional, NilClass, TrueClass],
    input_type: [:optional, NilClass, String],
  })
end
