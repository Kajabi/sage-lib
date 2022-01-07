class SageCardRow < SageComponent
  set_attribute_schema({
    grid_template: [:optional, NilClass, SageSchemas::GRID_TEMPLATE],
    gap: [:optional, NilClass, Set.new([:xs, :sm, :md, :lg])],
    vertical_align: [:optional, String],
  })
end
