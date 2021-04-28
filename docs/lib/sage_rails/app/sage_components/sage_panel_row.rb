class SagePanelRow < SageComponent
  set_attribute_schema({
    css_classes: [:optional, String],
    grid_template: SageSchemas::GRID_TEMPLATE,
    vertical_align: [:optional, Set.new(["start"])],
  })
end
