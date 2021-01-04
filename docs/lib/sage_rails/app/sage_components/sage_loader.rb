class SageLoader < SageComponent
  set_attribute_schema({
    fill: [:optional, TrueClass],
    type: Set.new(["bar", "spinner"]),
  })
end
