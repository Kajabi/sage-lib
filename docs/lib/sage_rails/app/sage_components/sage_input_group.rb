class SageInputGroup < SageComponent
  set_attribute_schema({
    disabled: [:optional, TrueClass],
    group_buttons: [:optional, [[{
      display_on_focus: [:optional, TrueClass],
      icon: [:optional, String],
      text: [:optional, String],
      text_hidden: [:optional, TrueClass],
      tooltip: [:optional, TrueClass],
      tooltip_position: [:optional, String, Set.new(["top", "right", "bottom", "left"])],
      tooltip_size: [:optional, String, Set.new(["small", "large"])],
      tooltip_text: [:optional, String],
    }]]],
    group_id: [:optional, String],
    has_button: [:optional, TrueClass],
    has_hint: [:optional, TrueClass],
    input_type: [:optional, String],
  })
end
