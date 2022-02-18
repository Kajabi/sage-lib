class SagePanelRow < SageComponent
  set_attribute_schema({
    grid_template: [:optional, SageSchemas::GRID_TEMPLATE],
    gap: [:optional, Set.new(SageTokens::SPACER_SIZES)],
    vertical_align: [:optional, Set.new(["start"])],
  })
end
