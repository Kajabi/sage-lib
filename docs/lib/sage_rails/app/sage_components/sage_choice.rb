class SageChoice < SageComponent
  set_attribute_schema({
    active: [:optional, NilClass, TrueClass],
    align_center: [:optional, TrueClass],
    attributes: [:optional, NilClass, Hash],
    disabled: [:optional, NilClass, TrueClass],
    icon: [:optional,NilClass, String],
    subtext: [:optional, NilClass, String],
    target: [:optional, NilClass, String],
    text: String,
    type: Set.new(["icon", "radio", "arrow"]),
  })
end
