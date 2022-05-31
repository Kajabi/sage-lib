class SagePanelList < SageComponent
  set_attribute_schema({
    block_spacing: [:optional, Set.new(["md"])],
    hide_first_border: [:optional, TrueClass, String],
  })
end
