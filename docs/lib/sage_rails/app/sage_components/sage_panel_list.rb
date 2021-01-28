class SagePanelList < SageComponent
  set_attribute_schema({
    block_spacing: [:optional, Set.new(["md"])],
  })
end
