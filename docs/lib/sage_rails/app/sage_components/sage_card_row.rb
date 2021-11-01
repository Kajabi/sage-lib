class SageCardRow < SageComponent
  set_attribute_schema({
    grid_template: [:optional, SageSchemas::GRID_TEMPLATE],
    gap: [:optional, Set.new([:xs, :sm, :md, :lg])],
    vertical_align: [:optional, String],
  })
end
