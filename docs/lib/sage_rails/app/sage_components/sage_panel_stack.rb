class SagePanelStack < SageComponent
  set_attribute_schema({
    css_classes: [:optional, String],
    spacing: [:optional, Set.new(["form"])],
  })
end
