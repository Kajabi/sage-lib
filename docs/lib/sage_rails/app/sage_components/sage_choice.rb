class SageChoice < SageComponent
  set_attribute_schema({
    active: [:optional, NilClass, TrueClass],
    align_center: [:optional, TrueClass],
    attributes: [:optional, NilClass, Hash],
    css_classes: [:optional, String],
    disabled: [:optional, NilClass, TrueClass],
    graphic: [:optional, NilClass, String],
    icon: [:optional, NilClass, String],
    link_text: [:optional, NilClass, String],
    subtext: [:optional, NilClass, String],
    target: [:optional, NilClass, String],
    text: [:optional, NilClass, String],
    type: [:optional, NilClass, Set.new(["arrow", "graphic", "icon", "radio"])],
    vertical_align_icon: [:optional, NilClass, Set.new(["start"])],
    radio_configs: [:optional, NilClass, {
      value: String,
      name: String,
      id: String,
    }]
  })
end
