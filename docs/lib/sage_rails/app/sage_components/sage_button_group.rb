class SageButtonGroup < SageComponent
  set_attribute_schema({
    align: [:optional, Set.new(["center", "space-between", "end"])],
    borderTop: [:optional, TrueClass],
    gap: [:optional, NilClass, SageSchemas::GRID_GAP_OPTION],
    wrap: [:optional, TrueClass]
  })
end
