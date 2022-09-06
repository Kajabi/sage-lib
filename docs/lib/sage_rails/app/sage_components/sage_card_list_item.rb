class SageCardListItem < SageComponent
  set_attribute_schema({
    grid_template: [:optional, NilClass, SageSchemas::GRID_TEMPLATE],
    gap: [:optional, NilClass, SageSchemas::GRID_GAP_OPTION],
  })
end
