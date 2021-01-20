class SageButton < SageComponent
  set_attribute_schema({
    align:            [:optional, String],
    attributes:       [:optional, NilClass, Hash],
    css_classes:      [:optional, [String]],
    disabled:         [:optional, TrueClass],
    full_width:       [:optional, TrueClass],
    icon:             [:optional, { name: String, style: Set.new(["left", "right", "only"]) }],
    no_shadow:        [:optional, TrueClass],
    raised:           [:optional, TrueClass],
    small:            [:optional, TrueClass],
    style:            [:optional, Set.new(["primary", "secondary", "danger"])],
    subtle:           [:optional, TrueClass],
    value:            String,
  })
end
