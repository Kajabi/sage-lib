class SageTooltip < SageComponent
  set_attribute_schema({
    position: [:optional, NilClass, Set.new(["top", "right", "bottom", "left"])],
    size: [:optional, NilClass, Set.new(["small", "large"])],
    text: [:optional, NilClass, String],
    theme: [:optional, NilClass, Set.new(["light"])],
  })
end
