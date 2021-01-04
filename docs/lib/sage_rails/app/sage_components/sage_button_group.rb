class SageButtonGroup < SageComponent
  set_attribute_schema({
    align: [:optional, Set.new([:end])],
    gap: Set.new([:xs, :sm, :md, :lg])
  })
end
