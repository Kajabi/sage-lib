class SagePanelBlock < SageComponent
  set_attribute_schema({
    color: [:optional, String],
    css_classes: [:optional, String],
    type_block: [:optional, TrueClass],
  })
end
