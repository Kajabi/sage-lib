class SagePanelStack < SageComponent
  set_attribute_schema({
    spacing: [:optional, NilClass, Set.new(["form"])],
  })
end
