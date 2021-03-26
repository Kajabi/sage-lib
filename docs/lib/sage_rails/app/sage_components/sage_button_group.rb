class SageButtonGroup < SageComponent
  set_attribute_schema({
    align: [:optional, Set.new(["space-between", "end"])],
    borderTop: [:optional, TrueClass],
    css_classes: [:optional, String],
    gap: [:optional, Set.new([:xs, :sm, :md, :lg])]
  })
end
