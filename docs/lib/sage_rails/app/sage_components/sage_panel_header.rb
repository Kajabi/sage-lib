class SagePanelHeader < SageComponent
  set_attribute_schema({
    title: [:optional, String],
    subtext: [:optional, String],
  })
end
