class SageButtonGroup < SageComponent
  set_attribute_schema({
    align: [:optional, Set.new(["center", "space-between", "end"])],
    borderTop: [:optional, TrueClass],
    gap: [:optional, Set.new([:xs, :sm, :md, :lg])],
    wrap: [:optional, TrueClass]
  })
end
