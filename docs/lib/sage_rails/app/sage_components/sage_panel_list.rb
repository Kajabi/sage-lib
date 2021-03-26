class SagePanelList < SageComponent
  set_attribute_schema({
    block_spacing: [:optional, Set.new(["md"])],
    css_classes: [:optional, String],
  })
end
