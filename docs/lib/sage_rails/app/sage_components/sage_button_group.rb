class SageButtonGroup < SageComponent
  set_attribute_schema({
    align: [:optional, Set.new(["space-between", "end"])],
    borderTop: [:optional, TrueClass],
    gap: [:optional, Set.new([:xs, :sm, :md, :lg])]
  })
end
