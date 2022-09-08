class SageTabsPane < SageComponent
  set_attribute_schema({
    card: [:optional, NilClass, TrueClass],
    card_spacing: [:optional, NilClass, TrueClass],
    id: String,
    panel_spacing: [:optional, NilClass, TrueClass],
  })
end
