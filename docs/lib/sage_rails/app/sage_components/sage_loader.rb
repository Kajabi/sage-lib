class SageLoader < SageComponent
  set_attribute_schema({
    fill: [:optional, NilClass, TrueClass],
    type: Set.new(["bar", "spinner", "success"]),
    text: [:optional, NilClass, TrueClass],
  })
end
