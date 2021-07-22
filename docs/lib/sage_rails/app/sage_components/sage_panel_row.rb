class SagePanelRow < SageComponent
  set_attribute_schema({
    grid_template: [:optional, SageSchemas::GRID_TEMPLATE],
    vertical_align: [:optional, Set.new(["start"])],
  })
end
