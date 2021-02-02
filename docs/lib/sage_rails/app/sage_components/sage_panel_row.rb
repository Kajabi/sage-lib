class SagePanelRow < SageComponent
  set_attribute_schema({
    grid_template: SageSchemaHelper::GRID_TEMPLATE,
    vertical_align: [:optional, Set.new(["start"])],
  })
end
