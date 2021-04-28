class SageTabsPane < SageComponent
  set_attribute_schema({
    card: [:optional, TrueClass],
    card_spacing: [:optional, TrueClass],
    css_classes: [:optional, String],
    id: String,
    panel_spacing: [:optional, TrueClass],
  })
end
