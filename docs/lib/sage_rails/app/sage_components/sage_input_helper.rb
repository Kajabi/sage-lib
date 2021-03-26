class SageInputHelper < SageComponent
  set_attribute_schema({
    css_classes: [:optional, String],
    description: [:optional, String],
    helper_id: [:optional, String],
    helper_target: [:optional, String],
    hints: [:optional, [[{
      id: String,
      text: [:optional, String],
      type_detect: [:optional, String],
      type_detect_min: [:optional, Integer],
    }]]],
  })
end
