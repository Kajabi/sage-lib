class SageCardRow < SageComponent
  set_attribute_schema({
    grid_template: SageSchemas::GRID_TEMPLATE,
    vertical_align: [:optional, String],
  })
end
