class SageButton < SageComponent
  attribute_schema({
    align:            [:optional, String],
    attributes:       [:optional, Hash],
    css_classes:      [:optional, [String]],
    disabled:         [:optional, TrueClass],
    full_width:       [:optional, TrueClass],
    icon:             [:optional, { style: String, name: String }],
    no_shadow:        [:optional, TrueClass],
    raised:           [:optional, TrueClass],
    small:            [:optional, TrueClass],
    style:            [:optional, String],
    subtle:           [:optional, TrueClass],
    value:            String,
  })
end
