class SageButtonGroup < SageComponent
  set_attribute_schema({
    align: [:optional, NilClass, Set.new(["center", "space-between", "end"])],
    borderTop: [:optional, NilClass, TrueClass],
    gap: [:optional, NilClass, SageSchemas::GRID_GAP_OPTION],
    wrap: [:optional, NilClass, TrueClass]
  })
end
