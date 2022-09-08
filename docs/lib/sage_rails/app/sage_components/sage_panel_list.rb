class SagePanelList < SageComponent
  set_attribute_schema({
    block_spacing: [:optional, NilClass, Set.new(["md"])],
    hide_first_border: [:optional, NilClass, TrueClass, String],
  })
end
