class SagePanelRow < SageComponent
  set_attribute_schema({
    grid_template: [:optional, SageSchemas::GRID_TEMPLATE],
    gap: [:optional, NilClass, SageSchemas::GRID_GAP_OPTION],
    vertical_align: [:optional, Set.new(["start"])],
  })
end
