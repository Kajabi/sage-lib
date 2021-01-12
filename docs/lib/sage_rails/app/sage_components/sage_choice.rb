class SageChoice < SageComponent
  set_attribute_schema({
    active: [:optional, NilClass, TrueClass],
    align_center: [:optional, TrueClass],
    attributes: [:optional, NilClass, Hash],
    disabled: [:optional, NilClass, TrueClass],
    graphic: [:optional, NilClass, String],
    link_text: [:optional, NilClass, String],
    icon: [:optional, NilClass, String],
    subtext: [:optional, NilClass, String],
    target: [:optional, NilClass, String],
    text: String,
    type: Set.new(["arrow", "graphic", "icon", "radio"]),
  })
end
