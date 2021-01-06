class SageTabsPane < SageComponent
  set_attribute_schema({
    card_spacing: [:optional, TrueClass],
    card: [:optional, TrueClass],
    id: String,
    panel_spacing: [:optional, TrueClass],
  })
end
