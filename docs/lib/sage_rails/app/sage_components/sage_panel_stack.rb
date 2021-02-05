class SagePanelStack < SageComponent
  set_attribute_schema({
    spacing: [:optional, Set.new(["form"])],
  })
end
