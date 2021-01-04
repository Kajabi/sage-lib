class SageChoice < SageComponent
  set_attribute_schema({
    active: [:optional, TrueClass],
    align_center: [:optional, TrueClass],
    attributes: [:optional, Hash],
    disabled: [:optional, TrueClass],
    icon: [:optional, String],
    subtext: [:optional, String],
    target: [:optional, String],
    text: String,
    type: Set.new(["icon", "radio", "arrow"]),
  })
end
