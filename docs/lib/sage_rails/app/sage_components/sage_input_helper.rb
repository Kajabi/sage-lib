class SageInputHelper < SageComponent
  set_attribute_schema({
    helper_id: [:optional, String],
    helper_target: [:optional, String],
    description: [:optional, String],
    hints: [:optional, [[{
      id: String,
      type_detect: [:optional, String],
      type_detect_min: [:optional, Integer],
      text: [:optional, String],
    }]]],
  })
end
