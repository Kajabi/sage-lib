class SageTooltip < SageComponent
  set_attribute_schema({
    position: [:optional, Set.new(["center", "right", "left"])],
    size: [:optional, Set.new(["small", "large"])],
    text: [:optional, String],
  })
end
