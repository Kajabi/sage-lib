class SagePanelDivider < SageComponent
  set_attribute_schema({
    bleed: [:optional, TrueClass],
    label: [:optional, String],
  })
end
