class SageLoader < SageComponent
  set_attribute_schema({
    css_classes: [:optional, String],
    fill: [:optional, TrueClass],
    type: Set.new(["bar", "spinner"]),
  })
end
