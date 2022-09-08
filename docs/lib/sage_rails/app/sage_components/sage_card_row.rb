class SageCardRow < SageComponent
  set_attribute_schema({
    grid_template: [:optional, NilClass, SageSchemas::GRID_TEMPLATE],
    gap: [:optional, NilClass, SageSchemas::GRID_GAP_OPTION],
    vertical_align: [:optional, NilClass, String],
  })
end
