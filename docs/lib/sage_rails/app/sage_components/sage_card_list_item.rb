class SageCardListItem < SageComponent
  set_attribute_schema({
    grid_template: [:optional, SageSchemas::GRID_TEMPLATE],
    gap: [:optional, SageSchemas::GRID_GAP_OPTION],
  })
end
