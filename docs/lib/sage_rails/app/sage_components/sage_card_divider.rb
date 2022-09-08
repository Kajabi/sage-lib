class SageCardDivider < SageComponent
  set_attribute_schema({
    bleed: [:optional, NilClass, TrueClass],
    label: [:optional, NilClass, String],
  })
end
