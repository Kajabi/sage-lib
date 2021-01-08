class SagePanelBlock < SageComponent
  set_attribute_schema({
    color: [:optional, String],
    type_block: [:optional, TrueClass],
  })
end
