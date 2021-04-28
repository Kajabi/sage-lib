class SageCardHighlight < SageComponent
  set_attribute_schema({
    color: [:optional, Set.new(["primary", "grey", "charcoal", "purple", "sage", "yellow", "orange", "red"])],
    css_classes: [:optional, String],
    custom_color: [:optional, String],
    position: [:optional, Set.new(["top", "right", "bottom", "left"])],
    value: [:optional, String],
  })
end
