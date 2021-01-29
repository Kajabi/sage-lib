class SageTooltip < SageComponent
  set_attribute_schema({
    position: [:optional, Set.new(["top", "right", "bottom", "left"])],
    size: [:optional, Set.new(["small", "large"])],
    text: [:optional, String],
    theme: [:optional, Set.new(["light"])],
  })
end
