class SageCardDivider < SageComponent
  set_attribute_schema({
    bleed: [:optional, TrueClass],
    css_classes: [:optional, String],
  })
end
